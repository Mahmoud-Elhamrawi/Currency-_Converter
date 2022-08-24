
import Parent from './Componets/parent/Parent';
import Navbar from './Componets/Navbar/Navbar';
import { Routes, Route} from "react-router-dom" ;
import Home from './Componets/Home/Home';
import Gallery from './Componets/Gallery/Gallery';
import Contect from './Componets/Contect/Contect';
import NotFound from './Componets/NotFound/NotFound';
import Login from './Componets/Login/Login';
import Register from './Componets/Register/Register';


function App() {

   return (<>
   <Navbar />

   <div className='container'>

   <Routes>
         <Route path="/" element={<Home />} />
         <Route path="home"  element={<Home />} />
         <Route path="gallery"  element={<Gallery />} />
         <Route path="contact"  element={<Contect />} />
         <Route path="crud"  element={ <Parent/>} />
         <Route path="login"  element={ <Login/>} />
         <Route path="register"  element={ <Register/>} />
         <Route path="*"  element={<NotFound />} />


   </Routes>



   </div>


  
  </>
   
  );

}
export default App;
