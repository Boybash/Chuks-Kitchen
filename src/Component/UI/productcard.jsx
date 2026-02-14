export default function ProductCard({ children, className, onClick }) {
  return (
    <div
      className={`rounded-t-md rounded-b-md  bg-white  ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
