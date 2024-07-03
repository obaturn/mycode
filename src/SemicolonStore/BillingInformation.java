package SemicolonStore;

public class BillingInformation extends Customer{
    private int receiverPhoneNumber;
    private String receiverName;
    private String deliveryAddress;
    private CreditCardInformation creditCardInformation;

    public void setReceiverPhoneNumber(int receiverPhoneNumber) {
        this.receiverPhoneNumber = receiverPhoneNumber;

    }
    public int getReceiverPhoneNumber() {
        return receiverPhoneNumber;

    }
    public void setReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }
    public String getReceiverName() {
        return receiverName;
    }
    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }
    public String getDeliveryAddress() {
        return deliveryAddress;
    }
    public void setCreditCardInformation(CreditCardInformation creditCardInformation) {
        this.creditCardInformation = creditCardInformation;
    }
    public CreditCardInformation getCreditCardInformation() {
        return creditCardInformation;
    }

}

