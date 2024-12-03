
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Stats from './components/Templates/stats/Stats';
import {Navbar} from './components/organisms/Navbar';
import Footer from './components/Templates/footer/Footer';
import EmployeeTable from './components/organisms/EmployeeTable';
import EmployeeAllocation from './components/Templates/employee-allocation/EmployeeAllocation';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation(); 
  const isStatsPage = location.pathname === '/Stats'; // This now works inside Router context

  return (
    <>
      <Navbar isStatsPage={isStatsPage} />
      <Footer />
      <Routes>
        <Route path="/Stats" element={<Stats />} />
        <Route path="/" element={<EmployeeTable />} />
        <Route path="/employee-allocation" element={<EmployeeAllocation />} />
      </Routes>
    </>
  );
};

export default App;