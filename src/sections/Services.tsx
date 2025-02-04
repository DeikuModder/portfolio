import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import Service from "../components/Service";
import Titles from "../components/Titles";

const Services = () => {
  const { t } = useTranslation("global");

  return (
    <Section className="sm:p-16" id="services" backgrounColor="">
      <Titles title={t("keywords.services")} />

      <div className="flex flex-wrap gap-2 mt-8 items-center justify-center sm:gap-12">
        <Service
          icon={
            <svg
              width="53"
              height="29"
              viewBox="0 0 53 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 17.9773V13.25L17.2045 6.34091V11.5114L6.34091 15.5682L6.51136 15.3182V15.9205L6.34091 15.6591L17.2045 19.7273V24.8864L0.75 17.9773ZM32.5028 0.636362L25.0028 28.5H20.2642L27.7642 0.636362H32.5028ZM52.017 17.9773L35.5625 24.8864V19.7273L46.4261 15.6591L46.267 15.9205V15.3182L46.4261 15.5682L35.5625 11.5114V6.34091L52.017 13.25V17.9773Z"
                fill="white"
              />
            </svg>
          }
          title={t("services.frontend-development.title")}
        >
          <li>{t("services.frontend-development.responsive-design")}</li>
          <li>{t("services.frontend-development.optimization")}</li>
        </Service>

        <Service
          title={t("services.user-experience.title")}
          icon={
            <svg
              width="40"
              height="37"
              viewBox="0 0 40 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1667 0.583336C17.6333 0.58326 19.0446 1.10709 20.1117 2.04764C21.1788 2.98819 21.821 4.27436 21.9071 5.643L21.9167 5.95834V7.75H27.6667C28.6338 7.74972 29.5653 8.09115 30.2744 8.70585C30.9835 9.32055 31.4179 10.1631 31.4904 11.0646L31.5 11.3333V16.7083H33.4167C34.9134 16.707 36.3517 17.2512 37.426 18.2255C38.5003 19.1997 39.1258 20.5271 39.1697 21.9256C39.2136 23.3241 38.6725 24.6835 37.6612 25.715C36.6499 26.7464 35.2482 27.3686 33.754 27.4494L33.4167 27.4583H31.5V32.8333C31.5003 33.7374 31.1351 34.6081 30.4775 35.271C29.8199 35.9339 28.9185 36.3399 27.9542 36.4077L27.6667 36.4167H21.9167C20.9496 36.417 20.0181 36.0755 19.3089 35.4608C18.5998 34.8461 18.1654 34.0036 18.0929 33.1021L18.0833 32.8333V31.0417C18.0828 30.585 17.8957 30.1458 17.5604 29.8137C17.225 29.4817 16.7667 29.2818 16.279 29.2551C15.7913 29.2283 15.3111 29.3766 14.9365 29.6697C14.5619 29.9628 14.3211 30.3786 14.2634 30.832L14.25 31.0417V32.8333C14.2503 33.7374 13.8851 34.6081 13.2275 35.271C12.5699 35.9339 11.6685 36.3399 10.7042 36.4077L10.4167 36.4167H4.66667C3.69956 36.417 2.76808 36.0755 2.05895 35.4608C1.34982 34.8461 0.915449 34.0036 0.842916 33.1021L0.833332 32.8333V27.4583C0.833026 26.5543 1.19828 25.6836 1.85587 25.0207C2.51346 24.3578 3.41478 23.9518 4.37917 23.884L4.66667 23.875H6.58333C7.07185 23.8745 7.54173 23.6996 7.89696 23.3861C8.25218 23.0727 8.46595 22.6442 8.49458 22.1883C8.52321 21.7325 8.36454 21.2836 8.05099 20.9334C7.73744 20.5832 7.29268 20.3581 6.80758 20.3042L6.58333 20.2917H4.66667C3.69956 20.292 2.76808 19.9505 2.05895 19.3358C1.34982 18.7211 0.915449 17.8786 0.842916 16.9771L0.833332 16.7083V11.3333C0.833026 10.4293 1.19828 9.55857 1.85587 8.89569C2.51346 8.2328 3.41478 7.82676 4.37917 7.75896L4.66667 7.75H10.4167V5.95834C10.4167 4.5328 11.0225 3.16565 12.1008 2.15764C13.1791 1.14963 14.6417 0.583336 16.1667 0.583336Z"
                fill="white"
              />
            </svg>
          }
        >
          <li>{t("services.user-experience.intuitive-design")}</li>
          <li>{t("services.user-experience.layout")}</li>
          <li>{t("services.user-experience.analysis")}</li>
        </Service>

        <Service
          title={t("services.desktop-mobile.title")}
          icon={
            <svg
              width="60"
              height="48"
              viewBox="0 0 60 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_32_119)">
                <path
                  d="M32.5 18C32.5 17.4696 32.7634 16.9609 33.2322 16.5858C33.7011 16.2107 34.337 16 35 16H50C50.663 16 51.2989 16.2107 51.7678 16.5858C52.2366 16.9609 52.5 17.4696 52.5 18V38C52.5 38.5304 52.2366 39.0391 51.7678 39.4142C51.2989 39.7893 50.663 40 50 40H35C34.337 40 33.7011 39.7893 33.2322 39.4142C32.7634 39.0391 32.5 38.5304 32.5 38V18Z"
                  stroke="#FBFBFB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45 16V10C45 9.46957 44.7366 8.96086 44.2678 8.58579C43.7989 8.21071 43.163 8 42.5 8H10C9.33696 8 8.70107 8.21071 8.23223 8.58579C7.76339 8.96086 7.5 9.46957 7.5 10V34C7.5 34.5304 7.76339 35.0391 8.23223 35.4142C8.70107 35.7893 9.33696 36 10 36H32.5"
                  stroke="#FBFBFB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M40 18H45"
                  stroke="#FBFBFB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_119">
                  <rect width="60" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        >
          <li>{t("services.desktop-mobile.app-creation")}</li>
          <li>{t("services.desktop-mobile.adapt")}</li>
        </Service>

        <Service
          title={t("services.maintenance.title")}
          icon={
            <svg
              width="50"
              height="46"
              viewBox="0 0 50 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_32_124)">
                <path
                  d="M14.5833 19.1667H20.8333V13.4167L13.5417 6.70834C15.8742 5.68345 18.4948 5.34905 21.0425 5.7512C23.5902 6.15335 25.9397 7.27226 27.7676 8.95385C29.5954 10.6354 30.8116 12.797 31.2487 15.1409C31.6858 17.4848 31.3223 19.8957 30.2083 22.0417L42.7083 33.5417C43.5371 34.3042 44.0028 35.3383 44.0028 36.4167C44.0028 37.495 43.5371 38.5292 42.7083 39.2917C41.8795 40.0542 40.7554 40.4825 39.5833 40.4825C38.4112 40.4825 37.2871 40.0542 36.4583 39.2917L23.9583 27.7917C21.6258 28.8166 19.0052 29.151 16.4575 28.7488C13.9098 28.3467 11.5603 27.2278 9.73244 25.5462C7.90462 23.8646 6.68841 21.703 6.25129 19.3591C5.81418 17.0152 6.17765 14.6043 7.29167 12.4583L14.5833 19.1667Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_124">
                  <rect width="50" height="46" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        >
          <li>{t("services.maintenance.24-7")}</li>
          <li>{t("services.maintenance.tracking")}</li>
          <li>{t("services.maintenance.bug-fixing")}</li>
        </Service>
      </div>
    </Section>
  );
};

export default Services;
