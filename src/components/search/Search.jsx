import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import qs from "query-string";

const SearchContainer = styled.div`
  margin-bottom: 1rem;
`;
const StyledInput = styled.input`
  min-width: 250px;
  height: 40px;
  margin-right: 1rem;
  padding: 1rem;

  &::placeholder {
    color: var(--color-teal);
  }
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  outline: none;
  background-color: var(--color-white);
  border: none;
  color: var(--color-grayDark);
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0.5rem;

  &:hover {
    color: var(--color-teal);
    border: 1px solid var(--color-grayDark);
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const Search = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");

  const queryParams = qs.parse(history.location.search);

  const handleInputValue = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSearchClick = () => {
    queryParams.search = inputValue;
    queryParams.page = 1;
    history.push({
      pathname: history.location.pathname,
      search: qs.stringify(queryParams),
    });
  };

  const handleClearClick = () => {
    delete queryParams.search;
    history.push({
      pathname: history.location.pathname,
      search: qs.stringify(queryParams),
    });
    setInputValue("");
  };

  return (
    <SearchContainer>
      <StyledInput
        type="text"
        name="app"
        value={inputValue}
        placeholder="Search By App..."
        onChange={handleInputValue}
        data-testid="search-input"
      />

      <Button
        disabled={inputValue.length === 0}
        onClick={handleSearchClick}
        data-testid="search-button"
      >
        Search
      </Button>
      {queryParams.search && (
        <Button onClick={handleClearClick} data-testid="clear-button">
          Clear
        </Button>
      )}
    </SearchContainer>
  );
};

export default Search;

Search.propTypes = {
  handleSearchValue: PropTypes.func,
  checkSearchValue: PropTypes.func,
};
