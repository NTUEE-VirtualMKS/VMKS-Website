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
import { useTranslation } from "react-i18next";
import type { UserBorrowMaterialType } from "@/shared/type";
import { useMutation } from "@apollo/client";
import { EDIT_USER_BORROW_MATERIAL_STATUS_MUTATION } from "@/graphql/mutations";
import { GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY } from "@/graphql/queries";
import LoaderSpinner from "../LoaderSpinner";
import { useToast } from "../ui/use-toast";
import { allUsersBorrowingMaterialColumns } from "@/constants/tableConst";
import {
  allUsersBorrowingStatus,
  returnedStatus,
  unreturnedStatus,
} from "@/constants";

function UnreturnedMaterialTableTabsContent({
  allUsersUnreturnedMaterialData,
}: {
  allUsersUnreturnedMaterialData: UserBorrowMaterialType[];
}) {
  const { t } = useTranslation();
  const { toast } = useToast();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const allUsersUnreturnedTable = useReactTable({
    data: allUsersUnreturnedMaterialData,
    columns: allUsersBorrowingMaterialColumns,
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
    editUserBorrowMaterialStatus,
    {
      loading: editUserBorrowMaterialStatusLoading,
      error: editUserBorrowMaterialStatusError,
    },
  ] = useMutation(EDIT_USER_BORROW_MATERIAL_STATUS_MUTATION, {
    refetchQueries: [
      {
        query: GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY,
        variables: { status: unreturnedStatus },
      },
      {
        query: GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY,
        variables: { status: returnedStatus },
      },
      {
        query: GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY,
        variables: { status: allUsersBorrowingStatus },
      },
    ],
  });

  const handleChangeStatus = async (
    userBorrowMaterials: UserBorrowMaterialType[]
  ) => {
    try {
      console.log(userBorrowMaterials);
      userBorrowMaterials.forEach(async (userBorrowMaterial) => {
        await editUserBorrowMaterialStatus({
          variables: {
            editUserBorrowMaterialStatusId: userBorrowMaterial.id,
            status: "Returned",
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
      toast({ title: "Status updated successfully!" });
    } catch (error) {
      toast({ title: `${error}`, variant: "destructive" });
    }
  };

  return (
    <>
      <div className="rounded-b-md border-[#444444] border border-t-transparent">
        <Table>
          <TableHeader>
            {allUsersUnreturnedTable.getHeaderGroups().map((headerGroup) => (
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
            {allUsersUnreturnedTable.getRowModel().rows?.length ? (
              allUsersUnreturnedTable.getRowModel().rows.map((row) => (
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
                  colSpan={allUsersBorrowingMaterialColumns.length}
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
          {allUsersUnreturnedTable.getFilteredSelectedRowModel().rows.length} of{" "}
          {allUsersUnreturnedTable.getFilteredRowModel().rows.length} row(s)
          {" " + t("selected")}
        </div>
        <div>
          <Button
            className="text-sky-300 border border-sky-300 bg-transparent hover:bg-primary/90 transform active:scale-90 transition-transform duration-200 lowercase"
            onClick={() =>
              handleChangeStatus(
                allUsersUnreturnedTable
                  .getFilteredSelectedRowModel()
                  .rows.map((row) => row.original)
              )
            }
            disabled={
              !allUsersUnreturnedTable.getFilteredSelectedRowModel().rows.length
            }
          >
            {t("returned")}
          </Button>
        </div>
      </div>
    </>
  );
}

export default UnreturnedMaterialTableTabsContent;
