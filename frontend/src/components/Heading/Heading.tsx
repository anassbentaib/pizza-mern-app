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
      <div className="heading-font font-bold leading-10 text-primaryColor">
        {title}
      </div>
      <div className="font-semibold  mt-2 flex items-center ">
        <span className="pink-text  subHeading-font font-semibold">{span}</span>
        <span className="subHeading-font mr-2 text-primaryColor">
          {subTitle}
        </span>
      </div>
    </div>
  );
};

export default Heading;
