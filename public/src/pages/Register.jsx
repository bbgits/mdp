import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from 'antd';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Descriptions, PageHeader } from 'antd';
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

function Register() {

    const [cookies] = useCookies(["cookie-name"]);

    const { Header, Footer, Sider, Content } = Layout;

    /*Dropdown Menu*/

    /*End Dropdown Menu*/



    const navigate = useNavigate();
    useEffect(() => {
        if (cookies.jwt) {
            navigate("/");
        }
    }, [cookies, navigate]);

    const [userValues, setUserValues] = useState({ firstName: "", lastName: "", email: "", password: "", paymentName: "", paymentNumber: "", paymentExpire: "", paymentCode: "", paymentAddress1: "", paymentAddress2: "", paymentCity: "", paymentState: "", paymentZip: "", paymentPromo: "" }); // 1 - DEFINE variables
    const [reportValues, setReportValues] = useState({ reportName: "", reportType: "BASIC", reportZip: "", reportQuote1Sports: "", reportQuote2Politics: "", reportQuote3Art: "", reportQuote4Love: "", reportQuote5Business: "", reportLgDiv1Type: "twitterDiv", reportLgDiv1Data1: "", reportLgDiv1Data2: "", reportLgDiv1Data3: "", reportLgDiv1Data4: "", reportLgDiv1Data5: "", reportLgDiv2Type: "twitterDiv", reportLgDiv2Data1: "", reportLgDiv2Data2: "", reportLgDiv2Data3: "", reportLgDiv2Data4: "", reportLgDiv2Data5: "", reportLgDiv3Type: "twitterDiv", reportLgDiv3Data1: "", reportLgDiv3Data2: "", reportLgDiv3Data3: "", reportLgDiv3Data4: "", reportLgDiv3Data5: "" });
    const [stepValue, setStepValue] = useState({ stepValue: 1 });

    const handleNext = async (event) => { // Next and Previous buttons doing a LOT of work, logic to show/hide each step.
        event.preventDefault()
        stepValue.stepValue = stepValue.stepValue + 1
        console.log(stepValue.stepValue)
        if (stepValue.stepValue === 1) {
            document.getElementById("step1div").style.display = "flex"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
        } else if (stepValue.stepValue === 2) {
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "flex"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
        } else if (stepValue.stepValue === 3) {
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "flex"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
        } else if (stepValue.stepValue === 4) {
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "flex"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
        } else if (stepValue.stepValue === 5) {
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "flex"
            document.getElementById("step6div").style.display = "none"
        } else if (stepValue.stepValue === 6) {
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "flex"
        }
    };

    const handlePrev = async (event) => {
        event.preventDefault()
        stepValue.stepValue = stepValue.stepValue - 1
        console.log(stepValue.stepValue)
        if (stepValue.stepValue === 1) {
            document.getElementById("step1div").style.display = "flex"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
        } else if (stepValue.stepValue === 2) {
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "flex"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
        } else if (stepValue.stepValue === 3) {
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "flex"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
        } else if (stepValue.stepValue === 4) {
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "flex"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
        } else if (stepValue.stepValue === 5) {
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "flex"
            document.getElementById("step6div").style.display = "none"
        } else if (stepValue.stepValue === 6) {
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "flex"
        }
    };


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
                    const { firstName, lastName, email, password, paymentName, paymentNumber, paymentExpire, paymentCode, paymentAddress1, paymentAddress2, paymentCity, paymentZip, paymentState, paymentPromo, reportName, reportType } = data.errors;
                    if (firstName) generateError(firstName);
                    else if (lastName) generateError(lastName);
                    else if (email) generateError(email); // 2 - ERROR MESSAGE for each variable
                    else if (password) generateError(password);
                    else if (paymentName) generateError(paymentName);
                    else if (paymentNumber) generateError(paymentNumber);
                    else if (paymentExpire) generateError(paymentExpire);
                    else if (paymentCode) generateError(paymentCode);
                    else if (paymentAddress1) generateError(paymentAddress1);
                    else if (paymentAddress2) generateError(paymentAddress2);
                    else if (paymentCity) generateError(paymentCity);
                    else if (paymentState) generateError(paymentState);
                    else if (paymentZip) generateError(paymentZip);
                    else if (paymentPromo) generateError(paymentPromo);
                    else if (reportName) generateError(reportName);
                    else if (reportType) generateError(reportType);
                    return;
                } else {
                    navigate("/");
                }
            }
        } catch (ex) {
            console.log(ex);
        }
    };
    return (                            /// START HTML ****************************************************************************************************************************************************************************************************************************************************************************************************************************************************
        <Layout>
            <Header>Header
            </Header>
            <Content>


                <div className="container" id="mainContainer">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="formStepHolder" id="step1div">
                            <h2>Step 1: Info</h2>
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="firstName"
                                    name="firstName"
                                    placeholder="Martin"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="lastName"
                                    name="lastName"
                                    placeholder="Eden"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="alex@aol.com"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
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
                            <div className="buttonSpacer"></div>
                            <div className="buttonHolderDiv">
                                <button className="nextButton" onClick={handleNext}>Next &#9658;</button>
                            </div>
                        </div >
                        <div className="formStepHolder" id="step2div">
                            <h2>Step 2a: Report Setup</h2>
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
                                <label for="reportType">Select Report Type:</label>
                                <select className="dropdownSelector" name="reportType" onChange={(e) =>
                                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                } id="reportType">
                                    <option value="basic">Basic - $2.99/mo</option>
                                    <option value="deluxe">Deluxe - $4.99/mo</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="reportZip">Zip Code:</label>
                                <input
                                    type="reportZip"
                                    placeholder="Zip code used for Weather!"
                                    name="reportZip"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                            </div>
                            <br></br>
                            <div className="checkboxDiv">
                                <label className="checkQuestionLabel">What genres of motivational quotes do you want?</label>

                                <ul>
                                    <li>

                                        <input type="checkbox" className="checkInputBox" name="reportQuote" onChange={(e) =>
                                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        } id="quote_sports" value="quote_sports" /><label for="quote_sports" className="checkOptionLabel">Sports</label>
                                    </li>
                                    <li>

                                        <input type="checkbox" className="checkInputBox" name="reportQuote" onChange={(e) =>
                                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        } id="quote_politics" value="quote_politics" />
                                        <label for="quote_politics" className="checkOptionLabel" >Politics</label>

                                    </li>
                                    <li>

                                        <input type="checkbox" className="checkInputBox" name="reportQuote" onChange={(e) =>
                                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        } id="quote_art" value="quote_art" />
                                        <label for="quote_art" className="checkOptionLabel" >Art</label>
                                    </li>
                                    <li>

                                        <input type="checkbox" className="checkInputBox" name="reportQuote" onChange={(e) =>
                                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        } id="quote_love" value="Ruby" />
                                        <label for="quote_love" className="checkOptionLabel" >Love</label>
                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                </ul>



                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                            <div className="buttonSpacer"></div>
                            <div className="buttonHolderDiv">
                                <button className="prevButton" onClick={handlePrev}>&#9668; Prev</button>
                                <button className="nextButton" onClick={handleNext}>Next &#9658;</button>

                            </div></div>
                        <div className="formStepHolder" id="step3div">
                            <h2>Step 2b: Report Big Div A</h2>

                            <div>
                                <label for="reportLgDiv1Type">Select Large Div Type:</label>
                                <select className="dropdownSelector" name="reportLgDiv1Type" id="reportLgDiv1Type" onChange=
                                    {(e) => {
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        console.log(e.target.value)
                                        if (e.target.value === "twitterDiv") {
                                            document.getElementById("LgDiv1Sub1Twitter").style.display = "flex"
                                            document.getElementById("LgDiv1Sub2Insta").style.display = "none"
                                            document.getElementById("LgDiv1Sub3News").style.display = "none"

                                        } else if (e.target.value === "instaDiv") {
                                            document.getElementById("LgDiv1Sub1Twitter").style.display = "none"
                                            document.getElementById("LgDiv1Sub2Insta").style.display = "flex"
                                            document.getElementById("LgDiv1Sub3News").style.display = "none"

                                        } else if (e.target.value === "newsDiv") {
                                            document.getElementById("LgDiv1Sub1Twitter").style.display = "none"
                                            document.getElementById("LgDiv1Sub2Insta").style.display = "none"
                                            document.getElementById("LgDiv1Sub3News").style.display = "flex"
                                        }

                                    }}>
                                    <option value="twitterDiv">Twitter Summaries</option>
                                    <option value="instaDiv">Insta Summaries</option>
                                    <option value="newsDiv">News Items</option>
                                </select>
                            </div>

                            <div id="LgDiv1Sub1Twitter">
                                <h5>TWITTER: Enter up to 5 twitter handles below.  Do not include the @ symbol!  </h5>
                                <label htmlFor="reportLgDiv1Data1">Username 1:</label>
                                <input
                                    type="reportLgDiv1Data1"
                                    placeholder="BurnsUSA"
                                    name="reportLgDiv1Data1"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv1Data2">Username 2:</label>
                                <input
                                    type="reportLgDiv1Data2"
                                    placeholder="BurnsUSA2"
                                    name="reportLgDiv1Data2"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv1Data3">Username 3:</label>
                                <input
                                    type="reportLgDiv1Data3"
                                    placeholder="BurnsUSA3"
                                    name="reportLgDiv1Data3"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv1Data4">Username 4:</label>
                                <input
                                    type="reportLgDiv1Data4"
                                    placeholder="BurnsUSA4"
                                    name="reportLgDiv1Data4"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv1Data5">Username 5:</label>
                                <input
                                    type="reportLgDiv1Data5"
                                    placeholder="BurnsUSA5"
                                    name="reportLgDiv1Data5"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                            </div>
                            <div id="LgDiv1Sub2Insta">
                                <h5>INSTAGRAM: Enter up to 5 instagram handles below.  Do not include the @ symbol!  </h5>
                                <label htmlFor="reportLgDiv1Data1">Username 1:</label>
                                <input
                                    type="reportLgDiv1Data1"
                                    placeholder="BurnsUSA"
                                    name="reportLgDiv1Data1"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv1Data2">Username 2:</label>
                                <input
                                    type="reportLgDiv1Data2"
                                    placeholder="BurnsUSA2"
                                    name="reportLgDiv1Data2"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv1Data3">Username 3:</label>
                                <input
                                    type="reportLgDiv1Data3"
                                    placeholder="BurnsUSA3"
                                    name="reportLgDiv1Data3"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv1Data4">Username 4:</label>
                                <input
                                    type="reportLgDiv1Data4"
                                    placeholder="BurnsUSA4"
                                    name="reportLgDiv1Data4"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv1Data5">Username 5:</label>
                                <input
                                    type="reportLgDiv1Data5"
                                    placeholder="BurnsUSA5"
                                    name="reportLgDiv1Data5"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                            </div>
                            <div id="LgDiv1Sub3News">
                                <h4>NEWS: Enter three search terms below.  Each news tile returns one complete news story based on the search phrases you enter below. The terms should start with the most specific, and end with the most broad.  They do not need to be related, but you will get more consistent results if they are. If you want a fairly consistent return, we recommend providing three "nested" areas of interest.  For Example: "chicago alderman", "chicago politics", and "american politics" might be a good search and so might "College Hockey", "Hockey", "Sports".  Ultimately its Up to you!  </h4>
                                <label htmlFor="reportLgDiv1Data1">Narrowest Search Term:</label>
                                <input
                                    type="reportLgDiv1Data1"
                                    placeholder="ex: Chicago Restaurant Openings"
                                    name="reportLgDiv1Data1"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv1Data2">More General Search Term:</label>
                                <input
                                    type="reportLgDiv1Data2"
                                    placeholder="ex: Restaurants"
                                    name="reportLgDiv1Data2"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv1Data3">Most General Search Term</label>
                                <input
                                    type="reportLgDiv1Data3"
                                    placeholder="ex: Business"
                                    name="reportLgDiv1Data3"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                            </div>
                            <div className="buttonSpacer"></div>
                            <div className="buttonHolderDiv">
                                <button className="prevButton" onClick={handlePrev}>&#9668; Prev</button>
                                <button className="nextButton" onClick={handleNext}>Next &#9658;</button> </div></div>

                        <div className="formStepHolder" id="step4div">
                            <h2>Step 2c: Report Big Div B</h2>
                            <div>
                                <label for="reportLgDiv2Type">Select Large Div Type:</label>
                                <select className="dropdownSelector" name="reportLgDiv2Type" id="reportLgDiv2Type" onChange=
                                    {(e) => {
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        console.log(e.target.value)
                                        if (e.target.value === "twitterDiv") {
                                            document.getElementById("LgDiv2Sub1Twitter").style.display = "flex"
                                            document.getElementById("LgDiv2Sub2Insta").style.display = "none"
                                            document.getElementById("LgDiv2Sub3News").style.display = "none"

                                        } else if (e.target.value === "instaDiv") {
                                            document.getElementById("LgDiv2Sub1Twitter").style.display = "none"
                                            document.getElementById("LgDiv2Sub2Insta").style.display = "flex"
                                            document.getElementById("LgDiv2Sub3News").style.display = "none"

                                        } else if (e.target.value === "newsDiv") {
                                            document.getElementById("LgDiv2Sub1Twitter").style.display = "none"
                                            document.getElementById("LgDiv2Sub2Insta").style.display = "none"
                                            document.getElementById("LgDiv2Sub3News").style.display = "flex"
                                        }

                                    }}>
                                    <option value="twitterDiv">Twitter Summaries</option>
                                    <option value="instaDiv">Insta Summaries</option>
                                    <option value="newsDiv">News Items</option>
                                </select>
                            </div>

                            <div id="LgDiv2Sub1Twitter">
                                <h5>TWITTER: Enter up to 5 twitter handles below.  Do not include the @ symbol!  </h5>
                                <label htmlFor="reportLgDiv2Data1">Username 1:</label>
                                <input
                                    type="reportLgDiv2Data1"
                                    placeholder="BurnsUSA"
                                    name="reportLgDiv2Data1"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv2Data2">Username 2:</label>
                                <input
                                    type="reportLgDiv2Data2"
                                    placeholder="BurnsUSA2"
                                    name="reportLgDiv2Data2"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv2Data3">Username 3:</label>
                                <input
                                    type="reportLgDiv2Data3"
                                    placeholder="BurnsUSA3"
                                    name="reportLgDiv2Data3"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv2Data4">Username 4:</label>
                                <input
                                    type="reportLgDiv2Data4"
                                    placeholder="BurnsUSA4"
                                    name="reportLgDiv2Data4"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv2Data5">Username 5:</label>
                                <input
                                    type="reportLgDiv2Data5"
                                    placeholder="BurnsUSA5"
                                    name="reportLgDiv2Data5"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                            </div>
                            <div id="LgDiv2Sub2Insta">
                                <h5>INSTAGRAM: Enter up to 5 instagram handles below.  Do not include the @ symbol!  </h5>
                                <label htmlFor="reportLgDiv2Data1">Username 1:</label>
                                <input
                                    type="reportLgDiv2Data1"
                                    placeholder="BurnsUSA"
                                    name="reportLgDiv2Data1"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv2Data2">Username 2:</label>
                                <input
                                    type="reportLgDiv2Data2"
                                    placeholder="BurnsUSA2"
                                    name="reportLgDiv2Data2"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv2Data3">Username 3:</label>
                                <input
                                    type="reportLgDiv2Data3"
                                    placeholder="BurnsUSA3"
                                    name="reportLgDiv2Data3"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv2Data4">Username 4:</label>
                                <input
                                    type="reportLgDiv2Data4"
                                    placeholder="BurnsUSA4"
                                    name="reportLgDiv2Data4"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv2Data5">Username 5:</label>
                                <input
                                    type="reportLgDiv2Data5"
                                    placeholder="BurnsUSA5"
                                    name="reportLgDiv2Data5"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                            </div>
                            <div id="LgDiv2Sub3News">
                                <h4>NEWS: Enter three search terms below.  Each news tile returns one complete news story based on the search phrases you enter below. The terms should start with the most specific, and end with the most broad.  They do not need to be related, but you will get more consistent results if they are. If you want a fairly consistent return, we recommend providing three "nested" areas of interest.  For Example: "chicago alderman", "chicago politics", and "american politics" might be a good search and so might "College Hockey", "Hockey", "Sports".  Ultimately its Up to you!  </h4>
                                <label htmlFor="reportLgDiv1Data1">Narrowest Search Term:</label>
                                <input
                                    type="reportLgDiv2Data1"
                                    placeholder="ex: Chicago Restaurant Openings"
                                    name="reportLgDiv2Data1"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv2Data2">More General Search Term:</label>
                                <input
                                    type="reportLgDiv2Data2"
                                    placeholder="ex: Restaurants"
                                    name="reportLgDiv2Data2"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv2Data3">Most General Search Term</label>
                                <input
                                    type="reportLgDiv2Data3"
                                    placeholder="ex: Business"
                                    name="reportLgDiv2Data3"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                            </div>
                            <div className="buttonSpacer"></div>
                            <div className="buttonHolderDiv">
                                <button className="prevButton" onClick={handlePrev}> &#9668; Prev</button>
                                <button className="nextButton" onClick={handleNext}>Next &#9658;</button> </div>
                        </div>
                        <div className="formStepHolder" id="step5div">
                            <h2>Step 2d: Report Big Div C</h2>
                            <div>
                                <label for="reportLgDiv3Type">Select Large Div Type:</label>
                                <select className="dropdownSelector" name="reportLgDiv3Type" id="reportLgDiv3Type" onChange=
                                    {(e) => {
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        console.log(e.target.value)
                                        if (e.target.value === "twitterDiv") {
                                            document.getElementById("LgDiv3Sub1Twitter").style.display = "flex"
                                            document.getElementById("LgDiv3Sub2Insta").style.display = "none"
                                            document.getElementById("LgDiv3Sub3News").style.display = "none"

                                        } else if (e.target.value === "instaDiv") {
                                            document.getElementById("LgDiv3Sub1Twitter").style.display = "none"
                                            document.getElementById("LgDiv3Sub2Insta").style.display = "flex"
                                            document.getElementById("LgDiv3Sub3News").style.display = "none"

                                        } else if (e.target.value === "newsDiv") {
                                            document.getElementById("LgDiv3Sub1Twitter").style.display = "none"
                                            document.getElementById("LgDiv3Sub2Insta").style.display = "none"
                                            document.getElementById("LgDiv3Sub3News").style.display = "flex"
                                        }

                                    }}>
                                    <option value="twitterDiv">Twitter Summaries</option>
                                    <option value="instaDiv">Insta Summaries</option>
                                    <option value="newsDiv">News Items</option>
                                </select>
                            </div>

                            <div id="LgDiv3Sub1Twitter">
                                <h5>TWITTER: Enter up to 5 twitter handles below.  Do not include the @ symbol!  </h5>
                                <label htmlFor="reportLgDiv3Data1">Username 1:</label>
                                <input
                                    type="reportLgDiv3Data1"
                                    placeholder="BurnsUSA"
                                    name="reportLgDiv3Data1"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv3Data2">Username 2:</label>
                                <input
                                    type="reportLgDiv3Data2"
                                    placeholder="BurnsUSA2"
                                    name="reportLgDiv3Data2"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv3Data3">Username 3:</label>
                                <input
                                    type="reportLgDiv3Data3"
                                    placeholder="BurnsUSA3"
                                    name="reportLgDiv3Data3"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv3Data4">Username 4:</label>
                                <input
                                    type="reportLgDiv3Data4"
                                    placeholder="BurnsUSA4"
                                    name="reportLgDiv3Data4"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv3Data5">Username 5:</label>
                                <input
                                    type="reportLgDiv3Data5"
                                    placeholder="BurnsUSA5"
                                    name="reportLgDiv3Data5"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                            </div>
                            <div id="LgDiv3Sub2Insta">
                                <h5>INSTAGRAM: Enter up to 5 instagram handles below.  Do not include the @ symbol!  </h5>
                                <label htmlFor="reportLgDiv3Data1">Username 1:</label>
                                <input
                                    type="reportLgDiv3Data1"
                                    placeholder="BurnsUSA"
                                    name="reportLgDiv3Data1"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv3Data2">Username 2:</label>
                                <input
                                    type="reportLgDiv3Data2"
                                    placeholder="BurnsUSA2"
                                    name="reportLgDiv3Data2"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv3Data3">Username 3:</label>
                                <input
                                    type="reportLgDiv3Data3"
                                    placeholder="BurnsUSA3"
                                    name="reportLgDiv3Data3"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv3Data4">Username 4:</label>
                                <input
                                    type="reportLgDiv3Data4"
                                    placeholder="BurnsUSA4"
                                    name="reportLgDiv3Data4"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv3Data5">Username 5:</label>
                                <input
                                    type="reportLgDiv3Data5"
                                    placeholder="BurnsUSA5"
                                    name="reportLgDiv3Data5"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                            </div>
                            <div id="LgDiv3Sub3News">
                                <h4>NEWS: Enter three search terms below.  Each news tile returns one complete news story based on the search phrases you enter below. The terms should start with the most specific, and end with the most broad.  They do not need to be related, but you will get more consistent results if they are. If you want a fairly consistent return, we recommend providing three "nested" areas of interest.  For Example: "chicago alderman", "chicago politics", and "american politics" might be a good search and so might "College Hockey", "Hockey", "Sports".  Ultimately its Up to you!  </h4>
                                <label htmlFor="reportLgDiv3Data1">Narrowest Search Term:</label>
                                <input
                                    type="reportLgDiv3Data1"
                                    placeholder="ex: Chicago Restaurant Openings"
                                    name="reportLgDiv3Data1"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv3Data2">More General Search Term:</label>
                                <input
                                    type="reportLgDiv3Data2"
                                    placeholder="ex: Restaurants"
                                    name="reportLgDiv3Data2"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                                <label htmlFor="reportLgDiv3Data3">Most General Search Term</label>
                                <input
                                    type="reportLgDiv3Data3"
                                    placeholder="ex: Business"
                                    name="reportLgDiv3Data3"
                                    onChange={(e) =>
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                    }
                                />
                            </div>
                            <div className="buttonSpacer"></div>
                            <div className="buttonHolderDiv">

                                <button className="prevButton" onClick={handlePrev}>&#9668; Prev</button>
                                <button className="nextButton" onClick={handleNext}>Next &#9658;</button> </div></div>
                        <div className="formStepHolder" id="step6div">
                            <h2>Step 6: Payment, mockup C</h2>

                            <div>
                                <label htmlFor="paymentType">Payment Type</label>
                                <input
                                    type="paymentType"
                                    name="paymentType"
                                    placeholder="Credit/Debit"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="paymentName">Name on Card</label>
                                <input
                                    type="paymentName"
                                    name="paymentName"
                                    placeholder="Martin Eden"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="paymentNumber">Card Number</label>
                                <input
                                    type="paymentNumber"
                                    name="paymentNumber"
                                    placeholder="XXX-XXXX-XXXX-XXX"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="paymentExpire">Expiration</label>
                                <input
                                    type="paymentExpire"
                                    name="paymentExpire"
                                    placeholder="02/25"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="paymentCode">CV Code</label>
                                <input
                                    type="paymentCode"
                                    name="paymentCode"
                                    placeholder="123"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="paymentAddress1">Address1</label>
                                <input
                                    type="paymentAddress1"
                                    name="paymentAddress1"
                                    placeholder="123 Fake Street"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="paymentAddress2">Address2</label>
                                <input
                                    type="paymentAddress2"
                                    name="paymentAddress2"
                                    placeholder="Martin"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="paymentCity">City</label>
                                <input
                                    type="paymentCity"
                                    name="paymentCity"
                                    placeholder="Chicago"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="paymentState">State</label>
                                <input
                                    type="paymentState"
                                    name="paymentState"
                                    placeholder="Martin"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="paymentZip">Zip</label>
                                <input
                                    type="paymentZip"
                                    name="paymentZip"
                                    placeholder="IL"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="paymentPromo">Promo Code:</label>
                                <input
                                    type="paymentPromo"
                                    name="paymentPromo"
                                    placeholder="Martin"
                                    onChange={(e) =>
                                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                                    }
                                />
                            </div>
                            <div id="buttonSpacer"></div>

                            <div class="buttonHolderDiv">
                                <button className="prevButton" onClick={handlePrev} >&#9668; Prev</button>
                                <button type="submit" className="submitButton">Submit</button>
                            </div>

                        </div>
                        <div id="formFooterDiv"><img src="http://www.b2results.com/wp-includes/images/mydailypdf/main-logo-white.png" alt="logo" id="formFooterLogo"></img></div>

                    </form >

                    <ToastContainer />

                </div >
            </Content>
            <Footer>Footer</Footer>
        </Layout>

    );
}

export default Register;
