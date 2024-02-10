import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import 'src/assets/css/poppins.css';

const router = createBrowserRouter(routes);

function App() {
    return (
        <div className="font-poppins">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
