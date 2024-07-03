package SemicolonStore;

import java.util.*;

public class Estore {
        private List<User> users = new ArrayList<>();
        private List<Product> productList = new ArrayList<>();

    public void setUsers(List<User> users) {
        this.users = users;
    }
    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }
    public List<User> getUsers() {
        return users;
    }
    public List<Product> getProductList() {
        return productList;
    }
}
