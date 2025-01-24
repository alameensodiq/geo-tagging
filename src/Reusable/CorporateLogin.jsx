import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../assets/Details.png";
import { ReactComponent as CorporateLogo } from "../assets/Corporatelogo.svg";
import { ReactComponent as NoticeLogo } from "../assets/notice.svg";
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
  const [show, setShow] = useState(false);
  const [notify, setnotify] = useState(false);
  const [checking, setchecking] = useState(false);
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
      {!show ? (
        <div className="seconddiv">
          {notify && (
            <div
              style={{
                fontSize: "12px",
                display: "flex",
                flexDirection: "row",
                width: "45%",
                color: "black",
                background: "#E4F2FB",
                padding: "10px",
                borderColor: "#69BCF2",
                gap: "5px"
              }}
              onClick={() => setnotify(false)}
            >
              <NoticeLogo />
              <span>
                You must accept the Terms and Conditions to proceed with signing
                in.
              </span>
            </div>
          )}
          <div className="first">
            <CorporateLogo
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
              paddingTop: "10px",
              paddingRight: "60px"
            }}
            className="terms"
          >
            <input
              onChange={() => setchecking(!checking)}
              type="checkbox"
              checked={checking}
              style={{ height: "15px", width: "15px" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyItems: "flex-start",
                gap: "2px"
              }}
            >
              <span style={{ fontSize: "15px" }}>I agree with De-faucon</span>
              <span
                onClick={() => setShow(true)}
                style={{
                  textDecoration: "underline",
                  color: "#1A87D7",
                  cursor: "pointer"
                }}
              >
                Terms and Conditions
              </span>
            </div>
          </div>
          <div className="fourth">
            <LargeSignInButton
              onClick={() => {
                if (checking) {
                  Authentication();
                } else {
                  setnotify(true);
                }
              }}
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
      ) : (
        <div className="policy">
          <div className="conditions">
            <span
              style={{
                font: "bold",
                fontSize: "14px",
                color: "black",
                fontWeight: "600"
              }}
            >
              Terms and Conditions
            </span>
            <span className="terms">
              Welcome to De-faucon a platform designed to streamline and
              optimize the way you manage your projects. Please read these terms
              and conditions carefully before using our services. By accessing
              or using our app, you agree to comply with and be bound by the
              following Terms and Conditions:
            </span>
            <span className="terms">
              1.Acceptance of Terms: By ticking the “checkbox " on the sign in
              screen, you acknowledge that you have read, understood, and agree
              to be bound by these Terms and Conditions, along with our Privacy
              Policy. If you do not agree with these terms, do not use the app.
            </span>
            <span className="terms">
              2.Account Responsibility: You are responsible for maintaining the
              confidentiality of your account credentials and ensuring that your
              use of the app is in compliance with these terms. You must notify
              us immediately if you believe your account has been compromised.
            </span>
            <span className="terms">
              3.User Conduct: You agree to use the app in accordance with all
              applicable laws and regulations. You are prohibited from using the
              app for any unlawful or prohibited purposes, including but not
              limited to disrupting service, transmitting malware, or violating
              intellectual property rights.
            </span>
            <span className="terms">
              4.Data Privacy: We value your privacy. Our Privacy Policy explains
              how we collect, store, and use your data. By agreeing to these
              terms, you consent to our collection and processing of your data
              as described in the Privacy Policy.
            </span>
            <span className="terms">
              5.Changes to Terms: We reserve the right to update, modify, or
              change these Terms and Conditions at any time. Any changes will be
              posted in this section. Your continued use of the app after such
              changes indicates your acceptance of the updated terms.
            </span>
            <span className="terms">
              6.Termination: We may suspend or terminate your access to the app
              at our discretion, particularly if you breach any terms in this
              agreement
            </span>
            <span className="terms">
              7.Limitation of Liability: The app and its contents are provided
              "as is." We do not warrant that the app will meet your specific
              requirements or that it will be uninterrupted, error-free, or free
              from viruses.
            </span>
            <span className="terms">
              8.Intellectual Property: All intellectual property rights in the
              app, including trademarks, logos, and content, are owned by
              De-faucon or its licensors. You may not use, copy, or distribute
              any of the app’s intellectual property without our express
              permission.
            </span>
            <span className="terms">
              9.Governing Law: These Terms and Conditions will be governed by
              and construed in accordance with the laws of [Jurisdiction]. Any
              disputes related to these terms will be resolved in the courts of
              [Jurisdiction].
            </span>
            <span className="terms">
              10. Contact Us: If you have any questions or concerns regarding
              these Terms and Conditions, please contact our support.
            </span>
          </div>
          <div className="exit">
            <button
              style={{
                height: "30px",
                width: "50px",
                background: "#1A87D7",
                borderRadius: "10px",
                border: "1px",
                color: "white",
                cursor: "pointer"
              }}
              onClick={() => setShow(false)}
            >
              Exit
            </button>
          </div>
        </div>
      )}
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

  .policy {
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 50%;
    .conditions {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-block: 40px;
      padding-inline: 50px;
      gap: 5px;
      .terms {
        font-size: 14px;
      }
    }

    .exit {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
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

    .terms {
      font-size: "10px";
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

  @media only screen and (max-width: 1100px) {
    .policy {
      display: flex;
      flex-direction: column;
      gap: 2px;
      width: 50%;
      .conditions {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-block: 40px;
        padding-inline: 50px;
        gap: 1px;
        .terms {
          font-size: 10px;
        }
      }

      .exit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
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

    .policy {
      display: flex;
      flex-direction: column;
      width: 100%;
      .conditions {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-block: 40px;
        padding-inline: 50px;
        gap: 1px;

        .terms {
          font-size: 10px;
        }
      }
      .exit {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        width: 100%;
      }
    }
  }
`;

export default CorporateLogin;
