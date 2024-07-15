import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CURRENT_INTRODUCTION_QUERY,
  INTRODUCTION_UPDATE_MUTATION,
} from "@/graphql";
import { Button } from "./ui/button.tsx";
import LoaderSpinner from "./LoaderSpinner.tsx";

function EditIntroductionPage() {
  const navigate = useNavigate();
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

  const { data, loading, error } = useQuery(CURRENT_INTRODUCTION_QUERY);
  const introduction = JSON.parse(JSON.stringify(data?.CurrentIntroduction));
  const content = introduction.content;
  const [
    updateIntroduction,
    { loading: introductionLoading, error: introductionError },
  ] = useMutation(INTRODUCTION_UPDATE_MUTATION, {
    refetchQueries: [{ query: CURRENT_INTRODUCTION_QUERY }],
  });

  const handleSave = async (content: string) => {
    if (introductionLoading) return <LoaderSpinner />;
    if (introductionError)
      throw new Error(`Error! ${introductionError.message}`);

    await updateIntroduction({
      variables: { introductionInput: { content: content } },
    });

    navigate("/IntroductionPage");
  };

  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  return (
    <>
      <div className="w-1/12 h-24 fixed ml-4 mt-8">
        <ul className="list-none text-lg">
          <li
            onClick={() => scrollToSection(sessionA, "sessionA")}
            className={textColor("sessionA")}
          >
            <a href="#introduction">MKS簡介</a>
          </li>
          <li
            onClick={() => scrollToSection(sessionB, "sessionB")}
            className={textColor("sessionB")}
          >
            <a href="#timetable">管理員班表</a>
          </li>
          <li
            onClick={() => scrollToSection(sessionC, "sessionC")}
            className={textColor("sessionC")}
          >
            <a href="#rules">使用者規範</a>
          </li>
        </ul>
      </div>
      <div className="w-9/12 mx-auto mt-20 mb-8 text-white">
        <h1 className="my-0 mx-auto">MKS介紹 Introduction</h1>
        <p className="text-white" ref={sessionA}>
          {content}
        </p>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-3">
          <Button
            onClick={() => navigate("/IntroductionPage")}
            className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
          >
            取消
          </Button>
          <Button
            className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
            onClick={() => handleSave(content)}
          >
            儲存
          </Button>
        </div>
      </div>
    </>
  );
}

export default EditIntroductionPage;
