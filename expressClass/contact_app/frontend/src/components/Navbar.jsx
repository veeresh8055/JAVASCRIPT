import contactLogo from '../images/contactLogo.png'
import profilePic from '../images/profilePic.png'

const Icon = ({ children, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`}>{children}</span>
)

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <button className="icon-button" aria-label="Open menu">
          <Icon>menu</Icon>
        </button>

        <div className="brand-mark">
          <img src={contactLogo} alt="Contacts" />
          <span>Contacts</span>
        </div>
      </div>

      <label className="search-bar">
        <Icon className="search-icon">search</Icon>
        <input type="search" placeholder="Search" aria-label="Search contacts" />
      </label>

      <div className="navbar-actions">
        <button className="icon-button" aria-label="Help">
          <Icon>help</Icon>
        </button>
        <button className="icon-button" aria-label="Settings">
          <Icon>settings</Icon>
        </button>
        <button className="icon-button" aria-label="Google apps">
          <Icon>apps</Icon>
        </button>
        <button className="profile-button" aria-label="Google account">
          <img src={profilePic} alt="" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
