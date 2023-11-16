import qs from 'qs';

const CMS_URL = process.env.CMS_URL;
const CACHE_TAG_REVIEWS = 'condos';

// set parameters for and fetch api
export async function fetchCondo(parameters: any) {
  const url = `${CMS_URL}/api/condos?${qs.stringify(parameters, { encodeValuesOnly: true })}`;
  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_REVIEWS],
    },
  });
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  return await response.json();
}