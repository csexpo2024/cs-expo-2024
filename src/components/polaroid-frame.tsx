type PolaroidFrameProps = {
  children: React.ReactNode;
  title?: string;
};

const PolaroidFrame = ({ children, title }: PolaroidFrameProps) => {
  return (
    <div
      className={`p-2 ${title ? "" : "pb-6"} bg-white rounded-sm text-center`}
    >
      <div className="p-4 bg-neutral-950 rounded-md">{children}</div>
      {title && <p className="text-neutral-900 pb-2">{title}</p>}
    </div>
  );
};

export { PolaroidFrame };
