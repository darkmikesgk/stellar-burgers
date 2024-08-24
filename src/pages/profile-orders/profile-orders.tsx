import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { getUserData } from '../../services/slices/user';
import { fetchOrders, getOrders } from '../../services/slices/orders';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserData);
  const orders: TOrder[] = useSelector(getOrders);
  useEffect(() => {
    if (user) {
      dispatch(fetchOrders());
    }
  }, []);
  return <ProfileOrdersUI orders={orders} />;
};
