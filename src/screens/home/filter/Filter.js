import { useFilter, useNote } from "../../../context";
import { uniqueLabels } from "../../../utils";

export const Filter = () => {
  const {
    filterState: { label, priority, sortByDate },
    filterDispatch,
  } = useFilter();
  const {
    allNotes: { notes },
  } = useNote();

  const labels = uniqueLabels(notes);

  const dispatchFilter = (type, e) => {
    filterDispatch({ type: type, payload: e.target.value });
  };

  return (
    <div className='filter-wrapper flex ai-center jc-center flex-gap'>
      <h3 className='filter-head'>Filters</h3>
      <div className='flex flex-gap'>
        <div className=' filter-content flex flex-gap'>
          <label for='label'>Label</label>
          <select
            value={label}
            onChange={(e) => dispatchFilter("LABEL", e)}
            name='label'>
            <option value='all'>All</option>
            {labels.length > 0 &&
              labels.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
          </select>
        </div>
        <div className=' filter-content flex flex-gap'>
          <label for='priority'> Priority</label>
          <select
            onChange={(e) => dispatchFilter("PRIORITY", e)}
            value={priority}
            name='priority'>
            <option value='all'>All</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </div>
        <div className=' filter-content flex flex-gap '>
          <label onChange={(e) => dispatchFilter("SORT_BY_DATE", e)} for='date'>
            Date
          </label>
          <select value={sortByDate} name='date'>
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};
