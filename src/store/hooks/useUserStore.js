import { useDispatch, useSelector } from "react-redux"
import { onIsloadingUsers, onLoadUsers, onSendErrorMessageUsers } from "../slices";
import { apiConfig } from "../../api/apiConfig";

export const useUserStore = () => {

    const { isLoading, users, errorMessage } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const startLoadUsers = async () =>{
        const userCount = 30;
        dispatch(onIsloadingUsers());
        try {
            const { data } = await apiConfig.get(`/users?size=${userCount}`);
            dispatch(onLoadUsers(data))
        } catch (error) {
            dispatch(onSendErrorMessageUsers(error.message));
        }
    }


    return {
        /* Attributes */
        isLoading,
        users,
        errorMessage,

        /* Methods */
        startLoadUsers,
    }
}
