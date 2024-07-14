import { lazy, Suspense } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import NotFound from "@/containers/NotFound";
import HomePage from "@/containers/HomePage";
import MaterialDetailPage from "@/components/MaterialAndTool/MaterialDetailPage";
import MaterialEditPage from "@/components/MaterialAndTool/MaterialEditPage";
import Advanced from "@/Advanced";
import LoaderSpinner from "@/components/LoaderSpinner";

const LoginPage = lazy(() => import("@/containers/LoginPage"));
const IntroductionPage = lazy(() => import("@/containers/IntroductionPage"));
const EditIntroductionPage = lazy(
  () => import("@/components/EditIntroductionPage")
);
const TutorialPage = lazy(() => import("@/containers/TutorialPage"));
const MapPage = lazy(() => import("@/containers/MapPage"));
const UserProfilePage = lazy(() => import("@/containers/UserProfilePage"));
const AuthorizedCodePage = lazy(
  () => import("@/containers/AuthorizedCodePage")
);
const MaterialAndToolPage = lazy(
  () => import("@/containers/MaterialAndToolPage")
);
const ShoppingList = lazy(() => import("@/containers/ShoppingList"));
const AnnouncementPage = lazy(() => import("@/containers/AnnouncementPage"));
const EditAnnouncement = lazy(() => import("@/components/EditAnnouncement"));
const AnnouncementCreated = lazy(() => import("@/components/Subscription"));
const Tool = lazy(() => import("@/components/MaterialAndTool/Tool"));

function App() {
  const match = useMatch("@/advanced/*");
  const [isMain, setIsMain] = useState(true);

  useEffect(() => {
    setIsMain(!match); // match will be non-null if the route matches
  }, [match]);

  // check if the page is mainPage or advancedPage
  return isMain ? (
    <div className="flex flex-row">
      <div className="flex-none z-10">
        <SideBar />
      </div>
      <div className="flex-1 flex-col h-screen ml-20">
        <div className="fixed top-0 bg-black w-full pr-20 z-10">
          <NavBar />
        </div>
        <div className="flex-1 m-4 mt-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/IntroductionPage"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <IntroductionPage />
                </Suspense>
              }
            />
            <Route
              path="/Introduction/edit"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <EditIntroductionPage />
                </Suspense>
              }
            />
            <Route
              path="/MapPage"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <MapPage />
                </Suspense>
              }
            />
            <Route
              path="/UserProfilePage"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <UserProfilePage />
                </Suspense>
              }
            />
            <Route
              path="/AuthorizedCodePage"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <AuthorizedCodePage />
                </Suspense>
              }
            />
            <Route
              path="/MaterialAndToolPage"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <MaterialAndToolPage />
                </Suspense>
              }
            />
            <Route
              path="/TutorialPage"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <TutorialPage />
                </Suspense>
              }
            />
            <Route
              path="/ShoppingList"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <ShoppingList />
                </Suspense>
              }
            />
            <Route
              path="/LoginPage"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <LoginPage />
                </Suspense>
              }
            />
            <Route
              path="/AnnouncementPage"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <AnnouncementPage />
                  <AnnouncementCreated />
                </Suspense>
              }
            />
            <Route
              path="/EditAnnouncement/:id"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <EditAnnouncement />
                </Suspense>
              }
            />
            <Route
              path="/MaterialAndToolPage/Material/:id"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <MaterialDetailPage />
                </Suspense>
              }
            />
            <Route
              path="/MaterialAndToolPage/Material/:id/edit"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <MaterialEditPage />
                </Suspense>
              }
            />
            <Route
              path="/MaterialAndToolPage/Tool/:id"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <Tool />
                </Suspense>
              }
            />
            <Route path="/advanced/*" element={<Advanced />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <Routes>
      <Route path="/advanced/*" element={<Advanced />} />
    </Routes>
  );
}

export default App;
