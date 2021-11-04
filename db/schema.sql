-- Seeding My Database with Dummy Data

INSERT INTO `category` (`category_name`)
VALUES
  ("Foods"),
  ("Cloths"),
  ("Accessories"),
  ("Healthy Stuff");


INSERT INTO `product` (`product_name`,`price`,`stock`,`category_id`)
VALUES
  ("Yvette Gamble",126,43,2),
  ("Keaton Lara",152,16,2),
  ("Dennis Hubbard",186,41,3),
  ("Sade Joseph",168,29,2),
  ("Ali Bradley",80,29,4);

INSERT INTO tag values(), (), (),(),();

INSERT INTO `product_tag` (`product_id`,`tag_id`)
VALUES
  (4,3),
  (5,1),
  (2,5),
  (1,1),
  (3,5);
