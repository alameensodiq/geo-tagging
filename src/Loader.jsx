import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

export const Loader = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Flex>
      <div className="container" data-aos="fade-right">
        <div class="loader"></div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    .loader {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 200px;
      aspect-ratio: 1;
      border-radius: 50%;
      background: radial-gradient(farthest-side, #28385c 94%, #0000) top/8px 8px
          no-repeat,
        conic-gradient(#0000 30%, #28385c);
      -webkit-mask: radial-gradient(
        farthest-side,
        #0000 calc(100% - 8px),
        #000 0
      );
      animation: l13 1s infinite linear;
    }
    @keyframes l13 {
      100% {
        transform: rotate(1turn);
      }
    }
  }
`;
