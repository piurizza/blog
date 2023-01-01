---
layout: post
title:  "Oracle SQL Database Certification Guide pt. 1"
date:   2023-01-01 00:00:00
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
        <td><a href="#2">Relational database concepts</a></td>
        </tr>
        <tr>
        <td><a href="#2-1">Explaining the relationship between a database and sql</a></td>
        </tr>
        <tr>
        <td><a href="#2-2">Explaining the theoretical and physical aspects of a relational database</a></td>
        </tr>
        <tr>
        <td><a href="#2-3">Relating clauses in sql select statement to components of an erd</a></td>
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
Without a question, **SQL** is the language of choice for working with data and is highly worth learning. I used it throughout my early university years, but I was curious to learn more, especially considering my new career in the data world. For this reason, I decided to challenge myself with the **Oracle SQL Database Certification** path (1Z0-071), and I managed to pass it.
\
\
The certification test currently consists of 78 multiple-choice questions, and you have 120 minutes to finish them with a minimum score of 63%.
\
To take the exam, you must first purchase an [Oracle Exam Attempt](https://education.oracle.com/buy-exam) named *Oracle Cloud Infrastructure and Technology Exams*, which at the moment costs 228€.
\
\
I am aware that it is pricey and you might wonder whether it is worth it.
\
My personal response is that it *depends*.
\
Perhaps at the beginning of one's career it may make sense to show a few titles. However, the most important thing is to acquire skills and to be able to demonstrate them in practice.
\
There is no single correct path in my opinion, but for anyone who decides to do what I did: this series of blog posts is for **you**.
\
\
I made the decision to expand each certification topic you can check [here](https://education.oracle.com/oracle-database-sql/pexam_1Z0-071) by including the principles you *need* to understand to pass the exam.
\
Watch out: this is meant to be a brief overview that will serve as the foundation for further researchs.
\
\
Keep in mind that the exam is filled with trick questions and code blocks that will force you to manage your time effectively in order to answer all questions.
\
\
I encourage that you sign up for a free account on [Apex](https://apex.oracle.com/it/), an Oracle platform that allows you to write SQL statements without having to install anything on your machine.
\
Although practice won't definitely make your skills perfect, it is unquestionably a crucial component of learning.
\
\
Let's start!

##  <a id="2"></a> Relational database concepts

### <a id="2-1"></a> Explaining the relationship between a database and SQL
In the early days of database technology, each application kept data in its own **distinct structure**. When developers sought to create apps that used that data, they needed to understand the specific data structure in order to get the information they required. These data structures were **wasteful**, **difficult to maintain**, and **difficult to tune** for excellent application performance. The relational database model was created to address the issue of having various arbitrary data structures.
\
\
The relational data model established a **standardized** method for representing and querying data that could be utilized by any application. From the start, developers understood that the relational database model's main strength was its use of **tables**, which were a straightforward, fast, and flexible way to store and access structured information.
\
\
As developers began to use structured query language (SQL) to write and query data in a database, another strength of the relational architecture developed. SQL has been widely used as a database query language for many years. SQL provides an internally **consistent mathematical language** based on relational algebra, making it easy to increase the performance of all database queries. Other approaches, on the other hand, need the definition of individual queries.
\
\
SQL complies with ACID, which stands for:
* **atomicity** that refers to the capacity to guarantee that either all components of the transaction will be successful, or none will.  If even one part of the transaction fails, the complete transaction fails. Atomicity is "all or nothing."
* **consistency** that ensures that all data will be consistent. All defined rules, including any constraints, cascades, and triggers that have been used on the database, will ensure that all data is legitimate.
* **isolation** that ensures that each transaction will take place independently. As a result, a transaction can't read information from any other transaction that hasn't finished yet.
* **durability** that refers to the fact that a transaction will still exist in the system once it has been committed, even if the system crashes just after the transaction. The transaction's changes must be permanently stored.

### <a id="2-2"></a> Explaining the theoretical and physical aspects of a relational database
According to the relational paradigm, **logical** data structures (data tables, views, and indexes) are distinct from **physical** storage structures. Because of this separation, database administrators can manage physical data storage without influencing logical data access. Renaming a database file, for example, does not rename the tables contained within it.
\
\
The distinction between logical and physical relates to database operations, which are well-defined actions that allow applications to alter the database's data and structures. Physical operations indicate how that data should be accessible and then carry out the task, whereas logical operations allow an application to specify the content it requires.
\
\
Relational databases adhere to particular **integrity standards** to ensure that data is always valid and accessible. An integrity rule, for instance, can declare that duplicate entries in a table are not permitted in order to eliminate the possibility of incorrect data entering the database.
\
\
The process of establishing database relations in such a way that they are immune to logical errors and anomalies like insertion, modifications, and deletion is known as database **Normal Forms** (NF).
\
\
Every NF must respect a certain set of rules inherent in the functional dependency between the attributes of a relation:
* The **First Normal Form** (1NF) establishes a condition underlying the relational model itself: the attributes of relations are defined on atomic values and not on complex values such as sets or relations, hence there is no multi-valued attribute;
* The **Second Normal Form** (2NF) requires the relationship to be in 1NF and every non-primary-key attribute must be fully functionally dependent on the primary key. If the candidate key is ABC, a non-prime attribute D must be dependent from ABC entirely and not only from A, B or C. Partial dependency is not allowed;
* **Third Normal Form** (3NF) requires the relationship to be in 2NF. Moreover, every non-primary-key attribute is transitively dependent only on the primary key. A dependency relation between two non-prime attribute is not allowed;
* **Boyce-Codd Normal Form** requires the relationship to be in 3NF and for any dependency in the form A -> B, A should be a super key;
* **Forth Normal Form** (4NF) requires the relationship to be in Boyce-Codd Normal Form and there are no multi-valued dependency. The latter condition is satisfied if for a dependency A -> B there are no multiple values of B;
* **Fifth Normal Form** (5NF) requires the relationship to be in 4NF and there are no join dependency. To prevent redundancy, all tables must be divided into smaller ones while maintaining the same meaning in the join as before decomposition.

### <a id="2-3"></a> Relating clauses in SQL SELECT statement to components of an ERD
Entity Relationship Diagram, or ER Diagram for short, is a diagram that shows the relationships between entity sets that are stored in a database. To put it another way, ER diagrams assist in describing the logical organization of databases. Entities, attributes, and relationships are the three fundamental ideas that serve as the foundation for ER diagrams.
\
\
Five fundamental components of an ERD can be identified:
1. **Entities** - represented by rectangles. An entity, which contains data in the database, might be a place, person, item, event, or concept. Entities must possess an attribute and a distinct key as part of their characteristics. Each "attribute" that makes up an entity serves to represent it. A weak entity is an entity that must defined by a foreign key relationship with another entity as it cannot be uniquely identified by its own attributes alone;
2. **Actions or Relationships** - represented by diamond shapes, show how two entities share information in the database. They are often identified with the use of verbs or verb phrases;
3. **Attributes** - represented by ovals. It is either an entity-type or a relationship-type single-valued attribute. A key attribute is the unique, distinguishing characteristic of the entity.;
4. **Connecting lines** - solid lines that connect attributes to show the relationships of entities in the diagram;
5. **Cardinality** - specifies how many instances of an entity related to one instance of another entity. Ordinality is also closely linked to cardinality. While cardinality specifies the occurrences of a relationship, ordinality describes the relationship as either mandatory or optional. In other words. cardinality specifies the maximum number of relationships and **ordinality** specifies the absolute minimum number of relationships.

By focusing on the concept of cardinality, we may distinguish various types of cardinality relationships:
* **One-to-One Relationships** (1:1) - an entity can only be related with one other entity, and vice versa. As an example, one individual has one head;
* **One-to-Many Relationships** (1:m) - an entity can be linked to numerous entities, but the latter cannot be linked to more than one. For instance, suppose a person has several pets, and one of those pets is only related to the owner;
* **Many-to-Many Relationships** (m:n) - an entity from one entity set can be linked to many entities from another entity set, and vice versa. A movie, for example, can be watched by multiple persons, and a person can see multiple movies.

## <a id="3"></a> Sample questions
Let's try answering a few questions to see if you master the concepts.
\
\
In which normal form is a table, if it has no multi-valued attributes and no partial dependencies?
1. first normal form.
2. second normal form.
3. third normal form.
4. fourth normal form.

<details>
<summary>Click here to check the answer</summary>
Answer: 2
<br>
<a href="#2-2">Explanation</a>
</details>

\
Which three statements are true about Structured Query Language (SQL)?
1. It provides independence for logical data structures being manipulated from the underlying
physical data storage.
2. It guarantees atomicity, consistency, isolation, and durability (ACID) features.
3. It best supports relational databases.
4. It is the only language that can be used for both relational and object-oriented databases.
5. It requires that data be contained in hierarchical data storage.
6. It is used to define encapsulation and polymorphism for a relational table.

<details>
<summary>Click here to check the answer</summary>
Answers: 1, 2, 3
<br>
<a href="#2-1">Explanation</a>
</details>

\
Examine the business rule:
\
Each student can take up multiple projects and each project can have multiple students.
You need to design an Entity Relationship Model (ERD) for optimal data storage and allow for
generating reports in this format:
STUDENT_ID FIRST_NAME LAST_NAME PROJECT_ID PROJECT_NAME PROJECT_TASK
Which two statements are true in this scenario?
1. The ERD must have a 1:M relationship between the STUDENTS and PROJECTS entities.
2. The ERD must have a M:M relationship between the STUDENTS and PROJECTS entities that must be resolved into 1:M relationships.
3. STUDENT_ID must be the primary key in the STUDENTS entity and foreign key in the PROJECTS entity.
4. PROJECT_ID must be the primary key in the PROJECTS entity and foreign key in the STUDENTS entity.
5. An associative table must be created with a composite key of STUDENT_ID and
PROJECT_ID, which is the foreign key linked to the STUDENTS and PROJECTS entities.

<details>
<summary>Click here to check the answer</summary>
Answers: 2, 5
<br>
<a href="#2-3">Explanation</a>
</details>

## <a id="4"></a> Conclusion
That concludes ther first part of this journey.
\
\
We took a look at how the examination will be structured and introduced the first topic.
\
\
I'll see you in the next part!