interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: IContainerProps) {
  return <div className={`container 2xl:max-w-[1300px] mx-auto px-4 ${className}`}>{children}</div>;
}
