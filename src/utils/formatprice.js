const formatPrice = (amount, currency) => {
    if (typeof amount != "number"){
        throw new Error("invalid amount")
    }
    if (!["Ariary","Euro","Dollar"].includes(currency)) {
        throw new Error("invalid currency")
    }
    if (currency =="Ariary") {
        return amount;
    }
    if (currency == "Euro"){
        return amount * 5180 ;
    }
    if (currency == "Dollar"){
        return amount * 4447 ;
    }

};
export default formatPrice;