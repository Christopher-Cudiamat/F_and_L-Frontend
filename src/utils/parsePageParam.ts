export const parsePageParam = (value: string | undefined): number => {
  if (value) {
    const page = parseInt(value);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
};
