import { useEffect } from 'react';
import { RadioPlayer } from './components';

const App = () => {
  useEffect(() => {
    /**
     * To render the widget with API data
     * - Call your API here
     * - Save data to a state variable
     * - Pass state to `RadioPlayer` channels prop
     */
    const getAPIData = async () => {
      // const response = await fetch('/api/channels');
      // const data = await response.json();
      // console.log(data);
    };
    getAPIData();
  }, []);

  return <RadioPlayer />;
};

export default App;
