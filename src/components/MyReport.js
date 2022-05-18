import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import apiUtils from "../utils/apiUtils"
import { css } from "@emotion/react";
import { PieChart } from 'react-minimal-pie-chart';
import { ClipLoader } from "react-spinners";
import { Container, Row, Col } from 'react-bootstrap';

const URL = apiUtils.getUrl()

const override = css`
  display: block;
  margin: 0 auto;
  padding: 100px;
`;

const MyReport = () => {
    const [report, setReport] = useState({});
    const [areas, setAreas] = useState([]);
    const [loading, setLoading] = useState(true);

    const id = useParams().id

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
            {!loading ? <h2 className="centerContent">{report.date}</h2> : (<h1></h1>)}
            {loading ? <h2 className="centerContent">Processing Report...</h2> : (<h1></h1>)}
            <ClipLoader css={override} color='FFFFFF' loading={loading} size={150} />
            <Container>
                <Row>
                    {areas.map((area) =>
                        <Col
                            className="centerContent" key={area.name} >
                            <h3>{area.name}</h3>
                            <h4>Belægningsgrad: {Math.round(area.parking_category.value) + '%'}</h4>
                            <PieChart
                                data={[
                                    { title: 'Belægningsgrad', value: area.parking_category.value, color: '#0288d1', label: area.parking_category.value },
                                    { value: 100 - area.parking_category.value, color: '#FFFFFF' },
                                ]} />
                        </Col>)}
                </Row>
            </Container>
        </div >
    )
}

export default MyReport