import DashboardPage from "views/Dashboard/Dashboard.js";
import ComingSoon from "views/Dashboard/ComingSoon.js";
import Login from "components/Auth/Login";
import Confirmation from "components/Auth/ConfirmationLink";
import ResetPassword from "components/Auth/ResetPassword";
import Success from "components/Auth/Success";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/evaluation",
    name: "Evaluation",
    component: ComingSoon,
    layout: "/admin",
  },
  {
    path: "/loan",
    name: "Loan",
    component: ComingSoon,
    layout: "/admin",
  },
  {
    path: "/salary",
    name: "Salary",
    component: ComingSoon,
    layout: "/admin",
  },
  {
    path: "/leave-management",
    name: "Leave Management",
    component: ComingSoon,
    layout: "/admin",
  },
];

export const lowerRoutes = [
  {
    path: "/my-account",
    name: "My Account",
    component: ComingSoon,
    layout: "/admin",
  },
  {
    path: "/resources",
    name: "Resources",
    component: ComingSoon,
    layout: "/admin",
  },
  {
    path: "/recommendation",
    name: "Recommendation",
    component: ComingSoon,
    layout: "/admin",
  },
];

export const authRoutes = [
  {
    path: "/login",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/confirmation",
    component: Confirmation,
    layout: "/auth",
  },
  {
    path: "/reset-password",
    component: ResetPassword,
    layout: "/auth",
  },
  {
    path: "/success",
    component: Success,
    layout: "/auth",
  },
];
