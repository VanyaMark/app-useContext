
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/AUthContextProvider'

type RequireAuthType = {
    children: React.ReactNode;
}

export default function RequireAuth({children} : RequireAuthType) {
    const auth = useAuthContext()

    const location = useLocation()
    //if user is not logged in - navigate them to the login page
    if (!auth?.isLoggedIn) {
        return (
        <Navigate to="/login" state={{ from:location }}/>)
    }
    //if the user is logged in - render the children component
  return (
    <div>{children}</div>
  )
}
