import React from 'react';
// import classes from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav style={{display:'flex',justifyContent:'flex-end',alignContent:"center"}}>
            {/* <ul>
                <li><a href="">SignIn</a></li>
                <li><a href="">SignUp</a></li>
            </ul> */}
            <p className='f3 link dim white underline pa3 pointer '>Sign Out</p>
        </nav>
    )
}

export default Navigation
