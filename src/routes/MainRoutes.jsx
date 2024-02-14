import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import NoFoundPage from "../pages/NoFoundPage";
import CartPage from "../pages/CartPage";
import AuthPage from "../pages/AuthPage";
import PricingPage from "../pages/PricingPage";
import FavoritesPage from "../pages/FavoritesPage";
import ProfilePage from "../pages/ProfilePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/movies", element: <MoviePage /> },
    { id: 3, link: "*", element: <NoFoundPage /> },
    { id: 4, link: "/cart", element: <CartPage /> },
    { id: 5, link: "/auth", element: <AuthPage /> },
    { id: 7, link: "/pricing", element: <PricingPage /> },
    { id: 6, link: "/favorites", element: <FavoritesPage /> },
    { id: 9, link: "/profile", element: <ProfilePage /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} key={elem.id} element={elem.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
