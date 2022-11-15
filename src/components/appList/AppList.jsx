import React from "react";
import styled from "styled-components";
import AppItem from "../appItem/AppItem";
import NotFound from "../notFound/NotFound";
import { useSelector } from "react-redux";

const ListWrapper = styled.div``;

const AppList = () => {
  const apps = useSelector((state) => state.app.apps);
  const loading = useSelector((state) => state.app.loading);

  return (
    <>
      <ListWrapper>
        {loading ? (
          <div>Loading...</div>
        ) : apps?.length === 0 ? (
          <NotFound text={"There is no any item with this key"} />
        ) : (
          apps?.map((app) => {
            return <AppItem key={app.id} app={app} />;
          })
        )}
      </ListWrapper>
    </>
  );
};

export default AppList;
