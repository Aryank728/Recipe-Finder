import React from "react";

const SearchBar = ({ value, isLoading, handleSubmit, onChange }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    disabled={isLoading}
                    onChange={onChange}
                    placeholder="Search Recipes"
                    className="form-control"
                />
                <input
                    disabled={isLoading || !value}
                    type="submit"
                    value="Search"
                    className="btn"
                />
            </form>
        </div>
    )
}

export default SearchBar;
