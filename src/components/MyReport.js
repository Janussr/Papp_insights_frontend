import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import apiUtils from "../utils/apiUtils"
import { css } from "@emotion/react";
import { PieChart } from 'react-minimal-pie-chart';
import { ClipLoader } from "react-spinners";

const URL = apiUtils.getUrl()

const override = css`
  display: block;
  margin: 0 auto;
  padding: 100px;
`;

const MyReport = () => {
    const [report, setReport] = useState({});
    const [areas, setAreas] = useState([]);
    let [loading, setLoading] = useState(true);

    const id = parseInt(useParams().id)

    useEffect(() => {
        const getReport = async () => {
            const response = await axios.get(URL + 'report/' + id)
            setReport(response.data);
            setAreas(response.data.parking_areas)
            setLoading(false)
        }
        getReport()
    }, [id]);


    return (
        <div>
            <h1 className="centerContent">{report.report_name}</h1>
            {loading ? <h2 className="centerContent">Processing Report...</h2> : (<h1></h1>)}
            <ClipLoader css={override} color='FFFFFF' loading={loading} size={150} />
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