import { useEffect, useMemo, useState } from "react";
import { useUserStore } from "../../store";

export const useUserPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const { users, isLoading, search, startLoadUsers } = useUserStore();

const userFilter = useMemo(() => {
    if (search == null) return users;
    const filters = users.filter((user) => {
        const fullName = `${user?.first_name} ${user?.last_name}`;
        const searchInput = search?.toLowerCase();

        const includesName = fullName.toLowerCase().includes(searchInput);
        const includesFirstName = user?.first_name.toLowerCase().includes(searchInput);
        const includesLastName = user?.last_name.toLowerCase().includes(searchInput);

        return includesName || includesFirstName || includesLastName;
    });
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
