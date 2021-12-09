import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import CustomersPage from "../pages/CustomersPage";
import ItemsPage from "../pages/ItemsPage";
import SalePage from "../pages/SalesPage";

function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SalePage} />
      <Route exact path="/customers" component={CustomersPage} />
      <Route exact path="/items" component={ItemsPage} />
    </BrowserRouter>
  );
}

export default Router;
