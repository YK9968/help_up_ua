import { VolunteerType } from "../../types/opportunitiesType";

const Filter = () => {
  return (
    <div className="w-filterOpportunityWidth h-filterOpportunityHeight  drop-shadow-lg  p-10 bg-white rounded-3xl">
      <p className="mb-3">Filtration:</p>
      {/* переробити через формік */}
      <ul className="flex flex-col gap-5">
        {Object.values(VolunteerType).map((type) => (
          <li key={type}>
            <div>
              <label>
                <input className="mx-2" type="checkbox" />
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
    </div>
  );
};

export default Filter;
