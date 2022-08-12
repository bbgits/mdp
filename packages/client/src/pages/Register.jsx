/* 

Main landing page for new users. Registration form:
-steps handled by components/RegisterForm
-submits user data to DB/users and report data to DB/reports
-last page confirms settings and links to stripe paymens

*/

import React, { useState, useEffect } from "react";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Descriptions, PageHeader, Menu, Layout, Button } from 'antd';
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import MyHeader from '../components/MyHeader';
import RegisterForm from '../components/RegisterForm';
import MyFooter from '../components/MyFooter'
import { api } from '../utils/api';

const { Header, Footer, Sider, Content } = Layout;

function Register() {

    const [cookies] = useCookies(["cookie-name"]);

    // todo: add dropdown component


    // if the cookies match, and you are a user
    // navigate to the home 
    const navigate = useNavigate();
    useEffect(() => {
        if (cookies.jwt) {
            navigate("/");
        }
    }, [cookies, navigate]);


    // user data will be sent to db/users
    const [userValues, setUserValues] = useState({ firstName: "", lastName: "", email: "", password: "", paymentName: "", paymentNumber: "", paymentExpire: "", paymentCode: "", paymentAddress1: "", paymentAddress2: "", paymentCity: "", paymentState: "", paymentZip: "", paymentPromo: "" }); // 1 - DEFINE variables

    // report data will be sent to db/reports
    const [reportValues, setReportValues] = useState({ reportName: "", reportType: "BASIC", reportZip: "", reportQuote1Sports: "Yes", reportQuote2Politics: "Yes", reportQuote3Art: "Yes", reportQuote4Love: "Yes", reportQuote5Business: true, reportLgDiv1Type: "twitterDiv", reportLgDiv1Data1: "", reportLgDiv1Data2: "", reportLgDiv1Data3: "", reportLgDiv1Data4: "", reportLgDiv1Data5: "", reportLgDiv2Type: "twitterDiv", reportLgDiv2Data1: "", reportLgDiv2Data2: "", reportLgDiv2Data3: "", reportLgDiv2Data4: "", reportLgDiv2Data5: "", reportLgDiv3Type: "twitterDiv", reportLgDiv3Data1: "", reportLgDiv3Data2: "", reportLgDiv3Data3: "", reportLgDiv3Data4: "", reportLgDiv3Data5: "" });

    const generateError = (error) =>
        toast.error(error, {
            position: "bottom-right",
        });

    // Previous SUBMIT solution, saving for later
    // const handleSubmit = async (event) => { // LOGIC ON SUBMIT...
    //     event.preventDefault()
    //     try {
    //         const { mongoData } = await api.post(  // POST THE "data" 
    //             "/register",
    //             {
    //                 ...userValues, ...reportValues,
    //             },
    //         );

    //         document.getElementById("headerMainDiv").style.display = "none"
    //         document.getElementById("step1div").style.display = "none"
    //         document.getElementById("step2div").style.display = "none"
    //         document.getElementById("step3div").style.display = "none"
    //         document.getElementById("step4div").style.display = "none"
    //         document.getElementById("step5div").style.display = "none"
    //         document.getElementById("step6div").style.display = "flex"
    //         document.getElementById("finalPrevButton").style.display = "flex"
    //         document.getElementById("stripeCheckoutButtonsDiv").style.display = "flex"

    //         if (mongoData) {
    //             if (mongoData.errors) {
    //                 const { firstName, lastName, email, password, stripeID, paymentPromo, reportName, reportType } = mongoData.errors;
    //                 if (firstName) generateError(firstName);
    //                 else if (lastName) generateError(lastName);
    //                 else if (email) generateError(email); // 2 - ERROR MESSAGE for each variable
    //                 else if (password) generateError(password);
    //                 else if (paymentPromo) generateError(paymentPromo);
    //                 else if (reportName) generateError(reportName);
    //                 else if (reportType) generateError(reportType);
    //                 return;
    //             } else {

    //             }
    //         }
    //     } catch (ex) {
    //         console.log(ex);
    //     }
    // };



    return (
        <Layout>
            <Header>
                <MyHeader />
            </Header>
            <Content>
                <RegisterForm />
                <ToastContainer />
            </Content >
            <Footer>
                <MyFooter />
            </Footer>
        </Layout >

    );
}


export default Register;
