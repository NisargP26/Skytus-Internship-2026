use E_CommerceDB;

-- add index to improve search on orders.customer_id

CREATE INDEX IDX_Orders_CustomerID
ON Orders (customer_id);

GO

-- Use Explain to analyze the query.
set statistics profile on ;

select *
from Orders
where customer_id = 1;

set statistics profile off ;

-- optimize a slow join query.

select  *
from Customers c
JOIN Orders o
on  c.customer_id = o.customer_id;

Create index  idx_orders_customer_id
on Orders(customer_id);

select  
    c.name,
    o.amount
from Customers c
JOIN Orders o
on  c.customer_id = o.customer_id;


--Explain when index should not be used

--Returns almost all rows 

select * from Orders where amount > 5000;



select * 
from Orders
where Order_id = 1003;