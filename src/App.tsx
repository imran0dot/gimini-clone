import Main from "./components/Main/Main"
import Sidebar from "./components/Sidebar/Sidebar"

const App: React.FC = () => {

  return (
    <>
      <div className="flex relative">
        <Sidebar className="w-2/12 border-r hidden md:block" />

        <div className="bg-slate-50 md:w-10/12">
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
