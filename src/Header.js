import React from 'react'
import { Phone } from './Phone'
import { Email } from './Email'
import { Address } from './Address'

export const Header = () => {
    return (
        <div className="header">
           <Phone/>
           <Email/>
           <Address/> 
        </div>
    )
}
