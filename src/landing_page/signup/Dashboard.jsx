import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        if (!loggedInUser) {
            navigate("/login");
            return;
        }
        setUser(loggedInUser);
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="container mt-5">
            <h2>Dashboard</h2>
            {user ? <p>Welcome, {user.name}!</p> : <p>Loading...</p>}
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
