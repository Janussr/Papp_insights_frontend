import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import apiUtils from "../utils/apiUtils";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';

const URL = apiUtils.getUrl()

const Reports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const getReports = async () => {
            const response = await axios.get(URL + 'reports')
            setReports(response.data);
        }
        getReports()
    }, []);

    const navigate = useNavigate();

    const toCreate = () => {
        navigate('/createreport')
    }

    return (
        <div className="centerContent">
            <Container>
                <h1 className="centerContent">Dine Rapporter</h1>
                <Row>

                    {reports.map((report) =>
                        <Col sm="4" key={report.id} className="centerContent reportSection">
                            <h2>{report.name}</h2>
                            <h4>{report.date}</h4>
                            <NavLink to={`/report/${report.id}`}><button className="btn btn-secondary">Åben</button></NavLink>
                        </Col>
                    )}
                </Row>
                <div>
                    <button onClick={toCreate} className="btn btn-primary">Lav en Rapport</button>
                </div>
            </Container>
        </div>
    )
}

export default Reports