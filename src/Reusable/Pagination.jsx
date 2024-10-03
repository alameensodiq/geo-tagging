import React, { useState } from "react";
import styled from "styled-components";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  set,
  currentPage,
  support
}) => {
  const [news, setNews] = useState(0);
  const [old, setOld] = useState(3);

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const PageNumbers = [...Array(totalPages)].map((_, i) => i + 1);

  const recent = PageNumbers.slice(news, old);

  const backward = () => {
    if (news > 0) {
      const newNews = Math.max(0, news - 3);
      setNews(newNews);
      setOld(newNews + 3 > totalPages ? totalPages : newNews + 3);
    }
  };

  const forward = () => {
    if (old < totalPages) {
      const newNews = Math.min(totalPages - 3, news + 3);
      setNews(newNews);
      setOld(newNews + 3 > totalPages ? totalPages : newNews + 3);
    }
  };

  return (
    <Flex support={support}>
      {totalPosts === 0 ? (
        ""
      ) : (
        <>
          <div className="show">
            <span className="titles">Showing</span>
            <div className="current">
              {(currentPage + 1) * postsPerPage > totalPosts
                ? totalPosts
                : (currentPage + 1) * postsPerPage}
            </div>
            <span className="total">of</span>
            <span className="total">{totalPosts}</span>
          </div>
          <ul className="arrange">
            <div className="prev" onClick={backward}>
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.00833 11.8274C6.64379 12.192 6.05274 12.192 5.6882 11.8274L1.02082 7.16005C0.656278 6.7955 0.656278 6.20446 1.02082 5.83991L5.6882 1.17254C6.05274 0.807996 6.64379 0.807996 7.00833 1.17254C7.37288 1.53708 7.37288 2.12813 7.00833 2.49267L3.00102 6.49998L7.00833 10.5073C7.37287 10.8718 7.37287 11.4629 7.00833 11.8274Z"
                  fill="#C4C4CA"
                />
              </svg>
            </div>
            {recent.map((page) => (
              <span
                key={page}
                className={`paging ${set === page ? "sums" : ""}`}
                onClick={() => paginate(page)}
              >
                {page}
              </span>
            ))}
            <div className="next" onClick={forward}>
              <svg
                width="7"
                height="13"
                viewBox="0 0 7 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.629366 1.17246C0.99391 0.807912 1.58495 0.807912 1.9495 1.17246L6.61687 5.83983C6.98142 6.20438 6.98142 6.79542 6.61687 7.15996L1.9495 11.8273C1.58495 12.1919 0.99391 12.1919 0.629366 11.8273C0.264821 11.4628 0.264821 10.8717 0.629366 10.5072L4.63667 6.4999L0.629366 2.49259C0.264821 2.12804 0.264821 1.537 0.629366 1.17246Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
          </ul>
        </>
      )}
    </Flex>
  );
};

const Flex = styled.div`
  background-color: white;
  display: flex;
  flex-direction: ${(props) => (props.support ? "column" : "row")};
  justify-content: ${(props) => (props.support ? "center" : "space-between")};
  align-items: ${(props) => (props.support ? "center" : "")};
  gap: ${(props) => (props.support ? "10px" : "")};
  padding: 10px 20px;

  .show {
    display: flex;
    align-items: center;
    gap: 5px;
    .titles {
      font-size: 15px;
      font-weight: 500;
      color: #8d9196;
    }
    .current {
      padding-left: 5px;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      height: 29px;
      width: 43px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .total {
      font-size: 15px;
      font-weight: 500;
      color: #8b909a;
    }
  }

  .arrange {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    .prev,
    .next {
      width: 24px;
      height: 24px;
      background: #f3f6ff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      cursor: pointer;
    }

    .paging {
      background: #f3f6ff;
      color: #8d9196;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 7px;
      border-radius: 6px;
      width: 29px;
      height: 29px;
    }

    .sums {
      background: #1a87d7;
      color: #f3f6ff;
    }
  }
`;

export default Pagination;
