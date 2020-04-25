import React from 'react'
import { BaseComponentSkeleton, 
         UserAreaSkeleton, 
         ShoeImageSkeleton,
         InformationAlphaSkeleton,
         InformationBetaSkeleton, 
         CartSkeleton} from '../styles'

export default function Shoe(props) {
    /* console.log(props.shoeInfo) */
    return (
       <>
            <BaseComponentSkeleton>
           {/*  {console.log(props.shoeInfo.shoeFavourite)} */}
                <UserAreaSkeleton>
                    
                    <img src={`icons/favouriteFalse.png`} alt={"shoe_name"}/>
                </UserAreaSkeleton>
                <ShoeImageSkeleton>
                    <img src={`shoes/${props.shoeInfo.shoeImage}.png`} alt={"testing"} ></img>
                </ShoeImageSkeleton>    
                <InformationAlphaSkeleton>
                    <p>{props.shoeInfo.shoeBrand}</p>
                    <p>${props.shoeInfo.shoePrice}</p>
                </InformationAlphaSkeleton>
                <InformationBetaSkeleton>
                    <p>{props.shoeInfo.shoeName}</p>
                    <CartSkeleton>
                        <p>to cart</p>
                        <img src={`icons/shopping-cart.png`} alt={"shopping_cart"}></img>
                    </CartSkeleton>
                    
                </InformationBetaSkeleton>
            </BaseComponentSkeleton>
       </>
    )
}

