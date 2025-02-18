import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../assets/demo.png";
import { ReactComponent as Logo } from "../assets/Logo.svg";
// import {ReactComponent as Logo} from '../../assets/smalllogo.svg';
import AuthInputLabel from "../bits/AuthInputLabel";
import { LargeSignInButton } from "../bits/LargeSignInButton";
import AuthInputPassword from "../bits/AuthInputPassword";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { corporate, superadmins } from "../Routes";
import { CorporateSignUser } from "../Store/Apis/CorporateSignUser";
import DemoInputLabel from "../bits/DemoInputLabel";
import { DemoButton } from "../bits/DemoButton";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Demo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [next, setNext] = useState(false);
  const [log, setLog] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    businessRepCount: ""
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
    // navigate(`${superadmins}`)
    // setLog(true);
    // const { email, password } = user;
    // dispatch(CorporateSignUser({ email, password }));
  };

  //   const { corporateuser, authenticating } = useSelector(
  //     (state) => state.corporateuser
  //   );
  //   console.log(corporateuser);

  //   if (
  //     corporateuser?.status &&
  //     !authenticating &&
  //     log &&
  //     !corporateuser?.data?.hasChangeDefaultPassword
  //   ) {
  //     navigate(`${superadmins}`);
  //   }

  return (
    <Flex data-aos="fade-left">
      <div className="firstdiv">
        <img src={Banner} alt="auth" className="container" />
      </div>
      <div className="seconddiv">
        <span className="falcon">Get Started with De - Faucon</span>
        <div className="second">
          <div className="welcome">
            <span className="statement">
              Schedule a 30-minute product demo complete with an
            </span>
            <span className="statement">expert Q&A session.</span>
          </div>
        </div>
        <div className="third">
          <div className="wrapper">
            <DemoInputLabel
              onChange={(e) => Change(e)}
              name="firstName"
              value={user?.firstName}
              reduce
              placeholder="Enter your first name"
              label="First Name"
            />
            <DemoInputLabel
              onChange={(e) => Change(e)}
              name="lastName"
              value={user?.lastName}
              reduce
              placeholder="Enter your last name"
              label="Last Name"
            />
          </div>
          <div className="wrapper">
            <DemoInputLabel
              onChange={(e) => Change(e)}
              name="phoneNumber"
              value={user?.phoneNumber}
              reduce
              placeholder="Enter your phone number"
              label="Phone Number"
            />
            <DemoInputLabel
              onChange={(e) => Change(e)}
              name="email"
              value={user?.email}
              reduce
              placeholder="workemail@gmail.com"
              label="Work Email"
            />
          </div>
          {/* <DemoInputLabel
            onChange={(e) => Change(e)}
            name="email"
            value={user?.email}
            auth
            placeholder="Select your business industry"
            label="Business Industry"
          /> */}
          <DemoInputLabel
            onChange={(e) => Change(e)}
            name="businessRepCount"
            value={user?.businessRepCount}
            auth
            placeholder="Choose how many of your representative will use De - Faucon?"
            label="Number of Business Representative"
          />
        </div>
        <div className="containers">
          <span className="state">
            We respect your data. By submitting this form, you agree that we
            will contact you in
          </span>
          <span className="state">
            relation to our products and services, in accordance with our{" "}
            <span className="colored" onClick={() => navigate("/policy")}>
              privacy policy
            </span>
          </span>
          <span className="state">
            Corporate Manager?{" "}
            <span
              className="colored"
              onClick={() => navigate("/corporate-login")}
            >
              Login
            </span>{" "}
            up here instead
          </span>
        </div>

        <div className="fourth">
          {/* <DemoButton
            onClick={() => Authentication()}
            big
            title={"Book now"}
            background
            color
          /> */}
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
    padding-top: 90px;
    .falcon {
      font-size: 30px;
      font-weight: 600;
      line-height: 47.88px;
      letter-spacing: -0.02em;
      text-align: left;
      color: #1a87d7;
    }
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
        gap: 5px;
        align-items: center;
        .statement {
          font-size: 18px;
          font-weight: 500;
          line-height: 20.59px;
          text-align: center;
          color: #28385c;
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
      gap: 25px;
      padding-top: 60px;
      .wrapper {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
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
    .containers {
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      padding-top: 15px;
      text-align: center;
      .state {
        display: flex;
        flex-direction: row;
        gap: 3px;
        align-items: center;
        color: #999999;
        .colored {
          color: #1a87d7;
          cursor: pointer;
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

export default Demo;
