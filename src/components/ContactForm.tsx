import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation("global");
  const [emailInfo, setEmailInfo] = useState({
    subject: "",
    body: "",
  });
  return (
    <form
      action={`mailto:gabrieltc555@gmail.com?subject=${emailInfo.subject}&body=${emailInfo.body}`}
      onSubmit={() =>
        setEmailInfo({
          subject: "",
          body: "",
        })
      }
    >
      <fieldset title="contact" className="flex flex-col gap-3">
        <legend className="text-xl font-medium mb-3 sm:text-4xl">
          {t("contact.send")}{" "}
          <span className="text-[#E59925]">{t("contact.email")}</span>
        </legend>

        <label>
          <input
            placeholder={t("contact.subject-placeholder")}
            value={emailInfo.subject}
            onChange={(e) => {
              setEmailInfo((prev) => ({ ...prev, subject: e.target.value }));
            }}
            required
            className="rounded-xl outline-none p-2 text-black w-[200px] sm:w-[380px] sm:rounded-md sm:text-xl sm:p-4"
          />
        </label>

        <label>
          <textarea
            placeholder={t("contact.body-placeholder")}
            value={emailInfo.body}
            onChange={(e) => {
              setEmailInfo((prev) => ({ ...prev, body: e.target.value }));
            }}
            required
            className="rounded-xl outline-none p-2 text-black w-[200px] sm:w-[380px] sm:rounded-md sm:text-xl sm:p-4"
            rows={6}
          />
        </label>
      </fieldset>

      <button
        className="bg-[#E59925] p-1 rounded-lg font-semibold text-black text-xl sm:text-3xl"
        type="submit"
      >
        {t("contact.send-button")}
      </button>
    </form>
  );
};

export default ContactForm;
