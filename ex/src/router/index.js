import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/login/login'
import Signup from '../views/login/signup'
import Home from '../views/main/index'
import AccountMana from '../views/clientAccountMana/index'
import Ranking from '../views/ranking/index'
import AdminAdd from '../views/adminAdd/index'
import PwChange from '../views/clientAccountMana/passwordChange'
import Nav from '../nav/nav'

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    },
    routes: [
      {
        path:"/",
        name:"login",
        component: Login,
      },
      {
        path:"/signup",
        name:"Signup",
        component: Signup
      },
      {
        path:"/home",
        name:"Home",
        component: Home,
      },
      {
        path:"/accountMana",
        name:"AccountMana",
        component:AccountMana,
      },
      {
        path:"/ranking",
        name:"Ranking",
        component : Ranking,
      },
      {
        path:"/adminAdd",
        name:"AdminAdd",
        component: AdminAdd,
      },
      {
        path:"/pwChange",
        name:"PwChange",
        component: PwChange,
      },
      {
        path:"/nav",
        name: "Nav",
        component: Nav
      }
    ],
  });
  
  export default router;
