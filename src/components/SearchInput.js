export const SearchInput = () => {
    return (
        <div>
            <form className='search-form'>
                <div className='form-control'>
                    <label>
                        Search
                    </label>
                    <input type='text' placeholder='Search a place' />
                </div>
            </form>
        </div>
    )
}

export default SearchInput;