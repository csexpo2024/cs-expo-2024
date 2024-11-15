import CautionTape from "@/assets/img/caution-tape-shadowed.png";

const ComingSoon = () => {
  return (
    <div
      className={`flex justify-center items-center bg-contain py-10 px-5`}
      style={{
        backgroundImage: `url(${CautionTape})`,
      }}
    >
      <h1 className="text-7xl font-heading-italic">Coming Soon</h1>
    </div>
  );
};

export { ComingSoon };
