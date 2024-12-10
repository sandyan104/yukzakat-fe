import { Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./utils/theme";
import Home from "./pages/home";
import Zakat from "./pages/zakat";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes>
      <Route path='/' element={<Home />} />
      <Route path='/zakat' element={<Zakat />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;

