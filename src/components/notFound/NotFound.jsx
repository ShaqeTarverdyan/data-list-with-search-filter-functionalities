import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-teal);
  background: var(--color-gray);
  box-shadow: 0 2px 3px 0 #e8ebed, 0 0 3px 0 #e8ebed;
`;

const NotFound = ({ text }) => {
  return <Wrapper data-testid="not-found">{text}</Wrapper>;
};

export default NotFound;

NotFound.propTypes = {
  text: PropTypes.string,
};
