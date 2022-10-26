import React, { Fragment, lazy, Suspense } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import SkeletonCard from "components/Skeletons/components/SkeletonCard";
import PostSkeleton from "components/Skeletons/ListUserSkeleton";

const CardUser = lazy(() => import("components/CardUser/CardUser"));

export default function ListUser() {
  const usersRedux = useSelector((state) => state.users);

  return (
    <Fragment>
      {usersRedux.loading && <PostSkeleton />}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {usersRedux &&
          usersRedux.users.map((user) => (
            <Suspense key={user.id} fallback={<SkeletonCard />}>
              <CardUser user={user} />
            </Suspense>
          ))}
      </Grid>
    </Fragment>
  );
}
