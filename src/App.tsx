import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './pages/Home';
import { Breed } from './pages/Breed';

export const App = () => {
	return (
		<Router>
      <Routes>
        <Route path="/" element={<Home />} />
				<Route path="/breed/:breed" element={<Breed  />} />
      </Routes>
    </Router>
	)
};


