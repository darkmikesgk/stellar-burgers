import React, { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';
import { Link, NavLink } from 'react-router-dom';

interface ICustomNavLinkProps {
  to: string;
  children: React.ReactNode;
  navigationClases: string;
}

const CustomNavLink: React.FC<ICustomNavLinkProps> = ({
  to,
  children,
  navigationClases
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `${isActive ? styles.link_active : styles.link} ${navigationClases}`
    }
  >
    {children}
  </NavLink>
);

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => {
  const navLinkClases = 'text text_type_main-default ml-2 mr-10';
  const profileNavClases = 'text text_type_main-default ml-2';
  return (
    <header className={styles.header}>
      <nav className={`${styles.menu} p-4`}>
        <div className={styles.menu_part_left}>
          <>
            <BurgerIcon type={'primary'} />
            <CustomNavLink to='/' navigationClases={navLinkClases}>
              Конструктор
            </CustomNavLink>
          </>
          <>
            <ListIcon type={'primary'} />
            <CustomNavLink to='/feed' navigationClases={profileNavClases}>
              Лента заказов
            </CustomNavLink>
          </>
        </div>
        <div className={styles.logo}>
          <Link to={'/'}>
            <Logo className='' />
          </Link>
        </div>
        <div className={styles.link_position_last}>
          <ProfileIcon type={'primary'} />
          <CustomNavLink to='/profile' navigationClases={profileNavClases}>
            {userName || 'Личный кабинет'}
          </CustomNavLink>
        </div>
      </nav>
    </header>
  );
};
