import { HRRoutes } from "./HRRoutes";
import { PurchaseRoutes } from "./PurchaseRoutes";
import { DashboardRoutes } from "./DashboardRoutes";
import { SalesRoutes } from "./SalesRoutes";
import { WarehouseRoutes } from "./WarehouseRoutes";
import { FinanceRoutes } from "./FinanceRoutes";
import { FoodSafetyRoutes } from "./FoodSafetyRoutes";
import { ProductionManagementRoutes } from "./ProductionManagementRoutes";
import { PermissionRoutes } from "./PermissionRoutes";

export default {
  ...HRRoutes,
  ...DashboardRoutes,
  ...SalesRoutes,
  ...WarehouseRoutes,
  ...FinanceRoutes,
  ...PurchaseRoutes,
  ...ProductionManagementRoutes,
  ...FoodSafetyRoutes,

  // TODO: Delete Permission Routes
  ...PermissionRoutes,

  homePage: "/",
};
