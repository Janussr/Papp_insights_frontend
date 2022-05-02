import { useEffect } from "react"
import apiUtils from "../utils/apiUtils"
import axios from "axios";

const LandingPage = ({ currentRoles, setCurrentRoles }) => {
  const username = localStorage.getItem('user')
  const URL = apiUtils.getUrl()

  useEffect(() => {
    const getRole = async () => {
      const response = await axios.get(URL + '/user/role/' + localStorage.getItem('user'))
      setCurrentRoles(response.data.roles)
    }
    getRole()
  }, [setCurrentRoles, URL]);

  return (
    <div>
      <h1>Welcome {username}, your role is: {currentRoles.map((r) => r.roleName)} </h1>
    </div >
  )
}

export default LandingPage