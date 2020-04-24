import styled from "styled-components"

export const BaseComponentSkeleton = styled.div`
/* temporary */
    margin: 100px;
    font-family: Neue Helvetica;


/* size */
    min-height: 300px;
    max-height: 300px;
    min-width: 345px;
    max-width: 345px;

/* paper effect */
    border-radius: 5px;
    box-shadow:0px 6px 10px grey;

/*  */
    display:flex;
    flex-direction: column;
`
/* USER AREA */

export const UserAreaSkeleton = styled.div`
    height: 30px;
    display: block;
    float:right; 
    clear:right;

    img{
        width: auto;
        height: auto;
        margin-right: 6px;
        margin-top: 6px;
    }

`

/* IMAGE AREA */

export const ShoeImageSkeleton = styled.div`
    height: 210px;
    display: flex;

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 120%;
        height: 120%;
        object-fit: contain
    }
`

/* INFORMATION AREA */

export const InformationAlphaSkeleton = styled.div`
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    p{
        margin: 0 12px 0 12px; 
    }
`

export const InformationBetaSkeleton = styled.div`
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    p{
        margin: 0 12px 0 12px; 
    }
`