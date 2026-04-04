import {useState} from 'react';


import Login from './Components/Login';
import Layout from './Components/Layout';
import Home from './Components/Home';

import { UserContext } from './userContext';

import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';


function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const [user, setUser] = useState<User>();

  
  /**
   *  This function will be passed to the login and app to allow for users to login and logout
   * @param isAuth a boolean on if the user is authenticated
   * @param user  the user to login our out
   */
  const loginCallback = (isAuth: boolean, user: User) => {
      if (isAuth === loggedIn) return;

      setLoggedIn(isAuth);
      setUser(user);
      
  }

  /**
   * This function will be called to log a user out
   */
  const logoutCallback = () => {
    setLoggedIn(false);
    setUser(undefined);
  }

  if (!loggedIn){
    return <Login login={loginCallback}/>
  }



  return (
    <Router>
      <Routes>
          <Route path="/home" element={<Layout logout={logoutCallback} />}>
              <Route index element={
                <UserContext value={user} >
                  {<Home/>}
                </UserContext>}>
              </Route>
              <Route path="*" element={
                <div>
                  <NavLink className="bg-amber-600"
                    to="/"
                    >Path not found :( Click Me!
                  </NavLink>
                </div>
              }>
              </Route>      
          </Route>
          </Routes>
      </Router>
         
  );
}

export default App
