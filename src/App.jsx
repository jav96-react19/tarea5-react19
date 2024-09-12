import './App.css'
import Greetings from '@/components/Greetings/Greetings.jsx'
import Button from "@/components/Button/Button.jsx"
import Mounted from '@/components/Mounted/Mounted.jsx';

function App() {
  let employee = "Javi";
  
  return (
    <main>
        <Greetings name={employee} />
        <Mounted />
        <Button />
    </main>
  )
}

export default App
