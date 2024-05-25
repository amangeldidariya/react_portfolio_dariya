import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const styles = {
    navbar: {
      transition: 'background-color 0.3s ease',
    },
    sticky: {
      backgroundColor: '#08072f',
    },
    navLink: {
      fontSize: '18px',
      color: '#000',
      marginTop: '4px',
      textDecoration: 'none',
    },
    navLinkHover: {
      color: '#007bff',
    },
    navbarNav: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  };

  return (
      <Navbar
          expanded={expand}
          fixed="top"
          expand="md"
          style={navColour ? { ...styles.navbar, ...styles.sticky } : styles.navbar}
      >
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" style={styles.navbarNav} defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/"
                    onClick={() => updateExpanded(false)}
                    style={styles.navLink}
                >
                  Про себя
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/about"
                    onClick={() => updateExpanded(false)}
                    style={styles.navLink}
                >
                  Навыки
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/project"
                    onClick={() => updateExpanded(false)}
                    style={styles.navLink}
                >
                  Мои работы
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/resume"
                    onClick={() => updateExpanded(false)}
                    style={styles.navLink}
                >
                  Резюме
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/contacts"
                    onClick={() => updateExpanded(false)}
                    style={styles.navLink}
                >
                  Контакты
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
