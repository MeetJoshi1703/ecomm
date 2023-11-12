import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' index={true} element={<HomeScreen />} />
      <Route path='/product/:id' index={true} element={<ProductScreen />} />
      <Route path='/cart' index={true} element={<CartScreen />} />
      <Route path='/login' index={true} element={<LoginScreen />} />
      <Route path='/register' index={true} element={<RegisterScreen />} />

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
