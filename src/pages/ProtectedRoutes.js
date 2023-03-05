import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const user = useSelector(selectUser);

    return user ? children : <Navigate to='/login' />;
}

export default ProtectedRoutes