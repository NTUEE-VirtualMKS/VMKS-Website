import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { periods, week } from "@/constants/index";
import { AdminScheduleType } from "@/shared/type";
import { useTranslation } from "react-i18next";
import AdminScheduleEditInput from "./AdminScheduleEditInput";

const deteminePeriod = (index: number) => periods[index] || "";

function AdminSchedule({
  adminSchedule,
}: {
  adminSchedule: AdminScheduleType[][];
}) {
  const { t } = useTranslation();
  return (
    <>
      <div className="border dark:border-[#444444] rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="dark:text-white text-center font-semibold text-base">
                {t("period")}
              </TableHead>
              {week.map((day) => (
                <TableHead
                  className="dark:text-white text-center font-semibold text-base"
                  key={day}
                >
                  {t(`${day}`)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {adminSchedule.map((peroid: AdminScheduleType[], index: number) => (
              <TableRow key={index}>
                <TableCell className="dark:text-white text-black text-center text-base">
                  {deteminePeriod(index)}
                </TableCell>
                {peroid.map((adminSchedule, index: number) => (
                  <AdminScheduleEditInput
                    adminSchedule={adminSchedule}
                    key={index}
                  />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-center dark:text-zinc-500 text-zinc-400 mt-3">
        {t("adminWorkSchedule")}
      </p>
    </>
  );
}

export default AdminSchedule;
