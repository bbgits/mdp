/**
 *  Main landing page for new users. Registration form:
 * - steps handled by components/RegisterForm
 * - submits user data to DB/users and report data to DB/reports
 * - last page confirms settings and links to stripe paymens
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
    const [userValues, setUserValues] = useState({ firstName: "", lastName: "", email: "", password: "", paymentType: "", stripeID: "", userPromo: "", myToken: "" }); // 1 - DEFINE variables

    // report data will be sent to db/reports
    const [reportValues, setReportValues] = useState({ reportName: "", reportType: "BASIC", reportZip: "", reportQuote1Sports: true, reportQuote2Politics: true, reportQuote3Art: true, reportQuote4Love: true, reportQuote5Business: true, reportLgDiv1Type: "Twitter", reportLgDiv1Data1: "", reportLgDiv1Data2: "", reportLgDiv1Data3: "", reportLgDiv1Data4: "", reportLgDiv1Data5: "", reportLgDiv2Type: "Twitter", reportLgDiv2Data1: "", reportLgDiv2Data2: "", reportLgDiv2Data3: "", reportLgDiv2Data4: "", reportLgDiv2Data5: "", reportLgDiv3Type: "Twitter", reportLgDiv3Data1: "", reportLgDiv3Data2: "", reportLgDiv3Data3: "", reportLgDiv3Data4: "", reportLgDiv3Data5: "" });

    const generateError = (error) =>
        toast.error(error, {
            position: "bottom-right",
        });

    return (
        <Layout>
            <Header>
                <MyHeader />
            </Header>
            <Content>
                <div className="formStepHolder">
                    <RegisterForm />
                </div>
                <ToastContainer />
            </Content >
            <Footer>
                <MyFooter />
            </Footer>
        </Layout >

    );
}


export default Register;
