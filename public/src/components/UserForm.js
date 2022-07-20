import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';



export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        zipCode: '',
        quoteSubjects: [],
        div01Type: '',
        div01Data: {},
        div02Type: '',
        div02Data: {},
        div03Type: '',
        div03Data: {},
        billingPromo: '',
        billingFirstName: '',
        billingLastName: '',
        billingNumber: '',
        billingAddress1: '',
        billingAddress2: '',
        billingCity: '',
        billingState: '',
        billingZip: '',
    }



    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    //Render

    render() {
        // Unpack step number from state
        const { step } = this.state;

        // Unpack form data from state
        const { firstName, lastName, email, zipCode, quoteSubjects, div01Type, div01Data, div02Type, div02Data, div03Type, div03Data, billingPromo, billingFirstName, billingLastName, billingNumber, billingAddress1, billingAddress2, billingCity, billingState, billingZip } = this.state;

        // Assign form data to 'values'
        const values = { firstName, lastName, email, zipCode, quoteSubjects, div01Type, div01Data, div02Type, div02Data, div03Type, div03Data, billingPromo, billingFirstName, billingLastName, billingNumber, billingAddress1, billingAddress2, billingCity, billingState, billingZip }

        // switch to a different step
        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handle}
                        values={values}
                    />
                )
            case 2:
                return <h1>Customize Report Top Bar</h1>
            case 3:
                return <h1>Customize Report Div 1</h1>
            case 4:
                return <h1>Customize Report Div 2</h1>
            case 5:
                return <h1>Customize Report Div 3</h1>
            case 6:
                return <h1>Confirm and CC Info</h1>
        }

        return (
            <div>

            </div>
        )
    }

}

export default UserForm