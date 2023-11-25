
import HomePage from '../pages/home.f7';
import SearchPage from '../pages/search.f7';
import FormPage from '../pages/form.f7';
import FavoritesPage from '../pages/favorites.f7'

import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: FavoritesPage,//HomePage,
  },
  {
    path: '/search/',
    component: SearchPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },

  {
    path: '/favorites/',
    component: FavoritesPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;