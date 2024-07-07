import React, {useState} from 'react';
import axios from 'axios';
import ItemList from './components/itemList';
import ItemForm from './components/itemForm';

const App = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleDelete = async (id) => {
    try {
      await
      axios.delete(`http://localhost:8000/api/items/${id}/`);
      setRefresh(!refresh);
    } catch (error) {
      console.error('Error deleting the item!', error);
    }
  };

  const handleSuccess = () => {
    setCurrentItem(null);
    setRefresh(!refresh);
  };

  return(
    <div className='App' style={{backgroundColor: "white"}}>
      <ItemList key={refresh} onEdit={handleEdit} onDelete={handleDelete}/>
      <ItemForm item={currentItem} onSuccess={handleSuccess}/>
      <h1 style={{color: "white"}}>1</h1>
    </div>
  );
}

export default App;