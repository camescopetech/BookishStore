DROP DATABASE IF EXISTS bookish;
CREATE DATABASE bookish;
USE bookish;

CREATE TABLE bookish_product (
    id_product INT AUTO_INCREMENT,
    product_name VARCHAR(30),
    product_author VARCHAR(30),
    product_price DECIMAL(6, 2),
    product_category VARCHAR(15),
    product_stock INT,
    product_desc TEXT,
    product_img VARCHAR(100),
    PRIMARY KEY(id_product)
);

INSERT INTO bookish_product (product_name, product_author, product_price, product_category, product_stock, product_desc, product_img) VALUES
    ('Livre A', 'François', 19.99, 'fantastic', 50, 'Description du Livre A', 'img/livreA.jpg'),
    ('Livre B', 'François',29.99, 'fantastic', 30, 'Description du Livre B', 'img/livreB.jpg'),
    ('Livre C', 'François',39.99, 'fantastic', 20, 'Description du Livre C', 'img/livreC.jpg'),
    ('Livre D', 'François', 49.99, 'fantastic', 25, 'Description du Livre D', 'img/livreD.jpg'),
    ('Livre E', 'François', 59.99, 'romance', 40, 'Description du Livre E', 'img/livreE.jpg'),
    ('Livre F', 'Michel', 69.99, 'romance', 15, 'Description du Livre F', 'img/livreF.jpg'),
    ('Livre G', 'Michel', 79.99, 'romance', 35, 'Description du Livre G', 'img/livreG.jpg'),
    ('Livre H', 'Michel', 89.99, 'romance', 10, 'Description du Livre H', 'img/livreH.jpg'),
    ('Livre I', 'Michel', 99.99, 'adventure', 45, 'Description du Livre I', 'img/livreI.jpg'),
    ('Livre J', 'Michel', 109.99, 'adventure', 22, 'Description du Livre J', 'img/livreJ.jpg'),
    ('Livre K', 'Sylvie', 119.99, 'adventure', 18, 'Description du Livre K', 'img/livreK.jpg'),
    ('Livre L', 'Sylvie', 129.99, 'adventure', 27, 'Description du Livre L', 'img/livreL.jpg'),
    ('Livre M', 'Sylvie', 139.99, 'fart', 33, 'Description du Livre M', 'img/livreM.jpg'),
    ('Livre N', 'Sylvie', 149.99, 'fart', 12, 'Description du Livre N', 'img/livreN.jpg'),
    ('Livre O', 'Sylvie', 159.99, 'fart', 8, 'Description du Livre O', 'img/livreO.jpg');


    
