import projectFormSchema from "@/schema/projectFormValidation";

export const validateForm = async (formValues) => {
  try {
    await projectFormSchema.validate(formValues, { abortEarly: false });
    return {};
  } catch (error) {
    const errors = {};
    error.inner?.forEach((e) => {
      errors[e.path] = e.message;
    });
    return errors;
  }
};