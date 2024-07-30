// TODO: replace this with dialog and modify backend schema
import { useEffect, useRef, useState } from "react";
import { introduction, toolRules, userRules } from "@/constants/index";
import Timetable from "@/components/Timetable";
import { Anchor } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

function IntroductionPage() {
  const { t } = useTranslation();
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
            <a href="#timetable">{t("schedule")}</a>
          </li>
          <li
            onClick={() => scrollToSection(sessionC, "sessionC")}
            className={textColor("sessionC")}
          >
            <a href="#rules">{t("rules")}</a>
          </li>
        </ul>
      </div>
      <div className="w-9/12 mx-auto mt-24 mb-8 text-white flex flex-col">
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
            <p className="indent-first-letter">{introduction}</p>
          </div>
          <div className="mb-10" ref={sessionB}></div>
          <br />
          <h2 className="mt-5 flex items-center">
            <span>
              <a
                href="#timetable"
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
          <center className="mt-8 w-11/12 mx-auto">
            <Timetable />
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
          <h3>網站使用者注意事項</h3>
          <ul className="p-2 ml-3 list-disc">
            {userRules.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="mt-3">工具與借用器材注意事項</h3>
          <ul className="p-2 ml-3 list-disc">
            {toolRules.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mb-5">
            這些注意事項將有助於使用者在網站和使用工具、借用器材時保持安全，避免潛在的風險和問題。經過謹慎和負責任的使用，可以確保使用者和他人的安全和利益
          </p>
        </div>
      </div>
    </>
  );
}

export default IntroductionPage;
