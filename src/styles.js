import styled from "styled-components"

export const BaseComponentSkeleton = styled.div`
/* temp */
    margin: 100px;

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

export const UserFavouriteSkeleton = styled.div`
    height: 15%;
    min-width: 100%;
    max-width: 100%;
    background-color: grey;
`