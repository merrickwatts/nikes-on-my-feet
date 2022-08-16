import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className='nav'>
            {/* add check to see if user is logged in and if logged in display logout else display login */}
            <li>
                <button href='#login'
                onClick={(handlePageChange('Login'))}
                className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}> Login
                </button>
            </li>
            <li>
                <a href='#logout'
                onClick={(handlePageChange('Logout'))}
                className={currentPage === 'Logout' ? 'nav-link active' : 'nav-link'}> Logout
                </a>
            </li>
            <li>
                <a href='#home'
                onClick={(handlePageChange('Home'))}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}> Home
                </a>
            </li>
        </ul>
    )
}
export default NavTabs