import { Link } from "react-router-dom";
import { FaFlask } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function LandingIndex() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(to right, #4facfe, #00f2fe)" }}>
            <div className="card text-center p-5 shadow-lg rounded" style={{ maxWidth: "90%", backgroundColor: "#ffffffee" }}>
                <h1 className="mb-4" style={{ fontSize: "clamp(1.8rem, 2vw + 1rem, 3rem)", color: "#333" }}><strong>Mann Arvindbhai Savani</strong></h1>
                <h3 className="text-muted mb-1" style={{ fontSize: "clamp(1.2rem, 1.5vw + 0.5rem, 1.5rem)" }}>
                    <span>NUID:</span> <strong>002443162</strong>
                </h3>
                <h4 className="mb-4" style={{ fontSize: "clamp(1.1rem, 1.5vw + 0.5rem, 1.5rem)", color: "#666" }}>CS5610</h4>
                <h3 className="mb-4" style={{ fontSize: "clamp(1.2rem, 1.5vw + 0.5rem, 1.5rem)", color: "#444" }}>Quick Links</h3>
                <div className="d-grid gap-3">
                    <Link to="/Labs" className="text-decoration-none">
                        <button className="btn btn-lg btn-link link-hover d-flex align-items-center justify-content-center w-100" style={{ color: "#007bff" }}>
                            <FaFlask className="me-2" style={{ color: "#1e90ff" }} /> Labs
                        </button>
                    </Link>
                    <Link to="/Kanbas" className="text-decoration-none">
                        <button className="btn btn-lg btn-link link-hover d-flex align-items-center justify-content-center w-100" style={{ color: "#e74c3c" }}>
                            <FaBook className="me-2" style={{ color: "#ff6347" }} /> Kanbas
                        </button>
                    </Link>
                    <Link to="https://github.com/Alpha-Stark/kanbas-react-web-app" className="text-decoration-none">
                        <button className="btn btn-lg btn-link link-hover d-flex align-items-center justify-content-center w-100" style={{ color: "#333" }}>
                            <FaGithub className="me-2" style={{ color: "#333" }} /> GitHub
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
