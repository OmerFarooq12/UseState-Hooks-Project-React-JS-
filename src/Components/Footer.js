import React from 'react'

export default function Footer(props) {
  return (
<div className="container">
  <footer className="row row-cols-5 py-5 my-5 border-top">
    <div className="col">
      <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use href="/bootstrap"></use></svg>
      </a>
      <p className={` ${props.mode === 'light' ? 'text-muted': 'text-light'}`}>© 2021</p>
    </div>

    <div className="col">

    </div>

    <div className="col">
      <h5 className={`${props.mode === 'light' ? '': 'text-light'}`}>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0 ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>Home</a></li>
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0 ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>Features</a></li>
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0 ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>Pricing</a></li>
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0 ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>FAQs</a></li>
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0 ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>About</a></li>
      </ul>
    </div>

    <div className="col">
      <h5 className={`${props.mode === 'light' ? '': 'text-light'}`}>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0 ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>Home</a></li>
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0 ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>Features</a></li>
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0 ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>Pricing</a></li>
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0 ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>FAQs</a></li>
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0 ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>About</a></li>
      </ul>
    </div>

    <div className="col">
      <h5 className={`${props.mode === 'light' ? '': 'text-light'}`}>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0  ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>Home</a></li>
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0  ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>Features</a></li>
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0  ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>Pricing</a></li>
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0 ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>FAQs</a></li>
        <li className="nav-item mb-2"><a href="/" className={`nav-link p-0 ${props.mode === 'light' ? 'text-muted': 'text-light'} `}>About</a></li>
      </ul>
    </div>
  </footer>
</div>
  )
}
