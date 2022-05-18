import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { v1 as uuid } from "uuid";

const URL = apiUtils.getUrl()

const CreateReport = () => {
  const [report, setReport] = useState({ report_name: "" });
  const [parkingAreas, setParkingAreas] = useState([]);
  const [selectedParkingAreas, setSelectedParkingAreas] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  // startDate.getUTCFullYear(), startDate.getUTCMonth() + 1, startDate.getUTCDate()
  const year = startDate.getUTCFullYear()
  const month = startDate.getUTCMonth() + 1
  const monthToString = '0' + month.toString()
  const slicedMonth = monthToString.slice(-2)
  const date = '0' + startDate.getUTCDate().toString()
  const slicedDate = date.slice(-2)
  const selectedDate = year.toString() + "-" + slicedMonth + "-" + slicedDate

  console.log(selectedDate);

  const handleInput = (event) => {
    setReport({ ...report, [event.target.id]: event.target.value })
  }


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


  const createReport = async () => {
    await axios.post(URL + "report", {
      id: uuid(),
      report_name: report.report_name,
      parking_areas: selectedParkingAreas,
      date: selectedDate
    }
    )
  }

  return (
    <div className="center">

      <h2>Create report</h2>

      <div className="centerContent container">

        <form className="SelectInput" onChange={handleInput}>
          <input className="inputField" id="report_name" type="text" placeholder="Report name"></input>
        </form>

        <Select
          onChange={handleChange}
          isMulti
          name="parkingAreas"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select" />

        <br></br>
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date) => setStartDate(date)} />
      </div>
      <button onClick={createReport} className="btn btn-primary mt-3">Create</button>


    </div>
  )
}


export default CreateReport
