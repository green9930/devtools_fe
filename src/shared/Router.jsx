import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DetailPage from 'pages/DetailPage';
import FormPage from 'pages/FormPage';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';
import ErrorPage from 'pages/ErrorPage';
import UnAuthPage from 'pages/UnAuthPage';
import { userActions } from 'redux/modules/userSlice';

const Router = () => {
  const dispatch = useDispatch();

  const { isLoading, username, isLogin } = useSelector((state) => state.user);

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
        <Route path="/form" element={isLogin ? <FormPage /> : <UnAuthPage />} />
        <Route
          path="/detail/:id"
          element={isLogin ? <DetailPage /> : <UnAuthPage />}
        />
        <Route
          path="/unauth"
          element={isLogin ? <Navigate to="/" /> : <UnAuthPage />}
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
