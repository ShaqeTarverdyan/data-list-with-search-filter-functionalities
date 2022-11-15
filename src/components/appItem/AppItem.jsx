import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  min-height: 12rem;
  background-color: var(--color-white);
  box-shadow: 0 2px 3px 0 #e8ebed, 0 0 3px 0 #e8ebed;
  position: relative;
  width: 100%;
  margin-bottom: 1rem;

  &:hover {
    background-color: var(--color-gray);
    cursor: pointer;
  }
`;
const Title = styled.h3`
  color: var(--color-teal);
  font-size: 2rem;
  font-weight: 700;
`;
const Description = styled.p`
  color: var(--color-grayDark);
`;
const LeftSide = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
`;

const CategoryItem = styled.div``;
const Categories = styled.div``;
const Subscriptions = styled.div`
  display: flex;
`;
const Subscription = styled.div`
  display: flex;
  margin-right: 1rem;
`;
const SubscriptionName = styled.div`
  margin-right: 0.5rem;
`;
const SubscriptionPrice = styled.div``;

const AppItem = ({ app }) => {
  return (
    <ItemWrapper data-testid="app-item">
      <Top>
        <LeftSide>
          <Title data-testid="name">{app.name}</Title>
          <Description data-testid="description">{app.description}</Description>
        </LeftSide>
        <Categories>
          {app.categories.map((category, index) => {
            return (
              <CategoryItem key={category + index}>{category}</CategoryItem>
            );
          })}
        </Categories>
      </Top>
      <Subscriptions>
        {app.subscriptions.map(({ name, price }, index) => {
          return (
            <Subscription key={index}>
              <SubscriptionName>{name}</SubscriptionName>
              <SubscriptionPrice>{price}</SubscriptionPrice>
            </Subscription>
          );
        })}
      </Subscriptions>
    </ItemWrapper>
  );
};

export default AppItem;

AppItem.propTypes = {
  app: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    categories: PropTypes.array,
    subscriptions: PropTypes.array,
  }),
};
