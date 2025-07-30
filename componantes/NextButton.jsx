function NextButton({ children, type, style, onClick }) {
  return (
    <div className="btn flex justify-end">
      <button
        className={`${style} py-3 px-6 text-white font-bold rounded-md cursor-pointer`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
}

export default NextButton;
