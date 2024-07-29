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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
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
import { borrowingData, unborrowedData } from "@/constants";
import { unborrowedColumns, borrowingColumns } from "@/constants/tableConst";

function UserDataTable({
  tableName,
  Icon,
}: {
  tableName: string;
  Icon: React.ElementType;
}) {
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

  const borrowingTable = useReactTable({
    data: borrowingData,
    columns: borrowingColumns,
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

  return (
    <div className="w-full">
      <Tabs defaultValue="unborrowed">
        <section className="mb-1">
          <p className="text-white text-3xl font-bold flex flex-row gap-2 flex-center">
            <Icon className="text-white" size={28} />
            {tableName}
          </p>
        </section>
        <div>
          <TabsList className="grid w-full grid-cols-2 rounded-b-none border-b-transparent">
            <TabsTrigger
              value="unborrowed"
              className="text-zinc-500 bg-[#303030] bg-opacity-30 text-lg font-semibold"
            >
              尚未借用
            </TabsTrigger>
            <TabsTrigger
              value="borrowing"
              className="text-zinc-500 bg-[#303030] bg-opacity-30 text-lg font-semibold"
            >
              借用中
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="unborrowed">
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
                      No results.
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
              selected.
            </div>
            <div className="space-x-2">
              <Button
                className="text-sky-300 border border-sky-300 bg-transparent hover:bg-primary/90 transform active:scale-90 transition-transform duration-200"
                size="sm"
                onClick={() => unborrowedTable.previousPage()}
                disabled={!unborrowedTable.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                className="text-sky-300 border border-sky-300 bg-transparent hover:bg-primary/90 transform active:scale-90 transition-transform duration-200"
                size="sm"
                onClick={() => unborrowedTable.nextPage()}
                disabled={!unborrowedTable.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="borrowing">
          <div className="rounded-b-md border-[#444444] border border-t-transparent mb-4">
            <Table>
              <TableHeader>
                {borrowingTable.getHeaderGroups().map((headerGroup) => (
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
                {borrowingTable.getRowModel().rows?.length ? (
                  borrowingTable.getRowModel().rows.map((row) => (
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
                      colSpan={borrowingColumns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default UserDataTable;
