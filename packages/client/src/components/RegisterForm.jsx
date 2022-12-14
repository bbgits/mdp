/**
  Primary React Onboarding Form with Stripe Connection
 */

import React, { useState } from "react";
import { Layout, Button } from 'antd';
import { toast } from "react-toastify";
import { LargeBlockForm } from './LargeBlockForm';
import { api } from '../utils/api';

const { Content } = Layout;

const Step1 = (props) => {
    const { userValues, setUserValues } = props;
    return <div>
        <div id="stepperBoxDiv">
            <img src={require('../assets/formProgressBar1.png')}></img>
        </div>
        <h2>Let's Get Started!</h2>

        <div className="horizontalLabelDiv">
            <label htmlFor="firstName" className="textInputLabel" for="right-label">First Name</label>
            <input
                name="firstName"
                type="firstName"
                placeholder="Martin"
                defaultValue={userValues.firstName || ""}
                onChange={(e) =>
                    setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                }

            />
        </div>
        <div className="horizontalLabelDiv">
            <label htmlFor="lastName" className="textInputLabel" >Last Name</label>
            <input
                name="lastName"
                type="lastName"
                placeholder="Eden"
                defaultValue={userValues.lastName || ""}
                onChange={(e) =>
                    setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                }
            />
        </div>
        <div className="horizontalLabelDiv">
            <label htmlFor="email" className="textInputLabel" >Email:</label>
            <input
                name="email"
                type="email"
                placeholder="alex@aol.com"
                defaultValue={userValues.email || ""}
                onChange={(e) =>
                    setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                }
            />
        </div>
        <div className="horizontalLabelDiv">
            <label htmlFor="password" className="textInputLabel" >Password:</label>
            <input
                name="password"
                type="password"
                placeholder="a-$tr0nG-P@Ssw0RD"
                defaultValue={userValues.password || ""}

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
    return <div>
        <div id="stepperBoxDiv">
            <img src={require('../assets/formProgressBar2.png')}></img>

        </div>
        <h2>Set info for Heading:</h2>
        <div className="horizontalLabelDiv">
            <label className="textInputLabel" htmlFor="reportName">Report Name:</label>
            <input
                name="reportName"
                type="reportName"
                placeholder="Alex's Daily Report"
                defaultValue={reportValues.reportName || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
        </div>
        <div className="horizontalLabelDiv">
            <label className="textInputLabel" htmlFor="reportZip">Zip Code:</label>
            <input
                name="reportZip"
                type="reportZip"
                placeholder="Zip code used for Weather!"
                defaultValue={reportValues.reportZip || ""}
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
                        name="reportQuote1Sports"
                        type="checkbox"
                        className="checkInputBox"
                        defaultValue={reportValues.reportQuote1Sports || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                        id="quote_sports"
                        checked />
                    <label htmlFor="quote_sports" className="checkOptionLabel">Sports</label>
                </li>

                <li>
                    <input
                        name="reportQuote2Politics"
                        type="checkbox"
                        className="checkInputBox"
                        defaultValue={reportValues.reportQuote2Politics || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        } id="quote_politics" checked />
                    <label htmlFor="quote_politics" className="checkOptionLabel" >Politics</label>

                </li>

                <li>
                    <input
                        name="reportQuote3Art"
                        type="checkbox"
                        className="checkInputBox"
                        defaultValue={reportValues.reportQuote3Art || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        } id="quote_art" checked />
                    <label htmlFor="quote_art" className="checkOptionLabel" >Art</label>
                </li>
                <li>
                    <input
                        name="reportQuote4Love"
                        type="checkbox"
                        className="checkInputBox"
                        defaultValue={reportValues.reportQuote4Love || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        } id="quote_love" checked />
                    <label htmlFor="quote_love" className="checkOptionLabel" >Love</label>
                </li>

                <li>
                    <input
                        name="reportQuote5Business"
                        type="checkbox"
                        className="checkInputBox"
                        defaultValue={reportValues.reportQuote5Business || ""}
                        onChange={(e) => {
                            {
                                if (e.target.value === true) {
                                    e.target.value = false
                                } else if (e.target.value === false) {
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

// Steps 3,4,5 controlled by LargeBlockForm.jsx

const Step6 = (props) => {
    const { userValues, setUserValues, reportValues, setReportValues } = props;
    return <div>
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
                name="paymentPromo"
                type="paymentPromo"
                placeholder="Martin"
                defaultValue={reportValues.paymentPromo || ""}
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

    const [userValues, setUserValues] = useState({ firstName: "", lastName: "", email: "", password: "", paymentName: "", paymentNumber: "", paymentExpire: "", paymentCode: "", paymentAddress1: "", paymentAddress2: "", paymentCity: "", paymentState: "", paymentZip: "", paymentPromo: "", myToken: "" }); // 1 - DEFINE variables

    const [reportValues, setReportValues] = useState({ reportName: "", reportType: "BASIC", reportZip: "", reportQuote1Sports: true, reportQuote2Politics: true, reportQuote3Art: true, reportQuote4Love: true, reportQuote5Business: true, reportLgDiv1Type: "Twitter", reportLgDiv1Data1: "", reportLgDiv1Data2: "", reportLgDiv1Data3: "", reportLgDiv1Data4: "", reportLgDiv1Data5: "", reportLgDiv2Type: "Twitter", reportLgDiv2Data1: "", reportLgDiv2Data2: "", reportLgDiv2Data3: "", reportLgDiv2Data4: "", reportLgDiv2Data5: "", reportLgDiv3Type: "Twitter", reportLgDiv3Data1: "", reportLgDiv3Data2: "", reportLgDiv3Data3: "", reportLgDiv3Data4: "", reportLgDiv3Data5: "" });

    const [stepValue, setStepValue] = useState({ stepValue: 1 });

    const handleSubmit = async (event) => { // LOGIC ON SUBMIT...
        event.preventDefault()
        try {
            const result = await api.post(  // POST data
                "/register",
                {
                    ...userValues, ...reportValues,
                },
            );

            console.log(result)

            setNextStep()

            if (result) {
                if (result.errors) {
                    const { firstName, lastName, email, password, stripeID, paymentPromo, reportName, reportType } = result.errors;
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
        } else {
            setFormStep(formStep + 1)
        }
    }

    const setPrevStep = () => {
        setFormStep(formStep - 1)
    }

    return <Content>
        <form onSubmit={(e) => handleSubmit(e)}>

            {/* If state of formStep is 1, display Step1 */}
            {formStep === 1 && <Step1 userValues={userValues} setUserValues={setUserValues} />}

            {/* If state of formStep is 2, display Step2 */}
            {formStep === 2 && <Step2 reportValues={reportValues} setReportValues={setReportValues} />}

            {/* If state of formStep is 3, display Step3 */}
            {formStep === 3 && <LargeBlockForm
                prefix='reportLgDiv1'
                title="First Large Block:"
                stepImageNum='3'
                reportValues={reportValues}
                defaultType={reportValues.reportLgDiv1Type}
                defaultData1={reportValues.reportLgDiv1Data1}
                defaultData2={reportValues.reportLgDiv1Data2}
                defaultData3={reportValues.reportLgDiv1Data3}
                defaultData4={reportValues.reportLgDiv1Data4}
                defaultData5={reportValues.reportLgDiv1Data5}
                setReportValues={setReportValues} />}

            {/* If state of formStep is 4, display Step4 */}
            {formStep === 4 && <LargeBlockForm
                prefix='reportLgDiv2'
                title="Second Large Block:"
                stepImageNum='4'
                reportValues={reportValues}
                defaultType={reportValues.reportLgDiv2Type}
                defaultData1={reportValues.reportLgDiv2Data1}
                defaultData2={reportValues.reportLgDiv2Data2}
                defaultData3={reportValues.reportLgDiv2Data3}
                defaultData4={reportValues.reportLgDiv2Data4}
                defaultData5={reportValues.reportLgDiv2Data5}
                setReportValues={setReportValues} />}

            {/* If state of formStep is 5, display Step6 */}
            {formStep === 5 && <LargeBlockForm
                prefix='reportLgDiv3'
                title="Third Large Block:"
                stepImageNum='5'
                reportValues={reportValues}
                defaultType={reportValues.reportLgDiv3Type}
                defaultData1={reportValues.reportLgDiv3Data1}
                defaultData2={reportValues.reportLgDiv3Data2}
                defaultData3={reportValues.reportLgDiv3Data3}
                defaultData4={reportValues.reportLgDiv3Data4}
                defaultData5={reportValues.reportLgDiv3Data5}
                setReportValues={setReportValues}
            />}

            {/* If state of formStep is 6, display Step6 */}
            {formStep === 6 && <Step6 userValues={userValues} setUserValues={setUserValues} reportValues={reportValues} setReportValues={setReportValues} />}


            {/* after inputs area, display appropriate buttons*/}
            <div className="formButtonHolder">

                {formStep === 1 && <div className="formButtonHolderInnerDiv">
                    <Button className="nextButton" onClick={setNextStep}>next</Button>
                </div>}

                {formStep === 2 && <div className="formButtonHolderInnerDiv">
                    <Button className="prevButton" onClick={setPrevStep}>previous</Button>
                    <Button className="nextButton" onClick={setNextStep}>next</Button>
                </div>
                }

                {formStep === 3 && <div className="formButtonHolderInnerDiv">
                    <Button className="prevButton" onClick={setPrevStep}>previous</Button>
                    <Button className="nextButton" onClick={setNextStep}>next</Button>
                </div>
                }

                {formStep === 4 && <div className="formButtonHolderInnerDiv">
                    <Button className="prevButton" onClick={setPrevStep}>previous</Button>
                    <Button className="nextButton" onClick={setNextStep}>next</Button>
                </div>
                }

                {formStep === 5 && <div className="formButtonHolderInnerDiv">
                    <Button className="prevButton" onClick={setPrevStep}>previous</Button>
                    <Button type="submit" className="previewSubmitButton" onClick={handleSubmit}>preview...</Button>
                </div>
                }

                {formStep === 6 && <div className="formButtonHolderOuterDivCol">

                    <h3>Save BIG with an Annual Subscription:</h3>

                    <div className="formButtonHolderInnerDiv">
                        <form action="http://localhost:4242/create-monthly-checkout-session" className="stripeFormDiv" method="POST">
                            <input type="hidden" id="monthlyPrice" name="priceId" />
                            <button id="stripeMonthlyButton">Monthly:<br></br>$4.99</button>
                        </form>
                        <form action="http://localhost:4242/create-annual-checkout-session" method="POST" className="stripeFormDiv">
                            <input type="hidden" id="annualPrice" name="priceId" />
                            <button id="stripeAnnualButton">Annual:<br></br>49.99</button>
                        </form>
                    </div>

                    <p>Need to change something?</p>

                    <div className="formButtonHolderInnerDiv">
                        <Button className="prevButton" onClick={setPrevStep}>go back</Button>
                    </div>

                </div>
                }
            </div>
        </form>
    </Content>;
}
