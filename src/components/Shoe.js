import React from 'react'
import { BaseComponentSkeleton, 
         UserAreaSkeleton, 
         ShoeImageSkeleton,
         InformationAlphaSkeleton,
         InformationBetaSkeleton } from '../styles'

export default function Shoe(props) {
    return (
       <>
            <BaseComponentSkeleton>
                <UserAreaSkeleton>
                    <img src={`icons/favouriteFalse.png`} alt={"shoe_name"}/>
                </UserAreaSkeleton>
                <ShoeImageSkeleton>
                    <img src={`shoes/shoe_id_01.png`} alt={"testing"}></img>
                </ShoeImageSkeleton>    
                <InformationAlphaSkeleton>
                    <p>NIKE</p>
                    <p>$125</p>
                </InformationAlphaSkeleton>
                <InformationBetaSkeleton>
                    <p>Court Royale</p>
                    <p>to cart</p>
                </InformationBetaSkeleton>
            </BaseComponentSkeleton>
       </>
    )
}

