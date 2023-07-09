import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./component/NavBar";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage";
import Footer from "./component/Footer";

const LoginPage = lazy(() => import('./pages/LoginPage'))
const IntroductionPage = lazy(() => import('./pages/IntroductionPage'))
const TutorialPage = lazy(() => import('./pages/TutorialPage'))
const MapPage = lazy(() => import('./pages/MapPage'))
const ManagerPage = lazy(() => import('./pages/ManagerPage'))
const MaterialAndToolPage = lazy(() => import('./pages/MaterialAndToolPage'))
const ShoppingList = lazy(() => import('./pages/ShoppingList'))
const AnnouncementPage = lazy(() => import('./pages/AnnouncementPage'))
const Announcement = lazy(() => import('./component/Announcement'))
const Material = lazy(() => import('./component/MaterialAndTool/Material'))
const Tool = lazy(() => import('./component/MaterialAndTool/Tool'))
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='IntroductionPage' element={
          <Suspense fallback={<div>Loading...</div>}>
            <IntroductionPage />
          </Suspense>
        }
        />
        <Route path='MapPage' element={
          <Suspense fallback={<div>Loading...</div>}>
            <MapPage />
          </Suspense>
        } />
        <Route path='MaterialAndToolPage' element={
          <Suspense fallback={<div>Loading...</div>}>
            <MaterialAndToolPage />
          </Suspense>
        } />
        <Route path='TutorialPage' element={
          <Suspense fallback={<div>Loading...</div>}>
            <TutorialPage />
          </Suspense>
        } />
        <Route path='ShoppingList' element={
          <Suspense fallback={<div>Loading...</div>}>
            <ShoppingList />
          </Suspense>
        } />
        <Route path='ManagerPage' element={
          <Suspense fallback={<div>Loading...</div>}>
            <ManagerPage />
          </Suspense>
        } />
        <Route path='LoginPage' element={
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        } />
        <Route path='AnnouncementPage' element={
          <Suspense fallback={<div>Loading...</div>}>
            <AnnouncementPage />
          </Suspense>
        } />
        <Route path='Announcement/:id' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Announcement />
          </Suspense>
        } />
        <Route path='MaterialAndTool/Material/:id' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Material />
          </Suspense>
        } />
        <Route path='MaterialAndTool/Tool/:id' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Tool />
          </Suspense>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
