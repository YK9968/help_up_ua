import { Form, Formik, FormikHelpers } from "formik";
import { FC, useEffect, useState } from "react";
import { ICreateOpportunity } from "../../types/opportunitiesType";
import validationOpportunitySchema from "../../validation/validationOpportunity";
import RenderField from "../RenderField/RenderField";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addOpportunity,
  updateOpportunity,
} from "../../redux/opportunity/operations";
import toast from "react-hot-toast";
import { selectUserOpportunities } from "../../redux/opportunity/selectors";

interface IOportunityProps {
  toggleForm: () => void;
  type: string;
  id?: string;
}

const OpportunityForm: FC<IOportunityProps> = ({ toggleForm, type, id }) => {
  const dispatch = useAppDispatch();
  const opportunities = useAppSelector(selectUserOpportunities);

  const opp = opportunities.find((opp) => opp.id === id);

  const [initialValues, setInitialValues] = useState<ICreateOpportunity>({
    title: "",
    organizationName: "",
    website: "",
    email: "",
    description: "",
    date: "",
    typeWork: "",
    image: "",
    location: "",
  });

  useEffect(() => {
    if (type === "update" && opp) {
      setInitialValues({
        title: opp.title,
        organizationName: opp.organizationName,
        website: opp.website,
        email: opp.email,
        description: opp.description,
        date: opp.date,
        typeWork: opp.typeWork,
        image: opp.imageUrl,
        location: opp.location,
      });
    }
  }, [opp, type]);

  const handleSubmitOpportunity = async (
    value: ICreateOpportunity,
    actions: FormikHelpers<ICreateOpportunity>
  ): Promise<void> => {
    if (type === "add") {
      dispatch(addOpportunity(value))
        .unwrap()
        .then(() => {
          toast.success("Successful add opportunity");
          actions.resetForm();
        })
        .catch((error) => {
          toast.error(
            "Failed: " + error.message + ". Check your data and try again"
          );
        });
    } else {
      dispatch(updateOpportunity({ opportunity: value, id: id }))
        .unwrap()
        .then(() => {
          toast.success("Successful update opportunity");
          actions.resetForm();
        })
        .catch((error) => {
          toast.error(
            "Failed: " + error.message + ". Check your data and try again"
          );
        });
    }
    actions.resetForm();
    toggleForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitOpportunity}
      validationSchema={validationOpportunitySchema}
      enableReinitialize
    >
      <Form className="custom-scrollbar">
        {type === "add" ? (
          <p className="flex items-center  text-2xl pb-12">
            <span className="text-blue-500 mr-1">Add </span>Opptrunity
          </p>
        ) : (
          <p className="flex items-center  text-2xl pb-12">
            <span className="text-blue-500 mr-1">Update </span>Opptrunity
          </p>
        )}

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

export default OpportunityForm;
