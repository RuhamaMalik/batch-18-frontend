import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useAuthContext } from "./context/AuthContext";
import { Outlet } from "react-router-dom";

function App() {
  let { loading } = useAuthContext();
  if (loading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }
  return (
    <>
      <Header />
      <Outlet />

      {/* <Dashboard/> */}
      {/*  */}
  
      <Footer />
    </>
  );
}

export default App;
