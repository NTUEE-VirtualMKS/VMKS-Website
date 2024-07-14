import { useRef, useEffect, useState } from "react";
import {
  interaction1,
  interaction2,
  interaction3,
  list,
} from "@/constants/index";

const TutorialPage = () => {
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
      <div className="w-1/12 h-24 fixed ml-8 mt-8">
        <ul className="list-none text-lg">
          <li
            onClick={() => scrollToSection(sessionA, "sessionA")}
            className={textColor("sessionA")}
          >
            <a href="#interaction">互動</a>
          </li>
          <li
            onClick={() => scrollToSection(sessionB, "sessionB")}
            className={textColor("sessionB")}
          >
            <a href="#overview">一覽</a>
          </li>
          <li
            onClick={() => scrollToSection(sessionC, "sessionC")}
            className={textColor("sessionC")}
          >
            <a href="#videos">影片</a>
          </li>
        </ul>
      </div>
      <div className="w-9/12 mx-auto mt-20 mb-8 text-white">
        <h1 ref={sessionA}>教學 Tutorial</h1>
        <br />
        <h2>互動</h2>
        <div className="p-1">
          <p className="indent-first-letter">{interaction1}</p>
          <p className="indent-first-letter">{interaction2}</p>
          <p className="indent-first-letter">{interaction3}</p>
        </div>
        <br />
        <h2 ref={sessionB}>一覽</h2>
        <ul className="p-2 ml-3 list-disc">
          {list.map((item: string) => (
            <li>{item}</li>
          ))}
        </ul>
        <br />
        <h2 ref={sessionC}>教學影片</h2>
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
};

export default TutorialPage;
