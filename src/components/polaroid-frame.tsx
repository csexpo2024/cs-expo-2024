type PolaroidFrameProps = {
  children: React.ReactNode;
  title?: string;
  size?: "sm" | "lg";
};

const SIZE = {
  sm: ["p-2", "pb-6"],
  lg: ["p-4", "pb-12"],
};

const PolaroidFrame = ({ children, title, size }: PolaroidFrameProps) => {
  const _size = size ? SIZE[size] : SIZE.sm;

  return (
    <div
      className={`${_size[0]} ${
        title ? "" : `${_size[1]}`
      } bg-white rounded-sm text-center`}
    >
      <div className="p-4 bg-neutral-950 rounded-md">{children}</div>
      {title && <p className="text-neutral-900 pb-2">{title}</p>}
    </div>
  );
};

export { PolaroidFrame };
