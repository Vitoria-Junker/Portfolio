import axios from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const postProject = async ({ name, link, description, img }) => {
  try {
    const response = await axios.post(apiUrl + "/new", { name, link, description, img });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getProjects = async (apiURL) => {
  try {
    const response = await axios.get(apiURL);
    return response.data.reverse();
  } catch (error) {
    console.log(error);
    return [];
  }
};


//export default { postProject, getProjects }
