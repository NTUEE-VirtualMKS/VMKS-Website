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
import { MoreHorizontal, Share, Trash2, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { UserBorrowMaterialType, UserBorrowToolType, ThreeDPRequestType } from "@/shared/type";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import {
  // tool
  DELETE_USER_BORROW_TOOL_MUTATION,
  EDIT_USER_BORROW_TOOL_STATUS_MUTATION,
  GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
  ADD_USER_BORROW_TOOL_MUTATION,
  GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY,
  // material
  DELETE_USER_BORROW_MATERIAL_MUTATION,
  GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
  GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY,
  EDIT_USER_BORROW_MATERIAL_STATUS_MUTATION,
  ADD_USER_BORROW_MATERIAL_MUTATION,
  // threedp
  DELETE_THREE_DP_REQUEST_MUTATION,
  EDIT_THREE_DP_REQUEST_STATUS_MUTATION,
  GET_THREE_DP_REQUESTS_BY_USER_ID_QUERY,
  GET_THREE_DP_REQUESTS_BY_THREE_DP_ID_QUERY,
  // user
  GET_USER_BY_STUDENT_ID_QUERY
} from "@/graphql";
import LoaderSpinner from "@/components/LoaderSpinner";
import {
  allUsersBorrowingStatus,
  borrowingStatus,
  materialBaseUrl,
  returnedStatus,
  toolBaseUrl,
  unborrowedStatus,
  unreturnedStatus,
} from "@/constants/index";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useUser } from "@/contexts/UserContext";
const determineTextColor = (status: string) => {
  switch (status) {
    case "Success":
      return "text-green-500 hover:text-green-500 dark:text-green-400 dark:hover:text-green-400";
    case "Processing":
      return "text-orange-500 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-400";
    case "Failed":
      return "text-red-500 hover:text-red-500";
    case "Not Returned Yet":
      return "text-zinc-400 hover:text-zinc-400";
    case "Pass":
      return "text-green-500 hover:text-green-500 dark:text-green-400 dark:hover:text-green-400";
  }
};

// tool: user
export const unborrowedColumns: ColumnDef<UserBorrowToolType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <center>
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="dark:border-white"
        />
      </center>
    ),
    cell: ({ row }) => (
      <center>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="dark:border-white"
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
        className="w-20 mx-auto bg-white"
        src={row.getValue("figure")}
        alt={row.getValue("figure")}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "partName",
    header: "Part Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("partName")}
      </div>
    ),
  },
  {
    accessorKey: "remain",
    header: "Remain",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("remain")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
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
      const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = e.target.value;
        setQuantity(newQuantity);

        // Create a new object with the updated quantity
        const updatedRow = {
          ...row.original,
          quantity: parseInt(newQuantity),
        };

        // Update the original row with the new object
        row.original = updatedRow;
      };

      return (
        <div className="dark:text-white w-28 mx-auto">
          <Input
            type="number"
            placeholder="Quantity"
            className="input-class"
            value={quantity}
            onChange={handleQuantityChange}
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
      const userBorrowTool = row.original;
      const handleShare = () => {
        navigator.clipboard.writeText(
          `${window.location.origin}${toolBaseUrl}/${userBorrowTool.toolId}` // TODO: change to deployed link
        );
        toast({ title: "Link copied to clipboard!", variant: "share" });
      };

      const { t } = useTranslation();
      const [deleteUserBorrowTool, { loading, error }] = useMutation(
        DELETE_USER_BORROW_TOOL_MUTATION,
        {
          refetchQueries: [
            {
              query: GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
              variables: {
                userId: userBorrowTool.userId,
                status: unborrowedStatus,
              },
            },
          ],
        }
      );

      const handleDelete = async () => {
        await deleteUserBorrowTool({
          variables: {
            deleteUserBorrowToolId: userBorrowTool.id,
          },
        });
        if (loading) return <LoaderSpinner />;
        if (error) {
          toast({ title: `${error.message}`, variant: "destructive" });
        } else {
          toast({ title: "Deleted successfully!" });
        }
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="bg-black bg-opacity-90 border border-white text-white"
          >
            <DropdownMenuLabel>{t("actions")}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleShare}
              className="hover:text-green-400"
            >
              <Share className="p-1.5" size={31} />
              {t("share")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleDelete}
              className="hover:text-red-400"
            >
              <Trash2 className="p-1.5" size={31} />
              {t("delete")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const borrowingColumns: ColumnDef<UserBorrowToolType>[] = [
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
        className="w-20 mx-auto bg-white"
        src={row.getValue("figure")}
        alt={row.getValue("figure")}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "partName",
    header: "Part Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("partName")}
      </div>
    ),
  },
  {
    accessorKey: "remain",
    header: "Remain",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("remain")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("position")}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("quantity")}
      </div>
    ),
  },
  {
    accessorKey: "borrowDate",
    header: "Borrow Date",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {(row.getValue("borrowDate") as string).split(",")[0]}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const userBorrowTool = row.original;
      const { toast } = useToast();
      const handleShare = () => {
        navigator.clipboard.writeText(
          `${window.location.origin}${toolBaseUrl}/${userBorrowTool.toolId}` // TODO: change to deployed link
        );
        toast({ title: "Link copied to clipboard!", variant: "share" });
      };
      const { t } = useTranslation();
      const [deleteUserBorrowTool, { loading, error }] = useMutation(
        DELETE_USER_BORROW_TOOL_MUTATION,
        {
          refetchQueries: [
            {
              query: GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
              variables: {
                userId: userBorrowTool.userId,
                status: borrowingStatus,
              },
            },
            {
              query: GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY,
              variables: { status: allUsersBorrowingStatus },
            },
          ],
        }
      );

      const handleDelete = async () => {
        await deleteUserBorrowTool({
          variables: {
            deleteUserBorrowToolId: userBorrowTool.id,
          },
        });
        if (loading) return <LoaderSpinner />;
        if (error) {
          toast({
            title: `${error.message}`,
            variant: "destructive",
          });
        } else {
          toast({ title: "Deleted successfully!" });
        }
      };

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
              onClick={handleShare}
              className="hover:text-green-400"
            >
              <Share className="p-1.5" size={31} />
              {t("share")}
            </DropdownMenuItem>
            {userBorrowTool.status !== "Not Returned Yet" && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleDelete}
                  className="hover:text-red-400"
                >
                  <Trash2 className="p-1.5" size={31} />
                  {t("delete")}
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const borrowHistoryColumns: ColumnDef<UserBorrowToolType>[] = [
  {
    accessorKey: "figure",
    header: "Figure",
    cell: ({ row }) => (
      <img
        className="w-20 mx-auto bg-white"
        src={row.getValue("figure")}
        alt={row.getValue("figure")}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "partName",
    header: "Part Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("partName")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("position")}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("quantity")}
      </div>
    ),
  },
  {
    accessorKey: "borrowDate",
    header: "Borrow Date",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {(row.getValue("borrowDate") as string).split(",")[0]}
      </div>
    ),
  },
  {
    accessorKey: "returnDate",
    header: "Return Date",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {(row.getValue("returnDate") as string).split(",")[0]}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const userBorrowTool = row.original;
      const { toast } = useToast();
      const handleShare = () => {
        navigator.clipboard.writeText(
          `${window.location.origin}${toolBaseUrl}/${userBorrowTool.toolId}` // TODO: change to deployed link
        );
        toast({ title: "Link copied to clipboard!", variant: "share" });
      };
      const { t } = useTranslation();
      const [
        deleteUserBorrowTool,
        {
          loading: DeleteUserBorrowToolLoading,
          error: DeleteUserBorrowToolError,
        },
      ] = useMutation(DELETE_USER_BORROW_TOOL_MUTATION, {
        refetchQueries: [
          {
            query: GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
            variables: {
              userId: userBorrowTool.userId,
              status: returnedStatus,
            },
          },
        ],
      });

      const handleDeleteHistory = async () => {
        await deleteUserBorrowTool({
          variables: {
            deleteUserBorrowToolId: userBorrowTool.id,
          },
        });
        if (DeleteUserBorrowToolLoading) return <LoaderSpinner />;
        if (DeleteUserBorrowToolError) {
          toast({
            title: `${DeleteUserBorrowToolError.message}`,
            variant: "destructive",
          });
        } else {
          toast({ title: "History deleted successfully!" });
        }
      };

      const [
        addUserBorrowTool,
        { loading: addUserBorrowToolLoading, error: addUserBorrowToolError },
      ] = useMutation(ADD_USER_BORROW_TOOL_MUTATION, {
        refetchQueries: [
          {
            query: GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
            variables: {
              userId: userBorrowTool.userId,
              status: unborrowedStatus,
            },
          },
        ],
      });

      const handleBorrowAgain = async () => {
        await addUserBorrowTool({
          variables: {
            userBorrowToolInput: {
              userId: userBorrowTool.userId,
              toolId: userBorrowTool.toolId,
              quantity: userBorrowTool.quantity,
            },
          },
        });
        if (addUserBorrowToolLoading) return <LoaderSpinner />;
        if (addUserBorrowToolError) {
          toast({
            title: `${addUserBorrowToolError.message}`,
            variant: "destructive",
          });
        } else {
          toast({ title: "Tool added to shopping cart!" });
        }
      };

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
              onClick={handleShare}
              className="hover:text-green-400"
            >
              <Share className="p-1.5" size={31} />
              {t("share")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleBorrowAgain}
              className="hover:text-sky-300"
            >
              <ShoppingCart className="p-1.5" size={31} />
              {t("borrowAgain")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleDeleteHistory}
              className="hover:text-red-400"
            >
              <Trash2 className="p-1.5" size={31} />
              {t("deleteHistory")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// tool: admin
export const allUsersBorrowingColumns: ColumnDef<UserBorrowToolType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <center>
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="dark:border-white"
        />
      </center>
    ),
    cell: ({ row }) => (
      <center>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="dark:border-white"
        />
      </center>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { t } = useTranslation();
      const { toast } = useToast();
      const [status, setStatus] = useState<string>(row.getValue("status"));
      const statusOptions = ["Processing", "Success", "Failed"];

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
            variables: { status: allUsersBorrowingStatus },
          },
          {
            query: GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY,
            variables: { status: unreturnedStatus },
          },
        ],
      });

      const handleStatusChange = async (status: string) => {
        setStatus(status);
        await editUserBorrowToolStatus({
          variables: {
            editUserBorrowToolStatusId: row.original.id,
            status: status,
          },
        });
        if (editUserBorrowToolStatusLoading) return <LoaderSpinner />;
        if (editUserBorrowToolStatusError) {
          toast({
            title: `${editUserBorrowToolStatusError.message}`,
            variant: "destructive",
          });
        } else {
          toast({ title: "Status updated successfully!" });
        }
      };

      return (
        <RadioGroup defaultValue={status}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className={cn(
                  "text-center font-semibold",
                  determineTextColor(status)
                )}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "text-center font-semibold",
                    determineTextColor(status)
                  )}
                >
                  {status}
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="bg-black bg-opacity-90 border border-white text-white"
            >
              <DropdownMenuLabel>{t("status")}</DropdownMenuLabel>
              {statusOptions.map((status) => (
                <div key={status}>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleStatusChange(status)}>
                    <RadioGroupItem
                      value={status}
                      id={status}
                      className="w-3 h-3 mr-2"
                    />
                    <Label htmlFor={status}>{status}</Label>
                  </DropdownMenuItem>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </RadioGroup>
      );
    },
  },
  {
    accessorKey: "borrower",
    header: "Borrower",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("borrower")}
      </div>
    ),
  },
  {
    accessorKey: "studentId",
    header: "Student ID",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold uppercase">
        {row.getValue("studentId")}
      </div>
    ),
  },
  {
    accessorKey: "figure",
    header: "Figure",
    cell: ({ row }) => (
      <img
        className="w-20 mx-auto bg-white"
        src={row.getValue("figure")}
        alt={row.getValue("figure")}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "partName",
    header: "Part Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("partName")}
      </div>
    ),
  },
  {
    accessorKey: "remain",
    header: "Remain",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("remain")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("position")}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("quantity")}
      </div>
    ),
  },
];

export const allUsersUnreturnedColumns: ColumnDef<UserBorrowToolType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <center>
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="dark:border-white"
        />
      </center>
    ),
    cell: ({ row }) => (
      <center>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="dark:border-white"
        />
      </center>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "borrower",
    header: "Borrower",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("borrower")}
      </div>
    ),
  },
  {
    accessorKey: "studentId",
    header: "Student ID",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold uppercase">
        {row.getValue("studentId")}
      </div>
    ),
  },
  {
    accessorKey: "figure",
    header: "Figure",
    cell: ({ row }) => (
      <img
        className="w-20 mx-auto bg-white"
        src={row.getValue("figure")}
        alt={row.getValue("figure")}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "partName",
    header: "Part Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("partName")}
      </div>
    ),
  },
  {
    accessorKey: "remain",
    header: "Remain",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("remain")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("position")}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("quantity")}
      </div>
    ),
  },
];

// material: user
export const unborrowedMaterialColumns: ColumnDef<UserBorrowMaterialType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <center>
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="dark:border-white"
        />
      </center>
    ),
    cell: ({ row }) => (
      <center>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="dark:border-white"
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
        className="w-20 mx-auto bg-white"
        src={row.getValue("figure")}
        alt={row.getValue("figure")}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "partName",
    header: "Part Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("partName")}
      </div>
    ),
  },
  {
    accessorKey: "remain",
    header: "Remain",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("remain")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
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
      const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = e.target.value;
        setQuantity(newQuantity);

        // Create a new object with the updated quantity
        const updatedRow = {
          ...row.original,
          quantity: parseInt(newQuantity),
        };

        // Update the original row with the new object
        row.original = updatedRow;
      };

      return (
        <div className="dark:text-white w-28 mx-auto">
          <Input
            type="number"
            placeholder="Quantity"
            className="input-class"
            value={quantity}
            onChange={handleQuantityChange}
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
      const userBorrowMaterial = row.original;
      const handleShare = () => {
        navigator.clipboard.writeText(
          `${window.location.origin}${materialBaseUrl}/${userBorrowMaterial.materialId}` // TODO: change to deployed link
        );
        toast({ title: "Link copied to clipboard!", variant: "share" });
      };

      const { t } = useTranslation();
      const [deleteUserBorrowMaterial, { loading, error }] = useMutation(
        DELETE_USER_BORROW_MATERIAL_MUTATION,
        {
          refetchQueries: [
            {
              query: GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
              variables: {
                userId: userBorrowMaterial.userId,
                status: unborrowedStatus,
              },
            },
          ],
        }
      );

      const handleDelete = async () => {
        await deleteUserBorrowMaterial({
          variables: {
            deleteUserBorrowMaterialId: userBorrowMaterial.id,
          },
        });
        if (loading) return <LoaderSpinner />;
        if (error) {
          toast({ title: `${error.message}`, variant: "destructive" });
        } else {
          toast({ title: "Deleted successfully!" });
        }
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="bg-black bg-opacity-90 border border-white text-white"
          >
            <DropdownMenuLabel>{t("actions")}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleShare}
              className="hover:text-green-400"
            >
              <Share className="p-1.5" size={31} />
              {t("share")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleDelete}
              className="hover:text-red-400"
            >
              <Trash2 className="p-1.5" size={31} />
              {t("delete")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const borrowingMaterialColumns: ColumnDef<UserBorrowMaterialType>[] = [
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
        className="w-20 mx-auto bg-white"
        src={row.getValue("figure")}
        alt={row.getValue("figure")}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "partName",
    header: "Part Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("partName")}
      </div>
    ),
  },
  {
    accessorKey: "remain",
    header: "Remain",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("remain")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("position")}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("quantity")}
      </div>
    ),
  },
  {
    accessorKey: "borrowDate",
    header: "Borrow Date",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {(row.getValue("borrowDate") as string).split(",")[0]}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const userBorrowMaterial = row.original;
      const { toast } = useToast();
      const handleShare = () => {
        navigator.clipboard.writeText(
          `${window.location.origin}${materialBaseUrl}/${userBorrowMaterial.materialId}` // TODO: change to deployed link
        );
        toast({ title: "Link copied to clipboard!", variant: "share" });
      };
      const { t } = useTranslation();
      const [deleteUserBorrowMaterial, { loading, error }] = useMutation(
        DELETE_USER_BORROW_MATERIAL_MUTATION,
        {
          refetchQueries: [
            {
              query: GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
              variables: {
                userId: userBorrowMaterial.userId,
                status: borrowingStatus,
              },
            },
            {
              query: GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY,
              variables: { status: allUsersBorrowingStatus },
            },
          ],
        }
      );

      const handleDelete = async () => {
        await deleteUserBorrowMaterial({
          variables: {
            deleteUserBorrowMaterialId: userBorrowMaterial.id,
          },
        });
        if (loading) return <LoaderSpinner />;
        if (error) {
          toast({
            title: `${error.message}`,
            variant: "destructive",
          });
        } else {
          toast({ title: "Deleted successfully!" });
        }
      };

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
              onClick={handleShare}
              className="hover:text-green-400"
            >
              <Share className="p-1.5" size={31} />
              {t("share")}
            </DropdownMenuItem>
            {userBorrowMaterial.status !== "Not Returned Yet" && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleDelete}
                  className="hover:text-red-400"
                >
                  <Trash2 className="p-1.5" size={31} />
                  {t("delete")}
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const borrowHistoryMaterialColumns: ColumnDef<UserBorrowMaterialType>[] =
  [
    {
      accessorKey: "figure",
      header: "Figure",
      cell: ({ row }) => (
        <img
          className="w-20 mx-auto bg-white"
          src={row.getValue("figure")}
          alt={row.getValue("figure")}
        />
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("name")}
        </div>
      ),
    },
    {
      accessorKey: "partName",
      header: "Part Name",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("partName")}
        </div>
      ),
    },
    {
      accessorKey: "position",
      header: "Position",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("position")}
        </div>
      ),
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("quantity")}
        </div>
      ),
    },
    {
      accessorKey: "borrowDate",
      header: "Borrow Date",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {(row.getValue("borrowDate") as string).split(",")[0]}
        </div>
      ),
    },
    {
      accessorKey: "returnDate",
      header: "Return Date",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {(row.getValue("returnDate") as string).split(",")[0]}
        </div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const userBorrowMaterial = row.original;
        const { toast } = useToast();
        const handleShare = () => {
          navigator.clipboard.writeText(
            `${window.location.origin}${materialBaseUrl}/${userBorrowMaterial.materialId}` // TODO: change to deployed link
          );
          toast({ title: "Link copied to clipboard!", variant: "share" });
        };
        const { t } = useTranslation();
        const [
          deleteUserBorrowMaterial,
          {
            loading: DeleteUserBorrowMaterialLoading,
            error: DeleteUserBorrowMaterialError,
          },
        ] = useMutation(DELETE_USER_BORROW_MATERIAL_MUTATION, {
          refetchQueries: [
            {
              query: GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
              variables: {
                userId: userBorrowMaterial.userId,
                status: returnedStatus,
              },
            },
          ],
        });

        const handleDeleteHistory = async () => {
          await deleteUserBorrowMaterial({
            variables: {
              deleteUserBorrowMaterialId: userBorrowMaterial.id,
            },
          });
          if (DeleteUserBorrowMaterialLoading) return <LoaderSpinner />;
          if (DeleteUserBorrowMaterialError) {
            toast({
              title: `${DeleteUserBorrowMaterialError.message}`,
              variant: "destructive",
            });
          } else {
            toast({ title: "History deleted successfully!" });
          }
        };

        const [
          addUserBorrowMaterial,
          {
            loading: addUserBorrowMaterialLoading,
            error: addUserBorrowMaterialError,
          },
        ] = useMutation(ADD_USER_BORROW_MATERIAL_MUTATION, {
          refetchQueries: [
            {
              query: GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
              variables: {
                userId: userBorrowMaterial.userId,
                status: unborrowedStatus,
              },
            },
          ],
        });

        const handleBorrowAgain = async () => {
          await addUserBorrowMaterial({
            variables: {
              userBorrowMaterialInput: {
                userId: userBorrowMaterial.userId,
                materialId: userBorrowMaterial.materialId,
                quantity: userBorrowMaterial.quantity,
              },
            },
          });
          if (addUserBorrowMaterialLoading) return <LoaderSpinner />;
          if (addUserBorrowMaterialError) {
            toast({
              title: `${addUserBorrowMaterialError.message}`,
              variant: "destructive",
            });
          } else {
            toast({ title: "Material added to shopping cart!" });
          }
        };

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
                onClick={handleShare}
                className="hover:text-green-400"
              >
                <Share className="p-1.5" size={31} />
                {t("share")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleBorrowAgain}
                className="hover:text-sky-300"
              >
                <ShoppingCart className="p-1.5" size={31} />
                {t("borrowAgain")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleDeleteHistory}
                className="hover:text-red-400"
              >
                <Trash2 className="p-1.5" size={31} />
                {t("deleteHistory")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

// material: admin
export const allUsersBorrowingMaterialColumns: ColumnDef<UserBorrowMaterialType>[] =
  [
    {
      id: "select",
      header: ({ table }) => (
        <center>
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
            className="dark:border-white"
          />
        </center>
      ),
      cell: ({ row }) => (
        <center>
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="dark:border-white"
          />
        </center>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const { t } = useTranslation();
        const { toast } = useToast();
        const [status, setStatus] = useState<string>(row.getValue("status"));
        const statusOptions = ["Processing", "Success", "Failed"];

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
              variables: { status: allUsersBorrowingStatus },
            },
            {
              query: GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY,
              variables: { status: unreturnedStatus },
            },
          ],
        });

        const handleStatusChange = async (status: string) => {
          setStatus(status);
          await editUserBorrowMaterialStatus({
            variables: {
              editUserBorrowMaterialStatusId: row.original.id,
              status: status,
            },
          });
          if (editUserBorrowMaterialStatusLoading) return <LoaderSpinner />;
          if (editUserBorrowMaterialStatusError) {
            toast({
              title: `${editUserBorrowMaterialStatusError.message}`,
              variant: "destructive",
            });
          } else {
            toast({ title: "Status updated successfully!" });
          }
        };

        return (
          <RadioGroup defaultValue={status}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div
                  className={cn(
                    "text-center font-semibold",
                    determineTextColor(status)
                  )}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-center font-semibold",
                      determineTextColor(status)
                    )}
                  >
                    {status}
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="bg-black bg-opacity-90 border border-white text-white"
              >
                <DropdownMenuLabel>{t("status")}</DropdownMenuLabel>
                {statusOptions.map((status) => (
                  <div key={status}>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => handleStatusChange(status)}
                    >
                      <RadioGroupItem
                        value={status}
                        id={status}
                        className="w-3 h-3 mr-2"
                      />
                      <Label htmlFor={status}>{status}</Label>
                    </DropdownMenuItem>
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </RadioGroup>
        );
      },
    },
    {
      accessorKey: "borrower",
      header: "Borrower",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("borrower")}
        </div>
      ),
    },
    {
      accessorKey: "studentId",
      header: "Student ID",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold uppercase">
          {row.getValue("studentId")}
        </div>
      ),
    },
    {
      accessorKey: "figure",
      header: "Figure",
      cell: ({ row }) => (
        <img
          className="w-20 mx-auto bg-white"
          src={row.getValue("figure")}
          alt={row.getValue("figure")}
        />
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("name")}
        </div>
      ),
    },
    {
      accessorKey: "partName",
      header: "Part Name",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("partName")}
        </div>
      ),
    },
    {
      accessorKey: "remain",
      header: "Remain",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("remain")}
        </div>
      ),
    },
    {
      accessorKey: "position",
      header: "Position",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("position")}
        </div>
      ),
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("quantity")}
        </div>
      ),
    },
  ];

export const allUsersUnreturnedMaterialColumns: ColumnDef<UserBorrowMaterialType>[] =
  [
    {
      id: "select",
      header: ({ table }) => (
        <center>
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
            className="dark:border-white"
          />
        </center>
      ),
      cell: ({ row }) => (
        <center>
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="dark:border-white"
          />
        </center>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "borrower",
      header: "Borrower",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("borrower")}
        </div>
      ),
    },
    {
      accessorKey: "studentId",
      header: "Student ID",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold uppercase">
          {row.getValue("studentId")}
        </div>
      ),
    },
    {
      accessorKey: "figure",
      header: "Figure",
      cell: ({ row }) => (
        <img
          className="w-20 mx-auto bg-white"
          src={row.getValue("figure")}
          alt={row.getValue("figure")}
        />
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("name")}
        </div>
      ),
    },
    {
      accessorKey: "partName",
      header: "Part Name",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("partName")}
        </div>
      ),
    },
    {
      accessorKey: "remain",
      header: "Remain",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("remain")}
        </div>
      ),
    },
    {
      accessorKey: "position",
      header: "Position",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("position")}
        </div>
      ),
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
      cell: ({ row }) => (
        <div className="text-center dark:text-white text-base font-semibold">
          {row.getValue("quantity")}
        </div>
      ),
    },
  ];

//threedp: user/admin
export const threeDPRequestColumns: ColumnDef<ThreeDPRequestType>[] =[
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "studentID",
    header: "Student ID",
    cell: ({ row }) => (
      <div className="text-center dark:text-white text-base font-semibold uppercase">
        {row.getValue("studentID")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { user } = useUser();
      const { t } = useTranslation();
      const { toast } = useToast();
      const [status, setStatus] = useState<string>(row.getValue("status"));
      const statusOptions = ["Processing", "Pass", "Failed", "Finished"];

      const [
        editThreeDPRequestStatus,
        {
          loading: editThreeDPRequestStatusLoading,
          error: editThreeDPRequestStatusError,
        },
      ] = useMutation( EDIT_THREE_DP_REQUEST_STATUS_MUTATION );

      const handleStatusChange = async (status: string) => {
        setStatus(status);
        await editThreeDPRequestStatus({
          variables: {
            editThreeDpRequestStatusId: row.original.id,
            status: status,
          },
        });
        if (editThreeDPRequestStatusLoading) return <LoaderSpinner />;
        if (editThreeDPRequestStatusError) {
          toast({
            title: `${editThreeDPRequestStatusError.message}`,
            variant: "destructive",
          });
        } else {
          toast({ title: "Status updated successfully!" });
        }
      };

      return (
        <>
        {
          user && user.isAdmin?
          <RadioGroup defaultValue={status}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div
                  className={cn(
                    "text-center font-semibold",
                    determineTextColor(status)
                  )}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-center font-semibold",
                      determineTextColor(status)
                    )}
                  >
                    {status}
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="bg-black bg-opacity-90 border border-white text-white"
              >
                <DropdownMenuLabel>{t("status")}</DropdownMenuLabel>
                {statusOptions.map((status) => (
                  <div key={status}>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleStatusChange(status)}>
                      <RadioGroupItem
                        value={status}
                        id={status}
                        className="w-3 h-3 mr-2"
                      />
                      <Label htmlFor={status}>{status}</Label>
                    </DropdownMenuItem>
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </RadioGroup>
        :
          <>
          <div
            className={cn(
              "text-center font-semibold",
              determineTextColor(status)
            )}
          >
            <div
              
              className={cn(
                "text-center font-semibold cursor: default",
                determineTextColor(status)
              )}
            >
              {status}
            </div>
            </div>
          </>
        }
        </>
      );
    }
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const { user } = useUser();
      const { toast } = useToast();
      const threeDPRequest = row.original;

      const { t } = useTranslation();
      const [deleteThreeDPRequest, { loading, error }] = useMutation(
        DELETE_THREE_DP_REQUEST_MUTATION,
        {
          refetchQueries: [
            {
              query: GET_THREE_DP_REQUESTS_BY_USER_ID_QUERY,
              variables: {
                userId: threeDPRequest.userId,
              },
            },
            {
              query: GET_THREE_DP_REQUESTS_BY_THREE_DP_ID_QUERY,
              variables: {
                threeDpId: threeDPRequest.threeDPId,
              },
            },
            {
              query: GET_USER_BY_STUDENT_ID_QUERY,
              variables: {
                studentId: user?.studentID,
              },
            },
          ],
        }
      );

      const handleDelete = async () => {
        localStorage.setItem("threeDPId", "");
        await deleteThreeDPRequest({
          variables: {
            deleteThreeDpRequestId: threeDPRequest.id,
          },
        });
        if (loading) return <LoaderSpinner />;
        if (error) {
          toast({ title: `${error.message}`, variant: "destructive" });
        } else {
          toast({ title: "Deleted successfully!" });
        }
      };

      return (
        <>          
          {user && (user.isAdmin || user.studentID === row.getValue("studentID"))? 
            <div 
              className="flex flex-row hover:text-red-500 hover:bg-red-100 hover:bg-opacity-90 px-0.5 rounded-lg cursor-pointer"
              onClick={handleDelete}
            >
              <Trash2 className="p-1.5" size={31} />
              <div className="my-auto mx-auto text-base text-center pr-1">{t("delete")}</div>
            </div>
            :
            <div 
              className="flex flex-row dark:text-white text-gray-300 bg-opacity-90 px-0.5 rounded-lg cursor-pointer"
              onClick={
                ()=> {
                  !user?
                    toast({ title: "Please login to delete request" })
                  :
                    toast({ title: "It's not your request" })
                }
              }
            >  
              <Trash2 className="p-1.5" size={31} />
              <div className="my-auto mx-auto text-base text-center pr-1">{t("delete")}</div>
            </div>
          }
        </>
        
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
            
        //     <Button variant="ghost" className="h-8 w-8 p-0">
        //       <span className="sr-only">Open menu</span>
        //       <MoreHorizontal className="h-4 w-4" />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent
        //     align="center"
        //     className="bg-black bg-opacity-90 border border-white text-white"
        //   >
        //     <DropdownMenuLabel>{t("actions")}</DropdownMenuLabel>
        //     <DropdownMenuSeparator />
        //     <DropdownMenuItem
        //       onClick={handleShare}
        //       className="hover:text-green-400"
        //     >
        //       <Share className="p-1.5" size={31} />
        //       {t("share")}
        //     </DropdownMenuItem>
        //     <DropdownMenuSeparator />
        //     <DropdownMenuItem
        //       onClick={handleDelete}
        //       className="hover:text-red-400"
        //     >
        //       <Trash2 className="p-1.5" size={31} />
        //       {t("delete")}
        //     </DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>
      );
    },
  },
];