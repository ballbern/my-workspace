// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Home } from './home';
import { BrowserRouter as Router } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
