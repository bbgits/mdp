import React, { useState, useEffect } from "react";

export default function DisplayAndEditReport(props) {
    const [report, setReport] = useState(null);

    async function fetchReportData(id) {
        const response = await fetch("http://localhost:4000/getOneReport/62fa3f959eb42db6842b9524");
        setReport(await response.json());
    }

    useEffect(() => {
        fetchReportData(props.id);
    }, [props.id]);

    if (!report) {
        return "loading...";
    }

    return (
        <div className="accountDisplayReport">
            <h2>Report Summary:</h2>
            <p><b>- - - Header Info - - -</b></p>
            <p><b>report name: </b>{report.reportName}</p>
            <p><b>email: </b>{report.email}</p>
            <p><b>zip code: </b>{report.reportZip}</p>
            <p><b>include sports quotes: </b>{report.reportQuote1Sports}</p>
            <p><b>include politics quotes: </b>{report.reportQuote2Politics}</p>
            <p><b>include art quotes: </b>{report.reportQuote3Art}</p>
            <p><b>include love quotes: </b>{report.reportQuote4Love}</p>
            <p><b>include business quotes: </b>{report.reportQuote5Business}</p>
            <p><b>- - - Lg Block 1 - - -</b></p>
            <p><b>block type: </b>{report.reportLgDiv1Type}</p>
            <p><b>input1: </b>{report.reportLgDiv1Data1}</p>
            <p><b>input2: </b>{report.reportLgDiv1Data2}</p>
            <p><b>input3: </b>{report.reportLgDiv1Data3}</p>
            <p><b>input4: </b>{report.reportLgDiv1Data4}</p>
            <p><b>input5: </b>{report.reportLgDiv1Data5}</p>
            <p><b>- - - Lg Block 2 - - -</b></p>
            <p><b>block type: </b>{report.reportLgDiv2Type}</p>
            <p><b>input1: </b>{report.reportLgDiv2Data1}</p>
            <p><b>input2: </b>{report.reportLgDiv2Data2}</p>
            <p><b>input3: </b>{report.reportLgDiv2Data3}</p>
            <p><b>input4: </b>{report.reportLgDiv2Data4}</p>
            <p><b>input5: </b>{report.reportLgDiv2Data5}</p>
            <p><b>- - - Lg Block 3 - - -</b></p>
            <p><b>block type: </b>{report.reportLgDiv3Type}</p>
            <p><b>input1: </b>{report.reportLgDiv3Data1}</p>
            <p><b>input2: </b>{report.reportLgDiv3Data2}</p>
            <p><b>input3: </b>{report.reportLgDiv3Data3}</p>
            <p><b>input4: </b>{report.reportLgDiv3Data4}</p>
            <p><b>input5: </b>{report.reportLgDiv3Data5}</p>
        </div>

    );
}






