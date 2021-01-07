import classNames from 'classnames';

function Button({ children, className, ...props }) {
  return (
    <button
      type="button"
      className={classNames(
        'bg-indigo-50 px-6 py-2 rounded-md text-indigo-500 hover:bg-indigo-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
