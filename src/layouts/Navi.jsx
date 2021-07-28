import React,{ useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  let history = useHistory()
  function handleSingOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSingIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container className="App">
          <Menu.Item name="home" as={NavLink} to="/" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated?<SignIn signOut={handleSingOut}></SignIn>:
            <SignOut signIn={handleSingIn}></SignOut>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
