import { Form, Formik, FormikHelpers } from "formik";
import { FC, useEffect, useState } from "react";
import { ICreateOpportunity } from "../../types/opportunitiesType";
import validationOpportunitySchema from "../../validation/validationOpportunity";
import RenderField from "../RenderField/RenderField";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addOpportunity,
  fetchAllUserOpportunity,
  updateOpportunity,
} from "../../redux/opportunity/operations";
import { selectUserOpportunities } from "../../redux/opportunity/selectors";
import { createFormData } from "../../utils/createFormData";
import { CATEGORIES } from "../../types/constants";
import { showToast } from "../../utils/showToast";

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
        date: new Date(opp.date).toISOString().split("T")[0],
        typeWork: opp.typeWork,
        image: opp.imageUrl || "",
        location: opp.location,
      });
    }
  }, [opp, type]);

  const handleSubmitOpportunity = async (
    value: ICreateOpportunity,
    actions: FormikHelpers<ICreateOpportunity>
  ): Promise<void> => {
    const formData = createFormData(value);

    if (type === "add") {
      dispatch(addOpportunity(formData))
        .unwrap()
        .then(() => {
          showToast("success", "Successful add opportunity");
          actions.resetForm();
        })
        .catch((error) => {
          showToast(
            "error",
            "Failed: " + error.message + ". Check your data and try again"
          );
        });
    } else {
      dispatch(updateOpportunity({ opportunity: formData, id: id }))
        .unwrap()
        .then(() => {
          dispatch(fetchAllUserOpportunity());
          showToast("success", "Successful update opportunity");
          actions.resetForm();
        })
        .catch((error) => {
          showToast(
            "error",
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
      {({ setFieldValue }) => (
        <Form className="custom-scrollbar">
          <p className="flex items-center text-2xl pb-12">
            <span className="text-blue-500 mr-1">
              {type === "add" ? "Add " : "Update "}
            </span>
            Opportunity
          </p>

          <div className="flex gap-8 mb-12">
            <div>
              <RenderField name="title" placeholder="Title" type="text" />
              <RenderField name="date" placeholder="Date" type="date" />
              <RenderField name="location" placeholder="Location" type="text" />
              <RenderField name="website" placeholder="Website" type="text" />
              <RenderField
                name="typeWork"
                placeholder="Categories"
                type="select"
                options={CATEGORIES}
              />
              <RenderField
                name="organizationName"
                placeholder="Organization Name"
                type="text"
              />
              <RenderField name="email" placeholder="Email" type="text" />
              <RenderField
                name="image"
                placeholder="Load photo"
                type="File"
                setFieldValue={setFieldValue}
              />
            </div>
            <RenderField
              name="description"
              placeholder="Description"
              type="text"
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              className="flex gap-2 items-center justify-center py-3 px-40 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out"
              type="submit"
            >
              {type === "add" ? "Add" : "Save"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default OpportunityForm;
