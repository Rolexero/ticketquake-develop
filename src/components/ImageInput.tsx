import * as React from "react";
import { compressFile } from "@/lib/helper";
import { X, Upload } from "lucide-react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholderText?: React.ReactNode;
  handleFile: (file: File | null) => void;
  url?: string;
}

export default function ImageInput(props: Props) {
  const { placeholderText, url, handleFile = () => null, ...rest } = props;

  const [imgUrl, setImgUrl] = React.useState(url);
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string>("");

  const fileInput = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInput.current) fileInput.current.click();
  };

  const handleChange = async (event: {
    target: { files: FileList | null };
  }) => {
    const fileUploaded = event.target.files && event.target.files[0];
    setUploadedFile(fileUploaded);
    const compressedFile = await compressFile(fileUploaded as File);
    handleFile(compressedFile);
    setPreview(URL.createObjectURL(compressedFile as Blob));
  };

  const handleDeleteFile = () => {
    setUploadedFile(null);
    setPreview("");
    setImgUrl("");
    handleFile(null);
    if (fileInput.current) fileInput.current.value = "";
  };

  return (
    <>
      <img src={url} hidden alt="" onError={() => setImgUrl("")} />
      <input
        type="file"
        ref={fileInput}
        onChange={handleChange}
        accept="image/*"
        hidden
        id="contained-button-file"
        {...rest}
      />

      {uploadedFile !== null ? (
        <div className="flex p-2 flex-col justify-center items-center h-[80px] bg-background w-full text-sm rounded-md text-muted-foreground border border-input">
          {preview && (
            <div
              className={`w-[48px] h-[38px] rounded-md mb-[5px] overflow-hidden`}
            >
              <img src={preview} />
            </div>
          )}

          <div className="flex gap-3">
            <p className="font-medium text-[16px] text-center max-w-[300px]">
              {uploadedFile.name}
            </p>
            <button
              className="close-btn"
              type="button"
              onClick={handleDeleteFile}
            >
              <X />
            </button>
          </div>
        </div>
      ) : (
        <>
          {imgUrl && (
            <div className="flex p-2 flex-col justify-center items-center h-[80px] bg-background w-full text-sm rounded-md text-muted-foreground border border-input">
              {!preview && (
                <div
                  className={`w-[48px] h-[38px] rounded-md mb-[5px] overflow-hidden`}
                >
                  {" "}
                  <img src={imgUrl} />
                </div>
              )}

              <div className="flex gap-3">
                <button
                  className="close-btn"
                  type="button"
                  onClick={handleDeleteFile}
                >
                  <X />
                </button>
              </div>
            </div>
          )}

          {!imgUrl && (
            <div
              className="flex justify-center flex-col items-center h-[80px] bg-background w-full text-sm rounded-md text-muted-foreground border border-input"
              role="button"
              onClick={handleClick}
            >
              <Upload />
              <p className="text-sm">{placeholderText || "Upload image"}</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
