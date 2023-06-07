import axios from "axios";
import { useState } from "react";
import { validateForm } from "@/modules/validationNewProject";
import { createNewProject } from "@/controllers/controller";

const initialFormValues = {
  name: "",
  link: "",
  description: "",
  img: "",
};

export default function NewProject() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

   const handleImageChange = (event) => {
     const file = event.target.files[0];
     setSelectedImage(file);
   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = await validateForm(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('img', selectedImage);

      const { data } = await axios.post(apiUrl+'/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const imgURL = data.url;
      await createNewProject(formValues, imgURL);

      setFormValues(initialFormValues);
      setSelectedImage(null);

      setErrors({});
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <div className="flex flex-col pt-12 items-center min-h-screen text-pink ">
        <div className="bg-gray-700/50 font-light p-4 rounded-md items-center">
          <h1 className="mb-4 text-center text-lg font-bold">
            Add a new project
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-1 text-primary text-sm"
          >
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
              className="border-2 rounded-lg p-2 mb-1"
              data-testid="name-input"
            />
            {errors.link && (
              <p className="text-red-500 text-sm">{errors.link}</p>
            )}
            <input
              type="text"
              id="link"
              name="link"
              placeholder="Link"
              value={formValues.link}
              onChange={handleChange}
              className="border-2 rounded-lg p-2 mb-1"
              data-testid="link-input"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={formValues.description}
              onChange={handleChange}
              className="border-2 rounded-lg p-2 mb-1"
              data-testid="description-input"
            ></textarea>
            {errors.img && <p className="text-red-500">{errors.img}</p>}
            <input
              type="file"
              accept="image/*"
              id="img"
              name="img"
              onChange={handleImageChange}
              className="border-2 rounded-lg p-1 w-72 mb-1"
            />
            <button
              type="submit"
              className=" col-span-2 bg-purple-bt hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
