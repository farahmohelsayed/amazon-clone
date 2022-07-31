import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { userActions } from "./store/user-slice";

function App() {
  const dispatch = useDispatch();
  const userState = useSelector(state=>state.user.user)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(userActions.setUser(authUser));
      } else {
        dispatch(userActions.setUser(null));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log("User state is:", userState)
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          path="/checkout"
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
