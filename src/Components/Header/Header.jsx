import React from 'react';
import "./Header.css";
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Cookies from 'js-cookie';

const Header = () => {
    const navigate = useNavigate();

    const LogoutEvent = () => {
        Cookies.remove("jwtToken");
        navigate("/login");
    };

    return (
        <div>

               
                <button className='btn btn-primary' onClick={LogoutEvent}>Logout</button>
            
        </div>
    );
};

export default Header;