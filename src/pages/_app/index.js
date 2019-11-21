import React from "react";
import HomePage from "./../home";
import ContactPage from "./../contact";
import { Switch, Route, Router } from "./../../util/router.js";
import ContactSection from "./../../components/ContactSection";
import analytics from "./../../util/analytics.js";
import { ProvideAuth } from "./../../util/auth.js";
import "./styles.scss";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
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

          <ContactSection
            color="white"
            size="medium"
            title="Let's Talk about your idea - Contact Us"
            subtitle="Let's get to know each other"
            showNameField={true}
            buttonText="Send message"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
