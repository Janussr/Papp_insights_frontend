import authUtils from "../utils/authUtils"

const Admin = ({ currentRoles }) => {
  const username = localStorage.getItem('user')


  return (
    <div>
      {authUtils.handleAccess('admin', currentRoles) ? < h1 > Welcome {username}, this is the admin page. Only users with the role: 'admin' may access this.</h1> : (<h1>You do not have the correct role to view this page</h1>)}
    </div >
  )
}

export default Admin