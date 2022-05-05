import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange  } from 'react-date-range';


//npm install react-date-range might have to use this if datepicker doesnt work.

const ReportPage = () => {
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
//Date picker
const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

return (

    <div className="center">
        <p>{statusMessage}</p>
        <form onChange={handleInput}>
        <input className="form-control addInput" id="parkingAreas" placeholder="Enter parking area" type="text"></input>
        </form>
<DateRange
editableDateInputs={true}
onChange={item => setState([item.selection])}
moveRangeOnFirstSelection={false}
ranges={state}
/>
        <button onClick={createReport} className="btn btn-primary mt-3">Create</button>
    </div>
    )
}

<<<<<<< HEAD

export default Report_page
=======
export default ReportPage
>>>>>>> 8945e34949341c39048bb2a8e78d18e930bbb959
