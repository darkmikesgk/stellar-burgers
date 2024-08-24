import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { getUserData } from '../../services/slices/user';
import { getOrderData } from '../../services/slices/order';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserData);
  //@TODO добавить слайс ордерс
  const orders: TOrder[] = [];
  return <ProfileOrdersUI orders={orders} />;
};
