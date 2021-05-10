const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

const getFilters = () => filters

const setFilters = (updates) => {
    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }
    if (typeof updates.sortby === 'string') {
        filters.sortBy = updates.sortBy

    }
}

export { getFilters, setFilters }