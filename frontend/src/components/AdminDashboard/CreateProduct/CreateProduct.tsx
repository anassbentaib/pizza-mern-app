import Heading from "@/components/Heading/Heading";
import Container from "../Container/Container";
import { FieldValues, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Button } from "@/components/ui/button";
import Input from "@/components/Inputs/Input";
import Select from "@/components/Inputs/Select";

import { foodRoutes } from "@/constants";
import ImageUpload from "@/components/imageUpload/ImageUpload";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any | null>("");
  const [isImageUploaded, setImageUploaded] = useState(false);
  var regExp = /^.{1,}$/;

  const {
    register,
    setValue,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      imageSrc: [],
      title: "",
      description: "",
      type: "",
      price: null,
      rating: null,
      supply: null,
    },
  });
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  const imageSrc = watch("imageSrc");
  const description = watch("description");
  const handleImageDelete = (indexToDelete: number) => {
    const updatedUrls = [...imageSrc];
    updatedUrls.splice(indexToDelete, 1);
    setCustomValue("imageSrc", imageSrc);
  };
  const onSubmit = async (data: any) => {
    setLoading(true);
    setErrorMessage(null);
    if (
      data.imageSrc === "" ||
      data.imageSrc === null ||
      data.imageSrc.length === 0
    ) {
      setErrorMessage("Please upload some images");
      setLoading(false);
    } else {
      setErrorMessage(null);
      if (isImageUploaded) {
        setErrorMessage("Please wait for image upload");
        setLoading(false);
      } else {
        setErrorMessage(null);
        try {
          await axios.post(`/api/products/create-product`, data);
          toast.success("Product created successfully");
        } catch (error: any) {
          setErrorMessage(error?.data?.response?.message);
        } finally {
          setLoading(false);
        }
      }
    }
  };

  return (
    <Container>
      <div>
        <Heading title="Create product" subTitle="Add a new product." />
        <div className="py-3 max-w-3xl mx-auto min-h-screen">
          <form
            className="flex flex-col gap-4 bg-gray-200 p-4 shadow-customShadow "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
              <div className="w-full">
                <Input
                  id="title"
                  type="text"
                  register={register}
                  placeholder="Your title"
                  errors={errors}
                  required
                  pattern={regExp}
                  message="Minimum 1 character or number"
                />
              </div>
              <div className="w-full">
                <Select
                  id="type"
                  title="Select Type"
                  data={foodRoutes}
                  register={register}
                  errors={errors}
                  required
                  pattern={regExp}
                  message="This field is required"
                />
              </div>
            </div>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
              <div className="w-full">
                <Input
                  id="rating"
                  type="text"
                  register={register}
                  placeholder="Your rating"
                  errors={errors}
                  required
                  pattern={regExp}
                  message="Minimum 1 character or number"
                />
              </div>
              <div className="w-full">
                <Input
                  id="supply"
                  type="supply"
                  register={register}
                  placeholder="Your supply"
                  errors={errors}
                  required
                  pattern={regExp}
                  message="Minimum 1 character or number"
                />
              </div>
            </div>
            <div className="">
              <Input
                id="price"
                type="text"
                placeholder="Your price"
                errors={errors}
                register={register}
                pattern={regExp}
                required
                message=""
                FormatPrice
              />
            </div>
            <ImageUpload
              onChange={(value) => setCustomValue("imageSrc", value)}
              values={imageSrc}
              handleImageDelete={handleImageDelete}
              setImageUploaded={setImageUploaded}
              isImageUploaded={isImageUploaded}
            />

            <Textarea
              id="description"
              placeholder="Write something..."
              className="h-72 pb-10 rounded-none border border-black focus:outline-transparent focus:border-transparent"
              name="description"
              onChange={(e) => setCustomValue("description", e.target.value)}
              value={description}
            />
            <Button
              type="submit"
              disabled={loading}
              className="  disabled:opacity-70
              disabled-cursor-not-allowed bg-600 hover:bg-600 rounded-none"
            >
              Publish
            </Button>
            {errorMessage && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
};

export default CreateProduct;
