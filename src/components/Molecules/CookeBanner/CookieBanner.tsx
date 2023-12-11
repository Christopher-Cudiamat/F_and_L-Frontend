"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Container from "@/components/Atoms/Container/Container";

const USER_CONSENT_COOKIE_KEY = "cookie_consent_is_true";
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365;

const CookieBanner: React.FC = () => {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);

  useEffect(() => {
    const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === "true";
    setCookieConsentIsTrue(consentIsTrue);
  }, []);

  const onClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();

    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, "true", {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentIsTrue(true);
    }
  };

  if (cookieConsentIsTrue) {
    return null;
  }

  return (
    <section className='fixed bottom-0 left-0 w-full bg-blue-900/90 shadow-lg py-10 px-4'>
      <Fade
        direction='up'
        fraction={0}
        triggerOnce
      >
        <Container className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-10'>
          <p className='text-white text-sm max-w-[650px]'>
            We use cookies to ensure you get the best experience on fandlrealestate.com. By
            continuing to browse our site, you are agreeing to our use of cookies. For more info,
            see our
            <Link
              href={"privacy-policy"}
              className='ml-2 underline font-semibold'
            >
              Privacy Policy
            </Link>
          </p>
          <button
            onClick={onClick}
            className='bg-white text-slate-700 font-semibold rounded-lg py-2 px-6 text-center w-[200px] mx-auto lg:mx-0'
          >
            Got it!
          </button>
        </Container>
      </Fade>
    </section>
  );
};

export default CookieBanner;
