import { Grid } from "@mui/material";
import React from "react";
import SkeletonCard from "./components/SkeletonCard";

export default function ListUserSkeleton() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((a , i) => (
        <SkeletonCard key={i} />
      ))}
    </Grid>
  );
}
