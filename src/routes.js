import News from "./components/News";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Main from "./components/Main";

export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: "/",
    name: "Main",
    component: Main
  },
  {
    isNavBar: true,
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    isNavBar: true,
    path: "/news",
    name: "News",
    component: News
  },
  {
    isNavBar: true,
    path: "/profile",
    name: "Profile",
    component: Profile,
    isPrivate: true
  }
];
