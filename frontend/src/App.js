import React from "react";
import Header from "./components/header";
import Container  from "react-bootstrap/Container";
import Footer from "./components/footer";
// import HomeScreen from "./Screens/ HomeScreen";
import { Outlet } from "react-router-dom";
function App(){
  return (
    <div>
      <Header/>
      <Container>
          <Outlet />
      </Container>
      <Footer/>
    </div>  
  );
}
export default App;