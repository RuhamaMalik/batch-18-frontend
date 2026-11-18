import "./App.css";
import Header from "./components/Header";
import { useAuthContext } from "./context/AuthContext";

function App() {
  let { loading } = useAuthContext();
  if (loading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }
  return <>
  
  <Header/>
  
  </>;
}

export default App;
