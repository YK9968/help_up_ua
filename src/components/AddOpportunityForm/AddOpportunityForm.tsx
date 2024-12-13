import { Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";
import { ICreateOpportunity } from "../../types/opportunitiesType";
import validationOpportunitySchema from "../../validation/validationOpportunity";
import RenderField from "../RenderField/RenderField";
import { opportunityState } from "../../store/opportunitiesStore";

interface IOportunityProps {
  togleForm: () => void;
}
const initialValues: ICreateOpportunity = {
  title: "",
  organizationName: "",
  website: "",
  email: "",
  description: "",
  date: "",
  typeWork: "",
  image: "",
  location: "",
};

const AddOpportunityForm: FC<IOportunityProps> = ({ togleForm }) => {
  const addOpportunity = opportunityState((state) => state.addOpportunity);

  const handleSubmitOpportunity = async (
    value: ICreateOpportunity,
    actions: FormikHelpers<ICreateOpportunity>
  ): Promise<void> => {
    try {
      addOpportunity(value);
      actions.resetForm();
      togleForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitOpportunity}
      validationSchema={validationOpportunitySchema}
    >
      <Form className="custom-scrollbar">
        <p className="flex items-center  text-2xl pb-12">
          <span className="text-blue-500 mr-1">Add</span>Opptrunity
        </p>

        <div className="flex gap-8 mb-12 ">
          <div>
            <RenderField name="title" placeholder="Title" type="text" />
            <RenderField name="date" placeholder="Date" type="date" />
            <RenderField name="location" placeholder="Location" type="text" />
            <RenderField name="website" placeholder="Website" type="text" />
            <RenderField
              name="typeWork"
              placeholder="Categories"
              type="select"
              options={[
                "SOCIAL_ASSISTANCE",
                "ENVIRONMENTAL_ACTIVITIES",
                "EDUCATION_MENTORING",
                "MEDICAL_SERVICES",
                "SUPPORT_FOR_ELDERLY",
                "ANIMAL_WELFARE",
                "CULTURAL_INITIATIVES",
                "HUMANITARIAN_MISSIONS",
                "SPORTS_INITIATIVES",
                "CRISIS_RESPONSE_VOLUNTEERING",
              ]}
            />
            <RenderField
              name="organizationName"
              placeholder="Organization Name"
              type="text"
            />
            <RenderField name="email" placeholder="Email" type="text" />
            <RenderField name="image" placeholder="Load photo" type="File" />
          </div>
          <RenderField
            name="description"
            placeholder="Description"
            type="text"
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            className="flex gap-2 items-center justify-center py-3 px-40 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out "
            type="submit"
          >
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddOpportunityForm;
