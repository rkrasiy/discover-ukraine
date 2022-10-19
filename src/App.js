import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Layout from "./pages/loyout";
import Animation from "./pages/animation";


export default function App() {
   // const scrollRef = useRef();            
    return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="animation" element={<Animation />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
}