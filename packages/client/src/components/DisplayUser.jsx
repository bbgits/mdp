// Imports
import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import EditUser from "./EditUser";

// COMPONENT FUNCTION
export default function DisplayUser(props) {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [user, setUser] = useState(null);

    var fetchString = "http://localhost:4000/getOneUser/" + props.myUserId;

    // MODAL STUFF
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    // USE THIS SYNTAX FOR NAMING FUNCTIONS:
    const openModal = () => {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    async function fetchUserData() {
        if (!user) {
            console.log("fetchString: " + fetchString);
            const response = await fetch(fetchString);
            setUser(await response.json());
        }
    };

    const handleSave = (u) => {
        console.log("HANDLE SAVE", u)
        setUser(u)
    }

    useEffect(() => {
        fetchUserData();
    }, [user]);

    if (!user) {
        return "loading...";
    }
    console.log(user)
    return (
        <div className="displaySubDiv">
            <p>first name: <b>{user.firstName}</b></p>
            <p>last name: <b>{user.lastName}</b></p>
            <p>email: <b>{user.email}</b></p>
            <button onClick={openModal}>Open Modal!</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit User Details</h2>
                <div>I am a modal</div>
                {/* Passing set user functin and props from parent to user */}
                <div><EditUser onSave={handleSave} userId={props.myUserId} firstName={user.firstName} lastName={user.lastName} email={user.email}></EditUser></div>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>


    );
}


const a = () => {
    let d = () => {
        console.log('hello 1')
    }
    const b = () => {
        let d = () => {
            console.log('hello 2')
        }
    }

    const c = () => {
        d()
        b()
        d()
    }
    c()
}
a()




