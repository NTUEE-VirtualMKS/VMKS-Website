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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
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
import {
  allUsersBorrowingColumns,
  allUsersUnreturnedColumns,
} from "@/constants/tableConst";
import {
  allUsersBorrowingStatus,
  returnedStatus,
  unreturnedStatus,
} from "@/constants";

type AllUsersBorrowingDataTableProps = {
  tableName: string;
  Icon: React.ElementType;
  allUsersBorrowingData: UserBorrowToolType[];
  allUsersUnreturnedData: UserBorrowToolType[];
};

function AllUsersBorrowingDataTable({
  tableName,
  Icon,
  allUsersBorrowingData,
  allUsersUnreturnedData,
}: AllUsersBorrowingDataTableProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [sortingAllUsersBorrowing, setSortingAllUsersBorrowing] =
    useState<SortingState>([]);
  const [columnFiltersAllUsersBorrowing, setColumnFiltersAllUsersBorrowing] =
    useState<ColumnFiltersState>([]);
  const [
    columnVisibilityAllUsersBorrowing,
    setColumnVisibilityAllUsersBorrowing,
  ] = useState<VisibilityState>({});
  const [rowSelectionAllUsersBorrowing, setRowSelectionAllUsersBorrowing] =
    useState({});

  const allUsersBorrowingTable = useReactTable({
    data: allUsersBorrowingData,
    columns: allUsersBorrowingColumns,
    onSortingChange: setSortingAllUsersBorrowing,
    onColumnFiltersChange: setColumnFiltersAllUsersBorrowing,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibilityAllUsersBorrowing,
    onRowSelectionChange: setRowSelectionAllUsersBorrowing,
    state: {
      sorting: sortingAllUsersBorrowing,
      columnFilters: columnFiltersAllUsersBorrowing,
      columnVisibility: columnVisibilityAllUsersBorrowing,
      rowSelection: rowSelectionAllUsersBorrowing,
    },
  });

  const [sortingAllUsersUnreturned, setSortingAllUsersUnreturned] =
    useState<SortingState>([]);
  const [columnFiltersAllUsersUnreturned, setColumnFiltersAllUsersUnreturned] =
    useState<ColumnFiltersState>([]);
  const [
    columnVisibilityAllUsersUnreturned,
    setColumnVisibilityAllUsersUnreturned,
  ] = useState<VisibilityState>({});
  const [rowSelectionAllUsersUnreturned, setRowSelectionAllUsersUnreturned] =
    useState({});

  const allUsersUnreturnedTable = useReactTable({
    data: allUsersUnreturnedData,
    columns: allUsersUnreturnedColumns,
    onSortingChange: setSortingAllUsersUnreturned,
    onColumnFiltersChange: setColumnFiltersAllUsersUnreturned,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibilityAllUsersUnreturned,
    onRowSelectionChange: setRowSelectionAllUsersUnreturned,
    state: {
      sorting: sortingAllUsersUnreturned,
      columnFilters: columnFiltersAllUsersUnreturned,
      columnVisibility: columnVisibilityAllUsersUnreturned,
      rowSelection: rowSelectionAllUsersUnreturned,
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

  const handleChangeStatus = async ({
    userBorrowTools,
    status,
  }: {
    userBorrowTools: UserBorrowToolType[];
    status: string;
  }) => {
    try {
      console.log(userBorrowTools);
      userBorrowTools.forEach(async (userBorrowTool) => {
        await editUserBorrowToolStatus({
          variables: {
            editUserBorrowToolStatusId: userBorrowTool.id,
            status: status,
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
    <div className="w-full">
      <Tabs defaultValue="borrowing">
        <section className="mb-1">
          <p className="text-white text-3xl font-bold flex flex-row gap-2 flex-center">
            <Icon className="text-white" size={28} />
            {tableName}
          </p>
        </section>
        <div>
          <TabsList className="grid w-full grid-cols-2 rounded-b-none border-b-transparent">
            <TabsTrigger
              value="borrowing"
              className="text-zinc-500 bg-[#303030] bg-opacity-30 text-lg font-semibold"
            >
              {t("borrowing")}
            </TabsTrigger>
            <TabsTrigger
              value="unreturned"
              className="text-zinc-500 bg-[#303030] bg-opacity-30 text-lg font-semibold"
            >
              {t("unreturned")}
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="borrowing">
          <>
            <div className="rounded-b-md border-[#444444] border border-t-transparent">
              <Table>
                <TableHeader>
                  {allUsersBorrowingTable
                    .getHeaderGroups()
                    .map((headerGroup) => (
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
                {
                  allUsersBorrowingTable.getFilteredSelectedRowModel().rows
                    .length
                }{" "}
                of {allUsersBorrowingTable.getFilteredRowModel().rows.length}{" "}
                row(s)
                {" " + t("selected")}
              </div>
              <div>
                <Button
                  className="text-sky-300 border border-sky-300 bg-transparent hover:bg-primary/90 transform active:scale-90 transition-transform duration-200 lowercase"
                  onClick={() =>
                    handleChangeStatus({
                      userBorrowTools: allUsersBorrowingTable
                        .getFilteredSelectedRowModel()
                        .rows.map((row) => row.original),
                      status: "Not Returned Yet",
                    })
                  }
                  disabled={
                    !allUsersBorrowingTable.getFilteredSelectedRowModel().rows
                      .length
                  }
                >
                  {t("alreadyTaken")}
                </Button>
              </div>
            </div>
          </>
        </TabsContent>
        <TabsContent value="unreturned">
          <>
            <div className="rounded-b-md border-[#444444] border border-t-transparent">
              <Table>
                <TableHeader>
                  {allUsersUnreturnedTable
                    .getHeaderGroups()
                    .map((headerGroup) => (
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
                {
                  allUsersUnreturnedTable.getFilteredSelectedRowModel().rows
                    .length
                }{" "}
                of {allUsersUnreturnedTable.getFilteredRowModel().rows.length}{" "}
                row(s)
                {" " + t("selected")}
              </div>
              <div>
                <Button
                  className="text-sky-300 border border-sky-300 bg-transparent hover:bg-primary/90 transform active:scale-90 transition-transform duration-200 lowercase"
                  onClick={() =>
                    handleChangeStatus({
                      userBorrowTools: allUsersUnreturnedTable
                        .getFilteredSelectedRowModel()
                        .rows.map((row) => row.original),
                      status: "Returned",
                    })
                  }
                  disabled={
                    !allUsersUnreturnedTable.getFilteredSelectedRowModel().rows
                      .length
                  }
                >
                  {t("returned")}
                </Button>
              </div>
            </div>
          </>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AllUsersBorrowingDataTable;
