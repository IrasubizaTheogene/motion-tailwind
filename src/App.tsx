import "./index.css"
import OnTap from "./components/OnTap.tsx"
import OnTapcSize from "./components/OnTapcSize.tsx"
import StagerGrigLayout from "./components/StagerGrigLayout.tsx"
import StaggerText from "./components/StaggerText.tsx"
import ViewBoxRotation from "./components/ViewBoxRotation.tsx"
import Loader from "./components/Loader.tsx"
function App() {
  return (
        <div className="min-h-screen bg-[rgba(0 ,0, 0.50)] flex items-center justify-center">
          <Loader />
        </div>
        

  )
}

export default App