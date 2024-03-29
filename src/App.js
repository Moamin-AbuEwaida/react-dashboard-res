import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/layout/Layout';
import BoardPage from './pages/board/Board';
import Calendar from './pages/calendar/Calendar';
import Dashboard from './pages/dashboard/Dashboard';
import DataGrid from './pages/dataGrid/DataGrid';

function App() {
  return (
    <div id='dashboard'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='calendar' element={<Calendar /> } />
            <Route path='board' element={<BoardPage /> } />
            <Route path='users' element={<DataGrid /> } />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
