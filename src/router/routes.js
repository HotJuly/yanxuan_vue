
const Home = () => import('../pages/Home/Home.vue');
const Classify = () => import('../pages/Classify/Classify.vue');
const Topic = () => import('../pages/Topic/Topic.vue');
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue');
const Login = () => import('../pages/Login/Login.vue');
const NotFound = () => import('../pages/NotFound.vue');
const TopicList = () => import('../pages/Topic/TopicContent/TopicList.vue');
const Search = () => import('../pages/Search/Search.vue');

export default [
    {path:"/home",component:Home},
    {path:"/classify",component:Classify},
    {
        path:"/topic",
        component:Topic,
        children:[
            {
                path:"/topic/:id",
                component:TopicList,
                props:(route)=>({id:route.params.id*1})
            },
            {path:"",redirect:'/topic/9'},
        ]
    },
    {path:"/shopcart",component:ShopCart},
    {path:"/login",component:Login},
    {path:"/search",component:Search},
    {path:"/",redirect:"/home"},
    {path:"/*",component:NotFound}
]