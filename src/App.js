import Auth from "./Components/Auth";
import Main from "./Components/Main";
import ParticleComponent from "./Components/ParticleComponent";

function App() {
  return (
    <div className="text-white">
      {/* <div className="absolute w-[20rem] h-[20rem] bg-gradient-to-br from-[#053680] bg-opacity-40  rounded-br-[50%]"></div> */}
      <ParticleComponent />
      <Auth />
      {/* <Main /> */}
    </div>
  );
}

export default App;
