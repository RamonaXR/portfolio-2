const Badge = ({ label, bgColor = "bg-indigo-600" }) => (
  <span
    className={`inline-flex items-center px-2 py-1 text-xs font-semibold text-white ${bgColor} rounded-full`}
  >
    {label}
  </span>
);

export default Badge;
