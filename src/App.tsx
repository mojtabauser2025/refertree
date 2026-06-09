import { Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import UsersPage from "@/pages/UsersPage";
import DashboardPage from "@/pages/DashboardPage";
import { ROUTES } from "@/constants/routes";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path={ROUTES.HOME} element={<DashboardPage />} />
        <Route path={ROUTES.USERS} element={<UsersPage />} />
      </Routes>
    </AppLayout>
  );
}