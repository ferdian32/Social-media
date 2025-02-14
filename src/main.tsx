import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store';
const router = createBrowserRouter([
  {
    path:'/home',
    element:<HomePage/>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
