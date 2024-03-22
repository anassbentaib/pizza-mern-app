interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className=" mx-auto xl:px-20 2xl:px-10 md:px-5 sm:px-3 px-4 mt-9">
      {children}
    </div>
  );
};

export default Container;
