function SearchBox({searchTerm, onSearchChange}) {
    return (
        <div className = "border border-[#e0e0e0] rounded-[10px] p-[14px] mb-4 bg-[#fafafa]">
            <h3>🔍 Search Users (Single Input → Single State)</h3>
            <input
                className="box-border w-full p-2 mb-2 rounded-md block border border-[#ccc]"
                type="text"
                value={searchTerm}
                placeholder="Naam se search karo..."
                onChange = {(e) =>{
                    return onSearchChange(e.target.value);
                }}
            />
        </div>
    )
}
export default SearchBox;