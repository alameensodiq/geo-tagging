import React from "react";
import styled from "styled-components";
import alert1 from "../../assets/alert1.png";

const SeventhMainComponent = () => {
  return (
    <Flex>
      <div className="content">
        <div className="content1">
          <span className="ribbon">''</span>
          <span className="tracking">
            <span className="state">
              "The real-time tracking and adjustment capabilities of this
            </span>
            <span className="state">
              platform are fantastic. We can tweak our campaigns on the
            </span>
            <span className="state">
              fly based on location data, ensuring our ads stay relevant
            </span>
            <span className="state">
              This has allowed us to quickly respond to shifts in consumer
            </span>
            <span className="state">
              behavior and significantly enhance our campaign
            </span>
            <span className="state">performance."</span>
            <div className="details">
              <span className="name">Mayowa Peters</span>
              <span className="title">RETAIL STORE MANAGER</span>
            </div>
          </span>
        </div>
        <div className="content1">
          <span className="ribbon2">''</span>
          <span className="tracking">
            <span className="state">
              "This platform has drastically improved our local
            </span>
            <span className="state">
              engagement. By focusing our tracking our representatives.
            </span>
            <span className="state">
              The location-specific promotions are particularly effective,
            </span>
            <span className="state">
              driving more customers to our branches. The analytics
            </span>
            <span className="state">
              provided are detailed and help us fine-tune our marketing
            </span>
            <span className="state">strategies for even better results."</span>
            <div className="details">
              <span className="name">Tolani Adams</span>
              <span className="title">MARKETING DIRECTOR</span>
            </div>
          </span>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;
  background: #000000;
  .content {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-inline: 40px;
    gap: 40px;
    .content1 {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;
      padding: 30px;
      align-items: center;
      height: auto;
      .ribbon {
        background: #f3827c;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 25px;
        font-size: 53.69px;
        font-weight: 500;
        line-height: 65.53px;
        letter-spacing: 0.02em;
        color: #000000;
        width: 50px;
        border-radius: 10px;
        top: 10px;
        height: 42px;
        position: absolute;
      }
      .ribbon2 {
        background: #1a87d7;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 25px;
        font-size: 53.69px;
        font-weight: 500;
        line-height: 65.53px;
        letter-spacing: 0.02em;
        color: #000000;
        width: 50px;
        border-radius: 10px;
        top: 10px;
        height: 42px;
        position: absolute;
      }
      .tracking {
        border-radius: 25px;
        background: #ffffff;
        opacity: 0px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        .state {
          font-size: 14px;
          font-weight: 500;
          line-height: 24.59px;
          text-align: left;
          color: #6e7782;
        }
        .details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          padding-top: 20px;
          .name {
            font-size: 16px;
            font-weight: 600;
            line-height: 21.78px;
            color: #2b3b5e;
          }
          .title {
            font-size: 14px;
            font-weight: 500;
            line-height: 19.36px;
            color: #27375b;
          }
        }
      }
    }
  }
`;

export default SeventhMainComponent;
