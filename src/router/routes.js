
const Home = () => import('../pages/Home/Home.vue');
const Classify = () => import('../pages/Classify/Classify.vue');
const Topic = () => import('../pages/Topic/Topic.vue');
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue');
const Login = () => import('../pages/Login/Login.vue');

export default [
    {path:"/home",component:Home},
    {path:"/classify",component:Classify},
    {path:"/topic",component:Topic},
    {path:"/shopcart",component:ShopCart},
    {path:"/login",component:Login},
    {path:"/",redirect:"/home"}
]