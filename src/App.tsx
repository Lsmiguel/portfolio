import "./App.css"
import { Router } from "./routes/router";
import { Navbar } from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
    
   
  )
}