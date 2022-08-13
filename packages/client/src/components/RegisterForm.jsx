/**
 * Primary React Onboarding Form with Stripe Connection
 */

import React, { useState, useEffect } from "react"
import { Layout, Button } from 'antd'
import { ToastContainer, toast } from "react-toastify";
import { LargeBlockForm } from './LargeBlockForm';
import { api } from '../utils/api';

const { Content } = Layout;

const Step1 = (props) => {
    const { userValues, setUserValues } = props;
    return <div className="formStepHolder">
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
                defaultValue={userValues.firstName || ""}
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
        {/* LOGO HERE */}
        <div id="formFooterDiv"><img src="http://www.b2results.com/wp-includes/images/mydailypdf/main-logo-white.png" alt="logo" id="formFooterLogo"></img></div>
    </div >
};

const Step2 = (props) => {
    const { reportValues, setReportValues } = props;
    return <div className="formStepHolder">
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
                    <label htmlFor="quote_sports" className="checkOptionLabel">Sports</label>
                </li>
                <li>

                    <input type="checkbox" className="checkInputBox" name="reportQuote2Politics" onChange={(e) =>
                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                    } id="quote_politics" checked />
                    <label htmlFor="quote_politics" className="checkOptionLabel" >Politics</label>

                </li>
                <li>

                    <input type="checkbox" className="checkInputBox" name="reportQuote3Art" onChange={(e) =>
                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                    } id="quote_art" checked />
                    <label htmlFor="quote_art" className="checkOptionLabel" >Art</label>
                </li>
                <li>

                    <input type="checkbox" className="checkInputBox" name="reportQuote4Love" onChange={(e) =>
                        setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                    } id="quote_love" checked />
                    <label htmlFor="quote_love" className="checkOptionLabel" >Love</label>
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
                    <label htmlFor="quote_business" className="checkOptionLabel" >Business</label>
                </li>
            </ul>
        </div>
        {/* LOGO HERE */}
        <div id="formFooterDiv"><img src="http://www.b2results.com/wp-includes/images/mydailypdf/main-logo-white.png" alt="logo" id="formFooterLogo"></img></div>
    </div>
}

const Step6 = (props) => {
    const { userValues, setUserValues, reportValues, setReportValues } = props;
    return <div className="formStepHolder">
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

    </div>

}


export default function App() {
    const generateError = (error) =>
        toast.error(error, {
            position: "bottom-right",
        });

    const [formStep, setFormStep] = useState(1);

    const [userValues, setUserValues] = useState({ firstName: "", lastName: "", email: "", password: "", paymentName: "", paymentNumber: "", paymentExpire: "", paymentCode: "", paymentAddress1: "", paymentAddress2: "", paymentCity: "", paymentState: "", paymentZip: "", paymentPromo: "" }); // 1 - DEFINE variables

    const [reportValues, setReportValues] = useState({ reportName: "", reportType: "BASIC", reportZip: "", reportQuote1Sports: "Yes", reportQuote2Politics: "Yes", reportQuote3Art: "Yes", reportQuote4Love: "Yes", reportQuote5Business: true, reportLgDiv1Type: "twitterDiv", reportLgDiv1Data1: "", reportLgDiv1Data2: "", reportLgDiv1Data3: "", reportLgDiv1Data4: "", reportLgDiv1Data5: "", reportLgDiv2Type: "twitterDiv", reportLgDiv2Data1: "", reportLgDiv2Data2: "", reportLgDiv2Data3: "", reportLgDiv2Data4: "", reportLgDiv2Data5: "", reportLgDiv3Type: "twitterDiv", reportLgDiv3Data1: "", reportLgDiv3Data2: "", reportLgDiv3Data3: "", reportLgDiv3Data4: "", reportLgDiv3Data5: "" });
    const [stepValue, setStepValue] = useState({ stepValue: 1 });

    const handleSubmit = async (event) => { // LOGIC ON SUBMIT...
        event.preventDefault()
        try {
            const { mongoData } = await api.post(  // POST THE "data" 
                "/register",
                {
                    ...userValues, ...reportValues,
                },
            );

            setNextStep()

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
    }

    const setNextStep = () => {
        if (formStep === 5) {
            setFormStep(formStep + 1)
            handleSubmit()
            // do the magic
        } else {
            setFormStep(formStep + 1)
        }
    }

    const setPrevStep = () => {
        setFormStep(formStep - 1)
    }

    return <Content>
        <form onSubmit={(e) => handleSubmit(e)}>
            {formStep === 1 && <Step1 userValues={userValues} setUserValues={setUserValues} />}
            {formStep === 2 && <Step2 reportValues={reportValues} setReportValues={setReportValues} />}

            {formStep === 3 && <LargeBlockForm prefix='reportLargeDiv1' title="First Large Block:" stepImageNum='3' reportValues={reportValues} setReportValues={setReportValues} />}
            {formStep === 4 && <LargeBlockForm prefix='reportLargeDiv2' title="Second Large Block:" stepImageNum='4' reportValues={reportValues} setReportValues={setReportValues} />}
            {formStep === 5 && <LargeBlockForm prefix='reportLargeDiv3' title="Third Large Block:" stepImageNum='5' reportValues={reportValues} setReportValues={setReportValues} />}

            {formStep === 6 && <Step6 userValues={userValues} setUserValues={setUserValues} reportValues={reportValues} setReportValues={setReportValues} />}

            {formStep !== 1 && <Button onClick={setPrevStep}>previous</Button>}
            {/* NEED TO ADD 'or 6' TO NEXT LINE */}
            {formStep !== 5 && <Button onClick={setNextStep}>next</Button>}
            {formStep == 5 && <Button onClick={setNextStep}>PREVIEW</Button>}
            {formStep == 6 && <form action="http://localhost:4242/create-monthly-checkout-session" method="POST">
                <input type="hidden" id="monthlyPrice" name="priceId" />
                <button id="stripeMonthlyButton">Monthly:<br></br>$4.99</button>
            </form>}
            {formStep == 6 && <form action="http://localhost:4242/create-annual-checkout-session" method="POST">
                <input type="hidden" id="annualPrice" name="priceId" />
                <button id="stripeAnnualButton">Annual:<br></br>49.99</button>
            </form>}
        </form>
    </Content>;
}