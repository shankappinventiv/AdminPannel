import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "../../src/screens/signUp/index"

/**
 * Root router component
 * @param props parameter for Router function
 */
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props: object) => (
            <Suspense
              fallback={
                <div>
                  <span>Loading...</span>
                </div>
              }
            >
              <div>Hello</div>
               
            </Suspense>
          )}
        />
        <Route
          exact
          path="/signUp"
          render={(props: object) => (
            <Suspense
              fallback={
                <div>
                  <span>Loading...</span>
                </div>
              }
            >
              <SignUp />
               
            </Suspense>
          )}
        />
        
        <Route
          component={(props: object) => (
            <Suspense
              fallback={
                <div>
                  <span>Loading...</span>
                </div>
              }
            >
                <div>Not found</div>
            </Suspense>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
