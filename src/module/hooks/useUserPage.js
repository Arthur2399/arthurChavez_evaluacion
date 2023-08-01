import { useEffect, useMemo, useState } from "react";
import { useUserStore } from "../../store";

export const useUserPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const { users, isLoading, search, startLoadUsers } = useUserStore();

    const userFilter = useMemo(() => {
        if (search == null) return users;
        const filters = users.filter(
            (user) =>
                user?.first_name.toLowerCase().includes(search?.toLowerCase()) ||
                user?.last_name.toLowerCase().includes(search?.toLowerCase())
        );
        return filters;
    }, [search, users]);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = userFilter.slice(indexOfFirstItem, indexOfLastItem);

    // Start loading users
    useEffect(() => {
        startLoadUsers();
    }, []);

    // Reset currentPage to 1 whenever search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    return {
        isLoading,
        userFilter,
        itemsPerPage,
        currentPage,
        handlePageChange,
        currentItems,
    }
}
