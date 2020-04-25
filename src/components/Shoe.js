import React from 'react'
import { BaseComponentSkeleton, 
         UserAreaSkeleton, 
         ShoeImageSkeleton,
         InformationAlphaSkeleton,
         InformationBetaSkeleton, 
         CartSkeleton
        } from '../styles'

export default function Shoe(props) {

    return (
       <>
            <BaseComponentSkeleton>
           {/*  {console.log(props.shoeInfo.shoeFavourite)} */}
                <UserAreaSkeleton>      
                    <img 
                        src={props.shoeInfo.shoeFavourite? `icons/favouriteFalse.png`:`icons/favouriteTrue.png`} 
                        alt={"shoeIsFavourite"}
                    />
                </UserAreaSkeleton>
                <ShoeImageSkeleton>
                    <img src={`shoes/${props.shoeInfo.shoeImage}.png`} alt={"testing"} ></img>
                </ShoeImageSkeleton>    
                <InformationAlphaSkeleton>
                    <p>{props.shoeInfo.shoeBrand.toUpperCase()}</p>
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

