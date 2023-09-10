import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import baseRoutes from './routes/base.routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {baseRoutes.map((route, idx) => {
        return <Route key={idx} path={route.path} element={route.element} />;
      })}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
