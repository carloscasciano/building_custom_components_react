import styled from "styled-components";

export const MockSiteMainSkeleton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MockHeaderSkeleton = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #eeeeee;
  border-radius: 3px;
  box-shadow: 0px 3px 5px #cccccc;
  margin: -10px -5px 30px -5px;

  @media (max-width: 768px) {
    display: none;
  }

  p {
    font-family: Helvetica, sans-serif;
    color: "#444444";
    font-weight: 500;
    margin: 24px 24px 24px 24px;
  }
`;

export const MockDataAreaSkeleton = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

export const MockSideBars = styled.div`
  width: 200px;

  @media (max-width: 768px) {
    visibility: hidden;
  }
`;
