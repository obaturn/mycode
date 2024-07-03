package SemicolonStore;

public enum ProductCategory {

    ELECTRONICS("Electronics"),
    CLOTHING("Clothing"),
    UTENSILS("Utensils");

    private final String productCategories;

    ProductCategory(String productCategories) {
        this.productCategories = productCategories;
    }


    public String toString() {
        String productCategories;
        switch (this) {
            case ELECTRONICS: productCategories = "Electronics"; break;
            case CLOTHING: productCategories = "Clothing"; break;
            case UTENSILS: productCategories = "Utensils"; break;
            default: throw new IllegalArgumentException("Invalid product category: " + this);
        }
        return productCategories;
    }


}
