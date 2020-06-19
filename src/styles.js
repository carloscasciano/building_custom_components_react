import styled from "styled-components";

const baseStyleInfo = {
  baseFont: "Roboto",
  baseTextColor: "#444444",
};

export const BaseComponentSkeleton = styled.div`
  /* structural */
  margin: 10px;

  /* size */
  min-height: 300px;
  max-height: 300px;
  min-width: 345px;
  max-width: 345px;

  /* paper effect */
  border-radius: 3px;
  box-shadow: 0px 3px 5px #cccccc;

  /* Column Effect*/
  display: flex;
  flex-direction: column;
`;
/* USER AREA */

export const UserAreaSkeleton = styled.div`
  height: 30px;
  display: flex;
  justify-content: flex-end;
  float: right;
  clear: right;

  img {
    width: auto;
    height: auto;
    margin-right: 6px;
    margin-top: 6px;
  }
`;

/* IMAGE AREA */

export const ShoeImageSkeleton = styled.div`
  height: 210px;
  width: 345px;
  display: flex;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 210px;
    width: 345px;
    object-fit: contain;
  }
`;

/* INFORMATION AREA */

export const InformationSkeleton = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.up ? "flex-end" : "flex-start")};

  p {
    font-family: ${baseStyleInfo.baseFont}, sans-serif;
    color: ${baseStyleInfo.baseTextColor};
    font-weight: ${(props) => (props.bold ? 600 : 400)};
    margin: 0 12px 0 12px;
  }
`;

/* Cart: */

export const CartSkeleton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 15px;
    height: 15px;
    margin: 0 12px 0 0;

    &:hover {
      width: 18px;
      height: 18px;
    }
  }

  p {
    font-family: ${baseStyleInfo.baseFont}, sans-serif;
    color: ${baseStyleInfo.baseTextColor};
    font-size: 20;
    margin: 0 6px 0 0;
  }
`;
