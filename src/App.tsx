import ColorButton from "./components/ColorButton";
import NameAndDetails from "./components/NameAndDetails";

function App() {
  return (
    <>
      <h1 className="mt-8 text-3xl text-center font-bold">Resume Builder</h1>
      <div className="p-8 mx-10 my-14 xl:mx-56 border-2 border-gray-300">
        <NameAndDetails />
      </div>
      <div className="flex align-middle justify-evenly w-1/4 m-auto">
        <ColorButton color="orange" />
        <ColorButton color="blue" />
        <ColorButton color="green" />
      </div>
    </>
  );
}

export default App;
