import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Notify } from "../../../src/assets/notify.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../../Store/Apis/GetUser";
// import roundlogo from '../assets/icons/roundlogo.png'

const Navbar = ({ title }) => {
  console.log(title);
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetUser());
    if (reload) {
      dispatch(GetUser());
      setReload(false);
    }
  }, [reload]);

  const { getuser, authenticatinggetuser } = useSelector(
    (state) => state.getuser
  );
  console.log(getuser?.data);

  return (
    <Flex>
      <div className="title">
        <span className="page">Pages/</span>
        <span>{title}</span>
      </div>
      <div className="row">
        <div className="first">
          <Notify />
        </div>
        <div className="third">
          <div className="picture"></div>
          <div className="thirdfirst">
            <span className="thirdsecond">
              {getuser?.data?.firstName} {getuser?.data?.lastName}
            </span>
            <span className="thirdthird">{getuser?.data?.roleName}</span>
          </div>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e2e8f0;
  align-items: center;
  height: 67px;
  position: sticky;
  position: relative;
  top: 0px;
  z-index: 1;
  width: 100%;
  background-color: #fff;
  padding: 10px;
  .title {
    padding-left: 30px;
    color: #1e1b39;
    font-size: 13px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    display: flex;
    flex-direction: "row";
    align-items: "center";
    gap: 5px;
    .page {
      color: #999999;
    }
  }
  .row {
    display: flex;
    .first {
      /* height: 40px;
        width: 40px; */
      display: flex;
      flex-direction: row;
      /* justify-content: center; */
      align-items: center;
      border-radius: 50%;
      /* background: #F5F5F5; */
      margin-right: 10px;
      /* margin-bottom: 10px; */
      cursor: pointer;

      svg {
        margin-left: 5px;
        margin-top: 2px;
      }
    }
    .second {
      width: 1px;
      height: 40px;
      background: #eeebeb;
      margin-top: 5px;
      margin-right: 15px;
    }
    .third {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      border-left: 1px solid #8b909a80;
      padding-left: 10px;
      padding-top: 5px;
      cursor: pointer;

      .picture {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: #333333;
        margin-right: 10px;
      }

      .thirdfirst {
        display: flex;
        flex-direction: column;
        width: 130px;
        gap: 4px;

        .thirdsecond {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 19px;
          color: #1e1b39;
        }

        .thirdthird {
          font-weight: 500;
          font-size: 10px;
          line-height: 15px;
          color: #8d9196;
        }
      }

      .thirdfirster {
        margin-right: 8%;
        // margin-left: 4%;
      }
    }
  }

  .notice {
    position: absolute;
  }
`;
export default Navbar;
