import { configureStore } from '@reduxjs/toolkit';
import { CorporateSignUserSlice } from './Reducers/CorporateSignUser';
import { CorporateForgotPasswordSlice } from './Reducers/CorporateForgotPassword';
import { CorporateBusinessRepSlice } from './Reducers/CorporateBusinessRep';
import { CorporateBusinessRepDetailsSlice } from './Reducers/CorporateBusinessRepDetails';
import { CreateBusinessRepCorporateSlice } from './Reducers/CreateBusinessRepCorporate';
import { CorporateResetPasswordSlice } from './Reducers/CorporateResetPassword';
import { CorporateProjectSlice } from './Reducers/CorporateProject';
import { GetUserSlice } from './Reducers/GetUser';
import { ChangePasswordSlice } from './Reducers/ChangePassword';





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
        changepass: ChangePasswordSlice?.reducer  
    }
});