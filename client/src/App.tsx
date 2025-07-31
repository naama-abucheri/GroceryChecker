import React, { useEffect, useState } from 'react';
import api from './api';

interface Item {
  _id: string;
  name: string;
  quantity: number;
  // add other fields if needed
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get('/items')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.error('Error fetching items:', err);
      });
  }, []);

  return (
    <div>
      <h1>Grocery Items</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
