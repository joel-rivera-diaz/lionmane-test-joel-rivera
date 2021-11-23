import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './pages/Home';
import { DogFamily } from './pages/DogFamily';

export const App = () => {
	return (
		<Router>
      <Routes>
        <Route path="/" element={<Home />} />
				<Route path="/dog-family" element={<DogFamily />} />
      </Routes>
    </Router>
	)
};


