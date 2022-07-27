import Navbar from "./Components/Navbar";   
import SideBar from "./Components/SideBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import SingIn from "./Components/SingIn";




const App = () => {
  return (
    <div>
      <Navbar/>
      <SideBar/>
      <SingIn/>
    </div>
  );
}

export default App;
