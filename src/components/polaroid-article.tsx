import { PolaroidFrame } from "@/components/polaroid-frame";

interface PolaroidArticleProps {
  title: string;
  body: string;
  imghref: string;
  reversed?: boolean;
}

export const PolaroidArticle = ({
  title,
  body,
  imghref,
  reversed,
}: PolaroidArticleProps) => {
  const _reversed = reversed ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <div
      className={`flex flex-col ${_reversed} gap-10 lg:px-40 px-4 py-5 justify-center`}
    >
      <div className="rotate-3 flex justify-center items-center lg:justify-items-end w-full">
        <PolaroidFrame size="lg">
          <img src={imghref} className="w-full max-w-[24rem]" />
        </PolaroidFrame>
      </div>
      <div className="w-full py-5 lg:px-0">
        <p className="font-heading-italic text-2xl text-yellow-500 mb-2">
          {title}
        </p>
        <p className="font-semibold">{body}</p>
      </div>
    </div>
  );
};
