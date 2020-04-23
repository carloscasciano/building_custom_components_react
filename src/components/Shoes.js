import React from 'react'
import UserFavourite from './UserFavourite'
import { BaseComponentSkeleton } from '../styles'

export default function Shoes() {
    return (
       <>
            <BaseComponentSkeleton>
                <UserFavourite/>
            </BaseComponentSkeleton>
       </>
    )
}
