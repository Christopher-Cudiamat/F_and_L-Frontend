import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProperties } from "@/services/properties/getProperty";
import { getSlugs } from "@/services/properties/getSlugs";
import Image from "next/image";
import { CurrencyDollarIcon, HomeIcon, KeyIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Container from "@/components/Atoms/Container/Container";
import ContactUsBanner from "@/components/Molecules/ContactUsBanner/ContactUsBanner";
import Gallery from "@/components/Molecules/Gallery/Gallery";
import VicinityMap from "@/components/Molecules/VicinityMap/VicinityMap";
import SectionTitle from "@/components/Molecules/SectionTitle/SectionTitle";
import PropertyList from "@/components/Molecules/PropetyList/PropertyList";

interface IPropertyForSalePageParams {
  slug: string;
}

interface IPropertyForSalePageProps {
  params: IPropertyForSalePageParams;
}

export async function generateStaticParams(): Promise<IPropertyForSalePageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params: { slug },
}: IPropertyForSalePageProps): Promise<Metadata> {
  const condo = await getProperties(slug);
  if (!condo) {
    notFound();
  }
  return {
    title: condo.title,
  };
}

const PropertyPage: React.FC<IPropertyForSalePageProps> = async ({ params: { slug } }) => {
  const condo = await getProperties(slug);

  if (!condo) {
    notFound();
  }

  return (
    <React.Fragment>
      <section className='bg-white xl:flex xl:container xl:max-w-[1300px] xl:px-4 xl:py-10 mx-auto flex-row-reverse'>
        <div className='w-full h-[350px] xl:h-[600px] relative'>
          <Image
            src={condo.image}
            alt={`${condo.title} property`}
            fill
            className='w-full h-full duration-300 object-cover shadow-lg'
          />
        </div>
        <Container className='py-8 text-slate-800 xl:pr-20'>
          {condo.logo && (
            <Image
              src={condo.logo}
              width={500}
              height={500}
              alt={`${condo.title} logo`}
              className='w-32 h-auto mb-10'
            />
          )}
          <h1 className='text-4xl xl:text-6xl font-semibold mb-1'>{condo.title}</h1>
          <p className='bg-yellow-400 text-sm text-slate-700 py-1 px-2 mb-8 w-fit rounded-md'>
            {condo.category}
          </p>
          <p className='text-base text-slate-700'>{condo.description}</p>
        </Container>
      </section>
      <section className='bg-white text-white py-10 xl:max-w-[1300px] mx-auto'>
        <Container className='md:grid md:grid-cols-2 xl:grid-cols-4 bg-blue-800 py-10 md:py-16 xl:py-20 flex flex-col gap-y-8 lg:rounded-lg'>
          <div className='flex gap-x-2 items-start'>
            <MapPinIcon className='w-12 text-blue-400' />
            <div className='flex flex-col'>
              <h2 className='text-lg font-semibold mb-1.5'>LOCATION</h2>
              <p className='text-base'>{condo.address}</p>
            </div>
          </div>
          <div className='flex gap-x-2 items-start'>
            <CurrencyDollarIcon className='w-12 text-blue-400' />
            <div className='flex flex-col'>
              <h2 className='text-lg font-semibold mb-1.5'>PRICE RANGE</h2>
              <p className='text-base'>{`Php ${condo.minPrice.toLocaleString()} - ${condo.maxPrice.toLocaleString()}`}</p>
            </div>
          </div>
          <div className='flex gap-x-2 items-start'>
            <HomeIcon className='w-12 text-blue-400' />
            <div className='flex flex-col'>
              <h2 className='text-lg font-semibold mb-1.5'>UNITS</h2>
              <ul>
                {condo.units.map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex gap-x-2 items-start'>
            <KeyIcon className='w-12 text-blue-400' />
            <div className='flex flex-col'>
              <h2 className='text-lg font-semibold mb-1.5'>AMENITIES</h2>
              <ul>
                {condo.amenities.map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className='bg-white pt-5 pb-5'>
        <Container>
          <SectionTitle
            title='Gallery'
            withLine
          />
        </Container>
        <div className='xl:max-w-[1300px] xl-px-8 mx-auto'>
          <Gallery
            amenitiesDescription={condo.amenitiesDescription}
            lobbyDescription={condo.lobbyDescription}
            unitDescription={condo.unitDescription}
            slides={condo.gallery}
          />
        </div>
      </section>
      <section className='bg-white pt-5 pb-10'>
        <SectionTitle
          title='Vicinity Map'
          withLine
        />
        <VicinityMap />
      </section>
      <section className='bg-white py-10'>
        <SectionTitle
          title='Other Properties'
          withLine
        />
        <PropertyList activeProperty={slug} />
      </section>
      <section>
        <ContactUsBanner
          image='/images/real-estate-agents.png'
          altText='Real estate agents'
          full
        />
      </section>
    </React.Fragment>
  );
};

export default PropertyPage;
