import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          InvestMint
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link active" href="/characters">
                <span className="bi-person-badge"></span> My profile
              </a>
            </li>
            <Link to="/browse">
              <li className="nav-item">
                <a className="nav-link active" href="/characters/all">
                  <span className="bi-people"></span> Browse Products
                </a>
              </li>
            </Link>

            <li className="nav-item ">
              <a className="nav-link active" href="/logout">
                <span className="bi-box-arrow-right"></span> Log out
              </a>
            </li>

            <li className="nav-item ">
              <a
                className="nav-link active bi-person-circle"
                href="/auth/google"
              >
                <span className="login glyphicon glyphicon-log-in"></span> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
