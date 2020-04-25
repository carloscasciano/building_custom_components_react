import React from 'react'
import { BaseComponentSkeleton, 
         UserAreaSkeleton, 
         ShoeImageSkeleton,
         InformationSkeleton, 
         CartSkeleton
        } from '../styles'

export default function Shoe(props) {

    return (
       <>
            <BaseComponentSkeleton>
                <UserAreaSkeleton>      
                    <img 
                        src={props.shoeInfo.shoeFavourite? `icons/favouriteFalse.png`:`icons/favouriteTrue.png`} 
                        alt={"shoeIsFavourite"}
                    />
                </UserAreaSkeleton>
                <ShoeImageSkeleton>
                    <img src={`shoes/${props.shoeInfo.shoeImage}.png`} alt={"testing"} ></img>
                </ShoeImageSkeleton>    
                <InformationSkeleton up bold>
                    <p>{props.shoeInfo.shoeBrand.toUpperCase()}</p>
                    <p>${props.shoeInfo.shoePrice}</p>
                </InformationSkeleton>
                <InformationSkeleton>
                    <p>{props.shoeInfo.shoeName}</p>
                    <CartSkeleton>
                        <p>to cart</p>
                        <img src={`icons/shopping-cart.png`} alt={"shopping_cart"}></img>
                    </CartSkeleton>
                    
                </InformationSkeleton>
            </BaseComponentSkeleton>
       </>
    )
}

