import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import HomePage from "@/containers/HomePage";
import Advanced from "@/Advanced";
import LoaderSpinner from "@/components/LoaderSpinner";
import NetworkStatus from "./components/NetworkStatus";
import useNetworkStatus from "./hooks/useNetworkStatus";
import UnconnectedPage from "./components/UnconnectedPage";
import { useUser } from "./contexts/UserContext";
import useUserLanguage from "@/hooks/useUserLanguage";

const FakeHome = lazy(() => import("@/containers/FakeHome"));
const FakeLoginPage = lazy(() => import("@/containers/FakeLoginPage"));
const LoginPage = lazy(() => import("@/containers/LoginPage"));
const IntroductionPage = lazy(() => import("@/containers/IntroductionPage"));
const TutorialPage = lazy(() => import("@/containers/TutorialPage"));
const MapPage = lazy(() => import("@/containers/MapPage"));
const UserProfilePage = lazy(() => import("@/containers/UserProfilePage"));
const AuthorizedCodePage = lazy(
  () => import("@/containers/AuthorizedCodePage")
);
const MaterialPage = lazy(() => import("@/containers/MaterialPage"));
const MaterialDetailPage = lazy(
  () => import("@/containers/MaterialDetailPage")
);
const ToolPage = lazy(() => import("@/containers/ToolPage"));
const ToolDetailPage = lazy(() => import("./containers/ToolDetailPage"));
const ShoppingCartPage = lazy(() => import("@/containers/ShoppingCartPage"));
const BorrowHistoryPage = lazy(() => import("@/containers/BorrowHistoryPage"));
const AllUsersBorrowingDataPage = lazy(
  () => import("@/containers/AllUsersBorrowingDataPage")
);
const AnnouncementPage = lazy(() => import("@/containers/AnnouncementPage"));
const NotFound = lazy(() => import("@/containers/NotFound"));
const DisposableMaterialPage = lazy(
  () => import("@/containers/DisposableMaterialPage")
);
const MachinePage = lazy(() => import("@/containers/MachinePage"));
const SettingsPage = lazy(() => import("@/containers/SettingsPage"));

function App() {
  const { isOnline } = useNetworkStatus();
  const { user, pushToLoginPage } = useUser();
  useUserLanguage();
  return !pushToLoginPage ? (
    <div className="flex flex-row">
      <div className="flex-1 flex-col h-screen">
        <div className="fixed top-0 bg-black w-full z-10">
          <NavBar />
          {user && isOnline && (
            <div className="flex-none z-20">
              <Sidebar />
            </div>
          )}
        </div>
        {isOnline ? (
          <div className="flex-1 mx-2 mt-16 sm:mt-16 md:mt-20 lg:mt-20 xl:mt-20">
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <HomePage />
                  </Suspense>
                }
              />
              <Route
                path="/Login"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <FakeLoginPage />
                  </Suspense>
                }
              />
              <Route
                path="/IntroductionPage"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <IntroductionPage />
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
                    {user ? <UserProfilePage /> : <NotFound />}
                  </Suspense>
                }
              />
              <Route
                path="/AuthorizedCodePage"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    {user?.isMinister ? <AuthorizedCodePage /> : <NotFound />}
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
                path="/TutorialPage"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <TutorialPage />
                  </Suspense>
                }
              />
              <Route
                path="/ShoppingCartPage"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    {user ? <ShoppingCartPage /> : <NotFound />}
                  </Suspense>
                }
              />
              <Route
                path="/BorrowHistoryPage"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    {user ? <BorrowHistoryPage /> : <NotFound />}
                  </Suspense>
                }
              />
              <Route
                path="/AllUsersBorrowingDataPage"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    {user?.isAdmin ? (
                      <AllUsersBorrowingDataPage />
                    ) : (
                      <NotFound />
                    )}
                  </Suspense>
                }
              />
              <Route
                path="/DisposableMaterialPage"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <DisposableMaterialPage />
                  </Suspense>
                }
              />
              <Route
                path="/MachinePage"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <MachinePage />
                  </Suspense>
                }
              />
              <Route
                path="/SettingsPage"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <SettingsPage />
                  </Suspense>
                }
              />
              <Route
                path="/AnnouncementPage"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <AnnouncementPage />
                  </Suspense>
                }
              />
              <Route path="/advanced/*" element={<Advanced />} />
              <Route
                path="*"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
          </div>
        ) : (
          <UnconnectedPage />
        )}
      </div>
      <NetworkStatus />
    </div>
  ) : (
    <div className="flex flex-center">
      {isOnline ? (
        <Routes>
          <Route
            path="/Login"
            element={
              <Suspense fallback={<LoaderSpinner />}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<LoaderSpinner />}>
                <FakeHome />
              </Suspense>
            }
          />
        </Routes>
      ) : (
        <UnconnectedPage />
      )}
      <NetworkStatus />
    </div>
  );
}

export default App;
