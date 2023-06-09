import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import { Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { cartStore } from './Redux/CartState';

function App() {

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = cartStore.subscribe(() => {
      setModalOpen(cartStore.getState().cartOpen);
    })

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Layout />

        <Modal open={modalOpen}>
          fancy modal
        </Modal>

      </BrowserRouter>
    </div>
  );
}

export default App;
