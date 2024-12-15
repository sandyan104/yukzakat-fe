import { Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./utils/theme";
import Home from "./pages/home";
import Zakat from "./pages/zakat";
import Artikel from "./pages/artikel";
import ArtikelPenuh from "./pages/artikel/fullpage";
import AdminLogin from "./pages/admin/login";
import { LoginRoute, ProtectedRoute } from "./utils/ProtectedRoute";
import DashboardLayoutBasic from "./pages/admin";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/zakat' element={<Zakat />} />
				<Route path='/artikel' element={<Artikel />} />
				<Route path='/artikel/penuh' element={<ArtikelPenuh />} />
				<Route element={<LoginRoute />}>
					<Route path='/admin/login' element={<AdminLogin/>} />
				</Route>
				<Route element={<ProtectedRoute />}>
					<Route path='/admin' element={<DashboardLayoutBasic/>} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
