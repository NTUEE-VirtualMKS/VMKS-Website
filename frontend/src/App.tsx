import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import NotFound from "@/containers/NotFound";
import HomePage from "@/containers/HomePage";
import MaterialDetailPage from "@/components/MaterialAndTool/MaterialDetailPage";
import MaterialEditPage from "@/components/MaterialAndTool/MaterialEditPage";
import ToolDetailPage from "./components/MaterialAndTool/ToolDetailPage";
import ToolEditPage from "./components/MaterialAndTool/ToolEditPage";
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
const MaterialPage = lazy(() => import("@/containers/MaterialPage"));
const ToolPage = lazy(() => import("@/containers/ToolPage"));
const ShoppingList = lazy(() => import("@/containers/ShoppingList"));
const AnnouncementPage = lazy(() => import("@/containers/AnnouncementPage"));
const EditAnnouncement = lazy(() => import("@/components/EditAnnouncement"));
const AnnouncementCreated = lazy(() => import("@/components/Subscription"));

function App() {
  return (
    <div className="flex flex-row">
      <div className="flex-none z-20">
        <SideBar />
      </div>
      <div className="flex-1 flex-col h-screen">
        <div className="fixed top-0 bg-black w-full z-10">
          <NavBar />
        </div>
        <div className="flex-1 mx-3 mt-20">
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
              path="/MaterialPage"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <MaterialPage />
                </Suspense>
              }
            />
            <Route
              path="/MaterialPage/Material/:id"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <MaterialDetailPage />
                </Suspense>
              }
            />
            <Route
              path="/MaterialPage/Material/:id/edit"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <MaterialEditPage />
                </Suspense>
              }
            />
            <Route
              path="/ToolPage"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <ToolPage />
                </Suspense>
              }
            />
            <Route
              path="/ToolPage/Tool/:id"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <ToolDetailPage />
                </Suspense>
              }
            />
            <Route
              path="/ToolPage/Tool/:id/edit"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <ToolEditPage />
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
              path="/Login"
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
            <Route path="/advanced/*" element={<Advanced />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
