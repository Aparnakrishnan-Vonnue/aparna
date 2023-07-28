import Paragraph from "./components/Paragraph";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="flex justify-center items-center flex-col m-20">
     <h1>TOUCH TYPING</h1>
     <div className="flex w-[100%] items-center justify-evenly mx-2">
     <Sidebar/>
     <Paragraph/>
     </div>
    </div>
  );
}

export default App;
