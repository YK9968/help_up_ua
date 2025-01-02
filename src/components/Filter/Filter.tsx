import { Field, Form, Formik, FormikHelpers } from "formik";
import { VolunteerType } from "../../types/opportunitiesType";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchAllOpportunity } from "../../redux/opportunity/operations";
import { selectOpportunities } from "../../redux/opportunity/selectors";

interface IInitialValues {
  location: string;
  categories: string | string[];
}

const Filter = () => {
  const opportunities = useAppSelector(selectOpportunities);
  console.log(opportunities);
  const dispatch = useAppDispatch();
  const initialValues: IInitialValues = {
    location: "",
    categories: "",
  };
  const handlerFilter = (
    value: IInitialValues,
    actions: FormikHelpers<IInitialValues>
  ) => {
    dispatch(
      fetchAllOpportunity({
        location: value.location,
        categories: value.categories,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handlerFilter}>
      <Form className="w-[400px] h-[695px]  drop-shadow-lg  p-10 bg-white rounded-3xl">
        <p className="mb-3">Filtration:</p>
        <Field
          className="bg-borderColor border py-4 pl-4 w-80 mb-4 rounded-2xl"
          type="text"
          name="location"
          placeholder="City"
        />
        <ul className="flex flex-col gap-5">
          {Object.values(VolunteerType).map((type) => (
            <li key={type}>
              <div>
                <label>
                  <Field
                    className="mx-2"
                    type="checkbox"
                    name="categories"
                    value={type}
                  />
                  {type}
                </label>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center mt-8">
          <button className="p-buttomFilterPadding bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out ">
            Search
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Filter;
