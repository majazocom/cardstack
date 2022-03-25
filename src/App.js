import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import AddCard from './views/AddCard';
import Home from './views/Home';

function App() {
    const [cards, setCards] = useState([]);

    function addNewCard(newCard) {
        setCards([...cards, newCard])
    }

    return (
        <Routes>
            <Route exact path="/" element={<Home cards={cards} />} />
            <Route path="/addcard" element={<AddCard addCard={addNewCard} />} />
        </Routes>
    );
}

export default App;