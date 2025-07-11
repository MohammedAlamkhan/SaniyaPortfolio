import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Nav, Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ProjectPage from './ProjectPage';

function App() {
  const [expanded, setExpanded] = useState({});
  const location = useLocation();

  const toggleExpanded = (id) => {
    setExpanded(prevState => ({...prevState, [id]: !prevState[id]}));
  }

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({behavior: "smooth"});
      }
    } else if (location.pathname === process.env.PUBLIC_URL || location.pathname === process.env.PUBLIC_URL + '/') {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }
  }, [location]);

  const experienceData = [
    {
      id: 1,
      title: "Reliance Industries Limited, Design Architect",
      period: "Sep 2023 - Present, Mumbai",
      duties: [
        "Develop project plans, timelines, and budgets.",
        "Define project scope and deliverables.",
        "Monitor and manage project risks.",
        "Conduct regular site inspections.",
        "Maintain detailed project documentation.",
        "Implement cost-saving measures.",
        "Provide timely feedback and approvals.",
        "Resolve conflicts and issues."
      ]
    },
    {
      id: 2,
      title: "Muttha Group, Design Coordinator",
      period: "Sep 2022 - Aug 2023, Pune",
      duties: [
        "Collaborate on project objectives and timelines.",
        "Coordinate with design professionals.",
        "Evaluate architectural and engineering drawings.",
        "Liaise with external design consultants.",
        "Explore cost-effective design solutions.",
        "Implement quality control measures.",
        "Coordinate with regulatory authorities.",
        "Promote sustainable design practices."
      ]
    },
    {
      id: 3,
      title: "MACE Project and Cost Management Pvt. Ltd, Assistant Manager - Design",
      period: "Nov 2019 – Aug 2022, Gurgaon",
      duties: [
        "End-to-End Project Coordination and Design management.",
        "Review architectural documents for conflicts.",
        "Manage external design processes.",
        "Implement Cloud-based management system.",
        "Conduct Design Meetings and progress reviews.",
        "Oversee timely production of design information.",
        "Prepare Scope of work for Consultants.",
        "Assist in Key Issue Tracker and bill reviews.",
        "Prepare Aging Reports and Bills Tracker."
      ]
    },
    {
      id: 4,
      title: "MACE Project and Cost Management Pvt. Ltd, Intern",
      period: "Sep 2019 – Nov 2019, Gurgaon",
      duties: [
        "Assist design manager in coordination.",
        "Prepare drawing trackers and construction programs.",
        "Organize Weekly Design Meetings.",
        "Ensure timely submission of drawings.",
        "Maintain drawing backup on local server."
      ]
    },
    {
      id: 5,
      title: "Architect Hafeez Contractor, Professional Training",
      period: "Jan 2018 – Nov 2018, Gurgaon",
      duties: [
        "Assist with CAD drawings.",
        "Help with project and contract administration.",
        "Prepare Architectural Drawings Log.",
        "Conduct site visits for mockups.",
        "Develop 3D views and models."
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "DLF Camellias Gurgaon",
      description: "A prestigious super-luxury residential project by DLF in Gurgaon, featuring spacious apartments and penthouses with golf course views.",
      details: "DLF Camellias, a prestigious residential project by DLF in Gurgaon's Sector 42, stands as a hallmark of super-luxury living in India. Situated on the exclusive Golf Drive within the DLF Golf Course community, the project offers a serene and opulent lifestyle with breathtaking views of two golf courses. The project is spread across 18 acres and features 16 high-rise towers with a total of 429 residences. The architecture is by Hafeez Contractor. It is India's first residential development to receive LEED Platinum Certification. Residences range from 7,400 sq. ft. to 16,000 sq. ft. and are delivered in a bare-shell condition. A standout feature is The Camellias Club, a 160,000 sq. ft. bi-level clubhouse designed by the Rockwell Group from New York, offering various amenities including fitness, social, regenerative, renewed, creative, competitive, and relaxed zones. Other amenities include 24x7 security, three-level basement car parking, passenger lifts, meditation garden, sporting facilities, swimming pool, and golf cart shuttles. Located in Sector 42, Gurgaon, it has excellent connectivity to Rapid Metro and Delhi International Airport.",
      image: `${process.env.PUBLIC_URL}/dlf_camellias.jpg`,
      contributions: [
        "Coordinated with design professionals and external consultants.",
        "Reviewed architectural documents for conflicts and ensured design integrity.",
        "Assisted in project planning, timelines, and budget monitoring.",
        "Conducted site inspections and maintained detailed project documentation."
      ]
    },
    {
      id: 2,
      title: "RP Goenka International School",
      description: "An initiative of the RP Sanjiv Goenka Group, located in Kolkata, focusing on digital technologies and educational research.",
      details: "RP Goenka International School (RPGIS) is an initiative of the RP Sanjiv Goenka Group. Located at Alipore, in the heart of the City of Kolkata. RPGIS will synergize emerging digital technologies and latest educational research to prepare resilient leaders who are ready for the future. RPGIS provides a Teacher Student Ratio of 1:6, highly experienced faculty, commitment to innovation, and an international curriculum rooted in Indian culture & strong values. It focuses on problem-solving, personalized learning, and digital learning. The school is inclusive with dedicated special education needs (SEN) spaces, strict safety protocols, and a world-class tech-integrated campus. It offers small class sizes and classrooms designed for collaborative learning. The curriculum follows an International curriculum from nursery till grade 12, with 2 external board examinations. RPGIS is an IB World School and a proud member of the Council of International Schools (CIS).",
      image: `${process.env.PUBLIC_URL}/rp_goenka_school.jpg`,
      contributions: [
        "Collaborated on project objectives and timelines for the school's design.",
        "Evaluated architectural and engineering drawings for educational spaces.",
        "Promoted sustainable design practices within the school's infrastructure.",
        "Assisted in coordinating with regulatory authorities for school building approvals."
      ]
    },
    {
      id: 3,
      title: "Muttha IT Park (Muttha Towers)",
      description: "A commercial building in Yerawada, Pune, offering spacious office spaces primarily for IT/ITES companies.",
      details: "Muttha Towers, located on Loop Road, Yerawada, Pune, is a commercial building developed by the Muttha Group. It offers spacious office spaces, with up to 80% dedicated to IT/ITES companies. The building stands 8 floors tall with a total built-up area of approximately 9,76,000 sq. ft. Each floor has an area of approximately 1,22,000 sq. ft. Completed in 2008, it houses notable tenants like NXP Semiconductors. Amenities include a Building Management System (BMS), CCTV surveillance, lifts, visitor parking, power backup, and fire fighting equipment. It is strategically located near Pune airport and railway station, with proximity to hotels, other IT Parks, and educational institutions.",
      image: `${process.env.PUBLIC_URL}/muttha_it_park.jpeg`,
      contributions: [
        "Managed external design processes for the IT park's commercial spaces.",
        "Reviewed architectural documents to ensure compliance and functionality.",
        "Assisted in implementing quality control measures for the building's design.",
        "Contributed to cost-effective design solutions for the project."
      ]
    },
    {
      id: 4,
      title: "NMAJS-EYC",
      description: "A newly opened early years campus in Bandra Kurla Complex, Mumbai, focusing on pre-school and kindergarten education.",
      details: "The Nita Mukesh Ambani Junior School Early Years Campus (NMAJS-EYC) is a newly opened educational institution in Bandra Kurla Complex (BKC), Mumbai. Inaugurated on July 17, 2024, it caters to pre-school and kindergarten education (Nursery, LKG, UKG). The campus spans 56,000 square feet (or 30,000 sq ft according to some sources), blending indoor and outdoor learning spaces. It features flexible and expansive spaces, transparent architecture, and emphasizes a holistic and future-ready learning approach. NMAJS is an IB World School offering the Primary Years Programme (PYP) from Early Years. The project was conceptualized and led by Isha Ambani Piramal.",
      image: `${process.env.PUBLIC_URL}/nmajs_eyc.jpg`,
      contributions: [
        "Contributed to the design coordination of flexible and expansive learning spaces.",
        "Assisted in ensuring transparent architecture for collaboration and community.",
        "Participated in the development of 3D views and models for the campus.",
        "Helped in preparing architectural drawings and documentation for the project."
      ]
    }
  ];

  const MainContent = () => (
    <>
      <header className="hero">
        <h1>SANIYA JAMIL</h1>
        <p>Architect & Design Coordinator</p>
      </header>

      <section id="about" className="section">
        <Container>
          <h2>About Me</h2>
          <Row className="align-items-center">
            <Col md={4}>
              <img src={`${process.env.PUBLIC_URL}/saniya.jpg`} alt="Saniya Jamil" className="about-img" />
            </Col>
            <Col md={8} className="text-start">
              <p>
                With over six years of dedicated experience, I am an accomplished Architect and Design Coordinator, driven by a passion for continuous learning and a commitment to delivering impactful insights. My expertise lies in seamlessly connecting the creative visions of designers with the practical execution of developers, all while fostering strong, collaborative relationships with clients. I thrive on transforming concepts into tangible, inspiring realities.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="experience" className="section bg-light">
        <Container>
          <h2>Work Experience</h2>
          <div className="experience-timeline">
            {experienceData.map((item, index) => (
              <div className={`experience-container ${index % 2 === 0 ? 'left' : 'right'}`} key={item.id}>
                <div className="experience-content">
                  <h4>{item.title}</h4>
                  <p className="text-muted">{item.period}</p>
                  <ul>
                    {expanded[item.id] ? item.duties.map((duty, i) => <li key={i}>{duty}</li>) : item.duties.slice(0, 2).map((duty, i) => <li key={i}>{duty}</li>)}
                  </ul>
                  {item.duties.length > 2 && 
                    <button className="read-more-btn" onClick={() => toggleExpanded(item.id)}>
                      {expanded[item.id] ? 'Read Less' : 'Read More'}
                    </button>
                  }
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="section">
        <Container>
          <h2>Projects</h2>
          <Row>
            {projects.slice().reverse().map(project => (
              <Col md={6} lg={4} className="project-item" key={project.id}>
                <Link to={`${process.env.PUBLIC_URL}/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card className="project-card">
                    <Card.Img variant="top" src={project.image} className="project-img" />
                    <Card.Body className="project-card-body">
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="skills" className="section bg-light">
        <Container className="skills-container">
          <h2>Skills</h2>
          <div className="skills-category">
            <h3>Software Skills</h3>
            <div className="skills-list">
              <div className="skill-item">AutoCAD</div>
              <div className="skill-item">Photoshop</div>
              <div className="skill-item">Navisworks</div>
              <div className="skill-item">SketchUp</div>
              <div className="skill-item">Revit/BIM</div>
              <div className="skill-item">Microsoft Office</div>
            </div>
          </div>
          <div className="skills-category">
            <h3>Strengths</h3>
            <div className="skills-list">
              <div className="skill-item">Design Coordination</div>
              <div className="skill-item">Collaboration</div>
              <div className="skill-item">Project Management</div>
              <div className="skill-item">Sustainable Design</div>
              <div className="skill-item">Communication</div>
              <div className="skill-item">Quality Control</div>
              <div className="skill-item">Cost Management</div>
              <div className="skill-item">Client Management</div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="section">
        <Container>
          <h2>Contact</h2>
          <div className="contact-info text-center">
            <p>Email: <a href="mailto:saniyajamilsj@gmail.com">saniyajamilsj@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/saniya-jamil-55a7a5130/" target="_blank" rel="noopener noreferrer">linkedin.com/in/saniya-jamil-55a7a5130</a></p>
            <p>Phone: +916394765453</p>
          </div>
        </Container>
      </section>

      <footer className="py-4">
        <Container>
          <p className="text-center text-muted">&copy; 2025 Saniya Jamil. All Rights Reserved.</p>
        </Container>
      </footer>
    </>
  );

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="navbar-custom">
        <Container>
          <Navbar.Brand as={Link} to="/">SANIYA JAMIL</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/#about">About</Nav.Link>
              <Nav.Link as={Link} to="/#experience">Experience</Nav.Link>
              <Nav.Link as={Link} to="/#projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/#skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:id" element={<ProjectPage projects={projects} />} />
      </Routes>
    </>
  );
}

export default App;
