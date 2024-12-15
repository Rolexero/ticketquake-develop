export const stripLeadingSlash = (str: string) => {
  return str.startsWith("/") ? str.slice(1) : str;
};
