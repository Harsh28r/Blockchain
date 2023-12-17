/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="/"
                  target="_blank"
                >
                  SFIT_B6
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed {" "}
            <a
              href="/"
              target="_blank"
            >
             &
            </a>
             .Coded by{" "}
            <a
              href="/"
              target="_blank"
            >
              SFIT_B6
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
