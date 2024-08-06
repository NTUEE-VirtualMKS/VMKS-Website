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
import { unborrowedColumns } from "@/constants/tableConst";
import { useTranslation } from "react-i18next";
import type { UserBorrowToolType } from "@/shared/type";
import { useMutation } from "@apollo/client";
import {
  EDIT_USER_BORROW_TOOL_QUANTITY_MUTATION,
  EDIT_USER_BORROW_TOOL_STATUS_MUTATION,
} from "@/graphql/mutations";
import {
  GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY,
  GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
} from "@/graphql/queries";
import { useUser } from "@/contexts/UserContext";
import LoaderSpinner from "../LoaderSpinner";
import { useToast } from "../ui/use-toast";
import {
  allUsersBorrowingStatus,
  borrowingStatus,
  unborrowedStatus,
} from "@/constants/index";

function UnborrowedToolTableTabsContent({
  unborrowedData,
}: {
  unborrowedData: UserBorrowToolType[];
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
    columns: unborrowedColumns,
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
    editUserBorrowToolQuantity,
    {
      loading: editUserBorrowToolQuantityLoading,
      error: editUserBorrowToolQuantityError,
    },
  ] = useMutation(EDIT_USER_BORROW_TOOL_QUANTITY_MUTATION, {
    refetchQueries: [
      {
        query: GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
        variables: {
          userId: user?.id,
          status: unborrowedStatus,
        },
      },
    ],
  });

  const [
    editUserBorrowToolStatus,
    {
      loading: editUserBorrowToolStatusLoading,
      error: editUserBorrowToolStatusError,
    },
  ] = useMutation(EDIT_USER_BORROW_TOOL_STATUS_MUTATION, {
    refetchQueries: [
      {
        query: GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
        variables: { userId: user?.id, status: unborrowedStatus },
      },
      {
        query: GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
        variables: {
          userId: user?.id,
          status: borrowingStatus,
        },
      },
      {
        query: GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY,
        variables: { status: allUsersBorrowingStatus },
      },
    ],
  });

  // when a user clicks the "borrow" button, `handleBorrow` is called to change the status of userBorrowTools' status
  const handleBorrow = async (userBorrowTools: UserBorrowToolType[]) => {
    try {
      userBorrowTools.forEach(async (userBorrowTool) => {
        await editUserBorrowToolQuantity({
          variables: {
            editUserBorrowToolQuantityId: userBorrowTool.id,
            userBorrowToolInput: {
              toolId: userBorrowTool.toolId,
              userId: userBorrowTool.userId,
              quantity: userBorrowTool.quantity,
            },
          },
        });
        if (editUserBorrowToolQuantityLoading) return <LoaderSpinner />;
        if (editUserBorrowToolQuantityError) {
          toast({
            title: `${editUserBorrowToolQuantityError.message}`,
            variant: "destructive",
          });
        }
        await editUserBorrowToolStatus({
          variables: {
            editUserBorrowToolStatusId: userBorrowTool.id,
            status: "Processing",
          },
        });
        if (editUserBorrowToolStatusLoading) return <LoaderSpinner />;
        if (editUserBorrowToolStatusError) {
          toast({
            title: `${editUserBorrowToolStatusError.message}`,
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
      <div className="rounded-b-md border-[#444444] border border-t-transparent">
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
                  colSpan={unborrowedColumns.length}
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
            className="text-sky-300 border border-sky-300 bg-transparent hover:bg-primary/90 transform active:scale-90 transition-transform duration-200"
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

export default UnborrowedToolTableTabsContent;
