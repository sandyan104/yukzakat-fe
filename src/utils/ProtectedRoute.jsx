import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
	const token = localStorage.getItem("Token");

	return token ? <Outlet /> : <Navigate to='/admin/login' />;
};

export const LoginRoute = () => {
	const token = localStorage.getItem("Token");

	return token ? <Navigate to="/admin" /> : <Outlet />;
};
