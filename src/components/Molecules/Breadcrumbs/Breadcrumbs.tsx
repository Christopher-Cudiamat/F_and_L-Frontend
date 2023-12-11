"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RxCaretRight } from "react-icons/rx";
import Container from "@/components/Atoms/Container/Container";
interface IPath {
  label: string;
  path: string;
}
interface IBreadcrumbsProps {
  className?: string;
  withSeparator?: boolean;
  variant?: "light" | "dark";
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({
  className = "",
  withSeparator = false,
  variant = "light",
}) => {
  const pathName = usePathname();
  const [paths, setPaths] = useState<any>();
  const linkStyle = variant === "dark" ? "text-slate-700" : "text-white";
  const linkDisabledStyle = variant === "dark" ? "text-slate-700/80" : "text-white/80";

  useEffect(() => {
    const arr = pathName.split("/");
    let label = "";
    let path = "";

    const paths = arr.map((item: string) => {
      if (item.includes("-")) {
        label = item
          .split("-")
          .map((item: string) => item[0].toUpperCase() + item.slice(1))
          .join(" ");
        path = `/${item}`;
      } else if (item !== "") {
        label = item[0].toUpperCase() + item.slice(1);
        path = `/${item}`;
      } else {
        label = "Home";
        path = "/";
      }

      return {
        label: label,
        path: path,
      };
    });
    setPaths(paths);
  }, []);

  return (
    <section className={`${withSeparator ? "py-3 shadow-md" : "py-0"} hidden lg:flex ${className}`}>
      <Container>
        {paths && (
          <ul className={`${linkStyle} text-base flex gap-x-3`}>
            {paths.map((item: IPath, index: number) => (
              <li
                key={item.label}
                className='flex gap-x-3 items-center font-semibold'
              >
                {index !== paths.length - 1 ? (
                  <React.Fragment>
                    <Link href={item.path}>{item.label}</Link>
                    <RxCaretRight
                      className=''
                      size={24}
                    />
                  </React.Fragment>
                ) : (
                  <p className={`${linkDisabledStyle}`}>{item.label}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default Breadcrumbs;
