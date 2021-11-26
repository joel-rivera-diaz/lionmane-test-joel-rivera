import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { BreedPage } from './pages/BreedPage';

export const App = () => {
	return (
		<Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
				<Route path="/breed/:breed" element={<BreedPage  />} />
      </Routes>
    </Router>
	)
};


