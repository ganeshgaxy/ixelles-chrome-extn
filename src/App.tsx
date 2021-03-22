import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { useSnackbar } from 'notistack';
import { Suggest } from './components/suggests/page/Suggest';
import { Options } from './components/options/Options';
import { SuggestInfo } from './components/suggests/page/SuggestInfo';

function App(props: any) {
  const [options, setOptions] = React.useState({
    on: false
  })
  const [trigger, setTrigger] = React.useState(uuidv4());
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  if(options.on){
    enqueueSnackbar('Suggest Mode - Turned ON.')
    props.app.style.height='auto';
    props.app.style.width='350px';
  }
  else{
    enqueueSnackbar('Suggest Mode - Turned OFF.')
    props.app.style.height='40px';
    props.app.style.width='40px';
  }

  const onHandleOptionClick = (newOptions: any) => {
    setOptions(newOptions);
    setTrigger(uuidv4());
  }

  return (
    <div className="App">
      <Options handleOptionClick={onHandleOptionClick} options={options} />
      {options.on && 
      <div style={{flexGrow:1, overflowY:'auto'}}>
        <Suggest />
        <SuggestInfo />
      </div>}
    </div>
  );
}

export default App;
