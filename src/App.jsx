import { Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./utils/theme";
import { LoginRoute, ProtectedRoute } from "./utils/ProtectedRoute";
import Home from "./pages/home";
import Zakat from "./pages/zakat";
import Artikel from "./pages/artikel";
import ArtikelPenuh from "./pages/artikel/fullpage";
import Kalkulator from "./pages/kalkulator/kalkulator";
import AdminLogin from "./pages/admin/login";
import Dashboard from "./pages/admin/dashboard";
import AdminZakat from "./pages/admin/zakat";
import AdminLayout from "./pages/admin/AdminLayout";
import Laporan from "./pages/laporan";
import LaporanDetail from "./pages/laporan/fullpage";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/zakat' element={<Zakat />} />
				<Route path='/artikel' element={<Artikel />} />	
				<Route path='/artikel/penuh' element={<ArtikelPenuh />} />
				<Route path='/kalkulator' element={<Kalkulator />} />	
				<Route path='/laporan' element={<Laporan />} />
				<Route path='/laporan/detail' element={<LaporanDetail />} />
				<Route path='/artikel' element={<Artikel />} />
				<Route path='/artikel/penuh' element={<ArtikelPenuh />} />
				<Route element={<LoginRoute />}>
					<Route path='/admin/login' element={<AdminLogin />} />
				</Route>
				<Route element={<ProtectedRoute />}>
					<Route path='/admin' element={<AdminLayout><Dashboard/></AdminLayout>} />
					<Route path='/admin/zakat' element={<AdminLayout ><AdminZakat/></AdminLayout>} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
