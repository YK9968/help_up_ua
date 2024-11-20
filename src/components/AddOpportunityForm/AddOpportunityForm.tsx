import { Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";
import {
  ICreateOpportunity,
  VolunteerType,
} from "../../types/opportunitiesType";
import validationOpportunitySchema from "../../validation/validationOpportunity";
import RenderField from "../RenderField/RenderField";
import { opportunityState } from "../../store/opportunitiesStore";

interface IOportunityProps {
  togleForm: () => void;
}

const AddOpportunityForm: FC<IOportunityProps> = ({ togleForm }) => {
  const addOpportunity = opportunityState((state) => state.addOpportunity);

  const initialValues: ICreateOpportunity = {
    title: "",
    organizationName: "",
    website: "",
    email: "",
    description: "",
    date: "",
    typeWork: VolunteerType.SOCIAL_ASSISTANCE,
    image: "",
    location: "",
  };

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
      <Form>
        <p className="flex items-center  text-2xl pb-12">
          <span className="text-blue-500">Create</span> Opptrunity
        </p>

        <div className="flex flex-col justify-between mb-12">
          <div className="flex  justify-between">
            <div>
              <RenderField name="title" placeholder="Title" type="text" />
              <RenderField name="date" placeholder="Date" type="text" />
              <RenderField name="location" placeholder="Location" type="text" />
              <RenderField name="website" placeholder="Website" type="text" />
            </div>
            <div>
              {" "}
              <RenderField
                name="typeWork"
                placeholder="Categories"
                type="text"
              />
              <RenderField
                name="organizationName"
                placeholder="Organization Name"
                type="text"
              />
              <RenderField name="email" placeholder="Email" type="text" />
              <RenderField name="image" placeholder="Load photo" type="File" />
            </div>
          </div>
          <RenderField
            name="description"
            placeholder="Description"
            type="text"
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            className="flex gap-2 items-center justify-center py-3 px-10 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out "
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
