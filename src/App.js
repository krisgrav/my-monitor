import './App.css';
import { Router } from './features/react-router/Router';
import {RouterProvider
} from "react-router-dom";

function App() {
  return (
    <div className="AppBody">
      <main className='AppMain'>
        <RouterProvider router={Router}></RouterProvider>
      </main>
    </div>
  );
}

export default App;
