/**
 * Renders the form parts for getting summaries from different sources.
 */
import React from 'react'

export const LargeBlockForm = (props) => {
    // can make this value Twitter | Insta | News
    const [type, setType] = React.useState("Twitter")
    const { reportValues, setReportValues } = props;

    return <div>
        <div id="stepperBoxDiv">
            <img src={require(`../assets/formProgressBar${props.stepImageNum}.png`)}></img>

        </div>
        <h2>{props.title}</h2>
        <div className="horizontalLabelDiv">
            <label htmlFor={`${props.prefix}Type`} className="dropdownInputLabel">block type:</label>
            <select
                name={`${props.prefix}Type`}
                className="dropdownSelector"
                id={`${props.prefix}Type`}
                defaultValue={`${props.defaultType}` || "Twitter"}
                onChange={(e) => {
                    setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                    setType(e.target.value)
                }}>
                <option value="Twitter">Twitter</option>
                <option value="Insta">Insta</option>
                <option value="News">News</option>
            </select>
        </div>
        {/***********************************   Option A   ************************************** ******************************************************************************************/}


        {
            type === 'Twitter' && <div id="LgDiv3Sub1Twitter">
                <h5>TWITTER: Enter up to 5 twitter handles below.  Do not include the @ symbol!  </h5>
                <div className="horizontalLabelDiv">
                    <label htmlFor={`${props.prefix}Data1`} className="textInputLabel">Twitter User 1:</label>
                    <input
                        name={`${props.prefix}Data1`}
                        type={`${props.prefix}Data1`}
                        placeholder="myTwitterHandle"
                        defaultValue={`${props.defaultData1}` || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    />
                </div>

                <div className="horizontalLabelDiv">
                    <label htmlFor={`${props.prefix}Data2`} className="textInputLabel">Twitter User 2:</label>
                    <input
                        name={`${props.prefix}Data2`}
                        type={`${props.prefix}Data2`}
                        placeholder="myBestieTweets"
                        defaultValue={`${props.defaultData2}` || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    />
                </div>

                <div className="horizontalLabelDiv">
                    <label htmlFor={`${props.prefix}Data3`} className="textInputLabel">Twitter User 3:</label>
                    <input
                        name={`${props.prefix}Data3`}
                        type={`${props.prefix}Data3`}
                        placeholder="myFrienemy"
                        defaultValue={`${props.defaultData3}` || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    /></div>

                <div className="horizontalLabelDiv">
                    <label htmlFor={`${props.prefix}Data4`} className="textInputLabel">Twitter User 4:</label>
                    <input
                        name={`${props.prefix}Data4`}
                        type={`${props.prefix}Data4`}
                        placeholder="myMarketingBrand"
                        defaultValue={`${props.defaultData4}` || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    /></div>

                <div className="horizontalLabelDiv">
                    <label htmlFor={`${props.prefix}Data5`} className="textInputLabel">Twitter User 5:</label>
                    <input
                        name={`${props.prefix}Data5`}
                        type={`${props.prefix}Data5`}
                        placeholder="myOtherBrand"
                        defaultValue={`${props.defaultData5}` || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    />
                </div>
            </div>
        }
        {/***********************************   Option 5B   ************************************** ******************************************************************************************/}
        {
            type === 'Insta' && <div>
                <h5>INSTAGRAM: Enter up to 5 instagram handles below.  Do not include the @ symbol!  </h5>

                <div className="horizontalLabelDiv">
                    <label htmlFor={`${props.prefix}Data1`} className="textInputLabel">Insta User 1:</label>
                    <input
                        name={`${props.prefix}Data1`}
                        type={`${props.prefix}Data1`}
                        placeholder="myInstaAcct"

                        defaultValue={`${props.defaultData1}` || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    /></div>

                <div className="horizontalLabelDiv">
                    <label htmlFor={`${props.prefix}Data2`} className="textInputLabel">Insta User 2:</label>
                    <input
                        name={`${props.prefix}Data2`}
                        type={`${props.prefix}Data2`}
                        placeholder="bestieOnInsta"

                        defaultValue={`${props.defaultData2}` || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    /></div>

                <div className="horizontalLabelDiv">
                    <label htmlFor={`${props.prefix}Data3`} className="textInputLabel">Insta User 3:</label>
                    <input
                        name={`${props.prefix}Data3`}
                        type={`${props.prefix}Data3`}
                        placeholder="baeOnInsta"
                        defaultValue={`${props.defaultData3}` || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    /></div>

                <div className="horizontalLabelDiv">
                    <label htmlFor={`${props.prefix}Data4`} className="textInputLabel">Insta User 4:</label>
                    <input
                        name={`${props.prefix}Data4`}
                        type={`${props.prefix}Data4`}
                        placeholder="myInstaBrand"

                        defaultValue={`${props.defaultData4}` || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    /></div>

                <div className="horizontalLabelDiv">
                    <label htmlFor={`${props.prefix}Data5`} className="textInputLabel">Insta User 5:</label>
                    <input
                        name={`${props.prefix}Data5`}
                        type={`${props.prefix}Data5`}
                        placeholder="myFavInfluencer"
                        defaultValue={`${props.defaultData5}` || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    /></div>
            </div>
        }
        {/***********************************   Option 5C   ************************************** ******************************************************************************************/}
        {
            type === 'News' && <div>
                <h4>NEWS: Enter two search terms below that we will look for each day.  If we cannot find a story that matches your terms, your Block will include story in one of the catch-all categories  </h4>


                <div className="horizontalLabelDiv"><label htmlFor={`${props.prefix}Data1`} className="textInputLabel">narrow topic:</label>
                    <input
                        name={`${props.prefix}Data1`}
                        type={`${props.prefix}Data1`}
                        placeholder="Chicago Mayor"

                        defaultValue={`${props.defaultData1}` || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    /></div>

                <div className="horizontalLabelDiv">
                    <label htmlFor={`${props.prefix}Data2`} className="textInputLabel">broad topic</label>
                    <input
                        name={`${props.prefix}Data2`}
                        type={`${props.prefix}Data2`}
                        placeholder="Chicago Politics"

                        defaultValue={`${props.defaultData2}` || ""}
                        onChange={(e) =>
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                        }
                    /></div>

                {/* <div className="horizontalLabelDiv">
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
                </div> */}
                <div className="horizontalLabelDiv">
                    <label htmlFor={`${props.prefix}Data3`} className="dropdownInputLabel">catch-all:</label>
                    <select
                        name={`${props.prefix}Data3`}
                        className="dropdownSelector"
                        id={`${props.prefix}Data3`}
                        defaultValue={`${props.defaultType}` || "defaultPolitcs"}
                        onChange={(e) => {
                            setReportValues({ ...reportValues, [e.target.name]: e.target.value })
                            setType(e.target.value)
                        }}>
                        <option value="defaultPolitics">Politics</option>
                        <option value="defaultTech">Tech</option>
                        <option value="defaultCulture">Culture</option>
                    </select>
                </div>
            </div>
        }
        <div className="buttonSpacer"></div>
        {/* LOGO HERE */}
        <div id="formFooterDiv"><img src="http://www.b2results.com/wp-includes/images/mydailypdf/main-logo-white.png" alt="logo" id="formFooterLogo"></img>
        </div>
    </div >

}