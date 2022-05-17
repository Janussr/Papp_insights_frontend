import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import apiUtils from "../utils/apiUtils"
import { PieChart } from 'react-minimal-pie-chart';

const URL = apiUtils.getUrl()

const MyReport = () => {
    const [report, setReport] = useState({});
    const [areas, setAreas] = useState([]);

    const id = parseInt(useParams().id)

    useEffect(() => {
        const getReport = async () => {
            const response = await axios.get(URL + '/report/' + id)
            setReport(response.data);
            setAreas(response.data.parking_areas)
        }
        getReport()
    }, [id]);


    return (
        <div>
            <h1 className="centerContent">{report.report_name}</h1>
            <div className="container">
                <div className="row">
                    {areas.map((area) =>
                        <div
                            className="col-sm centerContent" key={area.name} >
                            <h3>{area.name}</h3>
                            <PieChart
                                data={[
                                    { title: 'Belægningsgrad', value: area.parking_category.value, color: '#3d8c40', label: area.parking_category.value },
                                    { value: 100 - area.parking_category.value, color: '#C13C37' },
                                ]}
                            />
                        </div>)}
                </div>
            </div>
        </div >
    )
}

export default MyReport