import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/indext';

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
