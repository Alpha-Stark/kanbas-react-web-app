import { Link } from "react-router-dom";
import { FaFlask } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function LandingIndex() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center p-4 shadow-lg rounded" style={{ maxWidth: "90%", backgroundColor: "#f9f9f9" }}>
                <h1 className="mb-3" style={{ fontSize: "clamp(1.5rem, 2vw + 1rem, 2.5rem)" }}><strong>Mann Savani</strong></h1>
                <h3 className="text-muted" style={{ fontSize: "clamp(1rem, 1.5vw + 0.5rem, 1.5rem)" }}>
                    <span>NUID:</span> 002443162
                </h3>
                <h4 className="mb-4" style={{ fontSize: "clamp(1rem, 1.5vw + 0.5rem, 1.5rem)" }}>CS5610</h4>
                <h3 className="mb-4" style={{ fontSize: "clamp(1rem, 1.5vw + 0.5rem, 1.5rem)" }}>Quick Links</h3>
                <div className="d-grid gap-3">
                    <Link to={"/Labs"}>
                        <button className="btn btn-lg btn-outline-primary d-flex align-items-center justify-content-center w-100">
                            <FaFlask className="me-2" /> Labs
                        </button>
                    </Link>
                    <Link to={"/Kanbas"}>
                        <button className="btn btn-lg btn-outline-danger d-flex align-items-center justify-content-center w-100">
                            <FaBook className="me-2" /> Kanbas
                        </button>
                    </Link>
                    <Link to={"https://github.com/Sanidhya-Maharia/kanbas-react-web-app"}>
                        <button className="btn btn-lg btn-outline-dark d-flex align-items-center justify-content-center w-100">
                            <FaGithub className="me-2" /> GitHub
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
