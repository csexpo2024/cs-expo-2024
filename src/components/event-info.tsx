export const EventInfo = ({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle: string;
  body: string;
}) => {
  return (
    <div className="z-50">
      <p className="font-heading text-6xl">{title}</p>
      <p className="text-yellow-500 uppercase text-xl">{subtitle}</p>
      <p className="text-lg mt-3 p-2 font-semibold">{body}</p>
    </div>
  );
};
