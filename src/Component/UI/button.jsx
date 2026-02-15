export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`px-4 py-2 bg-[#FF7A18]  rounded-md cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
