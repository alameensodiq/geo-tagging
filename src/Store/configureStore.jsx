import { configureStore } from "@reduxjs/toolkit";
import { CorporateSignUserSlice } from "./Reducers/CorporateSignUser";
import { CorporateForgotPasswordSlice } from "./Reducers/CorporateForgotPassword";
import { CorporateBusinessRepSlice } from "./Reducers/CorporateBusinessRep";
import { CorporateBusinessRepDetailsSlice } from "./Reducers/CorporateBusinessRepDetails";
import { CreateBusinessRepCorporateSlice } from "./Reducers/CreateBusinessRepCorporate";
import { CorporateResetPasswordSlice } from "./Reducers/CorporateResetPassword";
import { CorporateProjectSlice } from "./Reducers/CorporateProject";
import { GetUserSlice } from "./Reducers/GetUser";
import { ChangePasswordSlice } from "./Reducers/ChangePassword";
import { SuperCorporateSlice } from "./Reducers/SuperCorporate";
import { SuperCorporateDetailsSlice } from "./Reducers/SuperCorporateDetails";
import { SuperCorporateDetailsProjectSlice } from "./Reducers/SuperCorporateDetailsProject";
import { SuperSubsSlice } from "./Reducers/SuperSub";
import { CorporateUserSlice } from "./Reducers/CorporateUser";
import { AllpermissionSlice } from "./Reducers/AllPermission";
import { AddTeamSlice } from "./Reducers/AddTeam";
import { SuperUserDetailsSlice } from "./Reducers/SuperUserDetails";
import { EditTeamSlice } from "./Reducers/EditTeamDetails";
import { AdminUserSlice } from "./Reducers/AdminUser";
import { PermissiondetailsSlice } from "./Reducers/Permissiondetails";
import { AdminEditteamSlice } from "./Reducers/AdminEditteam";
import { SuperAddTeamSlice } from "./Reducers/SuperAddTeam";
import { AdminPermissionsSlice } from "./Reducers/AdminPermissions";
import { AddSubSlice } from "./Reducers/AddSub";
import { AddProjectSlice } from "./Reducers/AddProject";
import { AssignedRepSlice } from "./Reducers/Assigned";
import { AddCorpSlice } from "./Reducers/AddCorp";
import { TrailsSlice } from "./Reducers/Trails";
import { DashboardSlice } from "./Reducers/Dashboard";
import { CorporateDashboardSlice } from "./Reducers/CorporateDashboard";
import { EditDetailsSlice } from "./Reducers/EditUserDetails";
import { SubHistorySlice } from "./Reducers/SubHistory";
import { ProjectStatusSlice } from "./Reducers/ProjectStatus";
import { ProjectDetailsSlice } from "./Reducers/ProjectDetails";
import { ClientReportSlice } from "./Reducers/ClientReport";
import { EditAdminDetailsSlice } from "./Reducers/EditAdminDetails";
import { EditSubSlice } from "./Reducers/EditSub";
import { EditFreeTrialSlice } from "./Reducers/EditFreeTrial";
import { SubscribersSlice } from "./Reducers/Subscribers";
import { PaymentSlice } from "./Reducers/Payment";
import { ComplianceSlice } from "./Reducers/Compliance";
import { SuperFreeConversionSlice } from "./Reducers/SuperFreeConversion";
import { SubPunctualSlice } from "./Reducers/SubPunctual";
import { SubComplianceSlice } from "./Reducers/SubCompliance";
import { SubProjectSlice } from "./Reducers/SubProject";
import { SuperAnalysisSlice } from "./Reducers/SuperAnalysis";
import { CustomSubSlice } from "./Reducers/CustomSub";
import { CorporatePunctualSlice } from "./Reducers/CorporatePunctual";
import { CorporateComplianceSlice } from "./Reducers/CorporateCompliance";
import { YearlyCompSlice } from "./Reducers/Yearly";
import { CompletePaymentSlice } from "./Reducers/CompletePayment";
import { ProjectRemoveSlice } from "./Reducers/ProjectRemove";
import { EditProjectSlice } from "./Reducers/EditProject";
import { RemarksSlice } from "./Reducers/Remarks";
import { SuperSubCountSlice } from "./Reducers/SuperSubCount";
import { AddLocationActiveProjectSlice } from "./Reducers/AddLocationActiveProject";
import { AddRepActiveProjectSlice } from "./Reducers/AddRepActiveProject";
import { AddActiveRepSlice } from "./Reducers/AddActiveRep";

export default configureStore({
  reducer: {
    corporateuser: CorporateSignUserSlice?.reducer,
    forgotpassword: CorporateForgotPasswordSlice?.reducer,
    businessrep: CorporateBusinessRepSlice?.reducer,
    businessrepdetails: CorporateBusinessRepDetailsSlice?.reducer,
    createbus: CreateBusinessRepCorporateSlice?.reducer,
    resetpassword: CorporateResetPasswordSlice?.reducer,
    project: CorporateProjectSlice?.reducer,
    getuser: GetUserSlice?.reducer,
    changepass: ChangePasswordSlice?.reducer,
    supercorporate: SuperCorporateSlice?.reducer,
    supercorporatedetails: SuperCorporateDetailsSlice?.reducer,
    supercorporatedetailsproject: SuperCorporateDetailsProjectSlice?.reducer,
    supersub: SuperSubsSlice?.reducer,
    userteam: CorporateUserSlice?.reducer,
    allpermission: AllpermissionSlice?.reducer,
    addteam: AddTeamSlice?.reducer,
    superuserdetails: SuperUserDetailsSlice?.reducer,
    editteamdetailsy: EditTeamSlice?.reducer,
    adminuserteam: AdminUserSlice?.reducer,
    permissiondetails: PermissiondetailsSlice?.reducer,
    admineditteam: AdminEditteamSlice?.reducer,
    superaddteam: SuperAddTeamSlice?.reducer,
    adminpermission: AdminPermissionsSlice?.reducer,
    addsub: AddSubSlice?.reducer,
    addproject: AddProjectSlice?.reducer,
    assigned: AssignedRepSlice?.reducer,
    addcorping: AddCorpSlice?.reducer,
    trails: TrailsSlice?.reducer,
    dashboard: DashboardSlice?.reducer,
    corporatedashboard: CorporateDashboardSlice?.reducer,
    editdetails: EditDetailsSlice?.reducer,
    subhistory: SubHistorySlice?.reducer,
    projectstatus: ProjectStatusSlice?.reducer,
    projectdetails: ProjectDetailsSlice?.reducer,
    clientreport: ClientReportSlice?.reducer,
    editadmindetails: EditAdminDetailsSlice?.reducer,
    editsub: EditSubSlice?.reducer,
    editfreetrial: EditFreeTrialSlice?.reducer,
    subscribers: SubscribersSlice?.reducer,
    payment: PaymentSlice?.reducer,
    compliance: ComplianceSlice?.reducer,
    freeconversion: SuperFreeConversionSlice?.reducer,
    supersubscount: SuperSubCountSlice?.reducer,
    subpunctual: SubPunctualSlice?.reducer,
    subcompliance: SubComplianceSlice?.reducer,
    subproject: SubProjectSlice?.reducer,
    superanalysis: SuperAnalysisSlice?.reducer,
    customsub: CustomSubSlice?.reducer,
    corporatepunctual: CorporatePunctualSlice?.reducer,
    corporatecompliance: CorporateComplianceSlice?.reducer,
    yearly: YearlyCompSlice?.reducer,
    completepayment: CompletePaymentSlice?.reducer,
    removerepproject: ProjectRemoveSlice?.reducer,
    editproject: EditProjectSlice?.reducer,
    remarks: RemarksSlice?.reducer,
    addlocationactiveproject: AddLocationActiveProjectSlice?.reducer,
    addrepactiveproject: AddRepActiveProjectSlice?.reducer,
    addactiverep: AddActiveRepSlice?.reducer
  }
});
