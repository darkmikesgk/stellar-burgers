import { Preloader } from '@ui';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getIsAuth, getUserData } from '../../services/slices/user';
import { useSelector } from '../../services/store';

type TProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: React.ReactElement;
};

export const ProtectedRoute = ({
  onlyUnAuth,
  children
}: TProtectedRouteProps) => {
  const user = useSelector(getUserData);
  const authChecked = useSelector(getIsAuth);
  const location = useLocation();

  if (!authChecked) {
    return <Preloader />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate replace to='/login' state={{ from: location }} />;
  }

  if (onlyUnAuth && user) {
    const from = location.state?.from || { pathname: '/' };
    return <Navigate replace to={from} />;
  }

  return (
    <>
      {children}
      <Outlet />
    </>
  );
};
