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

// interface ICustomNavLinkProps {
//   to: string;
//   children: React.ReactNode;
//   navigationClases: string;
// }

// const CustomNavLink: React.FC<ICustomNavLinkProps> = ({
//   to,
//   children,
//   navigationClases
// }) => (
//   <NavLink
//     to={to}
//     className={({ isActive }) =>
//       `${isActive ? styles.link_active : styles.link} ${navigationClases}`
//     }
//   >
//     {children}
//   </NavLink>
// );

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => {
  const navLinkClases = 'text text_type_main-default ml-2 mr-10';
  const profileNavClases = 'text text_type_main-default ml-2';
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
