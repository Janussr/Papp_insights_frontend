import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const URL = apiUtils.getUrl()

const CreateReport = () => {
  const [report, setReport] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [parkingAreas, setParkingAreas] = useState([]);
  const [selectedParkingAreas, setSelectedParkingAreas] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate.getUTCFullYear(), startDate.getUTCMonth() + 1, startDate.getUTCDate())


  const handleChange = (e) => {
    const selected = e.map(obj => {
      return obj.value
    })
    setSelectedParkingAreas(selected)
  }

  //Goes through every List in order to show location on the website
  const options = []
  for (var i = 0; i < parkingAreas.length; i++) {
    let currentobj = { value: parkingAreas[i], label: parkingAreas[i] }
    options.push(currentobj)
  }

  //Get parking areas
  useEffect(() => {
    const getParkingArea = async () => {
      const response = await axios.get(URL + 'parkingareas');
      setParkingAreas(response.data.parkingareas);
    };
    getParkingArea();
  }, [setParkingAreas]);

  const addParkingArea = () => {
    selectedParkingAreas.push({})
    setSelectedParkingAreas(selectedParkingAreas)
  }

  const createReport = async () => {
    try {
      await axios.post(URL + "/report", {
        id: uuid,
        report_name: report.report_name
        //parking_areas: 
        [
          "string"
        ],
        "date": "string"
      }
      )
      setStatusMessage('Report created successfully')
    } catch (error) {
      setStatusMessage(error.response.data.message);
    }
  }


  return (
    <div className="center">

      <p>{statusMessage}</p>
      <h2>Pick location</h2>

      <div className="centerContent container">
        <Select
          onChange={handleChange}
          isMulti
          name="parkingAreas"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

      <form className="date">
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date) => setStartDate(date)} />

        <button onClick={createReport} className="btn btn-primary mt-3">Create</button>
      </form>

    </div>
  )
}


export default CreateReport
