// import css from "../App/App.module.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { refresh } from "../../redux/auth/operations";
import { selectRefreshing } from "../../redux/auth/selectors";
import Layout from "../Layout/Layout";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRout from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

export default function App() {
  const isRefreshing = useSelector(selectRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user, please wait...</div>
  ) : (
    <div>
      <Layout>
        <Suspense fallback={<div>Loading page code...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo="/contacts"
                />
              }
            ></Route>

            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            ></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRout component={<ContactsPage />} redirectTo="/login" />
              }
            ></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}
