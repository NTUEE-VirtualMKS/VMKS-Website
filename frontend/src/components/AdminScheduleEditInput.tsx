import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  EDIT_ADMIN_SCHEDULE_MUTATION,
  ALL_ADMIN_SCHEDULES_QUERY,
} from "@/graphql";
import { AdminScheduleType } from "@/shared/type";
import { Input } from "./ui/input";
import { TableCell } from "./ui/table";
import { useToast } from "./ui/use-toast";
import LoaderSpinner from "./LoaderSpinner";
import { cn } from "@/lib/utils";
import { useUser } from "@/contexts/UserContext";

function AdminScheduleEditInput({
  adminSchedule,
}: {
  adminSchedule: AdminScheduleType;
}) {
  const [admin, setAdmin] = useState(adminSchedule.admin);
  const [isEdit, setIsEdit] = useState(false);
  const { user } = useUser();
  const { toast } = useToast();
  const [editAdminSchedule, { loading, error }] = useMutation(
    EDIT_ADMIN_SCHEDULE_MUTATION,
    {
      refetchQueries: [{ query: ALL_ADMIN_SCHEDULES_QUERY }],
    }
  );

  const handleEdit = () => {
    if (admin !== adminSchedule.admin && admin !== "") {
      try {
        editAdminSchedule({
          variables: {
            editAdminScheduleId: adminSchedule.id,
            name: admin,
          },
        });
        if (loading) {
          return <LoaderSpinner />;
        }
        if (error) {
          toast({ title: error.message, variant: "destructive" });
        }
        toast({ title: "Admin's name updated successfully!" });
      } catch (error) {
        toast({ title: `${error}`.split(":")[1], variant: "destructive" });
      }
    }
    if (admin === "") {
      setAdmin(adminSchedule.admin);
    }
    setIsEdit(false);
  };

  const handleClick = () => {
    if (user?.isMinister) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  };

  return isEdit ? (
    <div className="flex flex-center mt-2">
      <Input
        className="dark:text-white text-black w-20 text-center dark:bg-[#15171C] rounded-[6px] placeholder:text-[#71788B] focus-visible:ring-offset-sky-300 text-base placeholder:text-base"
        value={admin}
        onChange={(e) => setAdmin(e.target.value)}
        onBlur={handleEdit}
        autoFocus
        placeholder="name"
      />
    </div>
  ) : (
    <TableCell
      className={cn(
        "dark:text-white text-center text-base text-black",
        user?.isMinister &&
          "cursor-pointer transform active:scale-95 transition-transform duration-200"
      )}
      onClick={handleClick}
    >
      {admin}
    </TableCell>
  );
}

export default AdminScheduleEditInput;
