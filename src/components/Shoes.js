import React from 'react'
import { BaseComponentSkeleton, 
         UserAreaSkeleton, 
         ShoeImageSkeleton,
         InformationAlphaSkeleton,
         InformationBetaSkeleton } from '../styles'

function UserFavourite() {
    return (
        <div>
            <UserAreaSkeleton>
                <img src={`icons/favouriteFalse.png`}/>
            </UserAreaSkeleton>
        </div>
    )
}

function ShoeImage(props) {
    return (
        <div>
            <ShoeImageSkeleton>
                <img src={`shoes/shoe_id_01.png`} alt={"testing"}></img>
            </ShoeImageSkeleton>
        </div>
    )
}


function InformationAlpha() {
    return (
        <div>
            <InformationAlphaSkeleton>
                <p>NIKE</p>
                <p>$125</p>
            </InformationAlphaSkeleton>
        </div>
    )
}


function InformationBeta() {
    return (
        <div>
            <InformationBetaSkeleton>
                <p>Court Royale</p>
                <p>to cart</p>
            </InformationBetaSkeleton>
        </div>
    )
}


export default function Shoes() {
    return (
       <>
            <BaseComponentSkeleton>
                <UserFavourite/>
                <ShoeImage/>
                <InformationAlpha/>
                <InformationBeta/>
            </BaseComponentSkeleton>
       </>
    )
}
