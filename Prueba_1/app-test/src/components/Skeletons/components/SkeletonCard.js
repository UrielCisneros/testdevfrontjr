import React from "react";
import { Card, CardHeader, Skeleton } from "@mui/material";

export default function SkeletonCard({width = 345}) {
  return (
    <Card sx={{ width: width, m: 1.5 }}>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
    </Card>
  );
}
