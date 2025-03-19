import React, { useEffect } from "react";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import TopAppBar from "./components/TopAppBar";


function App() {

  
  useEffect(() => {
    // Disable horizontal scrolling
    document.body.style.overflowX = "hidden";
  
    // Disable pinch-to-zoom
    const disableZoom = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };
  
    document.addEventListener("touchmove", disableZoom, { passive: false });
  
    return () => {
      document.removeEventListener("touchmove", disableZoom);
      document.body.style.overflowX = "auto";
    };
  }, []);


  return (

    <BrowserRouter>

      <TopAppBar />
    
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Location' element ={<Home/>} />
          <Route path='/*' element={<Home />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
