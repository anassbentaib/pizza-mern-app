"use client";

interface HeadingProps {
  title?: string;
  subTitle?: string;
  center?: boolean;
  span?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subTitle, center, span }) => {
  return (
    <div
      className={`${center ? "text-center" : "text-start"}
    
    `}
    >
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-semibold  mt-2 flex items-center">
        <span className="pink-text font-semibold mr-2">{span}</span>
        <span>{subTitle}</span>
      </div>
    </div>
  );
};

export default Heading;
