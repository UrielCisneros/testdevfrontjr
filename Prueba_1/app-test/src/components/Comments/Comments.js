import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  lazy,
  Suspense,
} from "react";
import { Box } from "@mui/material";
import clientAxios from "config/clientAxios";
import SkeletonCard from "components/Skeletons/components/SkeletonCard";

const Comment = lazy(() => import("./Comment"));

export default function Comments({ post }) {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCommentsPost = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await clientAxios.get(`/post/${post.id}/comments`);
      setComments(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [post.id]);

  useEffect(() => {
    getCommentsPost();
  }, [getCommentsPost]);

  return (
    <Box width={"100%"} minHeight={400}>
      {loading && (
        <Fragment>
          <SkeletonCard width={"100%"} />
          <SkeletonCard width={"100%"} />
          <SkeletonCard width={"100%"} />
        </Fragment>
      )}
      {comments &&
        comments.map((comment) => (
          <Suspense key={comment.id} fallback={<SkeletonCard width={"100%"} />}>
            <Comment  comment={comment} />
          </Suspense>
        ))}
    </Box>
  );
}
