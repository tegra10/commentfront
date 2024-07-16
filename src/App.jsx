import { Routes, Route } from "react-router-dom";

const App = () => {   <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/comment" element={<Comments />} />
                <Route path="/carte" element={<Carte />} />
            </Routes>
        </>
    };

export default App;
