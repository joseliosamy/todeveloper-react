// Utilities
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Site } from './components/MainComponets';
//ok
// Partial components
import Header from './components/partials/Header';

// pages

function App() {
  return (
    <BrowserRouter>
      <Site>
        <Header />
        <Routes />
      </Site>
    </BrowserRouter>
  );
}

export default App;
