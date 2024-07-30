import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import {
  MoreHorizontal,
  Share,
  Star,
  Trash2,
  ShoppingCart,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import type { BorrowType } from "@/shared/type";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const determineTextColor = (status: string) => {
  switch (status) {
    case "可領取":
      return "text-green-400";
    case "審核中":
      return "text-orange-400";
    case "失敗":
      return "text-red-500";
    case "尚未歸還":
      return "text-zinc-400";
  }
};

export const unborrowedColumns: ColumnDef<BorrowType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <center>
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="border-white"
        />
      </center>
    ),
    cell: ({ row }) => (
      <center>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="border-white"
        />
      </center>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "figure",
    header: "Figure",
    cell: ({ row }) => (
      <img
        className="w-24 mx-auto bg-white"
        src={row.getValue("figure")}
        alt={row.getValue("figure")}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "partName",
    header: "Part Name",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("partName")}
      </div>
    ),
  },
  {
    accessorKey: "remain",
    header: "Remain",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("remain")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("position")}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => {
      const [quantity, setQuantity] = useState<string>(
        row.getValue("quantity")
      );
      return (
        <div className="text-white w-28 mx-auto">
          <Input
            type="number"
            placeholder="Quantity"
            className="input-class"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const { toast } = useToast();
      const tool = row.original;
      const [star, setStar] = useState(tool.star);
      const handleShare = () => {
        navigator.clipboard.writeText(
          `http://localhost:5173/ToolPage/Tool/${tool.id}` // TODO: change to deployed link
        );
        toast({ title: "Link copied to clipboard!", variant: "share" });
      };
      const { t } = useTranslation();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-black bg-opacity-90 border border-white text-white"
          >
            <DropdownMenuLabel>{t("actions")}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="hover:text-yellow-300"
              onClick={() => setStar(!star)}
            >
              <Star className="p-1.5" size={31} />
              {t(`${!star ? "star" : "unstar"}`)}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleShare}
              className="hover:text-green-400"
            >
              <Share className="p-1.5" size={31} />
              {t("share")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:text-red-400">
              <Trash2 className="p-1.5" size={31} />
              {t("delete")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const borrowingColumns: ColumnDef<BorrowType>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={cn(
          "text-center font-semibold",
          determineTextColor(row.getValue("status"))
        )}
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "figure",
    header: "Figure",
    cell: ({ row }) => (
      <img
        className="w-24 mx-auto bg-white"
        src={row.getValue("figure")}
        alt={row.getValue("figure")}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "partName",
    header: "Part Name",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("partName")}
      </div>
    ),
  },
  {
    accessorKey: "remain",
    header: "Remain",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("remain")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("position")}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("quantity")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const tool = row.original;
      const { toast } = useToast();
      const handleShare = () => {
        navigator.clipboard.writeText(
          `http://localhost:5173/ToolPage/Tool/${tool.id}` // TODO: change to deployed link
        );
        toast({ title: "Link copied to clipboard!", variant: "share" });
      };
      const { t } = useTranslation();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-black bg-opacity-90 border border-white text-white"
          >
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:text-yellow-300">
              <Star className="p-1.5" size={31} />
              {t("star")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleShare}
              className="hover:text-green-400"
            >
              <Share className="p-1.5" size={31} />
              {t("share")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:text-red-400">
              <Trash2 className="p-1.5" size={31} />
              {t("delete")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const borrowedColumns: ColumnDef<BorrowType>[] = [
  {
    accessorKey: "figure",
    header: "Figure",
    cell: ({ row }) => (
      <img
        className="w-24 mx-auto bg-white"
        src={row.getValue("figure")}
        alt={row.getValue("figure")}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "partName",
    header: "Part Name",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("partName")}
      </div>
    ),
  },
  {
    accessorKey: "remain",
    header: "Remain",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("remain")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("position")}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="text-center text-white text-base font-semibold">
        {row.getValue("quantity")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const tool = row.original;
      const { toast } = useToast();
      const handleShare = () => {
        navigator.clipboard.writeText(
          `http://localhost:5173/ToolPage/Tool/${tool.id}` // TODO: change to deployed link
        );
        toast({ title: "Link copied to clipboard!", variant: "share" });
      };
      const { t } = useTranslation();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-black bg-opacity-90 border border-white text-white"
          >
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:text-yellow-300">
              <Star className="p-1.5" size={31} />
              {t("star")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleShare}
              className="hover:text-green-400"
            >
              <Share className="p-1.5" size={31} />
              {t("share")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:text-sky-300">
              <ShoppingCart className="p-1.5" size={31} />
              {t("borrowAgain")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:text-red-400">
              <Trash2 className="p-1.5" size={31} />
              {t("deleteHistory")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
