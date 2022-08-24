import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Explore from './components/Explore/Explore';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import  NotFound from './components/NotFound/NotFound'

function App() {
  return (
<div className = 'gradient-background'>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route   path="/" element = {<Home />} />
        <Route   path = "/Explore" element={<Explore/>} />
        <Route   path = "/Search" element={<Search/>} />
        <Route path='*' exact={true} element={<NotFound />} />
     </Routes>
     <Footer />
    </BrowserRouter>
</div>
  );
}

export default App;
