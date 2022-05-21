import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"
import { VictoryChart, VictoryAxis, VictoryBar, VictoryPie } from 'victory';
import { Container, Row, Col } from 'react-bootstrap';
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";

const URL = apiUtils.getUrl()

const override = css`
  display: block;
  margin: 0 auto;
  padding: 100px;
`;

const Overview = () => {
    const [topData, setTopData] = useState([]);
    const [topLabels, setTopLabels] = useState([]);
    const [botData, setBotData] = useState([]);
    const [botLabels, setBotLabels] = useState([]);
    const [pieData, setPieData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getOverview = async () => {
            const response = await axios.get(URL + 'overview')
            setTopData(Object.values(response.data.parkingoverview.parking_categories[0].value))
            setTopLabels(Object.keys(response.data.parkingoverview.parking_categories[0].value))
            setBotData(Object.values(response.data.parkingoverview.parking_categories[1].value))
            setBotLabels(Object.keys(response.data.parkingoverview.parking_categories[1].value))
            setPieData((response.data.parkingoverview.parking_categories[2].value))
            setLoading(false)
        }
        getOverview()
    }, []);

    //Bar Chart Data
    const topPercentages = topData.map(data => + Math.round(data) + '%')
    const botPercentages = botData.map(data => + Math.round(data) + '%')


    //Pie Chart Data

    return (
        <div className="centerContent">
            <Container>
                {loading ? <h2 className="centerContent">Klargør Oversigt...</h2> : (<h1></h1>)}
                <ClipLoader css={override} color='FFFFFF' loading={loading} size={150} />
                <Row>
                    {!loading ? <h2>Parkeringsoversigt</h2> : (<h2></h2>)}
                    {!loading ? <h3>Lyngby-Taarbæk Kommune</h3> : (<h3></h3>)}
                    <Col sm="4">
                        <VictoryPie
                            colorScale={["darkred", "darkgreen"]}
                            data={pieData}
                            labels={['41%']}
                            style={{
                                data: { fillOpacity: 0.9, stroke: "white", strokeWidth: 3 }
                            }}
                        />
                        <h4 className="ChartLabel">Gennemsnitlig belægning</h4>

                    </Col>
                    <Col sm="4">
                        <VictoryChart>
                            <VictoryAxis
                                // tickValues specifies both the number of ticks and where
                                // they are placed on the axis
                                tickValues={[0, 1, 2, 3, 4]}
                                tickFormat={topPercentages}
                            />
                            <VictoryBar
                                data={topData}
                                labels={topLabels}
                                style={{
                                    labels: { angle: 15 },
                                    data: {
                                        fill: ({ y }) =>
                                            y < 95 ? 'darkred'
                                                : y > 39 ? 'orange'
                                                    : 'black'
                                    }
                                }}
                            />
                        </VictoryChart>
                        <h4 className="ChartLabel">Parkeringsområder med højest belægning</h4>
                    </Col>
                    <Col sm="4">
                        <VictoryChart>
                            <VictoryAxis
                                // tickValues specifies both the number of ticks and where
                                // they are placed on the axis
                                tickValues={[0, 1, 2, 3, 4]}
                                tickFormat={botPercentages}
                            />
                            <VictoryBar
                                data={botData}
                                labels={botLabels}
                                style={{
                                    labels: { angle: 8 },
                                    data: {
                                        fill: 'green'
                                    }
                                }
                                }
                            />
                        </VictoryChart>
                        <h4 className="ChartLabel">Parkeringsområder med lavest belægning</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Overview