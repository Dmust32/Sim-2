delete from properties
where id = $1;

select * from properties 
where user_id = $2;