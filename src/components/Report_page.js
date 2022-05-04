import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"

const Report_page = () => {
    const init = {time: "", parkingAreas: "", report: { id: 0 } };
    const [report, setReport] = useState({});
    const [statusMessage, setStatusMessage] = useState("");

    const URL = apiUtils.getUrl()

    const handleInput = (event) => {
        setReport({ ...report,})
    }

    const createReport = async () => {
        try {
            await axios.post (URL + "/report", {
            time: report.time,
            parkingAreas: report.parkingAreas,
            report: { id: report.id }
        })
        setStatusMessage('Report created successfully')
    } catch (error) {
        setStatusMessage(error.response.data.message);
    }
}


return (
    <div className="center">
        <h1>Create Report</h1>
        <p>{statusMessage}</p>
        <form onChange={handleInput}>
            <input className="form-control addInput" id="time" placeholder="Enter time" type="text"></input>
            <input className="form-control addInput" id="parkingAreas" placeholder="Enter parking area" type="text"></input>

        </form>
        <button onClick={createReport} className="btn btn-primary mt-3">Create</button>
    </div>
    )
}

export default Report_page
