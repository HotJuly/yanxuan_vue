
const Home = () => import('../pages/Home/Home.vue');
const Classify = () => import('../pages/Classify/Classify.vue');
const Topic = () => import('../pages/Topic/Topic.vue');
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue');
const Login = () => import('../pages/Login/Login.vue');
const NotFound = () => import('../pages/NotFound.vue');
const TopicRecommend = () => import('../pages/Topic/TopicContent/TopicRecommend.vue');
const TopicExpert = () => import('../pages/Topic/TopicContent/TopicExpert.vue');
const TopicNewProduct = () => import('../pages/Topic/TopicContent/TopicNewProduct.vue');
const TopicShare = () => import('../pages/Topic/TopicContent/TopicShare.vue');
const TopicHome = () => import('../pages/Topic/TopicContent/TopicHome.vue');

export default [
    {path:"/home",component:Home},
    {path:"/classify",component:Classify},
    {
        path:"/topic",
        component:Topic,
        children:[
            {path:"recommend",component:TopicRecommend},
            {path:"expert",component:TopicExpert},
            {path:"newproduct",component:TopicNewProduct},
            {path:"share",component:TopicShare},
            {path:"topichome",component:TopicHome},
            {path:"",redirect:'recommend'},
        ]
    },
    {path:"/shopcart",component:ShopCart},
    {path:"/login",component:Login},
    {path:"/",redirect:"/home"},
    {path:"/*",component:NotFound}
]