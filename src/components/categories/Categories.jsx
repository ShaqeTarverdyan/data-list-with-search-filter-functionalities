import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../store/actions/categoryActions";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import qs from "query-string";

const CategoryWrapper = styled.div`
  min-width: 200px;
  text-align: left;
  flex: 0;
  order: 1;
  margin: 0 2rem;
`;
const CategoryList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: column;
`;
const CategoryItem = styled.li`
  min-height: 50px;
  padding: 0.5rem;
  color: var(--color-grayDark);
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid var(--color-grayDark);
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    color: var(--color-teal);
    background-color: var(--color-white);
    transition: background 0.3s ease-in-out;
  }

  background-color: ${({ active }) =>
    active ? "var(--color-white)" : "transparent"};
  color: ${({ active }) =>
    active ? "var(--color-teal)" : "var(--color-grayDark)"};
  pointer-events: ${({ active }) => (active ? "none" : "visible")};
`;

const Categories = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const queryParams = qs.parse(search);
  const activeCategory = queryParams.name;
  delete queryParams.name;
  const categories = useSelector((state) => state.category.categories);
  const isLoading = useSelector((state) => state.category.loading);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <CategoryWrapper>
      {isLoading ? (
        <div>Loading... </div>
      ) : (
        <CategoryList data-testid="categories">
          <Link
            to={{
              pathname: "/apps",
              search: qs.stringify({
                ...queryParams,
                page: 1,
              }),
            }}
          >
            <CategoryItem active={activeCategory === undefined}>
              All Categories
            </CategoryItem>
          </Link>
          {categories?.map((item) => {
            return (
              <Link
                key={item.id}
                to={{
                  pathname: "/apps",
                  search: qs.stringify({
                    ...queryParams,
                    name: item.name,
                    page: 1,
                  }),
                }}
              >
                <CategoryItem active={activeCategory === item.name}>
                  {item.name}
                </CategoryItem>
              </Link>
            );
          })}
        </CategoryList>
      )}
    </CategoryWrapper>
  );
};

export default Categories;
