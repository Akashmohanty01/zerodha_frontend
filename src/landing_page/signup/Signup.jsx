import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            await axios.post("http://localhost:3002/register", { name, email, password });
            navigate("/login");
        } catch (err) {
            setError("Registration failed.");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-lg" style={{ width: "25rem" }}>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <div className="alert alert-danger text-center">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control mb-3" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                    <input type="email" className="form-control mb-3" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" className="form-control mb-3" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                    <input type="password" className="form-control mb-3" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
