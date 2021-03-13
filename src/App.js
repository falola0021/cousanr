import React from 'react';
import logo from './assets/logo.PNG';
import Style from './app.module.css';

import { Nav, Navbar, Form, Col, Row, Button, Card } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar className={Style.navbar} expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={Style.coyinfo}>
          <Nav className="mr-auto">
            <Nav.Link>
              <span className={Style.coyinfo}>Home</span>{' '}
            </Nav.Link>
            <Nav.Link href="#link">
              <span className={Style.coyinfo}>About Us</span>
            </Nav.Link>
            <Nav.Link href="#link">
              <span className={Style.coyinfo}>Portfolio</span>
            </Nav.Link>
            <Nav.Link href="#link">
              <span className={Style.coyinfo}>News</span>
            </Nav.Link>
            <Nav.Link href="#link">
              <span className={Style.coyinfo}>Location</span>
            </Nav.Link>
          </Nav>
          <Form inline>
            <i
              style={{ color: 'rgb(184, 184, 187)' }}
              className="fa fa-search"
            ></i>
            <Nav.Link className={Style.login} href="#link">
              LOGIN
            </Nav.Link>
            <Button className={Style.signup}>SIGN UP</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className={Style.pagelayer}>
        <Row>
          <Col sm={9}></Col>
          <Col sm={3}>
            <div className={Style.side}>
              <p className={Style.p1}>ROLOBANK</p>
              <p className={Style.p2}>
                WE ARE A <br />
                BANK OF YOUNG AND FOR <br />
                THE YOUNG
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className={Style.sec}>
        <div className={Style.header}>LATEST NEWS</div>
        <div className={Style.sub}>Catch all the information on time here</div>
        <div className={Style.card}>
          <Row>
            <Col sm={10}></Col>
            <Col>
              <div className={Style.angle}>
                <i
                  style={{
                    backgroundColor: 'grey',
                    paddingLeft: '10px',
                    paddingRight: '10px',

                    color: 'white',
                  }}
                  className="fas fa-angle-left"
                ></i>
                <i
                  style={{
                    backgroundColor: 'blue',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    marginLeft: '10px',
                    color: 'white',
                  }}
                  className="fas fa-angle-right"
                ></i>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem', border: 'none' }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1562911791-472321d62247?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
                />
                <div>
                  <div className={Style.cardtext}>LATEST APP UPDATE</div>
                  <div>
                    Some quick example text to build on the card title and make
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', border: 'none' }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1562911791-472321d62247?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
                />
                <div>
                  <div className={Style.cardtext}>LATEST APP UPDATE</div>
                  <div>
                    Some quick example text to build on the card title and make
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', border: 'none' }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1562911791-472321d62247?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
                />
                <div>
                  <div className={Style.cardtext}>LATEST APP UPDATE</div>
                  <div>
                    Some quick example text to build on the card title and make
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', border: 'none' }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1562911791-472321d62247?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
                />
                <div>
                  <div className={Style.cardtext}>LATEST APP UPDATE</div>
                  <div>
                    Some quick example text to build on the card title and make
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <div className={Style.sec2}>
            <Row>
              <Col>
                <Card style={{ width: '18rem', border: 'none' }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1562911791-472321d62247?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
                  />
                  <div>
                    <div className={Style.cardtext}>LATEST APP UPDATE</div>
                    <div>
                      Some quick example text to build on the card title and
                      make
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '18rem', border: 'none' }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1562911791-472321d62247?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
                  />
                  <div>
                    <div className={Style.cardtext}>LATEST APP UPDATE</div>
                    <div>
                      Some quick example text to build on the card title and
                      make
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '18rem', border: 'none' }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1562911791-472321d62247?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
                  />
                  <div>
                    <div className={Style.cardtext}>LATEST APP UPDATE</div>
                    <div>
                      Some quick example text to build on the card title and
                      make
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '18rem', border: 'none' }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1562911791-472321d62247?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
                  />
                  <div>
                    <div className={Style.cardtext}>LATEST APP UPDATE</div>
                    <div>
                      Some quick example text to build on the card title and
                      make
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
