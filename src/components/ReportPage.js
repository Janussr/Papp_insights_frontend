import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

import React, { Component } from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/async';




//npm install react-date-range might have to use this if datepicker doesnt work.

const ReportPage = () => {
  const init = { time: "", parkingAreas: "", report: { id: 0 } };
  const [report, setReport] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [parkingAreas, setParkingAreas] = useState([]);

  const URL = apiUtils.getUrl()


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

  const SearchLocationBar = () => (
    <Select options={options} />
  )



  const handleInput = (event) => {
    setReport({ ...report, })
  }

  const createReport = async () => {
    try {
      await axios.post(URL + "/report", {
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
      <h2>Report</h2>
        <p>{statusMessage}</p>
        <form onChange={handleInput}>
        <SearchLocationBar/>
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


export default ReportPage

