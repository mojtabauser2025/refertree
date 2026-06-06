import { Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import UsersPage from "@/pages/UsersPage";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<div>HOME</div>} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </AppLayout>
  );
}