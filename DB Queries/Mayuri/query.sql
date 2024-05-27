CREATE TABLE `product` (
   `product_id` varchar(25) NOT NULL,
    `product_name` varchar(255) DEFAULT NULL,
   `product_code` varchar(25) DEFAULT NULL,
   `description` varchar(255) NOT NULL,
   `product_quantity` float(15,3) DEFAULT NULL,
   `price` float(15,2) DEFAULT NULL,
   `created_by` varchar(50) DEFAULT NULL,
   `created_date` datetime NOT NULL,
   `modified_by` varchar(50) DEFAULT NULL,
   `modified_date` datetime DEFAULT NULL,
   PRIMARY KEY (`product_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
 CREATE TABLE `image` (
   `img_id` int NOT NULL,
   `img_url` varchar(255) NOT NULL,
   `product_id` varchar(25) DEFAULT NULL,
   PRIMARY KEY (`img_id`),
   KEY `product_id` (`product_id`),
   CONSTRAINT `image_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;