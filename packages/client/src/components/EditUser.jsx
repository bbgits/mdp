import React, { useState, useEffect } from "react";
import { Layout, Button } from 'antd';
import { api } from '../utils/api';
import { toast } from "react-toastify";
export default function EditUser(props) {

    const generateError = (error) =>
        toast.error(error, {
            position: "bottom-right",
        });

    const [userValues, setUserValues] = useState({
        firstName: props.firstName, lastName: props.lastName, email: props.email,
    })
    const [user, setUser] = useState(null);

    const handleSaveChanges = async (event) => { // LOGIC ON SUBMIT...
        event.preventDefault()
        try {
            const result = await api.put(  // PUT data
                "/updateOneUser/" + props.userId,
                userValues,
            );

            console.log(props.userId)
            console.log(props.firstName)
            console.log(props.lastName)
            console.log(props.email)
            console.log(userValues.firstName)

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
                    console.log("it worked!")
                    console.log(result)
                    props.onSave(result.data)
                    setUser(result.data)
                }
            }
        } catch (ex) {
            console.log(ex);
        }
    }

    var fetchString = "http://localhost:4000/getOneUser/" + props.myUserId;


    async function fetchUserData() {
        if (!user) {
            console.log("fetchString: " + fetchString);
            const response = await fetch(fetchString);
            setUser(await response.json());
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [user]);

    if (!user) {
        return "loading...";
    }

    return (
        <div className="displaySubDiv">
            <div className="horizontalLabelDiv">
                <label htmlFor="firstName" className="textInputLabel" for="right-label">First Name</label>
                <input
                    name="firstName"
                    type="firstName"
                    placeholder={props.firstName}
                    defaultValue={props.firstName}
                    onChange={(e) =>
                        setUserValues({ ...userValues, [e.target.name]: e.target.value }) // 3. Link input to SetUserValues
                    }

                />
            </div>
            <p>edit first name: <b>{props.firstName}</b></p>
            <p>edit last name: <b>{props.lastName}</b></p>
            <p>edit email: <b>{props.email}</b></p>
            <Button type="submit" className="previewSubmitButton" onClick={handleSaveChanges}>save changes</Button>
        </div>

    );
}






