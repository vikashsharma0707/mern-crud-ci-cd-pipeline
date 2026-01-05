// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';


// const Header=()=>{
//     return(
//         <>
       


//         <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link}  to="home">Home</Nav.Link>
//             <Nav.Link as={Link}  to="display">Display</Nav.Link>
//             <Nav.Link as={Link}  to="insert">Insert</Nav.Link>
//             <Nav.Link as={Link}  to="search">Search</Nav.Link>
//             <Nav.Link as={Link}  to="update">Update</Nav.Link>
            
//           </Nav>
//         </Container>
//       </Navbar>

        
//         </>
//     )
// }

// export default Header;



import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"; // Optional: for custom overrides

const Header = () => {
  const location = useLocation(); // to highlight active link

  const navItems = [
    { path: "/", label: "Home" },
    // { path: "/home", label: "Home" },
    { path: "/display", label: "Display" },
    { path: "/insert", label: "Insert" },
    { path: "/search", label: "Search" },
    { path: "/update", label: "Manage" }, // renamed "Update" → "Manage" for clarity
  ];

  return (
    <Navbar 
      expand="lg" 
      bg="dark" 
      variant="dark" 
      className="shadow-sm sticky-top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          <span className="brand-highlight">Emp</span>Manager
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;