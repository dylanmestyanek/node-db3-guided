# SQL Queries

```sql 
CREATE VIEW [Sales] AS
SELECT c.CategoryName, p.*
FROM Product as p
JOIN Category as c
ON p.CategoryId = c.Id;

-- List of customers and their orders if they have any (16,789)
SELECT *
FROM Customer as c
JOIN [Order] as o
ON c.Id = o.CustomerId
GROUP BY c.Id;

-- Deleted all orders from "ALFKI" so there was a customer without orders to display in left join
/*SELECT * FROM [Order] where CustomerId = "ALFKI"*/
DELETE FROM [Order] WHERE CustomerID = "ALFKI";

-- List of customers who don't have orders (16,590)
SELECT *
FROM Customer as c
LEFT JOIN [Order] as o
ON c.Id = o.CustomerId
ORDER BY c.Id;

-- GROUPING && AGGREGATIONS 
-- Group items, then perform operation on each group

-- How many orders have been processed?
SELECT COUNT(*) as Count
FROM [Order];

-- Grouping products by category
SELECT c.CategoryName, COUNT(*) as Count
FROM Product as p
JOIN Category as c
ON p.CategoryId = c.Id
GROUP BY CategoryName;

-- What is our cheapest product
SELECT c.CategoryName, COUNT(*) as Count, MIN(p.UnitPrice) as Cheapest
FROM Product as p
JOIN Category as c
ON p.CategoryId = c.Id
GROUP BY CategoryName;


-- What is our most expensive product?
SELECT c.CategoryName, 
COUNT(*) as Count, 
MIN(p.UnitPrice) as Cheapest,
MAX(p.UnitPrice) as [Most Expensive]
FROM Product as p
JOIN Category as c
ON p.CategoryId = c.Id
GROUP BY CategoryName;
 
-- List customers and the number of orders they have placed
SELECT *, COUNT(CustomerId) as Orders
FROM [Order]
GROUP BY CustomerId;
```