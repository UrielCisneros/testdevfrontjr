import clientAxios from "config/clientAxios";
import { changeLoading, errorPeticion, getAll, getPost, getUsers } from "./usersSlice";


export const getUsersAction = () => async (dispatch) => {
    try {
        dispatch(changeLoading(true));
        const {data} = await clientAxios.get(`/users`);
        dispatch(getUsers(data))
        dispatch(changeLoading(false));
    } catch (error) {
        dispatch(errorPeticion(error));
        dispatch(changeLoading(false));
    }
}

export const getPostAction = (userId) => async (dispatch) => {
    try {
        dispatch(changeLoading(true));
        const {data} = await clientAxios.get(`users/${userId}/posts`);
        dispatch(getPost(data))
        dispatch(changeLoading(false));
    } catch (error) {
        dispatch(errorPeticion(error));
        dispatch(changeLoading(false));
    }
}

export const getAllTasksAction = (userId) => async (dispatch) => {
    try {
        dispatch(changeLoading(true));
        const { data } = await clientAxios.get(`/users/${userId}/todos`);
        dispatch(getAll(data.reverse()));
        dispatch(changeLoading(false));
    } catch (error) {
        dispatch(errorPeticion(error));
        dispatch(changeLoading(false));
    }
}

export const postFormTask = ({dataForm, callback}) => async (dispatch) => {
    try {
        dispatch(changeLoading(true));
        await clientAxios.post(`/posts`, dataForm);
        callback();
        dispatch(changeLoading(false));
    } catch (error) {
        callback(error);
        dispatch(errorPeticion(error));
        dispatch(changeLoading(false));
    }
}