/*
ACCOUNTS PAGE:
-landing page after logging in
-displays info about user and any report
-passes  



*/

// IMPORTS
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import { api } from '../utils/api';
import DisplayReport from '../components/DisplayReport';
import DisplayUser from '../components/DisplayUser';
import EditUser from '../components/EditUser';

// set style to center the modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root')


// ACCOUNT MAIN
export default function Account() {
    var allCookies = document.cookie;
    var newCookie = "testkey=a test value as single string"
    document.cookie = newCookie;

    // MODAL STUFF
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
    function closeModal() {
        setIsOpen(false);
    }

    //Get user._id and report._id using regex
    let userIdValue = document.cookie.replace(/(?:(?:^|.*;\s*)userID\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    let reportIdValue = document.cookie.replace(/(?:(?:^|.*;\s*)reportID\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    // navigation setup
    const navigate = useNavigate();

    //cookie setup
    const [cookies, setCookie, removeCookie] = useCookies([]);
    useEffect(() => {
        const verifyUser = async () => {
            if (!cookies.jwt) {
                navigate("/login");
            } else {
                const { data } = await api.post();
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

    //Account Page JSX
    return (
        <>
            <div className="private">
                <h1>Welcome to Your Account Page</h1>
                <h2>User Profile Info:</h2>
                {/* don't use verbs in component names for react */}
                <DisplayUser myUserId={userIdValue} />

                <h2>Report Details</h2>
                <DisplayReport myReportId={reportIdValue} />
                <p>PLEASE NOTE:</p>
                <p> At this time we do not support user-made changes to reports.</p>
                <p> To make a change, please send email to support@mydailypdf.com</p>
                <button onClick={logOut}>Log out</button>
            </div>

            <ToastContainer />
        </>

    );
}
