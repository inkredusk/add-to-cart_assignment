
* Sql Query

CREATE TABLE cart (
cart_id INT AUTO_INCREMENT PRIMARY KEY,
product_id INT NOT NULL,
quantity Float NOT NULL DEFAULT 1,
FOREIGN KEY (product_id) REFERENCES products(id));

