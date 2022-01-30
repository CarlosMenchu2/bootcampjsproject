
import { Outlet } from "react-router-dom";
import { FooterComponent } from "./components/footer/footer-component";
import { NavbarComponent } from "./components/navbar/Navbar-component";

function App() {
  return (
    <>
      {/*<NavbarComponent />*/}
      <Outlet />
      {/*<FooterComponent />*/}
    </>
  );
}

export default App;
