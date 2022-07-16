import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


function Register() {
    const [cookies] = useCookies(["cookie-name"]);
    const navigate = useNavigate();
    useEffect(() => {
        if (cookies.jwt) {
            navigate("/");
        }
    }, [cookies, navigate]);

    const [userValues, setUserValues] = useState({ email: "", password: "" });
    const [reportValues, setReportValues] = useState({ reportName: "", reportType: "" });
    const generateError = (error) =>
        toast.error(error, {
            position: "bottom-right",
        });
    const handleSubmit = async (event) => { // LOGIC ON SUBMIT...
        event.preventDefault()
        try {
            const { data } = await axios.post(  // POST THE "data" 
                "http://localhost:4000/register",
                {
                    ...userValues, ...reportValues,
                },
                { withCredentials: true }
            );
            if (data) {
                if (data.errors) {
                    const { email, password, reportName, reportType } = data.errors;
                    if (email) generateError(email);
                    else if (password) generateError(password);
                    else if (reportName) generateError(reportName);
                    else if (reportType) generateError(reportType);
                } else {
                    navigate("/");
                }
            }
        } catch (ex) {
            console.log(ex);
        }
    };
    return (                            /// START HTML
        <div className="container">
            <h2>Register Account</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="alex@aol.com"
                        onChange={(e) =>
                            setUserValues({ ...userValues, [e.target.name]: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        placeholder="a-$tr0nG-P@Ssw0RD"
                        name="password"
                        onChange={(e) =>
                            setUserValues({ ...userValues, [e.target.name]: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="reportName">Report Name:</label>
                    <input
                        type="reportName"
                        placeholder="Alex's Daily Report"
                        name="reportName"
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="reportType">Report Type:</label>
                    <input
                        type="reportType"
                        placeholder="basic report"
                        name="reportType"
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Register;
