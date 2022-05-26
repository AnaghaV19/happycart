import {BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen  from './screens/HomeScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAddressScreen from './screens/ShipppingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import PayScreen from './screens/PayScreen';
function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
    <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Navbar bg="dark" variant="dark"  expand="lg">
          <Container >
            <LinkContainer to="/">
              <Navbar.Brand>Happy Cart</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                     
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign in
                    </Link>
                  )}
                </Nav>
              </Navbar.Collapse>
                   </Container>
        </Navbar>
      
      </header>
      <main>
        <Container className="mt-3">
        <Routes>
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/signin" element={<SigninScreen/>} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/payment" element={<PaymentMethodScreen />}></Route>
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/shipping" element={<ShippingAddressScreen />} ></Route>
        <Route path="/pay" element={<PayScreen />} ></Route>
        <Route path="/order/:id" element={<OrderScreen />}></Route>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/orderhistory" element={<OrderHistoryScreen />} ></Route>
          <Route path="/product/:slug" element={<ProductScreen />}/>
          <Route path="/" element={ <HomeScreen />}/>
        </Routes>
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserved @2022</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
