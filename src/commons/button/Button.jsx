import classnames from "classnames";

const Button = ({ children, outline, className }) => {
  return (
    <button
      className={classnames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
