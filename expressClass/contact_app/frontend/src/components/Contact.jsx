import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createContact, getContact, updateContact } from "../api/contactsApi";
import avatarOne from "../images/unnamed.webp";
import avatarTwo from "../images/unnamed (1).webp";
import avatarThree from "../images/unnamed (2).webp";
import avatarFour from "../images/unnamed (3).webp";
import avatarFive from "../images/unnamed (4).webp";
import avatarSix from "../images/unnamed (5).webp";
import avatarSeven from "../images/unnamed (6).webp";

const avatarImages = [
  avatarOne,
  avatarTwo,
  avatarThree,
  avatarFour,
  avatarFive,
  avatarSix,
  avatarSeven,
];

const Icon = ({ children, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{children}</span>
);

const Contact = () => {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const isUpdateMode = Boolean(contactId);
  const firstAvatar = useMemo(
    () => Math.floor(Math.random() * avatarImages.length),
    [],
  );
  const [avatarIndex, setAvatarIndex] = useState(firstAvatar);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    address: "",
  });
  const [originalData, setOriginalData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!contactId) {
      return;
    }

    const loadContact = async () => {
      try {
        setStatus("loading");
        const contact = await getContact(contactId);
        const loadedContact = {
          firstName: contact.firstName,
          lastName: contact.lastName,
          phoneNo: contact.phoneNo,
          address: contact.address,
        };

        setFormData(loadedContact);
        setOriginalData(loadedContact);
        setStatus("idle");
      } catch (loadError) {
        console.error(loadError);
        setError("Unable to load this contact.");
        setStatus("idle");
      }
    };

    loadContact();
  }, [contactId]);

  const shuffleAvatar = () => {
    setAvatarIndex((currentIndex) => (currentIndex + 1) % avatarImages.length);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValue =
      name === "phoneNo" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setFormData((currentData) => ({
      ...currentData,
      [name]: nextValue,
    }));
  };

  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.phoneNo.trim().length === 10 &&
    formData.address.trim();
  const hasFormChanged = originalData
    ? formData.firstName !== originalData.firstName ||
      formData.lastName !== originalData.lastName ||
      formData.phoneNo !== originalData.phoneNo ||
      formData.address !== originalData.address
    : false;
  const canSubmit =
    !["loading", "saving"].includes(status) &&
    (isUpdateMode ? hasFormChanged : Boolean(isFormValid));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (isUpdateMode && !hasFormChanged) {
      setError("Change at least one field before updating.");
      return;
    }

    if (!isFormValid) {
      setError(
        "First name, surname, 10 digit mobile number, and address are required.",
      );
      return;
    }

    try {
      setStatus("saving");
      const savedContact = isUpdateMode
        ? await updateContact(contactId, formData)
        : await createContact(formData);
      navigate(isUpdateMode ? "/" : `/contact/${savedContact.id}`);
    } catch (saveError) {
      console.error(saveError);
      setError("Unable to save contact. Please check the backend server.");
      setStatus("idle");
    }
  };

  return (
    <div className="container">
      <main className="contact-form-page">
        <header className="contact-form-topbar">
          <Link
            className="form-icon-button"
            to="/"
            aria-label="Back to contacts"
          >
            <Icon>arrow_back</Icon>
          </Link>

          <div className="form-actions">
            <button
              className="form-icon-button"
              type="button"
              aria-label="Add to favourites"
            >
              <Icon>star</Icon>
            </button>
            <button
              className={`save-button ${canSubmit ? "active" : ""}`}
              type="submit"
              form="contact-form"
              disabled={!canSubmit}
            >
              {status === "saving" ? "Saving..." : "Save"}
            </button>
          </div>
        </header>

        <form
          className="contact-form-card"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="avatar-picker">
            <img
              src={avatarImages[avatarIndex]}
              alt="Selected contact avatar"
            />
            <button
              className="avatar-shuffle-button"
              type="button"
              onClick={shuffleAvatar}
              aria-label="Shuffle avatar"
            >
              <Icon>add</Icon>
            </button>
          </div>

          <div className="form-fields">
            <div className="field-group">
              <Icon className="field-icon">person</Icon>
              <div className="stacked-fields">
                <label className="text-field active">
                  <span>First name</span>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    aria-label="First name"
                    required
                    autoFocus
                  />
                </label>
                <label className="text-field">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Surname"
                    aria-label="Surname"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="field-group">
              <Icon className="field-icon">phone</Icon>
              <div className="phone-fields">
                <button
                  className="country-select"
                  type="button"
                  aria-label="Contact number region India"
                >
                  <span className="india-flag" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span>+91</span>
                  <Icon>arrow_drop_down</Icon>
                </button>
                <label className="text-field phone-input">
                  <input
                    type="tel"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    placeholder="Mobile number"
                    aria-label="Mobile number"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="field-group">
              <Icon className="field-icon">location_on</Icon>
              <label className="text-field">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  aria-label="Address"
                  required
                />
              </label>
            </div>

            {error && <p className="form-error">{error}</p>}
          </div>
        </form>
      </main>
    </div>
  );
};

export default Contact;
