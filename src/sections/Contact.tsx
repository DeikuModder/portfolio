import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import CopyDiscordId from "../components/CopyDiscordId";
import Titles from "../components/Titles";
import DownloadResume from "../components/DownloadResume";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("global");

  return (
    <Section className="bg-[#252525] p-4 sm:p-16" id="contact">
      <Titles title={t("keywords.contact")} />

      <div className="flex">
        <div className="flex flex-col sm:mx-[100px]">
          <ContactForm />

          <p className="font-medium mt-4 sm:text-3xl sm:mb-4">
            {t("contact.other-contacts")}
          </p>

          <ul className="flex items-center gap-8 sm:gap-12">
            <li className="transition-transform hover:scale-105">
              <a
                href="https://www.linkedin.com/in/gabriel-trujillo-315927274/"
                target="_blank"
              >
                <svg
                  width="96"
                  height="96"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                    fill="#0A66C2"
                  />
                </svg>
              </a>
            </li>

            <li className="transition-transform hover:scale-105">
              <CopyDiscordId
                content="gab3073"
                icon={
                  <svg
                    viewBox="0 0 256 199"
                    width="96"
                    height="96"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <path
                      d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
                      fill="#5865F2"
                    />
                  </svg>
                }
              />
            </li>
          </ul>
        </div>

        <DownloadResume />
      </div>
    </Section>
  );
};

export default Contact;
