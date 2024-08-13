// TODO: connect to backend
import { useRef, useEffect, useState } from "react";
import {
  interaction1Zh,
  interaction2Zh,
  interaction3Zh,
  listZh,
  interaction1En,
  interaction2En,
  interaction3En,
  listEn,
} from "@/constants/index";
import { Anchor, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

function TutorialPage() {
  const { t, i18n } = useTranslation();
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
    sessionId === activeSession
      ? "dark:text-white"
      : "dark:text-gray-500 text-gray-400";

  return (
    <>
      <div className="w-1/12 h-24 fixed ml-0 mr-2 mt-8 sm:ml-0 sm:mr-2 md:ml-3 lg:ml-6 xl:ml-6">
        <ul className="list-none text-lg hidden flex-col items-center sm:hidden md:flex lg:flex xl:flex">
          <h1 className="dark:text-white text-xl">{t("tableOfContents")}</h1>
          <li
            key="sessionA"
            onClick={() => scrollToSection(sessionA, "sessionA")}
            className={textColor("sessionA")}
          >
            <a href="#interaction">{t("interaction")}</a>
          </li>
          <li
            key="sessionB"
            onClick={() => scrollToSection(sessionB, "sessionB")}
            className={textColor("sessionB")}
          >
            <a href="#overview">{t("all")}</a>
          </li>
          <li
            key="sessionC"
            onClick={() => scrollToSection(sessionC, "sessionC")}
            className={textColor("sessionC")}
          >
            <a href="#videos">{t("clip")}</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-8/12 mx-auto mt-20 mb-8 dark:text-white">
        <h1
          ref={sessionA}
          className="dark:text-white p-1 flex flex-row gap-2 items-center"
        >
          <Info className="dark:text-white" size={35} />
          {t("info")}
        </h1>
        <h2 className="flex items-center">
          <span>
            <a
              href="#interaction"
              onClick={() => scrollToSection(sessionA, "sessionA")}
            >
              <Anchor
                className={cn("mr-1.5", textColor("sessionA"))}
                size={23}
              />
            </a>
          </span>
          {t("interaction")}
        </h2>
        <div className="p-1">
          <p className="indent-first-letter">
            {language === "zh" ? interaction1Zh : interaction1En}
          </p>
          <p className="indent-first-letter">
            {language === "zh" ? interaction2Zh : interaction2En}
          </p>
          <p className="indent-first-letter">
            {language === "zh" ? interaction3Zh : interaction3En}
          </p>
        </div>
        <div className="mb-12" ref={sessionB} />
        <br />
        <h2 className="mt-5 flex items-center">
          <span>
            <a
              href="#overview"
              onClick={() => scrollToSection(sessionB, "sessionB")}
            >
              <Anchor
                className={cn("mr-1.5", textColor("sessionB"))}
                size={23}
              />
            </a>
          </span>
          {t("all")}
        </h2>
        <ul className="p-2 ml-3 list-disc">
          {(language === "zh" ? listZh : listEn).map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2 ref={sessionC} className="mt-5 flex items-center">
          <span>
            <a
              href="#videos"
              onClick={() => scrollToSection(sessionC, "sessionC")}
            >
              <Anchor
                className={cn("mr-1.5", textColor("sessionC"))}
                size={23}
              />
            </a>
          </span>
          {t("clip")}
        </h2>
        <center>
          <iframe
            src="https://www.youtube.com/embed/u10oLI85Ip0"
            className="w-9/12 h-96 mx-auto"
          ></iframe>
          <br />
        </center>
      </div>
    </>
  );
}

export default TutorialPage;
