

export default function Nav(props) {
 
  return (
   <>
  <nav className={`navbar navbar-expand-lg ${props.mode === 'light'? 'bg-body-tertiary' : 'bg-dark navbar-dark' }`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Restaurantly</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Book</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Menu</a>
        </li>
      </ul>
      <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.changer} />
         <label class={`form-check-label ${props.mode ==='light' ? '' : 'text-white' }`}  for="flexSwitchCheckDefault">{props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}</label>
      </div>
    </div>
  </div>
</nav>
   </>
  )
}
