// TODO: connect to backend
import { useRef, useEffect, useState } from "react";
import {
  interaction1,
  interaction2,
  interaction3,
  list,
} from "@/constants/index";
import { Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

function TutorialPage() {
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
          <h1 className="text-white text-xl">目錄</h1>
          <li
            key="sessionA"
            onClick={() => scrollToSection(sessionA, "sessionA")}
            className={textColor("sessionA")}
          >
            <a href="#interaction">互動</a>
          </li>
          <li
            key="sessionB"
            onClick={() => scrollToSection(sessionB, "sessionB")}
            className={textColor("sessionB")}
          >
            <a href="#overview">一覽</a>
          </li>
          <li
            key="sessionC"
            onClick={() => scrollToSection(sessionC, "sessionC")}
            className={textColor("sessionC")}
          >
            <a href="#videos">影片</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-9/12 mx-auto mt-24 mb-8 text-white">
        <h1 ref={sessionA} className="p-1">
          教學 Tutorial
        </h1>
        <h2 className="mt-5 flex items-center">
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
          互動
        </h2>
        <div className="p-1">
          <p className="indent-first-letter">{interaction1}</p>
          <p className="indent-first-letter">{interaction2}</p>
          <p className="indent-first-letter">{interaction3}</p>
        </div>
        <div className="mb-14" ref={sessionB} />
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
          一覽
        </h2>
        <ul className="p-2 ml-3 list-disc">
          {list.map((item: string) => (
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
          教學影片
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
