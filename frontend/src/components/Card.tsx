import React from 'react'
import CardType from 'types/cardType';

interface CardProps {
    cardInfo : CardType;
    isPromo : boolean;
    promotionPrice : number;
    price : number;
    showBuyModal : Function;
    id : number;
}

const Card = (props : CardProps) => {
    const priceColor = props.isPromo ? "text-danger" : "text-dark";
    const sellPrice = props.isPromo ? props.promotionPrice : props.price;
    return (
        <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card mb-3">
                <img className="card-img-top" src={props.cardInfo.img} alt={props.cardInfo.imgalt}/>
                <div className="card-body">
                    <h4 className="cardtitle">{props.cardInfo.productname}</h4>
                        Price : <strong className={priceColor}>{sellPrice}</strong>
                        <p className="card-text">{props.cardInfo.desc}</p>
                        <a href="#" className="btn btn-success text-white" onClick={() => {
                            props.showBuyModal(props.id, sellPrice)
                        }}>Buy</a>
                </div>
            </div>
        </div>
    )
}

export default Card;