
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
    let [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    let handleLogin = async (event) => {
        event.preventDefault();
        setError("");

        if (email === "admin@gmail.com" && password === "admin") {
            navigate("/adminhome");
            return;
        }

        try {
            setLoading(true);

            let req = await fetch(
                "http://localhost:3000/api/emp/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                }
            );

            let data = await req.json();
            console.log(data);

            if (req.ok && data.user) {
                localStorage.setItem(
                    "currentuser",
                    JSON.stringify(data.user)
                );

                if (data.user.role === "HR") {
                    navigate("/hrhome");
                } else {
                    navigate("/emphome");
                }
            } else {
                setError(data.message || "Invalid email or password");
            }

        } catch (err) {
            console.log(err);
            setError("Unable to connect to the server");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light py-5">

            <div className="row w-100 justify-content-center">

                <div className="col-11 col-sm-9 col-md-6 col-lg-4">

                    <div className="card border-0 shadow-lg rounded-4">

                        <div className="card-body p-4 p-md-5">

                            {/* Heading */}
                            <div className="text-center mb-4">

                                <div className="bg-primary text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
                                    style={{ width: "70px", height: "70px" }}>

                                    <i className="bi bi-person-circle fs-1"></i>

                                </div>

                                <h2 className="fw-bold text-dark">
                                    Welcome Back!
                                </h2>

                                <p className="text-muted">
                                    Login to your HR Management System
                                </p>

                            </div>

                            {/* Login Form */}
                            <form onSubmit={handleLogin}>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control form-control-lg rounded-3"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control form-control-lg rounded-3"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        required
                                    />

                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="alert alert-danger py-2">
                                        {error}
                                    </div>
                                )}

                                {/* Login Button */}
                                <div className="d-grid mt-4">

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg rounded-3 fw-semibold"
                                        disabled={loading}
                                    >
                                        {loading ? "Logging in..." : "Login"}
                                    </button>

                                </div>

                            </form>

                            <hr className="my-4" />

                            <div className="text-center">

                                <small className="text-muted">
                                    HR Management System
                                </small>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
