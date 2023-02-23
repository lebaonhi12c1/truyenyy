import React from 'react';
import CardTopBook from './CardTopBook';
function CategoryTopBook(props) {
    const getCards = function(){
        var cards = []
        for (let index = 0; index < 10; index++) {
            cards.push(index)
        }
        return cards
    }
    return (
        <div className='flex items-center overflow-x-auto gap-[60px] bg-gray-100 rounded-lg p-4'>
            {getCards().map(function(item,index){
                return <CardTopBook key={index}/>
            })}
            
        </div>
    );
}

export default CategoryTopBook;