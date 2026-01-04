// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";



// const Layout=()=>{
//     return(
//         <>
//         <h1>This is layout page</h1>

//         <Header/>
//         <Outlet/>
//         <Footer/>
        
//         </>
//     )
// }

// export default Layout;


import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css"; // Optional - create this file for global page styling

const Layout = () => {
  return (
    <div className="app-layout d-flex flex-column min-vh-100">
      {/* Fixed/sticky header */}
      <Header />

      {/* Main content area - grows to fill available space */}
      <main className="flex-grow-1 main-content">
        <div className="content-container">
          <Outlet />           {/* All child routes render here */}
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;