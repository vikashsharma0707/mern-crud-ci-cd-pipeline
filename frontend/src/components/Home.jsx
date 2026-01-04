import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { 
  PersonPlusFill, 
  ListUl, 
  Search as SearchIcon, 
  GearFill, 
  EyeFill 
} from "react-bootstrap-icons";
// import "./Home.css"; // Create this file for custom styles

const Home = () => {
  const currentYear = new Date().getFullYear();

  const quickActions = [
    {
      title: "Add New Employee",
      description: "Register a new team member quickly",
      icon: <PersonPlusFill size={40} />,
      path: "/insert",
      variant: "success",
    },
    {
      title: "View All Employees",
      description: "See the complete employee directory",
      icon: <ListUl size={40} />,
      path: "/display",
      variant: "primary",
    },
    {
      title: "Search Employee",
      description: "Find anyone by employee number",
      icon: <SearchIcon size={40} />,
      path: "/search",
      variant: "info",
    },
    {
      title: "Manage Employees",
      description: "Edit, view or delete records",
      icon: <GearFill size={40} />,
      path: "/update",
      variant: "warning",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section text-center py-5">
        <Container>
          <h1 className="display-4 fw-bold mb-3">
            Welcome to <span className="brand-highlight">EmpManager</span>
          </h1>
          <p className="lead text-muted mb-4">
            Simple, fast, and secure employee management system
          </p>
          <p className="text-muted">
            Managing your team has never been easier • {currentYear}
          </p>
        </Container>
      </div>

      {/* Quick Actions Grid */}
      <Container className="py-5">
        <h2 className="text-center mb-5">Quick Actions</h2>
        
        <Row xs={1} md={2} lg={4} className="g-4">
          {quickActions.map((action, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-sm action-card border-0">
                <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                  <div className={`icon-circle bg-${action.variant}-subtle text-${action.variant} mb-3`}>
                    {action.icon}
                  </div>
                  <Card.Title as="h5" className="mb-3">
                    {action.title}
                  </Card.Title>
                  <Card.Text className="text-muted mb-4">
                    {action.description}
                  </Card.Text>
                  <Button
                    as={Link}
                    to={action.path}
                    variant={action.variant}
                    className="mt-auto w-100"
                  >
                    Go to {action.title.split(" ")[0]}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Extra Info / Stats Section */}
        <div className="stats-section mt-5 text-center">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="border-0 bg-light shadow-sm">
                <Card.Body className="p-4">
                  <h4>Ready to get started?</h4>
                  <p className="text-muted mb-4">
                    Add your first employee or explore the full list — everything is just one click away.
                  </p>
                  <Button
                    as={Link}
                    to="/insert"
                    variant="primary"
                    size="lg"
                    className="px-5"
                  >
                    Add Your First Employee
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;