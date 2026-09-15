function GenreFilter({filterGenre, onFilterChange}) {
    return (
        <div className="border border-[#e0e0e0] rounded-[10px] p-[14px] mb-4 bg-[#fafafa]">
            <h3>🔍 Filter by Genre (Single Input → Single State)</h3>
            <input
                className="block w-full p-2 mb-2 rounded-[6px] border border-[#ccc] box-border"
                type="text"
                placeholder="Genre type karo (e.g. Fiction)..." 
                value={filterGenre}
                onChange={(e) => onFilterChange(e.target.value)}
            />
        </div>
    )
}
export default GenreFilter;