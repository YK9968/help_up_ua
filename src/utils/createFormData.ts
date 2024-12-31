import { ICreateOpportunity } from "../types/opportunitiesType";

export const createFormData = (value: ICreateOpportunity) => {
  const formData = new FormData();
  formData.append("title", value.title);
  formData.append("date", value.date.toString());
  formData.append("description", value.description);
  formData.append("email", value.email);
  formData.append("location", value.location);
  formData.append("organizationName", value.organizationName);
  formData.append("typeWork", value.typeWork);
  if (value.website) {
    formData.append("website", value.website);
  }
  const isFile = value.image instanceof File;
  if (isFile) {
    formData.append("image", value.image as File);
  } else if (typeof value.image === "string") {
    formData.append("imageUrl", value.image);
  }

  return formData;
};
