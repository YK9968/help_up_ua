import { VolunteerType } from "../../types/opportunitiesType";
import Button from "../Button/Button";

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
        <Button props="Search" />
      </div>
    </div>
  );
};

export default Filter;
