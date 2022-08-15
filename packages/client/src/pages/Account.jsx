/**
 * See the Account info
 */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import pullUserData from '../utils/pullUserData';
import { api } from '../utils/api';

export default function Account() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    useEffect(() => {
        const verifyUser = async () => {
            if (!cookies.jwt) {
                navigate("/login");
            } else {
                const { data } = api.post();
                if (!data.status) {
                    removeCookie("jwt");
                    navigate("/login");
                } else
                    toast(`Hi ${data.user} 🦄`, {
                        theme: "dark",
                    });
            }
        };
        verifyUser();
    }, [cookies, navigate, removeCookie]);

    const logOut = () => {
        removeCookie("jwt");
        navigate("/login");
    };

    return (
        <>
            <div className="private">
                <h1>Welcome!</h1>
                <h2> This is your account page. </h2>
                <p>...some data here</p>
                <h2> Report Info: </h2>
                <p> ... some data here </p>
                <button onClick={logOut}>Log out</button>
            </div>
            <ToastContainer />
        </>
    );
}
