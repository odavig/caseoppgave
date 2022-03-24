import Home from './pages/Home'
import Shop from './pages/Shop'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/shop',
        component: Shop,
        children: [
            { 
                path: ':category', 
                component: Shop,
                name: 'category'
            },
        ]
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
    },
    {
        path: '/shop/:category/:id',
        component: ProductDetail
    }
]