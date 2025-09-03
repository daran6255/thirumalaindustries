import Home from '../pages/Home';
import PageNotFound from '../pages/others/pagenotfound';

const publicRoutes = [

    { path: '/page-not-found', component: <PageNotFound /> },
    { path: '/', component: <Home /> }
];

export { publicRoutes };
