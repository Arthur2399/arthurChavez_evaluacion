import { useDispatch, useSelector } from "react-redux"
import { onIsloadingUsers, onLoadUsers, onSearchUsers, onSendErrorMessageUsers } from "../slices";
import { apiConfig } from "../../api/apiConfig";

export const useUserStore = () => {

    const { isLoading, users,search, errorMessage } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const startLoadUsers = async () =>{
        const userCount = 30;
        dispatch(onIsloadingUsers());
        try {
            const { data } = await apiConfig.get(`/users?size=${userCount}`); //Method GET
            dispatch(onLoadUsers(data))
        } catch (error) {
            dispatch(onSendErrorMessageUsers(error.message));
        }
    }

    const startSearchUsers =  (search) =>{
        dispatch(onSearchUsers(search)); //Set value search into redux state
    }

    return {
        /* Attributes */
        isLoading,
        users,
        errorMessage,
        search, 

        /* Methods */
        startLoadUsers,
        startSearchUsers,
    }
}
