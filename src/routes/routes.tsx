import { Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import MobileSideNav from "@/components/MobileSideNav";
import ProfileDropdown from "@/components/ProfileDropdown";

import DashboardSideNav from "@/components/dashboardSideNav";
import Dashboard from "@/view/Dashboard";
import Transactions from "@/view/Transactions";
import { RouteObject } from "react-router-dom";
import Login from "@/view/Login";
import CreateAccount from "@/view/CreateAccount";
import { AppThemeToggle } from "@/components/ThemeSelector";
import TransactionDetails from "@/view/TransactionDetails";
import TabLayout from "@/components/ProductLayout";
import Products from "@/view/Products";
import PostProduct from "@/view/PostProduct";
import { productLinks } from "@/constants/tabLinks";
import SettingsWrapper from "@/components/SettingsWrapper";
import Profile from "@/view/Profile";

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
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
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: "post",
            element: <PostProduct />,
          },
        ],
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/transactions/:id",
        element: <TransactionDetails />,
      },
      {
        path: "/settings",
        element: <SettingsWrapper />,
        children: [
          {
            path: "",
            element: <Profile />,
          },
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
