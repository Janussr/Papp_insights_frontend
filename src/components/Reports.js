import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import apiUtils from "../utils/apiUtils";
import axios from "axios";

const URL = apiUtils.getUrl()

const Reports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const getReports = async () => {
            const response = await axios.get(URL + '/reports')
            setReports(response.data);
        }
        getReports()
    }, []);

    const navigate = useNavigate();

    const toCreate = () => {
        navigate('/createreport')
    }

    const to = () => {
        navigate('/createreport')
    }

    return (
        <div>
            <h1 className="centerContent">Reports</h1>
            <div className="centerContent container">
                <button onClick={toCreate} className="btn btn-primary">Create Report</button>
            </div>
            <ul>{reports.map((report) =>
                <li
                    className="reportsList" key={report.id}>
                    {report.name}
                    <NavLink to={`/report/${report.id}`}><button className="btn btn-primary">View</button></NavLink>
                </li>)}
            </ul>
        </div>
    )
}

export default Reports