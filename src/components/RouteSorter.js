import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { App } from "./pages/App";
import { Company } from "./pages/company/Company";
import { Home } from "./pages/Home/Home";
import { Pricing } from "./pages/pricing/Pricing";
import { Products } from "./pages/products/Products";
import { Resources } from "./pages/resources/Resources";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="resources" element={<Resources />} />
      <Route path="company" element={<Company />} />
      <Route path="pricing" element={<Pricing />} />
    </Route>,
  ])
);

const RouteSorter = () => {
  return <RouterProvider router={router} />;
};

export default RouteSorter;
