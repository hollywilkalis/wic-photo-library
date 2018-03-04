import React from "react";
import PropTypes from "prop-types";
import { Form, Select } from 'react-form';
import { Panel, Button } from 'react-bootstrap';

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
    <div>
    <style jsx>{`
      div {
        padding: 10px;
      }

      `}</style>
      <Panel>
        <div className="search-container">
        <h4>Filter images by category</h4>
          <Form>
            {formApi => (
              <form id="select-input-form">
                <Select field="status" id="select-input-status" options={statusOptions} />
                <Button bsStyle="primary" type="submit">
                  Submit
                </Button>
              </form>
            )}
          </Form>
        </div>
      </Panel>
    </div>
  );
}

export default Search;
