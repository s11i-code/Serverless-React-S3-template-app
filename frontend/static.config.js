import axios from 'axios';
import { RESOURCES_URL } from './urls';

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(RESOURCES_URL);
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '404',
        component: 'src/containers/404',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
      },
    ];
  },
  devServer: {
    port: 3001,
  },
};
