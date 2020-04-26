import styled from "styled-components"

export const MockSiteMainSkeleton = styled.div`
    display: flex;
    flex-direction: column;
`

export const MockHeaderSkeleton = styled.div`
    display:flex;
    flex-direction: row;
    background-color: #EEEEEE;
    border-radius: 3px;
    box-shadow:0px 3px 5px #CCCCCC;
    margin: -10px -5px 30px -5px;
    

    p{
        font-family: Helvetica, sans-serif;
        color: "#444444";
        font-weight: 500;
        margin: 24px 24px 24px 24px; 
    }
`

export const MockDataAreaSkeleton = styled.div`
    display:flex;
    flex-direction: row;
`

export const MockSideBars = styled.div`
    width: 200px;    
`