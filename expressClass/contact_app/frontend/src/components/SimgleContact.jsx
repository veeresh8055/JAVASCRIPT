import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteContact, getContact } from '../api/contactsApi'

const Icon = ({ children, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`}>{children}</span>
)

const SimgleContact = () => {
  const { contactId } = useParams()
  const navigate = useNavigate()
  const [contact, setContact] = useState(null)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const loadContact = async () => {
      try {
        const fetchedContact = await getContact(contactId)
        setContact(fetchedContact)
        setStatus('success')
      } catch (loadError) {
        console.error(loadError)
        setError('Unable to load this contact.')
        setStatus('error')
      }
    }

    loadContact()
  }, [contactId])

  const handleDelete = async () => {
    try {
      await deleteContact(contactId)
      navigate('/')
    } catch (deleteError) {
      console.error(deleteError)
      setError('Unable to delete this contact.')
    }
  }

  if (status === 'loading') {
    return <main className="single-contact-page"><p>Loading contact...</p></main>
  }

  if (status === 'error' || !contact) {
    return <main className="single-contact-page"><p className="form-error">{error}</p></main>
  }

  const fullName = `${contact.firstName} ${contact.lastName}`.trim()
  const avatarColor = getAvatarColor(contact.id)

  return (
    <main className="single-contact-page">
      <header className="single-contact-topbar">
        <Link className="form-icon-button" to="/" aria-label="Back to contacts">
          <Icon>arrow_back</Icon>
        </Link>

        <div className="single-contact-actions">
          <button className="single-star-button" type="button" aria-label="Favourite contact">
            <Icon>star</Icon>
          </button>
          <Link className="single-edit-button" to={`/contactupdate/${contact.id}`}>
            Edit
          </Link>
          <button className="form-icon-button" type="button" aria-label="Delete contact" onClick={handleDelete}>
            <Icon>delete</Icon>
          </button>
          <button className="form-icon-button" type="button" aria-label="More options">
            <Icon>more_vert</Icon>
          </button>
        </div>
      </header>

      <section className="single-contact-hero">
        <div className="single-avatar" style={{ backgroundColor: avatarColor }}>
          {contact.initial}
          <button className="single-avatar-add" type="button" aria-label="Add contact photo">
            <Icon>add</Icon>
          </button>
        </div>
        <h1>{fullName}</h1>
      </section>

      <section className="quick-actions">
        <button type="button">
          <span>
            <Icon>mail</Icon>
          </span>
          Email
        </button>
        <button type="button">
          <span>
            <Icon>calendar_month</Icon>
          </span>
          Schedule
        </button>
        <button type="button">
          <span>
            <Icon>chat_bubble</Icon>
          </span>
          Chat
        </button>
        <button type="button">
          <span>
            <Icon>videocam</Icon>
          </span>
          Video
        </button>
        <div className="quick-actions-line" />
      </section>

      <button className="single-label-button" type="button">
        <Icon>add</Icon>
        <span>Label</span>
      </button>

      <section className="single-contact-content">
        <div className="contact-details-card">
          <h2>Contact details</h2>
          <div className="detail-line">
            <Icon>mail</Icon>
            <a href={`mailto:${contact.email || ''}`}>{contact.email || 'Add email'}</a>
          </div>
          <div className="detail-line">
            <Icon>phone</Icon>
            <a href={`tel:${contact.phoneWithCode}`}>{contact.phoneNo}</a>
            <span>Mobile</span>
          </div>
          <div className="detail-line">
            <Icon>cake</Icon>
            <a href="/contactupdate">Add birthday</a>
          </div>
        </div>

        <div className="history-panel">
          <h2>
            History <Icon>help</Icon>
          </h2>
          <p>Last edited <span>29 Jan</span></p>
          <p>Added to contacts <span>21 Nov 2025</span></p>
        </div>
      </section>
    </main>
  )
}

const avatarColors = ['#006b55', '#7e57c2', '#2f7d20', '#008a9b', '#455a64', '#6d4c41']

const getAvatarColor = (id) => {
  const seed = [...String(id)].reduce((total, char) => total + char.charCodeAt(0), 0)
  return avatarColors[seed % avatarColors.length]
}

export default SimgleContact
