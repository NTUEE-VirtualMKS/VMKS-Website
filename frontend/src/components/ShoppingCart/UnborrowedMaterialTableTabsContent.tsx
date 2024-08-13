import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { unborrowedMaterialColumns } from "@/constants/tableConst";
import { useTranslation } from "react-i18next";
import type { UserBorrowMaterialType } from "@/shared/type";
import { useMutation } from "@apollo/client";
import {
  EDIT_USER_BORROW_MATERIAL_QUANTITY_MUTATION,
  EDIT_USER_BORROW_MATERIAL_STATUS_MUTATION,
} from "@/graphql/mutations";
import {
  GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY,
  GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
} from "@/graphql/queries";
import { useUser } from "@/contexts/UserContext";
import LoaderSpinner from "../LoaderSpinner";
import { useToast } from "../ui/use-toast";
import {
  allUsersBorrowingStatus,
  borrowingStatus,
  unborrowedStatus,
} from "@/constants/index";

function UnborrowedTableTabsContent({
  unborrowedData,
}: {
  unborrowedData: UserBorrowMaterialType[];
}) {
  const { t } = useTranslation();
  const { user } = useUser();
  const { toast } = useToast();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const unborrowedTable = useReactTable({
    data: unborrowedData,
    columns: unborrowedMaterialColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const [
    editUserBorrowMaterialQuantity,
    {
      loading: editUserBorrowMaterialQuantityLoading,
      error: editUserBorrowMaterialQuantityError,
    },
  ] = useMutation(EDIT_USER_BORROW_MATERIAL_QUANTITY_MUTATION, {
    refetchQueries: [
      {
        query: GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
        variables: {
          userId: user?.id,
          status: unborrowedStatus,
        },
      },
    ],
  });

  const [
    editUserBorrowMaterialStatus,
    {
      loading: editUserBorrowMaterialStatusLoading,
      error: editUserBorrowMaterialStatusError,
    },
  ] = useMutation(EDIT_USER_BORROW_MATERIAL_STATUS_MUTATION, {
    refetchQueries: [
      {
        query: GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
        variables: { userId: user?.id, status: unborrowedStatus },
      },
      {
        query: GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
        variables: {
          userId: user?.id,
          status: borrowingStatus,
        },
      },
      {
        query: GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY,
        variables: { status: allUsersBorrowingStatus },
      },
    ],
  });

  // when a user clicks the "borrow" button, `handleBorrow` is called to change the status of userBorrowMaterials' status
  const handleBorrow = async (
    userBorrowMaterials: UserBorrowMaterialType[]
  ) => {
    try {
      userBorrowMaterials.forEach(async (userBorrowMaterial) => {
        await editUserBorrowMaterialQuantity({
          variables: {
            editUserBorrowMaterialQuantityId: userBorrowMaterial.id,
            userBorrowMaterialInput: {
              materialId: userBorrowMaterial.materialId,
              userId: userBorrowMaterial.userId,
              quantity: userBorrowMaterial.quantity,
            },
          },
        });
        if (editUserBorrowMaterialQuantityLoading) return <LoaderSpinner />;
        if (editUserBorrowMaterialQuantityError) {
          toast({
            title: `${editUserBorrowMaterialQuantityError.message}`,
            variant: "destructive",
          });
        }
        await editUserBorrowMaterialStatus({
          variables: {
            editUserBorrowMaterialStatusId: userBorrowMaterial.id,
            status: "Processing",
          },
        });
        if (editUserBorrowMaterialStatusLoading) return <LoaderSpinner />;
        if (editUserBorrowMaterialStatusError) {
          toast({
            title: `${editUserBorrowMaterialStatusError.message}`,
            variant: "destructive",
          });
        }
      });
      toast({ title: "Waiting for processing!" });
    } catch (error) {
      toast({ title: `${error}`, variant: "destructive" });
    }
  };

  return (
    <>
      <div className="rounded-b-md dark:border-[#444444] border border-t-transparent">
        <Table>
          <TableHeader>
            {unborrowedTable.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {unborrowedTable.getRowModel().rows?.length ? (
              unborrowedTable.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={unborrowedMaterialColumns.length}
                  className="h-24 text-center"
                >
                  {t("noResults")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {unborrowedTable.getFilteredSelectedRowModel().rows.length} of{" "}
          {unborrowedTable.getFilteredRowModel().rows.length} row(s)
          {" " + t("selected")}
        </div>
        <div>
          <Button
            className="text-blue-500 dark:text-sky-300 border border-blue-500 dark:border-sky-300 shadow-md bg-transparent hover:bg-transparent transform active:scale-90 transition-transform duration-200"
            onClick={() =>
              handleBorrow(
                unborrowedTable
                  .getFilteredSelectedRowModel()
                  .rows.map((row) => row.original)
              )
            }
            disabled={
              !unborrowedTable.getFilteredSelectedRowModel().rows.length
            }
          >
            {t("borrow")}
          </Button>
        </div>
      </div>
    </>
  );
}

export default UnborrowedTableTabsContent;
