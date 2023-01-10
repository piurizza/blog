---
layout: post
title:  "Oracle SQL Database Certification Guide pt. 2"
date:   2023-01-10 00:00:00
categories: certifications sql
---

<div class="wrap-collabsible">
  <input id="collapsible" class="toggle" type="checkbox">
  <label for="collapsible" class="lbl-toggle">Table of contents</label>
  <div class="collapsible-content">
    <div class="content-inner">
      <table class="table table-mini table-bordered table-hover table-condensed">
        <tbody class="collapsible-content">
        <tr>
        <td><a href="#1">Introduction</a></td>
        </tr>
        <tr>
        <td><a href="#2">Retrieving data using the sql select statement</a></td>
        </tr>
        <tr>
        <td><a href="#2-1">The sql select statement</a></td>
        </tr>
        <tr>
        <td><a href="#2-2">Column aliases</a></td>
        </tr>
        <tr>
        <td><a href="#2-3"> The concatenation operator</a></td>
        </tr>
        <tr>
        <td><a href="#2-4"> Literal character string</a></td>
        </tr>
        <tr>
        <td><a href="#2-5"> Alternative quote operator</a></td>
        </tr>
        <tr>
        <td><a href="#2-6"> The distinct keyword</a></td>
        </tr>
        <tr>
        <td><a href="#2-7">Using arithmetic expressions</a></td>
        </tr>
        <tr>
        <td><a href="#2-8">Using null values</a></td>
        </tr>
        <tr>
        <td><a href="#3">Sample questions</a></td>
        </tr>
               <tr>
        <td><a href="#4">Conclusion</a></td>
        </tr>
        </tbody>
        </table>
    </div>
  </div>
</div>

## <a id="1"></a> Introduction
In [the first part](https://www.piurizza.com/certifications/sql/2023/01/01/oracle-sql-database-certification-guide-1.html) we took a look at how the examination will be structured and we introduced the first exam topic talking about "Relational Database concepts".
\
The second topic is about retrieving data with one of the most popular SQL statements: **`SELECT`**.

## <a id="2"></a>Retrieving data using the SQL SELECT Statement

### <a id="2-1"></a>The SQL SELECT statement
The Oracle **`SELECT`** statement is used to retrieve records from one or more tables in an Oracle database.
\
The syntax for this statement is the following:
```sql
SELECT expressions
FROM tables
[WHERE conditions];
```

* **expressions** are the columns or calculations that you wish to retrieve. To select all columns you can use the wildcard **\***.
* **tables** are the tables that you wish to retrieve records from. There must be at least one table listed in the **`FROM`** clause.
* **where** is an optional condition that must be satisfied in order to filter the records. All records will be chosen if no conditions are specified.

*For example*
```sql
SELECT first_name, last_name
FROM bloggers
WHERE first_name = 'Pietro';
```
This query will retrieve the first name and the last name of all bloggers with 'Pietro' as the first name.
### <a id="2-2"></a>Column aliases
Oracle aliases can be used to create a **temporary** name for columns or tables.
\
**Column aliases** are used to make column titles easier to understand in the result set.
\
**Table aliases** are are used to abbreviate SQL statements for better reading or while executing a self join (For example, listing the same table more than once in the **`FROM`** clause).
\
The syntax to alias a column is:
<pre class="highlight"><code><span class="n">column_name</span> <span class="k">AS</span> <span class="n">alias_name</span>
</code></pre>
While the syntax to alias a table is:
<pre class="highlight"><code><span class="n">table_name</span> <span class="n">alias_name</span>
</code></pre>
* **column_name** is the original name of the column that you wish to alias;
* **table_name** is the original name of the table you wish to alias;
* **alias_name** is the temporary name to assign.

Remember that if the *alias_name* contains **spaces**, you must enclose it in **double quotes**.
\
When aliasing a column name, it is allowed to use spaces. However, using spaces while aliasing a table name is not normally recommended. Moreover, consider that the *alias_name* is only valid within the scope of the SQL statement.
\
*For example*
```sql
SELECT first_name, last_name AS "blogger surname"
FROM bloggers
WHERE first_name = 'Pietro';
```
This query will retrieve the first name and the last name of all bloggers with 'Pietro' as the first name. In this case, the *last_name* column will be named *blogger surname*

### <a id="2-3"></a>The concatenation operator
The concatenation operator `||` in Oracle allows you to concatenate 2 or more strings together returning a string value.
`string || string2 [ || string_n ]`
* **string1** is the first string to concatenate;
* **string2** is the second string to concatenate;
* **string_n** (optional) is the nth string to concatenate.

*For example*
```sql
'c' || 'i' || 'a' || 'o'
```
Returns `'ciao'`

### <a id="2-4"></a>Literal character string
In the Oracle perspective, a literal can be considered a constant.
\
The most important literals are:
* text
* integer
* number
* date/time

Text literals must be surrounded by **single quotes** (').
\
*For example*
```sql
'Pietro'
```
Integer literals can be up to 38 digits and can be either positive numbers or negative numbers. Without specifying a sign, the number will be interpreted as a positive one.
\
*For example*
```sql
-123456
```
Date and time literals are encapsulated in **single quotes** and follow the same format as text literals. Text literals are transformed to date or time literals using the `to_date()` function.
\
*For example*
```sql
SELECT to_date('2023/01/01', 'yyyy/mm/dd')
FROM dual;
```
The dual table is a special table provided from Oracle that has one column named `DUMMY` whose data type is `VARCHAR2()` and contains one row with a value `X`. It's used for selecting data from system functions and calculations when you don't need any data from the database.

### <a id="2-5"></a>Alternative quote operator
What if we want to use an apostrophe in a literal value? To overcome this problem Oracle introduces an operator known as Alternative Quote Operator (q).
\
We can use any character such as '{', '[', '<', '(', '!' to delimite the literal value. These characters are known as **delimiters**.
\
*For example*
<pre class="highlight"><code><span class="k">SELECT</span> <span class="n">q</span><span class="s1">'{ Pietro's blog }'</span>
<span class="k">FROM</span> <span class="n">dual</span><span class="p">;</span>
</code></pre>

### <a id="2-6"></a>The DISTINCT Keyword
The **`DISTINT`** clause is used with **`SELECT`**statements to remove duplicates from the result set.
```sql
SELECT DISTINCT expressions
FROM tables;
```
In Oracle, the **`DISTINCT`** clause doesn't ignore **`NULL`** value. So when using the **`DISTINCT`** clause in your SQL statement, your result set will include **`NULL`** as a distinct value.

### <a id="2-7"></a>Using arithmetic expressions
An arithmetic operator with one or two arguments is used to negate, add, subtract, multiply, and divide numeric values. Some of these operators are also used in datetime and interval arithmetic. The arguments to the operator must resolve to numeric datatypes or to any datatype that can be implicitly converted to a numeric datatype.
\
**Unary** arithmetic operators return the same datatype as the numeric datatype of the argument.
\
For **binary** arithmetic operators, Oracle determines the argument with the highest numeric precedence, implicitly converts the remaining arguments to that datatype, and returns that datatype.
\
\
When `+` and `-` denote a positive or negative expression, they are unary operators.
```sql
SELECT *
FROM employees
WHERE -salary < 0;
```
In this case, the query will return the whole row of every employee who has a salary greater than 0.
\
When they add or subtract, they are binary operators.
```sql
SELECT hire_date
FROM employees
WHERE sysdate - hire_date > 365;
```
This query will retrieve the hire date of those employee hired more than one year.
\
\
The multiply `*` and divide `/` are binary operators.
```sql
UPDATE employees
SET salary = salary * 1.5;
```
This `UPDATE` statement will raise the salary of every employee of 50%.

### <a id="2-8"></a>Using NULL values
The **`NULL`** value is neither equal to nor not equal to anything. In fact, the result of
```sql
NULL = <anything>
```
is always unknown.
\
To check if a column is null or not, we can use the **`IS NULL`** condition and its reverse **`IS NOT NULL`**.
```sql
SELECT *
FROM bloggers
WHERE post_number IS NOT NULL;
```
This query will return the whole row of every blogger who has at least one post written.
## <a id="3"></a> Sample questions
Let's try answering a few questions to see if you master the concepts.
\
\
Consider that:
* `VARCHAR2` is used to store variable-length character strings;
* `DATE` is used to store date variables;
* `NUMBER` is used to store numeric variables.

*The full explanation is deferred to the discussion of the following topics.*


Examine the description of the BOOKS_TRANSACTIONS table:
<table class="table table-bordered table-condensed">
  <tr>
    <th>Name</th>
    <th>Null?</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>TRANSACTION_ID</td>
    <td>NOT NULL</td>
    <td>VARCHAR2(6)</td>
  </tr>
  <tr>
    <td>BORROWED_DATE</td>
    <td></td>
    <td>DATE</td>
  </tr>
  <tr>
    <td>DUE_DATE</td>
    <td></td>
    <td>DATE</td>
  </tr>
  <tr>
    <td>BOOK_ID</td>
    <td></td>
    <td>VARCHAR2(6)</td>
  </tr>
  <tr>
    <td>MEMBER_ID</td>
    <td></td>
    <td>VARCHAR2(6)</td>
  </tr>
</table>

You want to display the member IDs, due date, and late fee as $2 for all transactions.
\
Which SQL statement must you execute?
1. 
SELECT member_id AS MEMBER_ID, due_date AS DUE_DATE, $2 AS LATE_FEE FROM
BOOKS_TRANSACTIONS
2. 
SELECT member_id AS "MEMBER ID", due_date AS "DUE DATE", $2 AS "LATE FEE"
FROM BOOKS_TRANSACTIONS
3. 
SELECT member_id AS "MEMBER ID", due_date AS "DUE DATE", '$2' AS "LATE FEE"
FROM BOOKS_TRANSACTIONS
4. 
SELECT member_id 'MEMBER ID', due_date 'DUE DATE', '$2 AS LATE FEE' 
FROM BOOKS_TRANSACTIONS;

<details>
<summary>Click here to check the answer</summary>
Answer: 3
<br>
<a href="#2-2">Explanation: column aliases</a>
<br>
<a href="#2-4">Explanation: text literals</a>
</details>

\
Which queries execute successfully?
1. 
SELECT q'! Pietro's blog !' || 'is awesome' FROM dual;
2. 
SELECT "{ Pietro's blog }" || 'is awesome'
FROM dual;
3. 
SELECT q'[ Pietro's blog ]' || is awesome
FROM dual;
4. 
SELECT q'* Pietro's blog *' || ''
FROM dual;
5. 
SELECT p'{ Pietro's blog }' || 'is awesome'
FROM dual;

<details>
<summary>Click here to check the answer</summary>
Answers: 1, 4
<br>
<a href="#2-3">Explanation: concatenator operator</a>
<br>
<a href="#2-5">Explanation: alternative quote operator</a>
</details>

## <a id="4"></a> Conclusion
That concludes the second part of this journey.
\
\
We have seen how to retrieve data using the SQL SELECT statement and other useful concepts. Be sure to master these notions, as they will lay the foundation for what we will discuss next.
\
\
I'll see you in the next part!