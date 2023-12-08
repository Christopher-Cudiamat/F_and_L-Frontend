import Container from "@/components/Atoms/Container/Container";
import Link from "next/link";
import React from "react";

export interface ILink {
  label: string;
  link: string;
}

const Footer: React.FC<any> = ({
  company,
  properties,
  contacts,
  socials,
  disclaimer,
  copyright,
}) => {
  const sectionContainerStyle = "mb-10 md:mx-auto lg:mx-0";
  const sectionTitleStyle = "text-lg text-center lg:text-left font-bold mb-5";
  const linksContainerStyle =
    "flex flex-col items-center lg:items-start gap-y-3 text-base font-normal text-white/80";
  const linkStyle = "md:hover:text-white duration-150";

  return (
    <footer className='bg-neutral-800 pt-12'>
      <Container className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-white'>
        <div className='w-full md:col-span-4 lg:col-span-2 text-center lg:text-left mb-10 border-b border-white/40 lg:border-transparent'>
          <Link
            href='/'
            className='text-  font-bold text-4xl lg:text-6xl mb-8 lg:mg-6'
          >
            {/* This will be replaced by an actual logo */}
            {company.logo.split(" ")[0]}{" "}
            <span className='text-xl lg:text-2xl font-normal'>
              {company.logo.split(" ")[1] + " " + company.logo.split(" ")[2]}
            </span>
          </Link>
          <h2 className='mx-auto lg:mx-0 text-2xl lg:text-2xl lg: max-w-[200px] md:max-w-full font-bold pt-5 pb-8'>
            {company.tagline}
          </h2>
        </div>

        <div className={`${sectionContainerStyle}`}>
          <h4 className={`${sectionTitleStyle}`}>{properties.title}</h4>
          <ul className={`${linksContainerStyle}`}>
            {properties.links.map((item: any) => (
              <li key={item.label}>
                <Link
                  href={item.link}
                  className={`${linkStyle}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${sectionContainerStyle}`}>
          <h4 className={`${sectionTitleStyle}`}>{contacts.title}</h4>
          <ul className={`${linksContainerStyle}`}>
            {contacts.links.map((item: any) => (
              <li key={item.label}>
                <Link
                  href={item.link}
                  className={`${linkStyle}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`text-center lg:text-left ${sectionContainerStyle}`}>
          <h4 className={`${sectionTitleStyle}`}>{disclaimer.title}</h4>
          <p className='text-sm text-white/60 leading-6'>{disclaimer.text}</p>
        </div>
      </Container>
      <div className='bg-neutral-900 text-white text-xs font-light py-6'>
        <Container className='flex flex-col gap-y-8 items-center md:flex-row md:justify-between'>
          <ul className='flex gap-x-5'>
            {socials.links.map((item: any) => (
              <li key={item.link}>
                <a href={item.link}>
                  <item.icon
                    className='text-white/80 hover:text-white/100 duration-150'
                    size={32}
                  />
                </a>
              </li>
            ))}
          </ul>
          <p className='text-xs md:text-sm text-white/70 text-center'>{copyright}</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
