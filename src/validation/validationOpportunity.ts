import * as Yup from "yup";
import { VolunteerType } from "../types/opportunitiesType";

const validationOpportunitySchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be at most 100 characters"),
  organizationName: Yup.string()
    .required("Organization Name is required")
    .min(3, "Organization Name must be at least 3 characters")
    .max(100, "Organization Name must be at most 100 characters"),
  website: Yup.string()
    .url("Must be a valid URL")
    .required("Website is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email address"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be at most 500 characters"),
  date: Yup.string()
    .required("Date is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the format YYYY-MM-DD"),
  typeWork: Yup.mixed<VolunteerType>()
    .oneOf(Object.values(VolunteerType), "Invalid type of work")
    .required("Categories is required"),
  image: Yup.mixed<File>().optional(),
  location: Yup.string()
    .required("Location is required")
    .min(3, "Location must be at least 3 characters")
    .max(100, "Location must be at most 100 characters"),
});

export default validationOpportunitySchema;
