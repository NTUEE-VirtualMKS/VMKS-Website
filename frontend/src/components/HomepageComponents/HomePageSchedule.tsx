import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";
import { useQuery } from "@apollo/client";
import { GET_ADMIN_SCHEDULE_BY_DAY_QUERY } from "@/graphql";
import LoaderSpinner from "../LoaderSpinner";
import { useToast } from "../ui/use-toast";
import type { AdminScheduleType } from "@/shared/type";
import { week } from "@/constants/index";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function HomePageSchedule() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleNumberToDay = (day: number) => week[day] || "sunday";

  const { data, loading, error } = useQuery(GET_ADMIN_SCHEDULE_BY_DAY_QUERY, {
    variables: { day: handleNumberToDay(new Date().getDay()) },
  });

  if (loading) {
    return <LoaderSpinner />;
  }

  if (error) {
    toast({ title: error.message, variant: "destructive" });
  }

  const adminSchedule =
    (data?.GetAdminScheduleByDay as AdminScheduleType[]) ?? [];

  return (
    <>
      <div className="flex flex-col grow py-5 w-full font-semibold bg-[#202020] border border-[#444444] bg-opacity-50 rounded-[30px] max-md:mt-6">
        <div className="flex flex-col px-5 max-md:pl-5">
          <div className="text-2xl text-white flex flex-row items-center gap-2 font-semibold">
            <Calendar size={28} /> {t("todayAdminSchedule")} (
            {t(handleNumberToDay(new Date().getDay()))})
          </div>
          <button
            className="self-end mt-1.5 text-sm text-right whitespace-nowrap text-white text-opacity-50 transform active:scale-90 transition-transform duration-200 font-semibold"
            onClick={() => navigate("/IntroductionPage")}
          >
            {t("seeAll")}
          </button>
        </div>
        <div className="flex mx-4 mt-2 justify-between self-center w-[16.5rem] text-white bg-[#303030] bg-opacity-50 hover:bg-opacity-70 border border-[#444444] rounded-xl">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent rounded-t-2xl">
                <TableHead className="text-white text-center font-semibold">
                  {t("period")}
                </TableHead>
                <TableHead className="text-white text-center font-semibold">
                  {t("onDutyAdmin")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adminSchedule.map(({ period, admin }, index) => (
                <TableRow key={index} className="border-none">
                  <TableCell className="text-white text-center w-6/12 mx-auto">
                    {period}
                  </TableCell>
                  <TableCell className="text-white text-center w-6/12 mx-auto">
                    {admin}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default HomePageSchedule;
