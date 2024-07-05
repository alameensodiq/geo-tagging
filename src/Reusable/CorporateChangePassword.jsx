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
import { CorporateForgotPassword } from "../Store/Apis/CorporateForgotPassword";

const CorporateChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [next, setNext] = useState(false);
  const [log, setLog] = useState(false);
  const [user, setUser] = useState({
    email: "",
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


  const Authentication = () => {
    setLog(true);
    const { email} = user;
    dispatch(CorporateForgotPassword({ email}));
  };

  const { forgotpassword, authenticatingforgotpassword } = useSelector((state) => state.forgotpassword);
  if (forgotpassword?.status && !authenticatingforgotpassword && log) {
    navigate(`/corporate-login`);
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
          <span className="unique">Forgot Password</span>
          <div className="welcome">
            <span className="statement">
              Change your auto generated password to your personal
            </span>
            <span className="statement">password, then proceed to login</span>
          </div>
        </div>
        <div className="third">
          <AuthInputLabel
            onChange={(e) => Change(e)}
            name="email"
            value={user?.email}
            auth
            placeholder="Enter your email"
            label="Email"
          />
          {/* <AuthInputPassword
            onChange={(e) => Change(e)}
            name="password"
            value={user?.password}
            auth
            placeholder="Enter your password"
            label="Confirm New Password"
          /> */}
        </div>
        <div className="fourth">
          <LargeSignInButton
            onClick={() => Authentication()}
            big
            title={authenticatingforgotpassword ? "Loading..."  : "Forgot Password"}
            background
            color
          />
          {/* <span className="statement">
            Don't have an account ?{" "}
            <span className="colored">
              <Link
                style={{ textDecoration: "none", color: "#9932CC" }}
                to={"#"}
              >
                Get started for free
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

export default CorporateChangePassword;
