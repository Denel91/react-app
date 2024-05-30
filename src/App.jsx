import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import { getMovie } from "./pages/Movie";
import Favoriti from "./pages/Favoriti";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/:title/:id" lazy={() => import("./pages/Movie")} loader={({params}) => getMovie(params.id)}/>
      <Route path="/preferiti" element={<Favoriti/>}/>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
