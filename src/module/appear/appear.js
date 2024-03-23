const Appear = ({ children, appearRef }) => {
  return (
    <div
      ref={appearRef}
      className="relative translate-y-4 opacity-0 transition-all will-change-transform"
    >
      {children}
    </div>
  );
};

export default Appear;
