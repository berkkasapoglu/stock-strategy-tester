import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import baseRoutes from './routes/base.routes';

const router = createBrowserRouter(baseRoutes);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
