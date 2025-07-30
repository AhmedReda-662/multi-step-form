function Header({ title, details }) {
  return (
    <>
      <h2 className="text-slate-900 font-bold text-3xl">{title}</h2>
      <p className="text-sm text-gray-400 mt-3">{details}</p>
    </>
  );
}

export default Header;
