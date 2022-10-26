import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { Alert, Box, Fab, Grid, Snackbar } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userFunction } from "config/middleware";
import { getAllTasksAction } from "features/users/users.actions";
import DetailUser from "components/DetailUer/DetailUser";
import AddIcon from "@mui/icons-material/Add";
import ListUserSkeleton from "components/Skeletons/ListUserSkeleton";
import SkeletonCard from "components/Skeletons/components/SkeletonCard";

const CardTask = lazy(() => import("components/CardUser/CardTask"));
const ModalFormTask = lazy(() => import("components/Modal/ModalFormTask"));

export default function AllTasks() {
  const dispatch = useDispatch();
  const usersRedux = useSelector((state) => state.users);
  const [user, setUser] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState({
    message: "",
    type: "success",
    openSnack: false,
  });

  const { userId } = useParams();

  const findUser = useCallback(
    async (users) => {
      const userTemp = await userFunction(users, userId);
      setUser(userTemp);
    },
    [userId]
  );

  const handleClickAction = (action) => setOpen(action);
  const handleClickActionSnack = (action) =>
    setOpenSnack({ ...openSnack, openSnack: action });

  useEffect(() => {
    dispatch(getAllTasksAction(userId));
  }, [userId, dispatch]);

  useEffect(() => {
    if (usersRedux.users.length > 0) findUser(usersRedux.users);
  }, [usersRedux, findUser]);

  if (!user) return <div>Loading...</div>;

  return (
    <Box sx={{ zIndex: 1 }}>
      <DetailUser user={user} />
      {usersRedux.loading && <ListUserSkeleton />}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {usersRedux &&
          usersRedux.allTasks.map((task) => (
            <Suspense key={task.id} fallback={<SkeletonCard />}>
              <CardTask task={task} user={user} />
            </Suspense>
          ))}
      </Grid>
      <Box sx={{ height: 0, flexGrow: 1 }}>
        <Fab
          sx={{
            position: "fixed",
            left: {
              xl: "95%",
              md: "95%",
              xs: "83%",
            },
            bottom: 30,
            right: 16,
          }}
          onClick={() => handleClickAction(true)}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Box>
      <Suspense fallback={null}>
        <ModalFormTask
          user={user}
          open={open}
          handleClickAction={handleClickAction}
          setOpenSnack={setOpenSnack}
        />
      </Suspense>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnack.openSnack}
        onClose={() => handleClickActionSnack(false)}
        key={"top right"}
      >
        <Alert
          onClose={() => handleClickActionSnack(false)}
          severity={openSnack.type}
          sx={{ width: "100%" }}
        >
          {openSnack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
