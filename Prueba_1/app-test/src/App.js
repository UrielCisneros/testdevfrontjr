import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from "components/Layout/LayoutPage";
// import AllTasks from "pages/AllTasks/AllTasks";
// import ListUser from "pages/ListUser/ListUser";
// import Posts from "pages/Posts/Posts";
import ListUserSkeleton from "components/Skeletons/ListUserSkeleton";
import ListPostSkeleton from "components/Skeletons/ListPostSkeleton";

const ListUser = lazy(() => import("pages/ListUser/ListUser"));
const Posts = lazy(() => import("pages/Posts/Posts"));
const AllTasks = lazy(() => import("pages/AllTasks/AllTasks"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route
              index
              element={
                <Suspense fallback={<ListUserSkeleton />}>
                  <ListUser />
                </Suspense>
              }
            />
            <Route
              path="/post/:userId"
              element={
                <Suspense fallback={<ListPostSkeleton />}>
                  <Posts />
                </Suspense>
              }
            />
            <Route
              path="/all/:userId"
              element={
                <Suspense fallback={<ListUserSkeleton />}>
                  <AllTasks />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
