import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import { api } from '../utils/api';
import DisplayAndEditReport from '../components/DisplayAndEditReport';
import DisplayAndEditUser from '../components/DisplayAndEditUser';

// import fetch from 'node-fetch';

export default function Account() {
    var allCookies = document.cookie;
    var newCookie = "testkey=a test value as single string"
    document.cookie = newCookie;

    //Get user._id and report._id using regex
    let userIdValue = document.cookie.replace(/(?:(?:^|.*;\s*)userID\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    let reportIdValue = document.cookie.replace(/(?:(?:^|.*;\s*)reportID\s*\=\s*([^;]*).*$)|^.*$/, "$1");


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
                <h1>Welcome to Your Account Page</h1>
                <h2>User Profile Info:</h2>
                <DisplayAndEditUser myUserId={userIdValue} />
                <h2>Report Details</h2>
                <DisplayAndEditReport myReportId={reportIdValue} />
                <p>PLEASE NOTE:</p>
                <p> At this time we do not support user-made changes to reports.</p>
                <p> To make a change, please send email to support@mydailypdf.com</p>
                <button onClick={logOut}>Log out</button>
            </div>

            <ToastContainer />
        </>

    );
}
