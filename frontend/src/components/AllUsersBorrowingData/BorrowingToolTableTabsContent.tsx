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
import { allUsersBorrowingColumns } from "@/constants/tableConst";
import {
  allUsersBorrowingStatus,
  returnedStatus,
  unreturnedStatus,
} from "@/constants";

function BorrowingToolTableTabsContent({
  allUsersBorrowingToolData,
}: {
  allUsersBorrowingToolData: UserBorrowToolType[];
}) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const allUsersBorrowingTable = useReactTable({
    data: allUsersBorrowingToolData,
    columns: allUsersBorrowingColumns,
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
      console.log(userBorrowTools);
      userBorrowTools.forEach(async (userBorrowTool) => {
        await editUserBorrowToolStatus({
          variables: {
            editUserBorrowToolStatusId: userBorrowTool.id,
            status: "Not Returned Yet",
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
      <div className="rounded-b-md border-[#444444] border border-t-transparent">
        <Table>
          <TableHeader>
            {allUsersBorrowingTable.getHeaderGroups().map((headerGroup) => (
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
            {allUsersBorrowingTable.getRowModel().rows?.length ? (
              allUsersBorrowingTable.getRowModel().rows.map((row) => (
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
                  colSpan={allUsersBorrowingColumns.length}
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
          {allUsersBorrowingTable.getFilteredSelectedRowModel().rows.length} of{" "}
          {allUsersBorrowingTable.getFilteredRowModel().rows.length} row(s)
          {" " + t("selected")}
        </div>
        <div>
          <Button
            className="text-sky-300 border border-sky-300 bg-transparent hover:bg-primary/90 transform active:scale-90 transition-transform duration-200 lowercase"
            onClick={() =>
              handleChangeStatus(
                allUsersBorrowingTable
                  .getFilteredSelectedRowModel()
                  .rows.map((row) => row.original)
              )
            }
            disabled={
              !allUsersBorrowingTable.getFilteredSelectedRowModel().rows.length
            }
          >
            {t("alreadyTaken")}
          </Button>
        </div>
      </div>
    </>
  );
}

export default BorrowingToolTableTabsContent;
