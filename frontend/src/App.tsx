import { lazy, Suspense } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { NotFound } from "./containers/NotFound";
import { HomePage } from "./containers/HomePage";
import Footer from "./components/Footer";
import MaterialDetail from "./components/MaterialAndTool/MaterialDetail";
import Advanced from "./Advanced";

const LoginPage = lazy(() => import("./containers/LoginPage"));
const IntroductionPage = lazy(() => import("./containers/IntroductionPage"));
const TutorialPage = lazy(() => import("./containers/TutorialPage"));
const MapPage = lazy(() => import("./containers/MapPage"));
const UserProfilePage = lazy(() => import("./containers/UserProfilePage"));
const AuthorizedCodePage = lazy(() => import("./containers/AuthorizedCodePage"));
const MaterialAndToolPage = lazy(
  () => import("./containers/MaterialAndToolPage")
);
const ShoppingList = lazy(() => import("./containers/ShoppingList"));
const AnnouncementPage = lazy(() => import("./containers/AnnouncementPage"));
const Announcement = lazy(() => import("./components/Announcement"));
const AnnouncementCreated = lazy(() => import("./components/Subscription"));
// const Material = lazy(() => import("./components/MaterialAndTool/Material"));
const Tool = lazy(() => import("./components/MaterialAndTool/Tool"));

function App() {
  const match = useMatch("/advanced/*");
  const [isMain, setIsMain] = useState(true);

  useEffect(() => {
    setIsMain(!match); // match will be non-null if the route matches
  }, [match]);

  // check if the page is mainPage or advancedPage
  if (isMain) {
    return (
      <div>
        <NavBar />
        <Routes>
          {/* <Route path='/' element={<HomePage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route
            path="/IntroductionPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <IntroductionPage />
              </Suspense>
            }
          />
          <Route
            path="/MapPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MapPage />
              </Suspense>
            }
          />
          <Route
            path="/UserProfilePage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UserProfilePage />
              </Suspense>
            }
          />
          <Route
            path="/AuthorizedCodePage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AuthorizedCodePage />
              </Suspense>
            }
          />
          <Route
            path="/MaterialAndToolPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MaterialAndToolPage />
              </Suspense>
            }
          />
          <Route
            path="/TutorialPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TutorialPage />
              </Suspense>
            }
          />
          <Route
            path="/ShoppingList"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ShoppingList />
              </Suspense>
            }
          />
          <Route
            path="/LoginPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="/AnnouncementPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AnnouncementPage />
                <AnnouncementCreated />
              </Suspense>
            }
          />
          <Route
            path="/Announcement/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Announcement />
              </Suspense>
            }
          />
          <Route
            path="/MaterialAndTool/Material/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MaterialDetail />
              </Suspense>
            }
          />

          <Route
            path="/MaterialAndTool/Tool/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Tool />
              </Suspense>
            }
          />
          <Route path="/advanced/*" element={<Advanced />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    );
  } else {
    return (
      <Routes>
        <Route path="/advanced/*" element={<Advanced />} />
      </Routes>
    );
  }
}

export default App;
