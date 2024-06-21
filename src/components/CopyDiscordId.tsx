import {
  faClipboard,
  faClipboardCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Copied = () => {
  return (
    <p className="bg-[#E59925] text-black rounded-xl p-2 font-medium sm:text-xl">
      <FontAwesomeIcon icon={faClipboardCheck} /> Discord Copied to clipboard!
    </p>
  );
};

const NotCopied = () => {
  return (
    <p
      style={{
        backgroundColor: "#60a0caa2",
        padding: 4,
        borderRadius: 16,
        fontWeight: "bold",
      }}
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="bg-[#E59925] text-black sm:text-xl"
      />{" "}
      Couldn't copy to clipboard
    </p>
  );
};

interface Props {
  content: string;
  icon?: JSX.Element | string;
  successMessage?: JSX.Element | string;
  errorMessage?: JSX.Element | string;
}

const CopyDiscordId: React.FC<Props> = ({
  content,
  icon = (
    <FontAwesomeIcon
      icon={faClipboard}
      style={{
        backgroundColor: "#60a0caa2",
        padding: 8,
        borderRadius: "100%",
        aspectRatio: "1/1",
        fontWeight: "bold",
      }}
    />
  ),
  successMessage = <Copied />,
  errorMessage = <NotCopied />,
}) => {
  const [copyIcon, setCopyIcon] = useState(icon);

  useEffect(() => {
    if (copyIcon !== icon) {
      setTimeout(() => setCopyIcon(icon), 1000);
    }
  }, [copyIcon, icon]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopyIcon(successMessage);
    } catch (error) {
      setCopyIcon(errorMessage);
    }
  };

  return (
    <abbr title="Copy">
      <button onClick={copyToClipboard}>{copyIcon}</button>
    </abbr>
  );
};

export default CopyDiscordId;
