import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DetailPage from 'pages/DetailPage';
import FormPage from 'pages/FormPage';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';
import { useEffect } from 'react';
import { userActions } from 'redux/modules/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Router = () => {
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userActions.getUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLogin ? <MainPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/register"
          element={isLogin ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route
          path="/login"
          element={isLogin ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/form"
          element={isLogin ? <FormPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/detail/:id"
          element={isLogin ? <DetailPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
