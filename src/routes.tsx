import MainLayout from '@/layouts/MainLayout'
import { createBrowserRouter, } from "react-router-dom";
import Error404Page from '@/modules/errors/404Page';
import { routesEnum } from '@/enums';
import HomePage from '@/modules/home/HomePage'
import TeamPage from '@/modules/team/TeamPage'
import ServicesPage from '@/modules/services/ServicesPage';
import WorksPage from '@/modules/works/WorksPage';
import SolutionsPage from '@/modules/solutions/SolutionsPage';
import ContactPage from './modules/contact/ContactPage';

const router = createBrowserRouter([
    {
      path: routesEnum.root,
      element: <MainLayout />,
      children: [
        {
          path: routesEnum.root,
          element: <HomePage />,
        },
        {
          path: routesEnum.home,
          element: <HomePage />,
        },
        {
          path: routesEnum.solutions,
          element: <SolutionsPage />,
        },
        {
          path: routesEnum.services,
          element: <ServicesPage />,
        },
        {
          path: routesEnum.works,
          element: <WorksPage />,
        },
        {
          path: routesEnum.team,
          element: <TeamPage />,
        },
        {
          path: routesEnum.contact,
          element: <ContactPage />,
        },
        {
          path: "*",
          element: <Error404Page />,
        },
      ]
    },
  
]);

export default router