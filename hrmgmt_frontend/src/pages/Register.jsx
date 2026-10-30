
import { useState } from "react";

function Register() {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [role, setRole] = useState("");
    let [message, setMessage] = useState("");
    let [error, setError] = useState("");
    let [loading, setLoading] = useState(false);

    let handleRegister = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        try {
            setLoading(true);

            let res = await fetch(
                "http://localhost:3000/api/emp/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                        role
                    })
                }
            );

            let data = await res.json();

            if (res.ok) {
                setMessage(data.message || "Registration successful!");

                console.log("Data registered successfully");
                console.log(data);

                setName("");
                setEmail("");
                setPassword("");
                setRole("");

            } else {
                setError(data.message || "Registration failed");
                console.log(data);
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

                                <div
                                    className="bg-primary text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
                                    style={{ width: "70px", height: "70px" }}
                                >
                                    <i className="bi bi-person-plus-fill fs-1"></i>
                                </div>

                                <h2 className="fw-bold text-dark">
                                    Create Account
                                </h2>

                                <p className="text-muted">
                                    Register for HR Management System
                                </p>

                            </div>

                            {/* Registration Form */}
                            <form onSubmit={handleRegister}>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control form-control-lg rounded-3"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your name"
                                        required
                                    />

                                </div>

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
                                        placeholder="Create a password"
                                        required
                                        minLength={6}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Select Role
                                    </label>

                                    <select
                                        className="form-select form-select-lg rounded-3"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        required
                                    >
                                        <option value="">Choose your role</option>
                                        <option value="EMPLOYEE">EMPLOYEE</option>
                                        <option value="HR">HR</option>
                                    </select>

                                </div>

                                {/* Success Message */}
                                {message && (
                                    <div className="alert alert-success py-2">
                                        {message}
                                    </div>
                                )}

                                {/* Error Message */}
                                {error && (
                                    <div className="alert alert-danger py-2">
                                        {error}
                                    </div>
                                )}

                                {/* Register Button */}
                                <div className="d-grid mt-4">

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg rounded-3 fw-semibold"
                                        disabled={loading}
                                    >
                                        {loading ? "Registering..." : "Create Account"}
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

export default Register;
