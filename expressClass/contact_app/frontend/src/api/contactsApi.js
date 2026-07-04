import axios from 'axios'

const contactsApi = axios.create({
  baseURL: 'http://localhost:3000/contacts',
})

export const normalizeContact = (contact) => {
  const id = contact?._id ?? contact?.id ?? ''
  const firstName = contact?.fname ?? contact?.firstName ?? ''
  const lastName = contact?.lname ?? contact?.lastName ?? ''
  const phoneNo = String(contact?.phoneNo ?? contact?.phone ?? '').replace(/\D/g, '')

  return {
    id,
    firstName,
    lastName,
    phoneNo,
    phoneWithCode: phoneNo ? `+91${phoneNo}` : '',
    address: contact?.address ?? '',
    initial: (firstName || lastName || '?').charAt(0).toUpperCase(),
  }
}

export const buildContactPayload = ({ firstName, lastName, phoneNo, address }) => ({
  fname: firstName.trim(),
  lname: lastName.trim(),
  phoneNo: Number(phoneNo),
  address: address.trim(),
})

export const getContacts = async () => {
  try {
    const { data } = await contactsApi.get('/')
    return (data.allContacts ?? []).map(normalizeContact)
  } catch (error) {
    if (error.response?.status === 404) {
      return []
    }

    throw error
  }
}

export const getContact = async (id) => {
  const { data } = await contactsApi.get(`/${id}`)
  return normalizeContact(data.contact)
}

export const createContact = async (payload) => {
  const { data } = await contactsApi.post('/new', buildContactPayload(payload))
  return normalizeContact(data.newContact)
}

export const updateContact = async (id, payload) => {
  const { data } = await contactsApi.put(`/${id}`, buildContactPayload(payload))
  return normalizeContact(data.contact)
}

export const deleteContact = async (id) => {
  await contactsApi.delete(`/${id}`)
}
