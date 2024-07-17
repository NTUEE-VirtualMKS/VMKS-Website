// TODO: replace this with dialog and modify backend schema
import { useEffect, useRef, useState } from "react";
import { introduction, toolRules, userRules } from "@/constants/index";
import Timetable from "@/components/Timetable";

function IntroductionPage() {
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
      <div className="w-1/12 h-24 fixed ml-3 mt-8">
        <ul className="list-none text-lg">
          <li
            onClick={() => scrollToSection(sessionA, "sessionA")}
            className={textColor("sessionA")}
          >
            <a href="#introduction">簡介</a>
          </li>
          <li
            onClick={() => scrollToSection(sessionB, "sessionB")}
            className={textColor("sessionB")}
          >
            <a href="#timetable">班表</a>
          </li>
          <li
            onClick={() => scrollToSection(sessionC, "sessionC")}
            className={textColor("sessionC")}
          >
            <a href="#rules">規範</a>
          </li>
        </ul>
      </div>
      <div className="w-10/12 mx-auto mt-20 mb-8 text-white">
        <div>
          <h1 ref={sessionA}>MKS介紹 Introduction</h1>
          <a
            href="#introduction"
            onClick={() => scrollToSection(sessionA, "sessionA")}
          >
            <h2 className="mt-5">簡介</h2>
          </a>
          <div className="p-1">
            <p className="indent-first-letter">{introduction}</p>
          </div>
          <a
            href="#timetable"
            onClick={() => scrollToSection(sessionB, "sessionB")}
          >
            <h2 ref={sessionB} className="mt-5">
              班表
            </h2>
          </a>
          <center className="mt-8">
            <Timetable />
          </center>
          <a
            href="#rules"
            onClick={() => scrollToSection(sessionC, "sessionC")}
          >
            <h2 ref={sessionC} className="mt-5">
              規範
            </h2>
          </a>
          <h3>網站使用者注意事項</h3>
          <ul className="p-2 ml-3 list-disc">
            {userRules.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
          <h3 className="mt-3">工具與借用器材注意事項</h3>
          <ul className="p-2 ml-3 list-disc">
            {toolRules.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
          <p>
            這些注意事項將有助於使用者在網站和使用工具、借用器材時保持安全，避免潛在的風險和問題。經過謹慎和負責任的使用，可以確保使用者和他人的安全和利益
          </p>
        </div>
      </div>
    </>
  );
}

export default IntroductionPage;
