import './App.css';
import './App.scss';

import KanbanBoard from './components/kanbanBoard/kanbanBoard';
import Modal from './components/modal/modal';

import { useSelector } from 'react-redux';

function App() {
  const state = useSelector(state => state.modalState);

  return (
    <div className="App">
      <KanbanBoard/>
      {state.status ? <Modal>{state.children}</Modal> : ''}
    </div>
  );
}

export default App;
