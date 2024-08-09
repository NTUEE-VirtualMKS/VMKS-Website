// TODO: replace this with dialog and modify backend schema
import { useEffect, useRef, useState } from "react";
import {
  introductionZh,
  toolRulesZh,
  userRulesZh,
  introductionEn,
  toolRulesEn,
  userRulesEn,
  additionalNoteZh,
  websiteUserPrecautionsZh,
  toolAndEquipmentPrecautionsZh,
  additionalNoteEn,
  websiteUserPrecautionsEn,
  toolAndEquipmentPrecautionsEn,
} from "@/constants/index";
import AdminSchedule from "@/components/AdminSchedule";
import { Anchor } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";
import { ALL_ADMIN_SCHEDULES_QUERY } from "@/graphql";
import { useToast } from "@/components/ui/use-toast";
import LoaderSpinner from "@/components/LoaderSpinner";
import type { AdminScheduleType } from "@/shared/type";

function IntroductionPage() {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const language = i18n.language;
  const sessionA = useRef(null);
  const sessionB = useRef(null);
  const sessionC = useRef(null);
  const [activeSession, setActiveSession] = useState<string | null>(null);

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const scrollToSection = (elementRef: any, sessionId: string) => {
    setActiveSession(sessionId);
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const textColor = (sessionId: string) =>
    sessionId === activeSession ? "text-white" : "text-gray-500";

  const { data, loading, error } = useQuery(ALL_ADMIN_SCHEDULES_QUERY);
  if (loading) {
    return <LoaderSpinner />;
  }
  if (error) {
    toast({ title: error.message, variant: "destructive" });
  }
  const adminSchedule =
    (data?.AllAdminSchedules as AdminScheduleType[][]) || [];

  return (
    <>
      <div className="w-1/12 h-24 fixed ml-0 mr-2 mt-8 sm:ml-0 sm:mr-2 md:ml-3 lg:ml-6 xl:ml-6">
        <ul className="list-none text-lg hidden flex-col items-center sm:hidden md:flex lg:flex xl:flex">
          <h1 className="text-white text-xl">{t("tableOfContents")}</h1>
          <li
            onClick={() => scrollToSection(sessionA, "sessionA")}
            className={textColor("sessionA")}
          >
            <a href="#introduction">{t("introduction")}</a>
          </li>
          <li
            onClick={() => scrollToSection(sessionB, "sessionB")}
            className={textColor("sessionB")}
          >
            <a href="#adminSchedule">{t("schedule")}</a>
          </li>
          <li
            onClick={() => scrollToSection(sessionC, "sessionC")}
            className={textColor("sessionC")}
          >
            <a href="#rules">{t("rules")}</a>
          </li>
        </ul>
      </div>
      <div className="w-8/12 mx-auto mt-24 mb-8 text-white flex flex-col">
        <div>
          <h1 ref={sessionA} className="p-1">
            MKS {t("introduction")}
          </h1>
          <h2 className="mt-5 flex items-center">
            <span>
              <a
                href="#introduction"
                onClick={() => scrollToSection(sessionA, "sessionA")}
              >
                <Anchor
                  className={cn("mr-1.5", textColor("sessionA"))}
                  size={23}
                />
              </a>
            </span>
            {t("briefIntroduction")}
          </h2>
          <div className="p-1">
            <p className="indent-first-letter">
              {language === "zh" ? introductionZh : introductionEn}
            </p>
          </div>
          <div className="mb-10" ref={sessionB}></div>
          <br />
          <h2 className="mt-5 flex items-center">
            <span>
              <a
                href="#adminSchedule"
                onClick={() => scrollToSection(sessionB, "sessionB")}
              >
                <Anchor
                  className={cn("mr-1.5", textColor("sessionB"))}
                  size={23}
                />
              </a>
            </span>
            {t("schedule")}
          </h2>
          <center className="mt-8 w-full">
            <AdminSchedule adminSchedule={adminSchedule} />
          </center>
          <h2 className="mt-5 flex items-center" ref={sessionC}>
            <span>
              <a
                href="#rules"
                onClick={() => scrollToSection(sessionC, "sessionC")}
              >
                <Anchor
                  className={cn("mr-1.5", textColor("sessionC"))}
                  size={23}
                />
              </a>
            </span>
            {t("rules")}
          </h2>
          <h3>
            {language === "zh"
              ? websiteUserPrecautionsZh
              : websiteUserPrecautionsEn}
          </h3>
          <ul className="p-2 ml-3 list-disc">
            {(language === "zh" ? userRulesZh : userRulesEn).map(
              (item: string) => (
                <li key={item}>{item}</li>
              )
            )}
          </ul>
          <h3 className="mt-3">
            {language === "zh"
              ? toolAndEquipmentPrecautionsZh
              : toolAndEquipmentPrecautionsEn}
          </h3>
          <ul className="p-2 ml-3 list-disc">
            {(language === "zh" ? toolRulesZh : toolRulesEn).map(
              (item: string) => (
                <li key={item}>{item}</li>
              )
            )}
          </ul>
          <p className="mb-5">
            {language === "zh" ? additionalNoteZh : additionalNoteEn}
          </p>
        </div>
      </div>
    </>
  );
}

export default IntroductionPage;
