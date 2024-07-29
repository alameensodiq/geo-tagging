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
    addsub: AddSubSlice?.reducer
  }
});
