import { Routes, Route, Navigate } from "react-router-dom";

import { DashboardLayout } from "../layouts/DashboardLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { LoginPage } from "../../auth/pages/LoginPage";
import { DashboardPage } from "../../modules/dashboard/pages/DashboardPage";
import { PublicLeadPage } from "../../modules/lead/pages/PublicLeadPage";
function ModulePlaceholder({ title }: { title: string }) {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="text-sm text-muted-foreground">
        The {title} module is ready for development.
      </p>

      <div className="mt-6 rounded-xl border border-dashed p-10 text-center">
        <p className="text-sm text-muted-foreground">
          {title} content will appear here.
        </p>
      </div>
    </div>
  );
}

// function LoginPage() {
//   return <ModulePlaceholder title="Login" />;
// }

export function AppRoutes() {
  return (
    <Routes>
      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      {/* Public pages - no authentication required */}
      <Route path="/get-started" element={<PublicLeadPage />} />

      {/* Protected application */}
      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="lead" element={<ModulePlaceholder title="Lead" />} />
          <Route
            path="candidate"
            element={<ModulePlaceholder title="Candidate" />}
          />
          <Route
            path="finance"
            element={<ModulePlaceholder title="Finance" />}
          />
          <Route
            path="files"
            element={<ModulePlaceholder title="Files" />}
          />
          <Route
            path="others"
            element={<ModulePlaceholder title="Others" />}
          />
          <Route
            path="settings"
            element={<ModulePlaceholder title="Settings" />}
          />
        </Route>
      </Route>

      {/* Default route */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}