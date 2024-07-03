package SemicolonStore;

import java.util.ArrayList;
import java.util.List;

    public class Seller extends User{
        private List<Product> productList = new ArrayList<>();
        private int id;
        private String product;

        public String getProduct(String product) {
            return product;
        }

        public void setProduct(String product) {
            this.product = product;
        }

        public int getId() {
            return id;
        }
        public void setId(int id) {
            this.id = id;
        }

        public void addProduct(String productName,double price, String productDescription, ProductCategory productCategory){
            Product product = new Product();
            product.setProductId(product.getProductId());
            product.setProductName(productName);
            product.setPrice(price);
            product.setProductDescription(productDescription);
            product.setProductCategory(productCategory);
            productList.add(product);
        }




    }


 