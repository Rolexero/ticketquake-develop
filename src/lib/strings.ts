/**
 * string type check using `typeof`
 */
export function isString(val: unknown) {
  return typeof val === "string";
}

export const returnLastUrl = (str: string) => {
  let urlList = str.split("/");
  return urlList[urlList.length - 1];
};
