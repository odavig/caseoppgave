import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import Signup from './components/defaultPages/Signup'
import Login from './components/defaultPages/Login'
import Contact from './components/defaultPages/Contact'
import About from './components/defaultPages/About'
import Cart from './components/shop/Cart'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/cart',
        component: Cart
    }
]