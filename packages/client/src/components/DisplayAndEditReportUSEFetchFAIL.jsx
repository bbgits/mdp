/*
*  Component to Display (and eventually, edit) a Report's Parameters
*/
import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";


function DisplayAndEditReport() {
    const { data, loading, error } = useFetch("http://localhost:4000/getOneReport/62fa3f959eb42db6842b9524");

    if (loading)

        return <h1> loading . . . </h1>;

    if (error) console.log(error);



    return <div className="accountDisplayReport">
        <p>* hello from DisplayAndEditReport.jsx *</p>
        <h2>{data}</h2>

    </div>
}

export default DisplayAndEditReport;






