import loadable from "@loadable/component";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as RRDRoutes,
} from "react-router-dom";

const Login = loadable(() => import("@/components/pages/Login"));
const Routes = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Router>
      <RRDRoutes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<h1>{t("page_not_found")}</h1>} path="*" />
      </RRDRoutes>
    </Router>
  );
};

export default Routes;
