function Card(props) {
    return ( 
        <section className="cardContainer">
            <p>{props.cardFormData.cardNumber}</p>
            <p>{props.cardFormData.cardHolder}</p>
            <p>{props.cardFormData.validThru}</p>
            <p>{props.cardFormData.ccv}</p>
        </section>
     );
}

export default Card;