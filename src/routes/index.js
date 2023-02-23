import Home from "../page/home/Home";
import HomeLayout from "../components/layout/HomeLayout"
import ProductPage from './../page/product/ProductPage';
import CategoriesLayout from './../components/layout/CategoriesLayout';
import CategoriesPage from './../page/categories/CategoriesPage';
import CategoriesPage2 from "../components/CategoriesPage2";
import RegisterPage from "../page/register/RegisterPage";
import LoginPage from "../page/login/LoginPage";
import Categories2Layout from './../components/layout/Categories2Layout';
import SearchPage2 from "../page/search/SearchPage2";
import SearchPage from "../page/search/SearchPage";
const publicRoute = [
    {
        path: '/',
        element: Home,
        layout: HomeLayout
    },
    {
        path: '/truyen/:id',
        element: ProductPage,
        layout: HomeLayout
    },
    {
        path: '/categories/:id',
        element: CategoriesPage,
        layout: CategoriesLayout
    },
    {
        path: '/categories2/:id',
        element: CategoriesPage2,
        layout: CategoriesLayout
    },
    {
        path: '/dangnhap',
        element: LoginPage,
        layout: 'div'
    },
    {
        path: '/dangky',
        element: RegisterPage,
        layout: 'div'
    },
    {
        path: '/timkiem2',
        element: SearchPage2,
        layout: Categories2Layout
    },
    {
        path: '/timkiem/nangcao',
        element: SearchPage,
        layout: CategoriesLayout
    },
 ]

export {publicRoute}