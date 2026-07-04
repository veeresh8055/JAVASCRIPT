import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getContacts } from '../api/contactsApi'

const Icon = ({ children, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`}>{children}</span>
)

const ContactRow = ({ contact }) => {
  const navigate = useNavigate()
  const fullName = `${contact.firstName} ${contact.lastName}`.trim()
  const avatarColor = getAvatarColor(contact.id)

  const openContact = () => {
    navigate(`/contact/${contact.id}`)
  }

  const openContactFromKeyboard = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openContact()
    }
  }

  return (
    <div
      className="contact-row"
      role="link"
      tabIndex="0"
      onClick={openContact}
      onKeyDown={openContactFromKeyboard}
    >
      <div className="contact-name-cell">
        <div className="contact-avatar" style={{ backgroundColor: avatarColor }}>
          {contact.initial}
        </div>
        <span>{fullName}</span>
      </div>
      <span className="muted-cell">{contact.email}</span>
      <span>{contact.phoneWithCode}</span>
      <span className="muted-cell">{contact.address}</span>
      <div className="contact-row-actions">
        <Link
          className="row-edit-button"
          to={`/contactupdate/${contact.id}`}
          aria-label={`Edit ${fullName}`}
          onClick={(event) => event.stopPropagation()}
        >
          <Icon>edit</Icon>
        </Link>
      </div>
    </div>
  )
}

const avatarColors = ['#006b55', '#7e57c2', '#2f7d20', '#008a9b', '#455a64', '#6d4c41']

const getAvatarColor = (id) => {
  const seed = [...String(id)].reduce((total, char) => total + char.charCodeAt(0), 0)
  return avatarColors[seed % avatarColors.length]
}

const Dashboard = () => {
  const [contacts, setContacts] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const fetchedContacts = await getContacts()
        setContacts(fetchedContacts)
        setStatus('success')
      } catch (error) {
        console.error(error)
        setStatus('error')
      }
    }

    fetchContacts()
  }, [])

  return (
    <main className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <Link className="create-contact-button" to="/contact">
            <Icon>add</Icon>
            <span>Create contact</span>
          </Link>

          <nav className="sidebar-nav" aria-label="Contacts sections">
            <button className="sidebar-link active">
              <span className="sidebar-link-main">
                <Icon>person</Icon>
                <span>Contacts</span>
              </span>
              <span className="sidebar-count">{contacts.length}</span>
            </button>
            <button className="sidebar-link">
              <span className="sidebar-link-main">
                <Icon>history</Icon>
                <span>Frequent</span>
              </span>
            </button>
            <button className="sidebar-link">
              <span className="sidebar-link-main">
                <Icon>move_to_inbox</Icon>
                <span>Other contacts</span>
              </span>
              <Icon className="sidebar-info">info</Icon>
            </button>
          </nav>

          <section className="sidebar-section">
            <h2>Fix and manage</h2>
            <button className="sidebar-link">
              <span className="sidebar-link-main">
                <Icon>construction</Icon>
                <span>Merge and fix</span>
              </span>
              <span className="issue-badge">13</span>
            </button>
            <button className="sidebar-link">
              <span className="sidebar-link-main">
                <Icon>download</Icon>
                <span>Import</span>
              </span>
            </button>
            <button className="sidebar-link">
              <span className="sidebar-link-main">
                <Icon>delete</Icon>
                <span>Bin</span>
              </span>
            </button>
          </section>

          <section className="sidebar-section">
            <div className="labels-heading">
              <h2>Labels</h2>
              <button className="small-icon-button" aria-label="Create label">
                <Icon>add</Icon>
              </button>
            </div>
          </section>
        </aside>

        <section className="contacts-dashboard">
          <div className="contacts-scrollbar" aria-hidden="true" />
          <button className="collapse-button" aria-label="Collapse side panel">
            <Icon>chevron_left</Icon>
          </button>

          <div className="dashboard-header">
            <h1>
              Contacts <span>({contacts.length})</span>
            </h1>
          </div>

          <div className="contacts-table-header">
            <span>Name</span>
            <span>Email</span>
            <span>Phone number</span>
            <span>Address</span>
            <div className="table-actions">
              <button className="table-action-button" aria-label="Print">
                <Icon>print</Icon>
              </button>
              <button className="table-action-button" aria-label="Export">
                <Icon>upload</Icon>
              </button>
              <button className="table-action-button" aria-label="More actions">
                <Icon>more_vert</Icon>
              </button>
            </div>
          </div>

          <div className="contacts-list">
            

            <div className="list-group-title contacts-group-title">Contacts</div>

            {status === 'loading' && <p className="dashboard-message">Loading contacts...</p>}
            {status === 'error' && <p className="dashboard-message error">Unable to load contacts.</p>}
            {status === 'success' && contacts.length === 0 && (
              <p className="dashboard-message">No contacts yet. Create your first contact.</p>
            )}
            {contacts.map((contact) => (
              <ContactRow key={contact.id} contact={contact} />
            ))}
          </div>
        </section>
      </main>
  )
}

export default Dashboard
