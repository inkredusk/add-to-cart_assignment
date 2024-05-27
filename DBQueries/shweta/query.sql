delimiter //
 create trigger update_cart
 before update on cart
 for each row
 begin
 declare is_decimal int default 0;
 declare a_stock int;
 select stock into a_stock from products where product_id=NEW.product_id;
 set is_decimal=MOD(NEW.quantity,1);
 if(NEW.quantity<=0) then
 signal sqlstate '45000' set message_text='Negative quantity not allowed';
 elseif(is_decimal!=0) then
 signal sqlstate '45000' set message_text='Decimal quantity not allowed';
 elseif(NEW.quantity>a_stock) then
 signal sqlstate '45000' set message_text='Quantity exceeds,cannot add more items';
 end if;
 end; //