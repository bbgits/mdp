/* 

Main Server for App, listens on 4000, connects to:
> react app (3000), database (mongo cloud), payments (stripe)

*/

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
    const [reportValues, setReportValues] = useState({ reportName: "", reportType: "BASIC", reportZip: "", reportQuote1Sports: "Yes", reportQuote2Politics: "Yes", reportQuote3Art: "Yes", reportQuote4Love: "Yes", reportQuote5Business: true, reportLgDiv1Type: "twitterDiv", reportLgDiv1Data1: "", reportLgDiv1Data2: "", reportLgDiv1Data3: "", reportLgDiv1Data4: "", reportLgDiv1Data5: "", reportLgDiv2Type: "twitterDiv", reportLgDiv2Data1: "", reportLgDiv2Data2: "", reportLgDiv2Data3: "", reportLgDiv2Data4: "", reportLgDiv2Data5: "", reportLgDiv3Type: "twitterDiv", reportLgDiv3Data1: "", reportLgDiv3Data2: "", reportLgDiv3Data3: "", reportLgDiv3Data4: "", reportLgDiv3Data5: "" });
    const [stepValue, setStepValue] = useState({ stepValue: 1 });

    const handleNext = async (event) => { // Next and Previous buttons doing a LOT of work, logic to show/hide each step.
        event.preventDefault()
        stepValue.stepValue = stepValue.stepValue + 1
        console.log(stepValue.stepValue)
        if (stepValue.stepValue === 1) {
            document.getElementById("headerMainDiv").style.display = "flex"
            document.getElementById("step1div").style.display = "flex"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
            document.getElementById("finalPrevButton").style.display = "none"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "none"
        } else if (stepValue.stepValue === 2) {
            document.getElementById("headerMainDiv").style.display = "none"
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "flex"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
            document.getElementById("finalPrevButton").style.display = "none"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "none"
        } else if (stepValue.stepValue === 3) {
            document.getElementById("headerMainDiv").style.display = "none"
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "flex"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
            document.getElementById("finalPrevButton").style.display = "none"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "none"
        } else if (stepValue.stepValue === 4) {
            document.getElementById("headerMainDiv").style.display = "none"
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "flex"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
            document.getElementById("finalPrevButton").style.display = "none"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "none"
        } else if (stepValue.stepValue === 5) {
            document.getElementById("headerMainDiv").style.display = "none"
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "flex"
            document.getElementById("step6div").style.display = "none"
            document.getElementById("finalPrevButton").style.display = "none"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "none"
        } else if (stepValue.stepValue === 6) {
            document.getElementById("headerMainDiv").style.display = "none"
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "flex"
            document.getElementById("finalPrevButton").style.display = "flex"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "flex"
        }
    };

    const handlePrev = async (event) => {
        event.preventDefault()
        stepValue.stepValue = stepValue.stepValue - 1
        console.log(stepValue.stepValue)
        if (stepValue.stepValue === 1) {
            document.getElementById("headerMainDiv").style.display = "flex"
            document.getElementById("step1div").style.display = "flex"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
            document.getElementById("finalPrevButton").style.display = "none"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "none"
        } else if (stepValue.stepValue === 2) {
            document.getElementById("headerMainDiv").style.display = "none"
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "flex"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
            document.getElementById("finalPrevButton").style.display = "none"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "none"
        } else if (stepValue.stepValue === 3) {
            document.getElementById("headerMainDiv").style.display = "none"
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "flex"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
            document.getElementById("finalPrevButton").style.display = "none"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "none"
        } else if (stepValue.stepValue === 4) {
            document.getElementById("headerMainDiv").style.display = "none"
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "flex"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "none"
            document.getElementById("finalPrevButton").style.display = "none"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "none"
        } else if (stepValue.stepValue === 5) {
            document.getElementById("headerMainDiv").style.display = "none"
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "flex"
            document.getElementById("step6div").style.display = "none"
            document.getElementById("finalPrevButton").style.display = "none"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "none"
        } else if (stepValue.stepValue === 6) {
            document.getElementById("headerMainDiv").style.display = "none"
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "flex"
            document.getElementById("finalPrevButton").style.display = "flex"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "flex"
        }
    };

    const handleStripe = async (event) => { console.log(event) }


    const udpateQuote5ToggleValue = async (event) => {
        if (reportValues.reportQuote5Business == true) {
            reportValues.reportQuote5Business = false
        } else if (reportValues.reportQuote5Business == false) {
            reportValues.reportQuote5Business = true
        }
    }



    const generateError = (error) =>
        toast.error(error, {
            position: "bottom-right",
        });


    const handleSubmit = async (event) => { // LOGIC ON SUBMIT...
        event.preventDefault()
        try {
            const { mongoData } = await axios.post(  // POST THE "data" 
                "http://localhost:4000/register",
                {
                    ...userValues, ...reportValues,
                },
                { withCredentials: true });

            document.getElementById("headerMainDiv").style.display = "none"
            document.getElementById("step1div").style.display = "none"
            document.getElementById("step2div").style.display = "none"
            document.getElementById("step3div").style.display = "none"
            document.getElementById("step4div").style.display = "none"
            document.getElementById("step5div").style.display = "none"
            document.getElementById("step6div").style.display = "flex"
            document.getElementById("finalPrevButton").style.display = "flex"
            document.getElementById("stripeCheckoutButtonsDiv").style.display = "flex"

            if (mongoData) {
                if (mongoData.errors) {
                    const { firstName, lastName, email, password, stripeID, paymentPromo, reportName, reportType } = mongoData.errors;
                    if (firstName) generateError(firstName);
                    else if (lastName) generateError(lastName);
                    else if (email) generateError(email); // 2 - ERROR MESSAGE for each variable
                    else if (password) generateError(password);
                    else if (paymentPromo) generateError(paymentPromo);
                    else if (reportName) generateError(reportName);
                    else if (reportType) generateError(reportType);
                    return;
                } else {

                }
            }
        } catch (ex) {
            console.log(ex);
        }
    };
    return (                            /// START HTML ****************************************************************************************************************************************************************************************************************************************************************************************************************************************************
        <Layout>
            <Header>
                <div id="headerMainDiv">
                    <div id="headerTitleBoxDiv">
                        <span><b>your</b> internet,<br></br></span><span id="taglineDelivered"><i>delivered</i>.</span>
                    </div>
                    <div id="headerSubTitleBoxDiv">
                        <span>Get started below with your first </span><span>fully customizable<span></span> daily report:</span>
                    </div></div>
            </Header>
            <Content>


                <div className="container" id="mainContainer">

                    <form onSubmit={(e) => handleSubmit(e)}>

                        {/* *****************************************************************************************************************************      STEP 1    ************************************** ************************************************************************************************ */}
                        <div className="formStepHolder" id="step1div">
                            <div id="stepperBoxDiv">
                                <img src={require('../assets/formProgressBar1.png')}></img>

                            </div>
                            <h2>Let's Get Started!</h2>

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
                                <button className="nextButton" onClick={handleNext}>Next! &#9658;</button>
                            </div>
                        </div >
                        {/* *****************************************************************************************************************************      STEP 2    ************************************** ************************************************************************************************ */}
                        <div className="formStepHolder" id="step2div">
                            <div id="stepperBoxDiv">
                                <img src={require('../assets/formProgressBar2.png')}></img>

                            </div>
                            <h2>Set info for Heading:</h2>
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

                                        <input
                                            type="checkbox"
                                            className="checkInputBox"
                                            name="reportQuote1Sports"
                                            onChange={(e) =>
                                                setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                            }
                                            id="quote_sports"
                                            checked />
                                        <label for="quote_sports" className="checkOptionLabel">Sports</label>
                                    </li>
                                    <li>

                                        <input type="checkbox" className="checkInputBox" name="reportQuote2Politics" onChange={(e) =>
                                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        } id="quote_politics" checked />
                                        <label for="quote_politics" className="checkOptionLabel" >Politics</label>

                                    </li>
                                    <li>

                                        <input type="checkbox" className="checkInputBox" name="reportQuote3Art" onChange={(e) =>
                                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        } id="quote_art" checked />
                                        <label for="quote_art" className="checkOptionLabel" >Art</label>
                                    </li>
                                    <li>

                                        <input type="checkbox" className="checkInputBox" name="reportQuote4Love" onChange={(e) =>
                                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        } id="quote_love" checked />
                                        <label for="quote_love" className="checkOptionLabel" >Love</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" className="checkInputBox" name="reportQuote5Business" onChange={(e) => {

                                            {
                                                if (e.target.value == true) {
                                                    e.target.value = false
                                                } else if (e.target.value == false) {
                                                    e.target.value = true
                                                }
                                            }


                                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        }
                                        } id="quote_business" />
                                        <label for="quote_business" className="checkOptionLabel" >Business</label>
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
                        {/* ******************************************************************************************     ***********************************      STEP 3    ************************************** ************************************************************************************************ */}
                        <div className="formStepHolder" id="step3div">
                            <div id="stepperBoxDiv">
                                <img src={require('../assets/formProgressBar3.png')}></img>

                            </div>
                            <h2>First custom block:</h2>

                            <div>
                                <label for="reportLgDiv1Type">Select Large Div Type:</label>
                                <select className="dropdownSelector" name="reportLgDiv1Type" id="reportLgDiv1Type" onChange=
                                    {(e) => {
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        console.log(e.target.value)
                                        if (e.target.value === "Twitter") {
                                            document.getElementById("LgDiv1Sub1Twitter").style.display = "flex"
                                            document.getElementById("LgDiv1Sub2Insta").style.display = "none"
                                            document.getElementById("LgDiv1Sub3News").style.display = "none"

                                        } else if (e.target.value === "Insta") {
                                            document.getElementById("LgDiv1Sub1Twitter").style.display = "none"
                                            document.getElementById("LgDiv1Sub2Insta").style.display = "flex"
                                            document.getElementById("LgDiv1Sub3News").style.display = "none"

                                        } else if (e.target.value === "News") {
                                            document.getElementById("LgDiv1Sub1Twitter").style.display = "none"
                                            document.getElementById("LgDiv1Sub2Insta").style.display = "none"
                                            document.getElementById("LgDiv1Sub3News").style.display = "flex"
                                        }

                                    }}>
                                    <option value="Twitter">Twitter Summaries</option>
                                    <option value="Insta">Insta Summaries</option>
                                    <option value="News">News Items</option>
                                </select>
                            </div>
                            {/***********************************   Option 3A   ************************************** ******************************************************************************************/}
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
                            {/***********************************   Option 3B   ************************************** ******************************************************************************************/}
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
                            {/***********************************   Option 3C   ************************************** ******************************************************************************************/}
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



                        {/* ******************************************************************************************     
                        ***********************************      STEP 4    ************************************** ************************************************************************************************ */}



                        <div className="formStepHolder" id="step4div">
                            <div id="stepperBoxDiv">
                                <img src={require('../assets/formProgressBar4.png')}></img>

                            </div>
                            <h2>Second custom block:</h2>
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
                            {/***********************************   Option 4A   ************************************** ******************************************************************************************/}

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
                            {/***********************************   Option 4b   ************************************** ******************************************************************************************/}
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
                            {/***********************************   Option 4C   ************************************** ******************************************************************************************/}
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



                        {/* ******************************************************************************************     
                        ***********************************      STEP  5    ************************************** ************************************************************************************************ */}



                        <div className="formStepHolder" id="step5div">
                            <div id="stepperBoxDiv">
                                <img src={require('../assets/formProgressBar5.png')}></img>

                            </div>
                            <h2>Third custom block:</h2>
                            <div>
                                <label for="reportLgDiv3Type">Select Large Div Type:</label>
                                <select className="dropdownSelector" name="reportLgDiv3Type" id="reportLgDiv3Type" onChange=
                                    {(e) => {
                                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                                        console.log(e.target.value)
                                        if (e.target.value === "Twitter") {
                                            document.getElementById("LgDiv3Sub1Twitter").style.display = "flex"
                                            document.getElementById("LgDiv3Sub2Insta").style.display = "none"
                                            document.getElementById("LgDiv3Sub3News").style.display = "none"

                                        } else if (e.target.value === "Insta") {
                                            document.getElementById("LgDiv3Sub1Twitter").style.display = "none"
                                            document.getElementById("LgDiv3Sub2Insta").style.display = "flex"
                                            document.getElementById("LgDiv3Sub3News").style.display = "none"

                                        } else if (e.target.value === "News") {
                                            document.getElementById("LgDiv3Sub1Twitter").style.display = "none"
                                            document.getElementById("LgDiv3Sub2Insta").style.display = "none"
                                            document.getElementById("LgDiv3Sub3News").style.display = "flex"
                                        }

                                    }}>
                                    <option value="Twitter">Twitter Summaries</option>
                                    <option value="Insta">Insta Summaries</option>
                                    <option value="News">News Items</option>
                                </select>
                            </div>
                            {/***********************************   Option 5A   ************************************** ******************************************************************************************/}


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
                            {/***********************************   Option 5B   ************************************** ******************************************************************************************/}
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
                            {/***********************************   Option 5C   ************************************** ******************************************************************************************/}
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
                                <button className="nextButton" onClick={handleSubmit}>Next &#9658;</button>
                                <div class="buttonHolderDiv">
                                    {/* <button type="submit" className="submitButton">Monthly: $4.99</button>
                                    <button type="submit" className="submitButton">Annually: $39.99</button> */}
                                </div></div></div>





                        {/* *****************************************************************************     
                        ***********************************      STEP 6    ****************************** ********************************************************************************* */}


                        <div className="formStepHolder" id="step6div">
                            <div id="stepperBoxDiv">
                                <img src={require('../assets/formProgressBar6.png')}></img>

                            </div>
                            <h2>Almost there!</h2>
                            <div id="pdfPreviewHolderDiv">
                                <h4>Look good?</h4>

                                <div id="pdfPreviewDiv">
                                    <div>
                                        <p className="pdfPreviewKey" styles="text-align: center"><b>{reportValues.reportName}</b></p></div>
                                    <p className="pdfPreviewKey"><b>Zip Code:</b> {reportValues.reportZip}</p>
                                    <p className="pdfPreviewKey"><b>Quote Selections:</b>
                                        {reportValues.reportQuote1Sports},
                                        {reportValues.reportQuote2Politics},
                                        {reportValues.reportQuote3Art},
                                        {reportValues.reportQuote4Love},
                                        {reportValues.reportQuote5Business}</p>
                                    <p> </p>
                                    <p className="pdfPreviewKey"><b>Section 1:</b>
                                        <br></br>A {reportValues.reportLgDiv1Type} type widget with inputs of {reportValues.reportLgDiv1Data1}, {reportValues.reportLgDiv1Data2}, {reportValues.reportLgDiv1Data3}, {reportValues.reportLgDiv1Data4}, {reportValues.reportLgDiv1Data5}</p>
                                    <p className="pdfPreviewKey"><b>Section 2:</b>
                                        <br></br>A {reportValues.reportLgDiv2Type} type widget with inputs of {reportValues.reportLgDiv2Data1}, {reportValues.reportLgDiv2Data2}, {reportValues.reportLgDiv2Data3}, {reportValues.reportLgDiv2Data4}, {reportValues.reportLgDiv2Data5}</p>
                                    <p className="pdfPreviewKey"><b>Section 3:</b>
                                        <br></br>A {reportValues.reportLgDiv3Type} type widget with inputs of {reportValues.reportLgDiv3Data1}, {reportValues.reportLgDiv3Data2}, {reportValues.reportLgDiv3Data3}, {reportValues.reportLgDiv3Data4}, {reportValues.reportLgDiv3Data5}</p>
                                </div>
                                <p> This pdf will be emailed to <b>{userValues.email}</b> each morning starting tomorrow when you subscribe below! <br></br></p>
                                <p></p>
                            </div>
                            <div name="paymentCalcDiv">
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

                            {/* These buttons submit the main form: */}

                            {/* <div class="buttonHolderDiv">
                                <button type="submit" className="submitButton">Monthly: $4.99</button>
                                <button type="submit" className="submitButton">Annually: $39.99</button>
                            </div> */}



                        </div>

                        {/* STRIPE DIV (with toggle display) */}
                        <div id="stripeCheckoutButtonsDiv">
                            {/* BUTTON TO TRIGGER STRIPE MONTHLY PLAN */}
                            <form action="http://localhost:4242/create-monthly-checkout-session" method="POST">
                                <input type="hidden" id="monthlyPrice" name="priceId" />
                                <button id="stripeMonthlyButton">Monthly:<br></br>$4.99</button>
                            </form>


                            {/* BUTTON TO TRIGGER STRIPE MONTHLY PLAN */}
                            <form action="http://localhost:4242/create-annual-checkout-session" method="POST">
                                <input type="hidden" id="annualPrice" name="priceId" />
                                <button id="stripeAnnualButton">Annual:<br></br>49.99</button>
                            </form>
                        </div>

                        {/* LOGO HERE */}
                        <div id="formFooterDiv"><img src="http://www.b2results.com/wp-includes/images/mydailypdf/main-logo-white.png" alt="logo" id="formFooterLogo"></img></div>

                        {/* PREVIOUS BUTTON */}
                        <div class="buttonHolderDiv">
                            <button className="prevButton" id="finalPrevButton" onClick={handlePrev} >&#9668; Prev</button>
                        </div>

                    </form >

                    <ToastContainer />
                    <div id="stripeButtonDiv">

                    </div>
                </div >

            </Content >

            <Footer>
                <div id="footerBoxDiv">
                    <b>CURRENTLY IN TEST MODE:</b>
                    <br></br> -pdf/email will not send
                    <br></br> -enter card CC Num "4242 4242 4242 4242", any future date, and any 3-digit cv to simulate stripe payment flow.
                    <br></br> pdf/email will not send

                </div>

            </Footer>
        </Layout >

    );
}

export default Register;
