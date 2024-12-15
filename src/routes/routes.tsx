import { Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import MobileSideNav from "@/components/MobileSideNav";
import ProfileDropdown from "@/components/ProfileDropdown";

import DashboardSideNav from "@/components/dashboardSideNav";
import Dashboard from "@/view/Dashboard";
import { RouteObject } from "react-router-dom";
import { AppThemeToggle } from "@/components/ThemeSelector";
import TabLayout from "@/components/ProductLayout";
import { productLinks } from "@/constants/tabLinks";
import SettingsWrapper from "@/components/SettingsWrapper";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <DashboardLayout
        sideNav={<DashboardSideNav />}
        profileDropdown={<ProfileDropdown />}
        mobileSideNav={<MobileSideNav />}
        themeSelector={<AppThemeToggle />}
      />
    ),
    children: [
      {
        index: true,
        element: <Navigate replace relative="route" to="dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <TabLayout title="Products" links={productLinks} />,
        children: [],
      },
      {
        path: "/settings",
        element: <SettingsWrapper />,
        children: [
          {
            path: "store",
            element: <div>Store</div>,
          },
          {
            path: "payout",
            element: <div>Payout</div>,
          },
          {
            path: "account-email",
            element: <div>Account Email</div>,
          },
          {
            path: "change-password",
            element: <div>Change Password</div>,
          },
        ],
      },
      {
        path: "*",
        element: <h1>404 👀</h1>,
      },
    ],
  },
];

export default routes;
