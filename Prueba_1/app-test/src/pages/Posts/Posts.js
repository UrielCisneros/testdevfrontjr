import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostAction } from "features/users/users.actions";
import { userFunction } from "config/middleware";
import DetailUser from "components/DetailUer/DetailUser";
import Post from "components/Post/Post";
import ListPostSkeleton from "components/Skeletons/ListPostSkeleton";

export const styleTitleDetail = {
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    mb: 2,
  },
};

export default function Posts() {
  const dispatch = useDispatch();
  const usersRedux = useSelector((state) => state.users);
  const [user, setUser] = useState(null);

  const { userId } = useParams();

  const findUser = useCallback(
    async (users) => {
      const userTemp = await userFunction(users, userId);
      setUser(userTemp);
    },
    [userId]
  );

  useEffect(() => {
    dispatch(getPostAction(userId));
  }, [userId, dispatch]);

  useEffect(() => {
    if (usersRedux.users.length > 0) findUser(usersRedux.users);
  }, [usersRedux, findUser]);

  if (!user) return <div>Loading...</div>;

  return (
    <Box>
      <DetailUser user={user} />
      <Typography sx={styleTitleDetail.title}>Post</Typography>
      {usersRedux.loading && <ListPostSkeleton />}
      <Box>
        {usersRedux &&
          usersRedux.postUser.map((post) => (
            <Post key={post.id} post={post} user={user} />
          ))}
      </Box>
    </Box>
  );
}
