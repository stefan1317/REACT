import React from 'react'
import AddButton from './AddButton'

export default function Menu() {
    return (
        <div className='container'>
            <nav className="nav">
                <ul className="nav__container">
                    <li className="nav__item">
                        <a href="/" className="nav__link">Travel updates</a>
                    </li>
                    <li className="nav__item">
                        <a href="/" className="nav__link">Reviews</a>
                    </li>
                    <li className="nav__item">
                        <a href="/" className="nav__link">About</a>
                    </li>
                    <li className="nav__item">
                        <a href="/" className="nav__link">Contact</a>
                    </li>
                </ul>
            </nav>
            <AddButton />
        </div>
    )
}