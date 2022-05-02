import authUtils from "../utils/authUtils"

const User = ({ currentRoles }) => {
  const username = localStorage.getItem('user')


  return (
    <div>
      {authUtils.handleAccess('user', currentRoles) ? < h1 > Welcome {username}, this is the user page. Only users with the role: 'user' may access this.</h1> : (<h1>You do not have the correct role to view this page</h1>)}
    </div>
  )
}

export default User