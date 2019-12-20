import React from "react";
import HomePage from "./../home";
import ContactPage from "./../contact";
import { Switch, Route, Router } from "./../../util/router.js";
import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import { ProvideAuth } from "./../../util/auth.js";
import "./../../util/analytics.js";
import "./styles.scss";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar
            color="white"
            spaced={true}
            logo="https://res.cloudinary.com/yodacom/image/upload/v1554864573/yodacom/YodaComLogoTrans150x50_3x.png"
          />
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>
          <Footer
            color="white"
            size="normal"
            logo="https://res.cloudinary.com/yodacom/image/upload/v1554864573/yodacom/YodaComLogoTrans150x50_3x.png"
            copyright="© 2019 Yodacom"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
