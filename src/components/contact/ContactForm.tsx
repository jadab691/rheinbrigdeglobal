"use client";

import { useState, type FormEvent } from "react";

type StudyLevel = "" | "bachelors" | "masters" | "other";
type ContactField =
  | "fullName"
  | "email"
  | "phone"
  | "studyLevel"
  | "subject"
  | "message"
  | "consent";

interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  studyLevel: StudyLevel;
  subject: string;
  message: string;
  consent: boolean;
}

type ContactFormErrors = Partial<Record<ContactField, string>>;
type FormStatus = "idle" | "invalid" | "checked";

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  studyLevel: "",
  subject: "",
  message: "",
  consent: false,
};

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter an email address in a valid format.";
  }

  if (!values.studyLevel) {
    errors.studyLevel = "Choose the study level you are considering.";
  }

  if (!values.message.trim()) {
    errors.message = "Add a short message about your plans.";
  }

  if (!values.consent) {
    errors.consent =
      "Confirm that you understand this form does not send your information.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function clearError(field: ContactField) {
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
    setStatus("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      return;
    }

    setStatus("checked");
  }

  return (
    <section
      aria-labelledby="contact-form-title"
      className="contact-form-section"
      id="contact-form"
    >
      <div className="container contact-form-section__grid">
        <div className="contact-form-section__intro">
          <span className="eyebrow">Tell us a little about your plans</span>
          <h2 id="contact-form-title">Start with what matters to you.</h2>
          <p>
            Share a few details so you can see what information is useful for an
            initial inquiry. Required fields are marked.
          </p>
          <div className="contact-form-section__notice">
            <span className="contact-form-section__notice-mark" aria-hidden="true">
              !
            </span>
            <div>
              <strong>Online submission is not connected yet.</strong>
              <p>
                This form checks your entries in this browser only. It does not
                send or store them, so please do not include sensitive
                documents or financial details.
              </p>
            </div>
          </div>
        </div>

        <form className="contact-form" noValidate onSubmit={handleSubmit}>
          <div className="contact-form__top">
            <span className="eyebrow">Your inquiry</span>
            <p>
              Fields marked <span aria-hidden="true">*</span>
              <span className="sr-only">with an asterisk</span> are required.
            </p>
          </div>

          <div className="contact-form__fields">
            <div className="contact-form__field">
              <label htmlFor="contact-name">Full name <span aria-hidden="true">*</span></label>
              <input
                autoComplete="name"
                aria-describedby={errors.fullName ? "contact-name-error" : undefined}
                aria-invalid={Boolean(errors.fullName)}
                id="contact-name"
                name="fullName"
                onChange={(event) => {
                  const fullName = event.currentTarget.value;
                  setValues((current) => ({
                    ...current,
                    fullName,
                  }));
                  clearError("fullName");
                }}
                required
                type="text"
                value={values.fullName}
              />
              {errors.fullName && (
                <span className="contact-form__error" id="contact-name-error">
                  {errors.fullName}
                </span>
              )}
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-email">Email address <span aria-hidden="true">*</span></label>
              <input
                autoComplete="email"
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                aria-invalid={Boolean(errors.email)}
                id="contact-email"
                name="email"
                onChange={(event) => {
                  const email = event.currentTarget.value;
                  setValues((current) => ({
                    ...current,
                    email,
                  }));
                  clearError("email");
                }}
                required
                type="email"
                value={values.email}
              />
              {errors.email && (
                <span className="contact-form__error" id="contact-email-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-phone">Phone number <span>(optional)</span></label>
              <input
                autoComplete="tel"
                id="contact-phone"
                name="phone"
                onChange={(event) => {
                  const phone = event.currentTarget.value;
                  setValues((current) => ({
                    ...current,
                    phone,
                  }));
                  clearError("phone");
                }}
                type="tel"
                value={values.phone}
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-study-level">
                Intended study level <span aria-hidden="true">*</span>
              </label>
              <select
                aria-describedby={
                  errors.studyLevel ? "contact-study-level-error" : undefined
                }
                aria-invalid={Boolean(errors.studyLevel)}
                id="contact-study-level"
                name="studyLevel"
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  const studyLevel: StudyLevel =
                    value === "bachelors" ||
                    value === "masters" ||
                    value === "other"
                      ? value
                      : "";
                  setValues((current) => ({
                    ...current,
                    studyLevel,
                  }));
                  clearError("studyLevel");
                }}
                required
                value={values.studyLevel}
              >
                <option value="">Choose a level</option>
                <option value="bachelors">Bachelor&apos;s</option>
                <option value="masters">Master&apos;s</option>
                <option value="other">Other / not sure</option>
              </select>
              {errors.studyLevel && (
                <span
                  className="contact-form__error"
                  id="contact-study-level-error"
                >
                  {errors.studyLevel}
                </span>
              )}
            </div>

            <div className="contact-form__field contact-form__field--wide">
              <label htmlFor="contact-subject">
                Preferred subject or study field <span>(optional)</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                onChange={(event) => {
                  const subject = event.currentTarget.value;
                  setValues((current) => ({
                    ...current,
                    subject,
                  }));
                  clearError("subject");
                }}
                type="text"
                value={values.subject}
              />
            </div>

            <div className="contact-form__field contact-form__field--wide">
              <label htmlFor="contact-message">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                aria-invalid={Boolean(errors.message)}
                id="contact-message"
                name="message"
                onChange={(event) => {
                  const message = event.currentTarget.value;
                  setValues((current) => ({
                    ...current,
                    message,
                  }));
                  clearError("message");
                }}
                required
                rows={5}
                value={values.message}
              />
              {errors.message && (
                <span className="contact-form__error" id="contact-message-error">
                  {errors.message}
                </span>
              )}
            </div>
          </div>

          <div className="contact-form__consent">
            <input
              aria-describedby={
                errors.consent ? "contact-consent-error" : undefined
              }
              aria-invalid={Boolean(errors.consent)}
              checked={values.consent}
              id="contact-consent"
              name="consent"
              onChange={(event) => {
                const consent = event.currentTarget.checked;
                setValues((current) => ({
                  ...current,
                  consent,
                }));
                clearError("consent");
              }}
              required
              type="checkbox"
            />
            <label htmlFor="contact-consent">
              I consent to the use of these details to respond to my inquiry
              once online submission is available. I understand nothing is sent
              or stored by this preview form.
            </label>
          </div>
          {errors.consent && (
            <p className="contact-form__error" id="contact-consent-error">
              {errors.consent}
            </p>
          )}

          {status === "invalid" && (
            <p className="contact-form__status contact-form__status--error" role="alert">
              Please review the highlighted fields.
            </p>
          )}
          {status === "checked" && (
            <p className="contact-form__status" role="status">
              Your required details look complete. No inquiry was sent or
              stored; form integration is still pending.
            </p>
          )}

          <button className="contact-form__submit" type="submit">
            Check inquiry details <span aria-hidden="true">↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}
