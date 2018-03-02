import React from "react";
import PropTypes from "prop-types";
import { Form, Select } from 'react-form';

function Search(){

  const statusOptions = [
  {
    label: 'Breastfeeding',
    value: 'breastfeeding',
  },
  {
    label: 'Clinic setting',
    value: 'clinic',
  },
  {
    label: 'Family',
    value: 'family',
  },
]
  return (
    <div className="search-container">
      <style jsx>{`
        .search-container {
          border: 1px solid gray;
          padding: 10px;
          width: 100%;
        }

        `}</style>
        <h3>Filter images by category</h3>
        <Form>
          {formApi => (
            <form id="select-input-form">
              <Select field="status" id="select-input-status" options={statusOptions} />
              <button type="submit">
                Submit
              </button>
            </form>
          )}
        </Form>
    </div>
  );
}

export default Search;
