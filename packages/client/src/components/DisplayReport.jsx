import React, { useState, useEffect } from "react";

export default function DisplayReport(props) {
    const [report, setReport] = useState(null);

    var fetchString = "http://localhost:4000/getOneReport/" + props.myReportId;



    async function fetchReportData() {
        if (!report) {
            console.log("fetchString: " + fetchString);
            const response = await fetch(fetchString);
            setReport(await response.json());
        }
    };

    useEffect(() => {
        fetchReportData();
    }, [report]);

    if (!report) {
        return "loading...";
    }

    return (
        <div className="displayReport">
            <div className="displaySubDiv">
                <h4 className="displaySubDivTitle"> Header Info </h4>
                <div>
                    <span>report name: <b>{report.reportName}</b></span>
                    <span> / email: <b>{report.email}</b></span>
                    <span> / sports quotes: <b>{report.reportQuote1Sports}</b></span>
                    <span> / politics quotes: <b>{report.reportQuote2Politics}</b></span>
                    <span> / art quotes: <b>{report.reportQuote3Art}</b></span>
                    <span> / love quotes: <b>{report.reportQuote4Love}</b></span>
                    <span> / business quotes: <b>{report.reportQuote5Business}</b></span>
                </div>
            </div>
            <div className="displaySubDiv">
                <h4 className="displaySubDivTitle"> Block 1 Type: <b>{report.reportLgDiv1Type}</b>  </h4>
                <div>
                    <span>input1: <b>{report.reportLgDiv1Data1}</b></span>
                    <span> / input2: <b>{report.reportLgDiv1Data2}</b></span>
                    <span> / input3: <b>{report.reportLgDiv1Data3}</b></span>
                    <span> / input4: <b>{report.reportLgDiv1Data4}</b></span>
                    <span> / input5: <b>{report.reportLgDiv1Data5}</b></span>

                </div>
            </div>
            <div className="displaySubDiv">
                <h4 className="displaySubDivTitle"> Block 2 Type: <b>{report.reportLgDiv2Type}</b>  </h4>
                <div>
                    <span>input1: <b>{report.reportLgDiv2Data1}</b></span>
                    <span> / input2: <b>{report.reportLgDiv2Data2}</b></span>
                    <span> / input3: <b>{report.reportLgDiv2Data3}</b></span>
                    <span> / input4: <b>{report.reportLgDiv2Data4}</b></span>
                    <span> / input5: <b>{report.reportLgDiv2Data5}</b></span>

                </div>
            </div>
            <div className="displaySubDiv">
                <h4 className="displaySubDivTitle"> Block 3 Type: <b>{report.reportLgDiv3Type}</b>  </h4>
                <div>
                    <span>input1: <b>{report.reportLgDiv3Data1}</b></span>
                    <span> / input2: <b>{report.reportLgDiv3Data2}</b></span>
                    <span> / input3: <b>{report.reportLgDiv3Data3}</b></span>
                    <span> / input4: <b>{report.reportLgDiv3Data4}</b></span>
                    <span> / input5: <b>{report.reportLgDiv3Data5}</b></span>

                </div>
            </div>
        </div>

    );
}






