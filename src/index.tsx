import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './common/header/header.component';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AboutUs from './common/about-us/about-us.component';
import Blog from './common/blog/blog.component';
import ProductsByCategory from './modules/@products/products-by-category/products-by-category';
import SignUp from './modules/@users/sign-up/sign-up.component';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route key={1} path="/" element={<App />}></Route>
        <Route key={2} path="/products/:category" element={<ProductsByCategory />}></Route>
        <Route key={3} path="/blog" element={<Blog />}></Route>
        <Route key={4} path="/about-us" element={<AboutUs />}></Route>
        <Route key={5} path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
