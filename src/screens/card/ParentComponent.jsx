import React,{useEffect, useState} from 'react';
import CardList from './CardList';
import axios from 'axios';

const uid = localStorage.getItem('userid');

function ParentComponent() {
    // const[userid,setUserid] = useState("1");
    const [cards, setCards] = useState([
    //   { id: 1, title: 'Card 1', description: 'Lorem ipsum dolor sit amet' },
    //   { id: 2, title: 'Card 2', description: 'Consectetur adipiscing elit' },
    //   // ...
    ]);
    const [showData,setShowData] = useState([]);
  
    const handleDelete = (cardId) => {
      setCards(cards.filter((card) => card.id !== cardId));
    };
  
    useEffect(() =>{
        axios.get(`http://localhost:8899/home/users/${uid}`).then(res => {
      console.log("The ticket List is", res.data);
      setCards(res.data);

      const showIds = [...new Set(res.data.map(item => item.shows.id))];
      setShowData(showIds);
      console.log("show ids",showIds);
    
    });


    },[]);
    return (
      <div>
        {showData.map((d) =>{
        <CardList cards={d} onDelete={handleDelete} />

        })

}
      </div>
    );
  }
  export default ParentComponent;