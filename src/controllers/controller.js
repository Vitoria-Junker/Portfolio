import { postProject } from "@/api-routes/routes";

export const createNewProject = async (formValues, imgURL) => {
  await postProject({ ...formValues, img: imgURL });
};