import { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
    const [report, setReport] = useState({});

    useEffect(() => {
        const getReport = async () => {
          const response = await axios.get(URL)
          setReport(response.data.hello)
          console.log(response.data.hello);
        }
        getReport()
      }, [setReport, URL]);
    


    return (
        <div>
            <h1>Welcome</h1>
        </div>
    )
}

export default Home