const authUtils = () => {

  const handleAccess = (neededRole, arr) => {
    const roles = arr
    const stringRoles = roles.map((role => {
      return role['roleName']
    }))
    return stringRoles.includes(neededRole);
  }

  return {
    handleAccess,
  }
}

export default authUtils();