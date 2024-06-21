import {
  IconDefinition,
  faPlusCircle,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EditMenu = ({
  children,
  buttonIcon = faPlusCircle,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  buttonIcon?: IconDefinition;
  title?: string;
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex gap-2">
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpenMenu(true);
        }}
      >
        <FontAwesomeIcon
          className="text-[#E59925] border border-[#E59925] p-1 rounded-md text-xl transition-transform hover:scale-105 sm:text-3xl"
          icon={buttonIcon}
        />
      </button>
      {openMenu && (
        <div className="bg-[#161616] w-[300px] max-h-[300px] overflow-auto absolute shadow-lg shadow-neutral-800 rounded-xl">
          <div className="flex items-center bg-[#E59925]">
            <div className="px-2 w-[80%] flex justify-start font-semibold text-black">
              {title}
            </div>

            <div className="w-[20%] flex justify-end">
              <button
                className="p-1 text-neutral-800 hover:text-neutral-950"
                onClick={() => setOpenMenu(false)}
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
          </div>

          <div className="p-2">{children}</div>
        </div>
      )}
    </div>
  );
};

export default EditMenu;
