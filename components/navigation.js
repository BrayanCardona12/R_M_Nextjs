import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link href='/' className='navbar-brand'>Project | Next.js</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list success text-success" style={{fontSize: "1.5em"}}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className='nav-link' href='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">Services</Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navigation