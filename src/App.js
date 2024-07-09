import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Reusable/Login";
import ChangePassword from "./Reusable/ChangePassword";
import CorporateLogin from "./Reusable/CorporateLogin";
import CorporateChangePassword from "./Reusable/CorporateChangePassword";
import {
  businessprojects,
  businessreps,
  businessusers,
  clients
} from "./Routes";
import ClientAdminDashboardIndex from "./MainComponents/AdminClients/ClentAdminDashboardIndex";
import ClientAdminDashboard from "./MainComponents/AdminClients/ClientAdminDashboard";
import ClientAdminBusinessReps from "./MainComponents/AdminClients/ClientAdminBusinessReps";
import ClientAdminBusinessDetails from "./MainComponents/AdminClients/ClientAdminBusinessDetails";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CorporateResetPassword from "./Reusable/CorporateResetPassword";
import ClientAdminProject from "./MainComponents/AdminClients/ClientAdminProject";
import ClientProjectDetails from "./MainComponents/AdminClients/ClientProjectDetails";
import ClientUsermanagement from "./MainComponents/AdminClients/ClientUsermanagement";
import ClientLocationDetails from "./MainComponents/AdminClients/ClientLocationDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/corporate-login" element={<CorporateLogin />} />
        <Route path="/corporate-reset" element={<CorporateResetPassword />} />
        <Route
          path="/corporate-changepassword"
          element={<CorporateChangePassword />}
        />
        <Route path={clients} element={<ClientAdminDashboardIndex />}>
          <Route index element={<ClientAdminDashboard title="Dashboard" />} />
          <Route
            path={businessreps}
            element={<ClientAdminBusinessReps title="Business Reps" />}
          />
          <Route
            path={`${businessreps}/:id`}
            element={<ClientAdminBusinessDetails title="Business Reps" />}
          />
          <Route
            path={`${businessprojects}`}
            element={<ClientAdminProject title="Projects" />}
          />
          <Route
            path={`${businessprojects}/:id`}
            element={<ClientProjectDetails title="Projects" />}
          />

          <Route
            path={`${businessprojects}/location/:location`}
            element={<ClientLocationDetails title="Projects" />}
          />

          <Route
            path={`${businessusers}`}
            element={<ClientUsermanagement title="User management" />}
          />
          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
