import styled from "styled-components"

const baseStyleInfo = {
    baseFont : "Roboto",
    baseTextColor: "#444444"
}


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
    box-shadow:0px 3px 5px #CCCCCC;

/* Column Effect*/
    display:flex;
    flex-direction: column;
`

/* USER AREA */

export const UserAreaSkeleton = styled.div`
    height: 30px;
    background-color: pink;
`

/* IMAGE AREA */

export const ShoeImageSkeleton = styled.div`
    height: 210px;
    background-color: blue;

`

/* INFORMATION AREA */

export const InformationAlphaSkeleton = styled.div`
    height: 30px;
    background-color: green;
`

export const InformationBetaSkeleton = styled.div`
    height: 30px;
    background-color: orange;
`



export const CartSkeleton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    img{
        width: 15px;
        height: 15px;
        margin: 0 12px 0 0;

        &:hover {
            width: 18px;
            height: 18px;
          }
    }

    p{
        font-family: ${baseStyleInfo.baseFont}, sans-serif;
        color: ${baseStyleInfo.baseTextColor}; 
        font-size: 20;   
        margin: 0 6px 0 0; 
    }
`
