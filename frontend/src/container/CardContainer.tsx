import React, { useEffect, useState } from 'react'
import CardType from 'types/cardType' 
import Card from '../components/Card'

interface CardContainerProps {
    showBuyModal : Function;
    isPromo : boolean;
    location : string;
}

const temp = () => {

}

const CardContainer = (props : CardContainerProps) => {
    const [cardList, setCardList] = useState<Array<CardType>>([])
    useEffect(()=>{
        fetch(props.location).then(res => res.json()).then( res =>
            setCardList(res)
        )
    })
    
    let items = cardList.map(
        card => <Card key={card.id} cardInfo={card} isPromo={props.isPromo} promotionPrice={100} price={10} id={card.id} showBuyModal={props.showBuyModal}/>
    )
    return (
        <div className="card-container container pt-4">
            <h3 className="text-center text-primary">Products</h3>
            <div className="pt-4 row">
                {items}
            </div>
        </div>
    )
}

export default CardContainer