import Application_content from '../Components/Application_page_components/Application_content'
import App_Link_Test from '../Components/Application_page_components/App_Link_Test'
import Navbar from '../Components/Global_components/Navbar'
import useAuth from '../hooks/useAuth'

const Application = () => {
  // useAuth()
  return (
    <div className="h-screen overflow-auto bg-slate-200 fade-in">
      <Application_content />
    </div>
  )
}
export default Application
