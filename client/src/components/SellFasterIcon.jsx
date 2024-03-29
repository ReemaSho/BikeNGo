import React from "react";
import PropTypes from "prop-types";
import { MdSell } from "react-icons/md";

const SellFasterIcon = ({ onClick, sellFaster }) => {
  return (
    <button
      className="w-10 h-10 flex justify-center items-center rounded-full hover:shadow-md"
      onClick={onClick}
    >
      {sellFaster && (
        <MdSell className={"w-8 h-8 rounded-full text-orange-500"} />
      )}
    </button>
  );
};

SellFasterIcon.propTypes = {
  onClick: PropTypes.func,
  sellFaster: PropTypes.bool.isRequired,
};

export default SellFasterIcon;
