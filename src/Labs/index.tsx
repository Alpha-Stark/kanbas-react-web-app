// From branch "a1"
import { Navigate, Route, Routes } from "react-router"
import Lab1 from "./Lab1"
import Lab2 from "./Lab2"
import Lab3 from "./Lab3"
import TOC from "./TOC"

function Labs() {
    return (
        <div id="wd-labs">
            <h1>Mann Arvindbhai Savani</h1>
            <h2>Labs</h2>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3" element={<Lab3 />} />
            </Routes>
        </div>
    )
}

export default Labs