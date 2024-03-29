import PropTypes from "prop-types";

const Button = ({ color, text, onAdd }) => {
  return (
    <button onClick={onAdd} className="btn" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

Button.protoType = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
