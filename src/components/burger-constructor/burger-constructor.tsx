import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useDispatch, useSelector } from '../../services/store';
import { useNavigate } from 'react-router-dom';
import {
  clearConstructor,
  selectConstructorItems
} from '../../services/slices/burgerConstructor';
import {
  createOrder,
  getLoadingStatus,
  getOrderData,
  resetOrder
} from '../../services/slices/order';

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const constructorItems = useSelector(selectConstructorItems);
  const orderRequest = useSelector(getLoadingStatus);
  const orderModalData = useSelector(getOrderData);

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;

    const ingredientsId = [];
    if (constructorItems.bun) {
      ingredientsId.push(constructorItems.bun._id);
    }

    if (constructorItems.ingredients) {
      ingredientsId.push(
        ...constructorItems.ingredients.map((item) => item._id)
      );
    }
    dispatch(createOrder(ingredientsId))
      .then(() => {
        dispatch(clearConstructor());
      })
      .catch((error) => {
        console.error('Ошибка при создании заказа:', error);
      });
  };

  const closeOrderModal = () => {
    dispatch(resetOrder());
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
// function resetConstructor(): any {
//   throw new Error('Function not implemented.');
// }
