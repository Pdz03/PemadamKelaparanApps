import List from '../views/pages/list';
import Detail from '../views/pages/detail';
import Favorit from '../views/pages/favorit';

const routes = {
  '/': List, // default page
  '/list': List,
  '/detail/:id': Detail,
  '/favorit': Favorit,
};

export default routes;
