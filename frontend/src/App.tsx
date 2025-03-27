import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import LoaderSpinner from "@/components/LoaderSpinner";
import NetworkStatus from "./components/NetworkStatus";
import useNetworkStatus from "./hooks/useNetworkStatus";
import UnconnectedPage from "./components/UnconnectedPage";
import { useUser } from "./contexts/UserContext";
import useUserLanguage from "@/hooks/useUserLanguage";
import {
  HomePage,
  MaterialPage,
  MaterialDetailPage,
  ToolPage,
  ToolDetailPage,
  TutorialPage,
  ShoppingCartPage,
  BorrowHistoryPage,
  AllUsersBorrowingDataPage,
  AnnouncementPage,
  UserProfilePage,
  AuthorizedCodePage,
  IntroductionPage,
  MapPage,
  FakeLoginPage,
  LoginPage,
  FakeHome,
  NotFound,
  DisposableMaterialPage,
  MachinePage,
  // BlogDashboard,
  CreatePost,
  // EditPost,
  PostView,
  ThreeDPDetailPage,
  OtherMachineDetailPage,
} from "@/containers";

const routes: Array<{
  path: string;
  element: JSX.Element;
  protected?: boolean; // user || user.isAdmin || user.isMinister
  role?: "isAdmin" | "isMinister";
}> = [
  { path: "/", element: <HomePage /> },
  {
    path: "/AllUsersBorrowingDataPage",
    element: <AllUsersBorrowingDataPage />,
    protected: true,
    role: "isAdmin",
  },
  { path: "/AnnouncementPage", element: <AnnouncementPage /> },
  {
    path: "/AuthorizedCodePage",
    element: <AuthorizedCodePage />,
    protected: true,
    role: "isMinister",
  },
  {
    path: "/BorrowHistoryPage",
    element: <BorrowHistoryPage />,
    protected: true,
  },
  { path: "/DisposableMaterialPage", element: <DisposableMaterialPage /> },
  { path: "/Login", element: <FakeLoginPage /> },
  { path: "/IntroductionPage", element: <IntroductionPage /> },
  { path: "/MachinePage/ThreeDP/:id", element: <ThreeDPDetailPage /> },
  {
    path: "/MachinePage/OtherMachine/:id",
    element: <OtherMachineDetailPage />,
  },
  { path: "/MachinePage", element: <MachinePage /> },
  { path: "/MapPage", element: <MapPage /> },
  { path: "/MaterialPage/Material/:id", element: <MaterialDetailPage /> },
  { path: "/MaterialPage", element: <MaterialPage /> },
  { path: "*", element: <NotFound /> },
  { path: "/ShoppingCartPage", element: <ShoppingCartPage />, protected: true },
  { path: "/ToolPage/Tool/:id", element: <ToolDetailPage /> },
  { path: "/ToolPage", element: <ToolPage /> },
  { path: "/TutorialPage", element: <TutorialPage /> },
  { path: "/UserProfilePage", element: <UserProfilePage />, protected: true },
  // { path: "/BlogDashboard", element: <BlogDashboard /> },
  { path: "/create-post", element: <CreatePost /> },
  // { path: "/edit-post/:id", element: <EditPost /> },
  { path: "/post/:id", element: <PostView /> },
];

function App() {
  const { isOnline } = useNetworkStatus();
  const { user, pushToLoginPage } = useUser();
  useUserLanguage();
  const renderRoutes = () => (
    <Routes>
      {routes.map(({ path, element, protected: isProtected, role }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<LoaderSpinner />}>
              {isProtected ? (
                user ? (
                  role ? (
                    user[role] ? (
                      element
                    ) : (
                      <NotFound />
                    )
                  ) : (
                    element
                  )
                ) : (
                  <NotFound />
                )
              ) : (
                element
              )}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
  return !pushToLoginPage ? (
    <div className="flex flex-row">
      <div className="flex-1 flex-col h-screen">
        <div className="fixed top-0 w-full z-10">
          <NavBar />
          {user && isOnline && (
            <div className="flex-none">
              <Sidebar />
            </div>
          )}
        </div>
        {isOnline ? (
          <div className="flex-1 mx-2 mt-12 sm:mt-12 md:mt-16 lg:mt-16 xl:mt-16">
            {renderRoutes()}
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
