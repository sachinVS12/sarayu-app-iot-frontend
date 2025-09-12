import React from "react";
import Login from "../authentication/Login";
import { Route, Routes } from "react-router-dom";
import ContactSupport from "../authentication/ContactSupport";
import TagCreation from "../admin/components/TagCreation";
import AdminDashboard from "../admin/components/Dashboard";
import Dashboard from "../pages/dashboard/index";
import ProtectedRoute from "./ProtectedRoute";
import Logout from "./../authentication/Logout";
import Live from "../admin/components/Live";
import Devices from "./../admin/components/Devices";
import Reports from "../admin/components/Reports";
import Users from "../admin/components/Users";
import Mail from "../admin/components/Mail";
import CompanySelect from "./../admin/components/userRoutesCompany/CompanySelect";
import CreateSupervisorEmp from "../admin/components/userRoutesCompany/CreateSupervisorEmp";
import AllUsers from "../users/index";
import DigitalMeter from "../users/body/components/DigitalMeter";
import AllOperators from "../users/body/components/AllOperators";
import ChangePassword from "../users/body/components/ChangePassword";
import Graphs from "../users/body/components/Graphs";
import AllUserDashBoard from "../users/body/components/Dashboard";
import Favorite from "../users/body/components/Favorite";
import SingleUserDashBoard from "../users/body/components/SingleUserDashBoard";
import ViewGraph from "../users/body/components/ViewGraph";
import EditGraph from "../users/body/components/EditGraph";
import Report from "../users/body/components/Report";
import MapTopic from "../admin/components/DashboardComponents/MapTopic";
import DigitalAssignModel from "../admin/components/DashboardComponents/DigitalAssignModel";
import SingleDigitalMeterView from "../users/body/components/SingleDigitalMeterView";
import ConfigDevice from "../admin/components/ConfigDevice";
import LayoutView from "../users/body/components/LayoutView";
import LayoutAssign from "../admin/components/DashboardComponents/LayoutAssign";
import AllSupervisors from "../users/body/components/AllSupervisors";
import DualTopicDashboard from "../users/body/components/DualTopicDashboard";
import HistoryGraphPage from "../users/body/components/HistoryGraphPage";
import BackupDB from "../admin/components/BackupDB";
import GatewayStat from "../users/body/components/GatewayStat";
import ForgotPassword from "../authentication/ForgotPassword";
import ResetPassword from "../authentication/ResetPassword";

const RoutersDom = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:userType/:token" element={<ResetPassword />} />
      <Route path="/contactSupport" element={<ContactSupport />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            index
            path="/dashboard/dashboard"
            element={<AdminDashboard />}
          />

          <Route path="/dashboard/TagCreation" element={<TagCreation />} />
          <Route path="/dashboard/backupdb" element={<BackupDB />} />
          <Route path="/dashboard/ConfigDevice" element={<ConfigDevice />} />
          <Route path="/dashboard/devices" element={<Devices />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/users" element={<Users />}>
            <Route path="/dashboard/users" element={<CompanySelect />} />
            <Route
              path="/dashboard/users/supervisoremployee/:companyId"
              element={<CreateSupervisorEmp />}
            />
          </Route>
          <Route path="/dashboard/inbox" element={<Mail />} />
        </Route>
        <Route path="/_dashboard/maptopic/:id/:role" element={<MapTopic />} />
        <Route
          path="/_dashboard/assignlayout/:id/:role"
          element={<LayoutAssign />}
        />
        <Route
          path="/_dashboard/assignmetertotopic/:paramsTopic/:id/:role"
          element={<DigitalAssignModel />}
        />
        {/* users [manager,supervisor,employee] routes starts here  */}
        <Route path="/allusers" element={<AllUsers />}>
          <Route
            index
            path="/allusers/dashboard"
            element={<AllUserDashBoard />}
          />
          <Route path="/allusers/graphs" element={<Graphs />} />
          <Route path="/allusers/users" element={<AllOperators />} />
          <Route path="/allusers/supervisors" element={<AllSupervisors />} />
          <Route path="/allusers/favorites" element={<Favorite />} />
          <Route path="/allusers/gatewaystat" element={<GatewayStat />} />
          <Route path="/allusers/digitalmeter" element={<DigitalMeter />} />
          <Route
            path="/allusers/layoutview/:topic/:layout"
            element={<LayoutView />}
          />
          <Route
            path="/allusers/dualtopicdashboard"
            element={<DualTopicDashboard />}
          />
          <Route
            path="/allusers/singlehistorygraph/:topicparams"
            element={<HistoryGraphPage />}
          />
          <Route
            path="/allusers/singleuserdashboard/:id"
            element={<SingleUserDashBoard />}
          />
          <Route
            path="/allusers/viewsinglegraph/:topicparams"
            element={<ViewGraph />}
          />
          <Route
            path="/allusers/editsinglegraph/:topicparams"
            element={<EditGraph />}
          />
          <Route path="/allusers/report" element={<Report />} />
        </Route>
        {/* users [manager,supervisor,employee] routes ends here  */}
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default RoutersDom;
