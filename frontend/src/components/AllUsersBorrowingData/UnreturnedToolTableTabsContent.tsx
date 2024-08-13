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
import type { UserBorrowToolType } from "@/shared/type";
import { useMutation } from "@apollo/client";
import { EDIT_USER_BORROW_TOOL_STATUS_MUTATION } from "@/graphql/mutations";
import { GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY } from "@/graphql/queries";
import LoaderSpinner from "../LoaderSpinner";
import { useToast } from "../ui/use-toast";
import { allUsersUnreturnedColumns } from "@/constants/tableConst";
import {
  allUsersBorrowingStatus,
  returnedStatus,
  unreturnedStatus,
} from "@/constants";

function UnreturnedToolTableTabsContent({
  allUsersUnreturnedToolData,
}: {
  allUsersUnreturnedToolData: UserBorrowToolType[];
}) {
  const { t } = useTranslation();
  const { toast } = useToast();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const allUsersUnreturnedTable = useReactTable({
    data: allUsersUnreturnedToolData,
    columns: allUsersUnreturnedColumns,
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
    editUserBorrowToolStatus,
    {
      loading: editUserBorrowToolStatusLoading,
      error: editUserBorrowToolStatusError,
    },
  ] = useMutation(EDIT_USER_BORROW_TOOL_STATUS_MUTATION, {
    refetchQueries: [
      {
        query: GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY,
        variables: { status: unreturnedStatus },
      },
      {
        query: GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY,
        variables: { status: returnedStatus },
      },
      {
        query: GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY,
        variables: { status: allUsersBorrowingStatus },
      },
    ],
  });

  const handleChangeStatus = async (userBorrowTools: UserBorrowToolType[]) => {
    try {
      userBorrowTools.forEach(async (userBorrowTool) => {
        await editUserBorrowToolStatus({
          variables: {
            editUserBorrowToolStatusId: userBorrowTool.id,
            status: "Returned",
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
      toast({ title: "Status updated successfully!" });
    } catch (error) {
      toast({ title: `${error}`, variant: "destructive" });
    }
  };

  return (
    <>
      <div className="rounded-b-md dark:border-[#444444] border border-t-transparent">
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
                  colSpan={allUsersUnreturnedColumns.length}
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
            className="text-blue-500 dark:text-sky-300 border border-blue-500 dark:border-sky-300 shadow-md bg-transparent hover:bg-transparent transform active:scale-90 transition-transform duration-200 lowercase"
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

export default UnreturnedToolTableTabsContent;
