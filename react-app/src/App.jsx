
import { Outlet } from 'react-router';
import Footer from './components/Layout/Footer';
import NavBar from './components/Layout/NavBar';

function App() {

  return (
    <>
    <NavBar />
      <Outlet />
    <Footer />
    </>
  )
}

export default App
