import '../../CSS/applicationPage.css'
import { Link } from 'react-router-dom'

const App_Link_Test = () => {
  return (
    <div className="applicationPage-content">
      <Link to="/">
        <strong>Return to Homepage</strong>
      </Link>
    </div>
  )
}
export default App_Link_Test
