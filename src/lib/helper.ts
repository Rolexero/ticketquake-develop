import imageCompression from "browser-image-compression";

export function isString(val: unknown) {
  return typeof val === "string";
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function productType(name: string) {
  const [first, last] = name.split("_");

  if (last) {
    return `${first} ${last}`;
  }

  return `${first}`;
}

export async function compressFile(imageFile: File) {
  const config = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(imageFile, config);
    return compressedFile;
  } catch {
    return imageFile;
  }
}
