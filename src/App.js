import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Reusable/Login";
import ChangePassword from "./Reusable/ChangePassword";
import CorporateLogin from "./Reusable/CorporateLogin";
import CorporateChangePassword from "./Reusable/CorporateChangePassword";
import {
  accounting,
  audit,
  businessaccounting,
  businessprojects,
  businessreport,
  businessreps,
  businesssub,
  businessusers,
  clients,
  corporate,
  superadmins,
  supersub,
  superuser,
  superusers
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
import ClientSubscription from "./MainComponents/AdminClients/ClientSubscription";
import ClientAdminReports from "./MainComponents/AdminClients/ClientAdminReports";
import ClientAdminNormalReport from "./MainComponents/AdminClients/ClientAdminNormalReport";
import ClientAdminAbnormalReport from "./MainComponents/AdminClients/ClientAdminAbnormalReport";
import ClientAdminEmoji from "./MainComponents/AdminClients/ClientAdminEmoji";
import SuperAdminDashboardIndex from "./MainComponents/SuperAdmin/SuperAdminDashboardIndex";
import SuperAdminCorporate from "./MainComponents/SuperAdmin/SuperAdminCorporate";
import SuperAdminDashboard from "./MainComponents/SuperAdmin/SuperAdminDashboard";
import SuperAdminCorporateDetails from "./MainComponents/SuperAdmin/SuperAdminCorporateDetails";
import SuperAdminAudit from "./MainComponents/SuperAdmin/SuperAdminAudit";
import SuperAdminUsermanagement from "./MainComponents/SuperAdmin/SuperAdminUsermanagement";
import SuperAdminUserDetails from "./MainComponents/SuperAdmin/SuperAdminUserDetails";
import SuperAdminAccount from "./MainComponents/SuperAdmin/SuperAdminAccount";
import SuperAdminSubscription from "./MainComponents/SuperAdmin/SuperAdminSubscription";
import ClientAdminAccount from "./MainComponents/AdminClients/ClientAdminAccount";
import ClientUsermanagementDetails from "./MainComponents/AdminClients/ClientUsermanagementDetails";
import React from "react";
import { Loader } from "./Loader.jsx";

const LazyIndexPage = React.lazy(() =>
  import("./MainComponents/LandingPage/MainPage.jsx")
);

const LazyIndexProductPage = React.lazy(() =>
  import("./MainComponents/LandingPage/ProductMainPage.jsx")
);

const LazyIndexRealTimeProductPage = React.lazy(() =>
  import("./MainComponents/LandingPage/ProductSecondMainPage.jsx")
);

const LazyIndexAdvancedProductPage = React.lazy(() =>
  import("./MainComponents/LandingPage/ProductAdvancedMainPage.jsx")
);

const LazyIndexCampaignProductPage = React.lazy(() =>
  import("./MainComponents/LandingPage/CampaignProductMainPage.jsx")
);

const LazyIndexIndustryMainPage = React.lazy(() =>
  import("./MainComponents/LandingPage/IndustryMainPage.jsx")
);

const LazyIndexHealthCareMainPage = React.lazy(() =>
  import("./MainComponents/LandingPage/HealthCareMainPage.jsx")
);
const LazyIndexEducationMainPage = React.lazy(() =>
  import("./MainComponents/LandingPage/EducationMainPage.jsx")
);
const LazyIndexSecurityMainPage = React.lazy(() =>
  import("./MainComponents/LandingPage/SecurityMainPage.jsx")
);

const LazyIndexLastIndustryMainPage = React.lazy(() =>
  import("./MainComponents/LandingPage/LastIndustryMainPage.jsx")
);

const LazyIndexCustomerResourceMainPage = React.lazy(() =>
  import("./MainComponents/LandingPage/ResourcesMainPage.jsx")
);

const LazyIndexAboutMainPage = React.lazy(() =>
  import("./MainComponents/LandingPage/AboutMainPage.jsx")
);

const LazyIndexPricingMainPage = React.lazy(() =>
  import("./MainComponents/LandingPage/PricingMainPage.jsx")
);
const LazyIndexTerms = React.lazy(() =>
  import("./MainComponents/LandingPage/TermsandCondition.jsx")
);

const LazyIndexPolicy = React.lazy(() =>
  import("./MainComponents/LandingPage/PrivacyPolicy.jsx")
);

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexPage />
            </React.Suspense>
          }
        />
        <Route
          path="/main-products"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexProductPage />
            </React.Suspense>
          }
        />
        <Route
          path="/realtime-products"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexRealTimeProductPage />
            </React.Suspense>
          }
        />
        <Route
          path="/advanced-products"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexAdvancedProductPage />
            </React.Suspense>
          }
        />
        <Route
          path="/campaign-products"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexCampaignProductPage />
            </React.Suspense>
          }
        />
        <Route
          path="/main-industries"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexIndustryMainPage />
            </React.Suspense>
          }
        />

        <Route
          path="/health-industries"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexHealthCareMainPage />
            </React.Suspense>
          }
        />
        <Route
          path="/education-industries"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexEducationMainPage />
            </React.Suspense>
          }
        />
        <Route
          path="/security-industries"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexSecurityMainPage />
            </React.Suspense>
          }
        />

        <Route
          path="/detailindustry-industries"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexLastIndustryMainPage />
            </React.Suspense>
          }
        />

        <Route
          path="/customer-resources"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexCustomerResourceMainPage />
            </React.Suspense>
          }
        />

        <Route
          path="/about-resources"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexAboutMainPage />
            </React.Suspense>
          }
        />

        <Route
          path="/pricing"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexPricingMainPage />
            </React.Suspense>
          }
        />

        <Route
          path="/terms"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexTerms />
            </React.Suspense>
          }
        />
        <Route
          path="/policy"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyIndexPolicy />
            </React.Suspense>
          }
        />

        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/super-login" element={<Login />} />
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

          <Route
            path={`${businessusers}/:id`}
            element={<ClientUsermanagementDetails title="User management" />}
          />

          <Route
            path={`${businesssub}`}
            element={<ClientSubscription title="Subscriptions" />}
          />

          <Route
            path={`${businessreport}`}
            element={<ClientAdminReports title="Reports" />}
          />

          <Route
            path={`${businessreport}/normal`}
            element={<ClientAdminNormalReport title="Reports" />}
          />

          <Route
            path={`${businessreport}/abnormal`}
            element={<ClientAdminAbnormalReport title="Reports" />}
          />

          <Route
            path={`${businessreport}/emoji`}
            element={<ClientAdminEmoji title="Reports" />}
          />

          <Route
            path={businessaccounting}
            element={<ClientAdminAccount title="My Account" />}
          />
          <Route />
        </Route>
        <Route path={superadmins} element={<SuperAdminDashboardIndex />}>
          <Route index element={<SuperAdminDashboard title="Dashboard" />} />
          <Route
            path={corporate}
            element={<SuperAdminCorporate title="Corporates" />}
          />
          <Route
            path={`${corporate}/:id`}
            element={<SuperAdminCorporateDetails title="Corporates" />}
          />
          <Route
            path={audit}
            element={<SuperAdminAudit title="Audit Trails" />}
          />
          <Route
            path={superusers}
            element={<SuperAdminUsermanagement title="Sub Admin" />}
          />

          <Route
            path={`${superusers}/:id`}
            element={<SuperAdminUserDetails title="Sub Admin" />}
          />

          <Route
            path={accounting}
            element={<SuperAdminAccount title="My Account" />}
          />

          <Route
            path={supersub}
            element={<SuperAdminSubscription title="Subscriptions" />}
          />

          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
