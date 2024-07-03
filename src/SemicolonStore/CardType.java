package SemicolonStore;

public enum CardType {

    MASTERCARD("MasterCard"),
    VISA("Visa"),
    AMERICAEXPRESS("America Express"),
    VERVE("Verve Card"),;


    private final String cardTypes;


    CardType(String cardTypes) {
        this.cardTypes = cardTypes;
    }


    public String toString() {
        String cardTypes;
        switch(this){
            case MASTERCARD: cardTypes = "MASTERCARD" ; break;
            case VISA: cardTypes = "VISA" ; break;
            case AMERICAEXPRESS:cardTypes="AMERICAEXPRESS" ; break;
            case VERVE:cardTypes="VERVE";break;
            default: throw new IllegalArgumentException("Invalid CardType: " + this);
        }
        return cardTypes;

    }


}
