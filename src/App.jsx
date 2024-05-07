import './App.css'
import { Sidebar } from './Sidebar'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        This is the other side
      </div>
    </div>
  )
}

export default App
