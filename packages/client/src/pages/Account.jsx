import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import { api } from '../utils/api';
import DisplayAndEditReport from '../components/DisplayAndEditReport';
// import fetch from 'node-fetch';

export default function Account() {
    var allCookies = document.cookie;
    var newCookie = "testkey=a test value as single string"
    document.cookie = newCookie;

    // var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    // };

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
                <DisplayAndEditReport />
                <h1>All Cookies</h1>
                <p id="cookieJar">{allCookies}</p>
                <h2>Welcome!</h2>
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
