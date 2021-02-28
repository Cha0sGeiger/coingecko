import React, { useCallback, useEffect, useState } from 'react';

interface FilterByComponentProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const FilterByComponent = ({
  value = false,
  onChange,
}: FilterByComponentProps) => {
  const [checked, setChecked] = useState(value);

  const change = useCallback(() => {
    setChecked(!checked);
    onChange(!checked);
  }, [checked, setChecked]);

  return (
    <div className="card txt-center">
      <h4>Filter by platform</h4>
      <div>
        <input
          type="checkbox"
          id="filter-by-platform"
          name="filter-by-platform"
          checked={checked}
          onChange={change}
        />
        <label htmlFor="filter-by-platform">Ethereum</label>
      </div>
    </div>
  );
};
