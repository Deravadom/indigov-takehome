import { CSSProperties } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';

const style: CSSProperties = {
  minHeight: '100vh',
  background: "white",
  color: "slateblue"
};

const App = () => {
  return (
    <div style={style} >
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div >
  );
}

export default App;
