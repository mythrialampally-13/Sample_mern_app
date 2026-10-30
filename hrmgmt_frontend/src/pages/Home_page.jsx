
import React from "react";
import { Link } from "react-router-dom";

function Home_page() {
    return (
        <div className="container-fluid bg-light min-vh-100">

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
                <a className="navbar-brand fw-bold" href="/">
                    HR Management System
                </a>

                <div className="ms-auto">
                    <Link to="/login" className="btn btn-outline-light me-2">
                        Login
                    </Link>

                    <Link to="/register" className="btn btn-light text-primary">
                        Register
                    </Link>
                </div>
            </nav>

            {/* Home Content */}
            <div className="container py-5">
                <div className="row align-items-center min-vh-75">

                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="display-4 fw-bold text-primary">
                            Welcome to HR Management System
                        </h1>

                        <p className="lead text-secondary mt-3">
                            Manage employee information, HR activities,
                            and workplace operations easily in one place.
                        </p>

                        <div className="mt-4">
                            <Link to="/login" className="btn btn-primary btn-lg me-3">
                                Get Started
                            </Link>

                            <Link to="/register" className="btn btn-outline-primary btn-lg">
                                Sign Up
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6 text-center mt-5 mt-md-0">
                        <i className="bi bi-people-fill text-primary"
                           style={{ fontSize: "180px" }}>
                        </i>
                    </div>

                </div>
            </div>

            {/* Features */}
            <div className="container pb-5">
                <div className="row g-4 text-center">

                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm p-4 h-100">
                            <i className="bi bi-person-badge text-primary fs-1"></i>
                            <h5 className="fw-bold mt-3">Employee Management</h5>
                            <p className="text-muted">
                                Manage employee details and information.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm p-4 h-100">
                            <i className="bi bi-calendar-check text-primary fs-1"></i>
                            <h5 className="fw-bold mt-3">Attendance</h5>
                            <p className="text-muted">
                                Maintain and monitor employee attendance.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm p-4 h-100">
                            <i className="bi bi-graph-up text-primary fs-1"></i>
                            <h5 className="fw-bold mt-3">HR Operations</h5>
                            <p className="text-muted">
                                Organize and manage HR activities efficiently.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
                <p className="mb-0">
                    © 2026 HR Management System. All Rights Reserved.
                </p>
            </footer>

        </div>
    );
}

export default Home_page;
