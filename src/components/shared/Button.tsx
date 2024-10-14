"use client";

const Button: React.FC<{
  className?: string;
  label: string;
}> = ({ label, className }) => {
  return (
    <button
      className={`${className} bg-slate-300 px-6 py-3 rounded-lg font-medium transition duration-300 text-black`}
    >
      {label}
    </button>
  );
};

export default Button;
