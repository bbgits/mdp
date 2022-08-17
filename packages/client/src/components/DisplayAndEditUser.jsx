import React, { useState, useEffect } from "react";

export default function DisplayAndEditUser(props) {
    const [user, setUser] = useState(null);

    var fetchString = "http://localhost:4000/getOneUser/" + props.myUserId;

    async function fetchUserData() {
        const response = await fetch(fetchString);
        setUser(await response.json());
    };

    useEffect(() => {
        fetchUserData();
    }, [user]);

    if (!user) {
        return "loading...";
    }

    return (
        <div className="displaySubDiv">
            <p>first name: <b>{user.firstName}</b></p>
            <p>last name: <b>{user.lastName}</b></p>
            <p>email: <b>{user.email}</b></p>
        </div>

    );
}






