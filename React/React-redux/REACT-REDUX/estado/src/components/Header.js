import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

export default function Header(props) {

    const counter = useSelector((state) => { return state.counter })

    return (
        <div className="header">
            <h3>Contador</h3>
            <span>{counter}</span>
        </div>
    )
}
