import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
// import AdminNavBar from './admin/AdminNavBar';

// import "./style.css"

function App() {
  return (
    <div > 
      <h1 id="store-name">Zen-Mart</h1>
    <Header/>
    {/* <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'> */}
    {/* <AdminNavBar/> */}
      {/* <Outlet/> */}
    {/* </main> */}
    </div>
  );
}

export default App;
