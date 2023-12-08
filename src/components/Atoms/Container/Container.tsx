interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`container 2xl:max-w-[1300px] mx-auto px-4 lg:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
