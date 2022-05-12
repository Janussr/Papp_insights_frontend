import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React, { Component } from 'react'
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import uuid from 'react-uuid'

//npm install react-date-range might have to use this if datepicker doesnt work.

const ReportPage = () => {
  const [report, setReport] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [parkingAreas, setParkingAreas] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const URL = apiUtils.getUrl()

  console.log(selectedAreas);

  const handleInput = (event) => {
    setReport({ ...report, [event.target.id]: event.target.value })
  }

const handleChange = (e) => {

    console.log("Fruit Selected!!");

    selectedAreas.push(e.target.value);
  }
  

  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate()

  console.log(startDate.getUTCFullYear(),  startDate.getUTCMonth()+1, startDate.getUTCDate())

  useEffect(() => {
    const getParkingArea = async () => {
      const response = await axios.get(URL + 'parkingareas');
      setParkingAreas(response.data.parkingareas);
    };
    getParkingArea();
  }, [setParkingAreas]);


  //Part of the search location bar.
  //: TODO find proper place.
  const options = []
  for (var i = 0; i < parkingAreas.length; i++) {
    let currentobj = { value: parkingAreas[i], label: parkingAreas[i] }
    options.push(currentobj)
  }


  const addParkingArea = () => {
    selectedAreas.push({})
    setSelectedAreas(selectedAreas)
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
      <br></br>
      <form className="search" onChange={handleInput} >
        <Select onChange={handleChange}
    isMulti
    name="parkingAreas"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
      <br></br>
      <br></br>
      
      </form>
      
      <button onClick={createReport} className="btn btn-primary mt-3">Create</button>
      <br></br>
      <br></br>
      <div className="centerAligned">
        <div className="orderSection">
        <br></br>
        <br></br>
      <form className="date">
          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
      </form>
        </div>
      </div>

    </div>

  )
}


export default ReportPage
