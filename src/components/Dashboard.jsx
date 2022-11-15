import React, { useEffect, useMemo } from "react";
import styled from "styled-components";

import Categories from "./categories/Categories";
import AppList from "./appList/AppList";
import Search from "./search/Search";
import Pagination from "./Pagination";

import { ITEMS_PER_PAGE } from "../constants";

import { useSelector, useDispatch } from "react-redux";
import { getApps } from "../store/actions/appActions";
import { useHistory } from "react-router";
import qs from "query-string";

const Section = styled.section`
  position: relative;
  flex: 1;
  order: 2;
  text-align: left;
  margin: 0 2rem;
`;
const Container = styled.div`
  display: flex;
  text-align: center;
  max-width: 1400px;
  margin: 3rem auto;
`;

const Dashboard = () => {
  const dispatch = useDispatch();

  const total = useSelector((state) => state.app.total);
  const history = useHistory();

  const queryParams = useMemo(
    () => qs.parse(history.location.search),
    [history.location.search]
  );

  useEffect(() => {
    dispatch(getApps(queryParams));
  }, [dispatch, queryParams]);

  const handlePageClick = ({ selected }) => {
    queryParams.page = selected + 1;
    history.push({
      pathname: history.location.pathname,
      search: qs.stringify(queryParams),
    });
  };

  return (
    <Container>
      <Categories />
      <Section>
        <Search />
        <AppList />
        <Pagination
          pageCount={Math.ceil(total / ITEMS_PER_PAGE)}
          handlePageClick={handlePageClick}
        />
      </Section>
    </Container>
  );
};

export default Dashboard;
