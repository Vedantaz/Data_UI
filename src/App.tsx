
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Stats from './components/Templates/appStats';
import Navbar from './components/organisms/appNavBar';
import Footer from './components/Templates/appFooter';
import EmployeeTable from './components/organisms/employeeTable';
import EmployeeAllocation from './components/Templates/employeeAllocation';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation(); 
  const isStatsPage = location.pathname === '/Stats'; 
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