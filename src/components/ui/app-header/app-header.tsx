import { FC, useEffect } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from '../../../services/store';
import { resetOrder } from '../../../services/slices/order';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    // Проверяем, что мы не находимся на странице истории заказов или на странице конкретного заказа
    if (
      !location.pathname.startsWith('/feed') &&
      !location.pathname.startsWith('/profile/orders')
    ) {
      dispatch(resetOrder());
    }
  }, [location, dispatch, id]);
  return (
    <header className={styles.header}>
      <nav className={`${styles.menu} p-4`}>
        <div className={styles.menu_part_left}>
          <>
            <BurgerIcon type={'primary'} />
            <NavLink
              to='/'
              className={({ isActive }) => {
                const classLink = isActive ? styles.link_active : styles.link;
                return (
                  classLink + ' ' + 'text text_type_main-default ml-2 mr-10'
                );
              }}
            >
              Конструктор
            </NavLink>
          </>
          <>
            <ListIcon type={'primary'} />
            <NavLink
              to='/feed'
              className={({ isActive }) => {
                const classLink = isActive ? styles.link_active : styles.link;
                return (
                  classLink + ' ' + 'text text_type_main-default ml-2 mr-10'
                );
              }}
            >
              Лента заказов
            </NavLink>
          </>
        </div>
        <div className={styles.logo}>
          <Link to={'/'}>
            <Logo className='' />
          </Link>
        </div>
        <div className={styles.link_position_last}>
          <ProfileIcon type={'primary'} />
          <NavLink
            to='/profile'
            className={({ isActive }) => {
              const classLink = isActive ? styles.link_active : styles.link;
              return classLink + ' ' + 'text text_type_main-default ml-2';
            }}
          >
            {userName || 'Личный кабинет'}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
