import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import HeaderNav from "./components/Nav/Nav";
import PageThree from "./components/PageThree/PageThree";
import SecondPage from "./components/SecondPage/SecondPage";

function App() {
  return (
    <section className="App">
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#00FF00",
          borderBottomLeftRadius: "25%",
          opacity: 1,
        }}
      >
        <HeaderNav />
        <LandingPage />
      </div>
      <div>
        <SecondPage />
        <PageThree />
      </div>
    </section>
  );
}

export default App;
