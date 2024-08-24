import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { Outlet } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { getUserData } from '../../services/slices/user';

export const AppHeader: FC = () => {
  const user = useSelector(getUserData)?.name || '';
  return (
    <>
      <AppHeaderUI userName={user} />
      <Outlet />
    </>
  );
};
