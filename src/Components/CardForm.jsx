function CardForm(props) {
    return ( 
        <section>
            <label htmlFor="cardNr">CARD NUMBER</label>
            <input type="text" id="cardNr" onChange={(e) => props.updateNewCard("cardNumber", e.target.value)} />
            <label htmlFor="cardHolder">CARD HOLDER</label>
            <input type="text" id="cardHolder" onChange={(e) => props.updateNewCard("cardHolder", e.target.value)}/>
            <label htmlFor="validThru">VALID THRU</label>
            <input type="text" id="validThru" onChange={(e) => props.updateNewCard("validThru", e.target.value)}/>
            <label htmlFor="ccv">CCV</label>
            <input type="text" id="ccv" onChange={(e) => props.updateNewCard("ccv", e.target.value)} />
        </section>
     );
}

export default CardForm;