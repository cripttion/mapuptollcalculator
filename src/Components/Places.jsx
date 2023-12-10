import React, { useState } from 'react';
import axios from 'axios';
import { useUserContext } from '../StateManagemet';
function Places() {
  const {
    source,setSource,dest,setDest,
    route,setRouteData,
    apiData,
    setApiData,
    sourcelongitude, setSourceLongitude,destinationLongitude, setDestinationLongitude
  } = useUserContext();
  const [sourceValue, setSourceValue] = useState('');
  const [destinationValue, setDestinationValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://mysterious-pear-barnacle.cyclic.app', {
        from: { address: sourceValue },
        to: { address: destinationValue },
      });

      
      setApiData(response.data);
      setSourceLongitude(response.data.summary.route[0].location);
      setDestinationLongitude(response.data.summary.route[1].location);
      setRouteData(response.data.routes);
      setSource(sourceValue);
      setDest(destinationValue);
      setSourceValue("");
      setDestinationValue("");
    } catch (error) {
      console.error('Error fetching toll data:', error);
    }
  };
  console.log(apiData);
  console.log(route);
  return (
    <div style={{ marginTop: 20 }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 20,
          width: '80%',
        }}
      >
        <label htmlFor="source">From</label>
        <input
          type="text"
          name="sourceData"
          id="StartingOfJourney"
          placeholder="Place, State, Country - (Jaipur, Rajasthan, India)"
          value={sourceValue}
          onChange={(e) => setSourceValue(e.target.value)}
        />
        <label htmlFor="destination">To</label>
        <input
          type="text"
          name="destinationData"
          id="EndOfJourney"
          placeholder="Place, State, Country - (Jaipur, Rajasthan, India)"
          value={destinationValue}
          onChange={(e) => setDestinationValue(e.target.value)}
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'teal',
            color: 'white',
            padding: 10,
            border: 'none',
            marginTop: 20,
            cursor: 'pointer',
          }}
        >
          Calculate
        </button>
      </form>

  
    </div>
  );
}

export default Places;
