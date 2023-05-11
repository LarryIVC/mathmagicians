import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
} from 'react-router-dom';
import styles from './components/css/App.module.css';
import Quote from './components/Quote';
import Calculator from './components/Calculator';
import Home from './components/Home';

const Layout = () => (
  <div className={styles.pageContainer}>
    <div className={styles.navigator}>
      <h1 className={styles.heading}>Math Magicians</h1>
      <nav>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/calculator">Calculator</Link>
        <Link className={styles.link} to="/quotes">Quotes</Link>
      </nav>
    </div>
    <Outlet />
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quote />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
