import News from './components/News';
import Profile from './components/Profile';
import Login from './components/login';
import Main from './components/Main';

export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    isNavBar: true,
    isExact: true,
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    isNavBar: true,
    path: '/news',
    name: 'News',
    component: News
  },
  {
    isNavBar: true,
    path: '/profile',
    name: 'Profile',
    component: Profile,
    isPrivate: true
  }
];