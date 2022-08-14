/**
 * Renders the form parts for getting summaries from different sources.
 */
import React from 'react'

export const LargeBlockForm = (props) => {
    // can make this value Twitter | Insta | News
    const [type, setType] = React.useState("Twitter")
    const { reportValues, setReportValues } = props;

    return <div className="formStepHolder">
        <div id="stepperBoxDiv">
            <img src={require(`../assets/formProgressBar${props.stepImageNum}.png`)}></img>

        </div>
        <h2>{props.title}</h2>
        <div>
            <label htmlFor={`${props.prefix}Type`}>Select Large Div Type:</label>
            <select
                name={`${props.prefix}Type`}
                className="dropdownSelector"
                id={`${props.prefix}Type`}
                defaultValue={`${props.defaultType}` || "Twitter"}
                onChange={(e) => {
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                    setType(e.target.value)
                }}>
                <option value="Twitter">Twitter Summaries</option>
                <option value="Insta">Insta Summaries</option>
                <option value="News">News Items</option>
            </select>
        </div>
        {/***********************************   Option A   ************************************** ******************************************************************************************/}


        {type === 'Twitter' && <div id="LgDiv3Sub1Twitter">
            <h5>TWITTER: Enter up to 5 twitter handles below.  Do not include the @ symbol!  </h5>
            <label htmlFor={`${props.prefix}Data1`}>Username 1:</label>
            <input
                name={`${props.prefix}Data1`}
                type={`${props.prefix}Data1`}
                placeholder="BurnsUSA"
                defaultValue={`${props.defaultData1}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
            <label htmlFor={`${props.prefix}Data2`}>Username 2:</label>
            <input
                name={`${props.prefix}Data2`}
                type={`${props.prefix}Data2`}
                placeholder="BurnsUSA2"
                defaultValue={`${props.defaultData2}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
            <label htmlFor={`${props.prefix}Data3`}>Username 3:</label>
            <input
                name={`${props.prefix}Data3`}
                type={`${props.prefix}Data3`}
                placeholder="BurnsUSA3"
                defaultValue={`${props.defaultData3}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
            <label htmlFor={`${props.prefix}Data4`}>Username 4:</label>
            <input
                name={`${props.prefix}Data4`}
                type={`${props.prefix}Data4`}
                placeholder="BurnsUSA4"
                defaultValue={`${props.defaultData4}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
            <label htmlFor={`${props.prefix}Data5`}>Username 5:</label>
            <input
                name={`${props.prefix}Data5`}
                type={`${props.prefix}Data5`}
                placeholder="BurnsUSA5"
                defaultValue={`${props.defaultData5}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
        </div>
        }
        {/***********************************   Option 5B   ************************************** ******************************************************************************************/}
        {type === 'Insta' && <div>
            <h5>INSTAGRAM: Enter up to 5 instagram handles below.  Do not include the @ symbol!  </h5>
            <label htmlFor={`${props.prefix}Data1`}>Username 1:</label>
            <input
                name={`${props.prefix}Data1`}
                type={`${props.prefix}Data1`}
                placeholder="BurnsUSA"

                defaultValue={`${props.defaultData1}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
            <label htmlFor={`${props.prefix}Data2`}>Username 2:</label>
            <input
                name={`${props.prefix}Data2`}
                type={`${props.prefix}Data2`}
                placeholder="BurnsUSA2"

                defaultValue={`${props.defaultData2}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
            <label htmlFor={`${props.prefix}Data3`}>Username 3:</label>
            <input
                name={`${props.prefix}Data3`}
                type={`${props.prefix}Data3`}
                placeholder="BurnsUSA3"
                defaultValue={`${props.defaultData3}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
            <label htmlFor={`${props.prefix}Data4`}>Username 4:</label>
            <input
                name={`${props.prefix}Data4`}
                type={`${props.prefix}Data4`}
                placeholder="BurnsUSA4"

                defaultValue={`${props.defaultData4}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
            <label htmlFor={`${props.prefix}Data5`}>Username 5:</label>
            <input
                name={`${props.prefix}Data5`}
                type={`${props.prefix}Data5`}
                placeholder="BurnsUSA5"
                defaultValue={`${props.defaultData5}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
        </div>}
        {/***********************************   Option 5C   ************************************** ******************************************************************************************/}
        {type === 'News' && <div>
            <h4>NEWS: Enter three search terms below.  Each news tile returns one complete news story based on the search phrases you enter below. The terms should start with the most specific, and end with the most broad.  They do not need to be related, but you will get more consistent results if they are. If you want a fairly consistent return, we recommend providing three "nested" areas of interest.  For Example: "chicago alderman", "chicago politics", and "american politics" might be a good search and so might "College Hockey", "Hockey", "Sports".  Ultimately its Up to you!  </h4>
            <label htmlFor={`${props.prefix}Data1`}>Username 1:</label>
            <input
                name={`${props.prefix}Data1`}
                type={`${props.prefix}Data1`}
                placeholder="BurnsUSA"

                defaultValue={`${props.defaultData1}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
            <label htmlFor={`${props.prefix}Data2`}>Username 2:</label>
            <input
                name={`${props.prefix}Data2`}
                type={`${props.prefix}Data2`}
                placeholder="BurnsUSA2"

                defaultValue={`${props.defaultData2}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
            <label htmlFor={`${props.prefix}Data3`}>Username 3:</label>
            <input
                name={`${props.prefix}Data3`}
                type={`${props.prefix}Data3`}
                placeholder="BurnsUSA3"
                defaultValue={`${props.defaultData3}` || ""}
                onChange={(e) =>
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                }
            />
        </div>}
        <div className="buttonSpacer"></div>
        {/* LOGO HERE */}
        <div id="formFooterDiv"><img src="http://www.b2results.com/wp-includes/images/mydailypdf/main-logo-white.png" alt="logo" id="formFooterLogo"></img>
        </div>
    </div>

}