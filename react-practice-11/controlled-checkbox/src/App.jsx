
import './App.css'
import SingleCheckbox from './components/SingleCheckbox';
import MultipleCheckbox from './components/MultipleCheckbox';
import GroupedCheckbox from './components/GroupedCheckbox';
import SelectAllExample from './components/SelectAllExample';

function App() {
  

  return (
    <div className='max-w-[800px] bg-[#F8F9FA] m-auto'>
      <SelectAllExample />

      <SingleCheckbox />

      <MultipleCheckbox />

      <GroupedCheckbox />

    </div>
  )
}

export default App
