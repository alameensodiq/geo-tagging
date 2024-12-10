import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../assets/Details.png";
import { ReactComponent as CorporateLogo } from "../assets/Corporatelogo.svg";
// import {ReactComponent as Logo} from '../../assets/smalllogo.svg';
import AuthInputLabel from "../bits/AuthInputLabel";
import { LargeSignInButton } from "../bits/LargeSignInButton";
import AuthInputPassword from "../bits/AuthInputPassword";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  businessprojects,
  businessreport,
  businessreps,
  businesssub,
  clients
} from "../Routes";
import { CorporateSignUser } from "../Store/Apis/CorporateSignUser";

const CorporateLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [next, setNext] = useState(false);
  const [log, setLog] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    setLog(false);
  }, []);

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUser({
      ...user,
      [name]: value
    });
  };

  // const Authentication = () => {
  //   // const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(user?.password);
  //   // const validEmailFormat =
  //   //   /^[\w-]+(\.[\w-]+)*@(yahoo\.com|gmail\.com|[\w-]+\.(com|net))$/.test(
  //   //     user?.email
  //   //   );
  //   // setLog(true);
  //   // if (!hasSpecialCharacter) {
  //   //   console.log(user);
  //   //   toast.error("Password should contain at least one special character");
  //   // } else if (!user?.password) {
  //   //   toast.error("Please enter a password");
  //   // } else if (!validEmailFormat) {
  //   //   console.log(user);
  //   //   toast.error("Invalid email format");
  //   // } else {
  //   setLog(true);
  //   const { email, password } = user;
  //   dispatch(CorporateSignUser({ email, password }));
  //   // }
  // };

  const Authentication = () => {
    // Check if the email contains an "@"
    const { email, password } = user;

    if (!email.includes("@")) {
      // Display an error message or handle the invalid email case
      toast.error("Email must contain right email format");
      return;
    }

    setLog(true);
    dispatch(CorporateSignUser({ email, password }));
  };

  const { corporateuser, authenticating } = useSelector(
    (state) => state.corporateuser
  );
  console.log(corporateuser);
  if (
    corporateuser?.status &&
    !authenticating &&
    log &&
    (sessionStorage.getItem("role") === "USER" ||
      sessionStorage.getItem("role") === "SUB_USER") &&
    corporateuser?.data?.hasChangeDefaultPassword
  ) {
    const savedPermissions = JSON.parse(sessionStorage.getItem("permissions"));
    if (savedPermissions && savedPermissions.includes("DASHBOARD_VIEW")) {
      navigate(`${clients}`);
    } else if (
      savedPermissions &&
      (savedPermissions.includes("BUSINESS_REP_VIEW") ||
        savedPermissions.includes("BUSINESS_REP_CREATE") ||
        savedPermissions.includes("BUSINESS_REP_ACTIVATE") ||
        savedPermissions.includes("BUSINESS_REP_DEACTIVATE") ||
        savedPermissions.includes("BUSINESS_REP_EDIT"))
    ) {
      navigate(`${clients}/${businessreps}`);
    } else if (
      savedPermissions &&
      (savedPermissions.includes("PROJECT_VIEW") ||
        savedPermissions.includes("PROJECT_CREATE") ||
        savedPermissions.includes("PROJECT_LIST") ||
        savedPermissions.includes("PROJECT_EDIT"))
    ) {
      navigate(`${clients}/${businessprojects}`);
    } else if (
      savedPermissions &&
      (savedPermissions.includes("SUBSCRIPTION_VIEW") ||
        savedPermissions.includes("SUBSCRIPTION_LIST") ||
        savedPermissions.includes("PLAN_VIEW"))
    ) {
      navigate(`${clients}/${businesssub}`);
    } else if (savedPermissions && savedPermissions.includes("REPORT_VIEW")) {
      navigate(`${clients}/${businessreport}`);
    }
  } else if (
    corporateuser?.status &&
    !corporateuser?.data?.hasChangeDefaultPassword &&
    (sessionStorage.getItem("role") === "USER" ||
      sessionStorage.getItem("role") === "SUB_USER") &&
    !authenticating &&
    log
  ) {
    // navigate(`${clients}`);
    // navigate("/corporate-reset"); //password-reset
    navigate("/change-password"); //forgot
  }

  return (
    <Flex>
      <div className="firstdiv">
        <img src={Banner} alt="auth" className="container" />
      </div>
      <div className="seconddiv">
        <div className="first">
          <CorporateLogo style={{ cursor: "pointer" }} />
        </div>
        <div className="second">
          <span className="unique">Welcome back</span>
          <div className="welcome">
            <span className="statement">
              Welcome back! Please enter your details the
            </span>
            <span className="statement">
              autogenerated login details that was sent to your email
            </span>
          </div>
        </div>
        <div className="third">
          <AuthInputLabel
            onChange={(e) => Change(e)}
            name="email"
            logo
            value={user?.email}
            auth
            placeholder="Enter your email"
            label="Email"
          />
          <AuthInputPassword
            onChange={(e) => Change(e)}
            name="password"
            value={user?.password}
            auth
            placeholder="Enter your password"
            label="Password"
          />
        </div>
        <div className="statementer">
          <div className="colored">
            <Link
              style={{ textDecoration: "none", color: "#1A87D7" }}
              to={"/corporate-changepassword"}
            >
              Reset password?
            </Link>
          </div>
        </div>
        <div className="fourth">
          <LargeSignInButton
            onClick={() => Authentication()}
            big
            title={authenticating ? "Loading..." : "Proceed"}
            background
            color
          />
          {/* <span className="statement">
            Forgot your Password ?{" "}
            <span className="colored">
              <Link
                style={{ textDecoration: "none", color: "#1A87D7" }}
                to={() => navigate('/corporate-changepassword')}
              >
                Change your password
              </Link>
            </span>
          </span> */}
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  .firstdiv {
    width: 50%;
    height: 100vh;
    display: flex;
    .container {
      width: 100%;
      max-width: 100%;
    }
  }
  .seconddiv {
    /* background-color: red; */
    width: 50%;
    /* padding-inline: 30px; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding-top: 100px;
    .first {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .second {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-top: 20px;
      justify-content: center;
      align-items: center;
      .welcome {
        display: flex;
        flex-direction: column;
        gap: 14px;
        align-items: center;
        .statement {
          color: #8d9196;
          font-size: 14px;
          font-weight: 400;
          line-height: 5px;
          letter-spacing: 0em;
          text-align: left;
        }
      }
      .unique {
        font-size: 25px;
        font-weight: 600;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: left;
        color: #1e293b;
        gap: 5px;
        padding-bottom: 15px;
      }
    }
    .third {
      width: auto;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      padding-top: 60px;
    }
    .fourth {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding-top: 30px;
      .statement {
        color: #8d9196;
        font-size: 14px;
        font-weight: 400;
        line-height: 5px;
        letter-spacing: 0em;
        text-align: left;
        .colored {
          font-size: 14px;
          font-weight: 400;
          line-height: 5px;
          letter-spacing: 0em;
          text-align: left;
          color: #2563eb;
        }
      }
    }
    .statementer {
      display: flex;
      flex-direction: row;
      /* justify-items: flex-start; */
      color: #8d9196;
      font-size: 14px;
      font-weight: 400;
      line-height: 5px;
      letter-spacing: 0em;
      width: 500px;

      .colored {
        font-size: 14px;
        /* margin-left: 20%; */
        font-weight: 400;
        line-height: 5px;
        letter-spacing: 0em;
        text-align: left;
        color: #2563eb;
        display: flex;
        flex-direction: row;
        width: 200px;
        margin-left: 8%;
        /* justify-content: flex-start; */
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .firstdiv {
      display: none;
    }
    .seconddiv {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
`;

export default CorporateLogin;
