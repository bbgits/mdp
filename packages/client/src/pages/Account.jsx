/* 

TBD

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


    // //FUNCTION BODY TO PULL USER DATA
    // try {
    //     // Connect to database
    //     Client.connect().then();
    //     console.log("myCLient Connected...");

    //     // Load User Doc From DB
    //     var userData = pullUserData(Client, "Abe").then();
    //     console.log("\n \n \n CURRENT USER DATA:").then();
    //     console.log(userData).then();




    // } catch (e) {
    //     console.error(e);
    // } finally {
    //     Client.close();
    // }

    return (
        <>
            <div className="private">
                <h1>Super Secret Page</h1>
                <h2> User Profile Info: </h2>
                <p>...some data here</p>
                <h2> Report Info: </h2>
                <p> ... some data here </p>
                <button onClick={logOut}>Log out</button>
            </div>
            <ToastContainer />
        </>
    );
}
