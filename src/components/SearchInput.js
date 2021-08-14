import { useState } from 'react';

export const SearchInput = (showSearch) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY_NAME;
    const [apiData, setApiData] = useState({});
    const [placeToSearch, setPlaceToSearch] = useState('');
    const [showResult, setShowResult] = useState(false);

    const onSubmitInSearchInput = async (e) => {
        e.preventDefault();

        if (!placeToSearch) {
            alert('Please provide a place name');
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${placeToSearch}`);
                const data = await response.json()
                setApiData(data);
                setShowResult(true);
            } catch (e) {
                console.error(e.toString);
            }
        };
        fetchData();

        setPlaceToSearch('');
    }

    return (
        <div>
            <form className='form-control' onSubmit={onSubmitInSearchInput}>
                <input type='text' placeholder='Enter a place name ...' onChange={(e) => setPlaceToSearch(e.target.value)} className='searchText' />
                <input type='submit' value='Search' className='btn searchButton' />
            </form>

            {showResult && <div className='weatherResult'>
                <h4>
                    {apiData.name} Results
                </h4>
                <p>
                    Current Temp: {apiData.['main'].['temp']}
                </p>
                <p>
                    Min Temp: {apiData.['main'].['temp_min']}
                </p>
                <p>
                    Max Temp: {apiData.['main'].['temp_max']}
                </p>
                <p>Description: {apiData.["weather"][0].description}</p>

            </div>}
        </div>

    )
}

export default SearchInput;