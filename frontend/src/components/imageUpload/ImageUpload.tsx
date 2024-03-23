import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { TbPhotoPlus } from "react-icons/tb";
import { FaTrashCan } from "react-icons/fa6";
import { toast } from "sonner";

const cloudName = "dcq0jzieu";
const uploadPreset = "dadpy0jh";
interface ImageUploadProps {
  onChange: (values: string[]) => void;
  values: string[];
  handleImageDelete: (indexToDelete: number) => void;
  isImageUploaded: any;
  setImageUploaded: any;
}
const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  setImageUploaded,
  values,
  handleImageDelete,
}) => {
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback(
    async (acceptedFiles: any) => {
      setImageUploaded(true);
      setLoading(true);
      try {
        const newImageCount = values.length + acceptedFiles.length;
        const remainingSlots = Math.max(1 - values.length, 4 - values.length);

        const uploadPromises = acceptedFiles
          .slice(0, remainingSlots)
          .map(async (file: any) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", uploadPreset);

            const response = await fetch(
              `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
              {
                method: "POST",
                body: formData,
              }
            );

            if (response.ok) {
              const data = await response.json();
              return data.secure_url;
            } else {
              console.error("Image upload failed:", response.statusText);
              return null;
            }
          });

        const uploadedUrls = await Promise.all(uploadPromises);
        const filteredUrls = uploadedUrls.filter((url) => url !== null);

        if (newImageCount >= 1 && newImageCount <= 4) {
          onChange([...values, ...filteredUrls]);
        } else if (newImageCount > 4) {
          toast.error("Exceeded the maximum limit of 4 images");
          setImageUploaded(false);
        } else {
          toast.error("Did not reach the minimum limit of 1 images");
          setImageUploaded(false);
        }
      } catch (error) {
        console.error("Error uploading images:", error);
        setImageUploaded(false);
        setLoading(false);
      } finally {
        setImageUploaded(false);

        setLoading(false);
      }
    },
    [onChange, values]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" as any,
    multiple: true,
  });

  return (
    <div className="min-w-100 sm:min-w-full md:min-w-full lg:min-w-100 max-w-750">
      <div className="relative h-full ">
        {values && values.length > 0 && (
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3  xl:grid-cols-4 ">
            {values.map((url, index) => (
              <div key={url} className="relative rounded-md overflow-hidden">
                <div
                  className="z-10 absolute top-4 right-0 cursor-pointer 
                  text-errorColor
                  "
                  onClick={() => handleImageDelete(index)}
                >
                  <FaTrashCan className="h-3 w-3" color="" />
                </div>
                <div>
                  <img
                    className="object-cover w-full h-100 my-3"
                    alt="Image"
                    src={url}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        {...getRootProps()}
        className="
            w-full
            relative
            cursor-pointer
            hover:opacity-70
            transition
            border-dashed 
            border-2 
            py-6
            border-blackColor
            flex-col
            app_justify
            text-blackColor
          "
      >
        <div
          className="flex  items-center gap-3   disabled:opacity-70
              disabled-cursor-not-allowed"
          aria-disabled={loading}
        >
          <input
            {...getInputProps()}
            disabled={loading}
            className=" disabled:opacity-70
              disabled-cursor-not-allowed"
          />
          <TbPhotoPlus
            size={20}
            className=" disabled:opacity-70
              disabled-cursor-not-allowed"
            aria-disabled={loading}
          />
          <div
            className="font-semibold text-13 disabled:opacity-70
              disabled-cursor-not-allowed"
            aria-disabled={loading}
          >
            Click to upload
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
