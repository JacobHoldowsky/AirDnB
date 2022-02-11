import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsListPage from "./components/SpotsListPage";
import CreateSpotForm from "./components/CreateSpotForm"
import SpotDetailPage from "./components/SpotDetailPage";
import EditSpotPage from "./components/EditSpotPage";
import DeleteSpotPage from "./components/DeleteSpotPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            Welcome!
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/spots'>
            <SpotsListPage />
          </Route>
          <Route exact path='/spots/new'>
            <CreateSpotForm />
          </Route>
          <Route exact path='/spots/:spotId'>
            <SpotDetailPage />
          </Route>
          <Route exact path='/spots/:spotId/edit'>
            <EditSpotPage />
          </Route>
          <Route exact path='/spots/:spotId/delete'>
            <DeleteSpotPage />
          </Route>
          <Route>
            Can't find the page you were looking for...
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;