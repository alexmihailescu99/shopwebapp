# eCommerce Web App - https://am-shopwebapp.herokuapp.com/
<p>This project was created using <strong>Java</strong>(Spring Boot, MVC & Security) and <strong>MySQL</strong> & <strong>Hibernate</strong> ORM on the back-end. </p>
<p>The front-end was written in <strong>JavaScript</strong>, using the <strong>React.js</strong> framework.</p>
<p>The Java back-end is basically a (not yet fully compliant) <strong>REST</strong> API which serves content to the React front-end</p>
<p>I chose not to use a server-side template engine such as Thymeleaf as I have more experience with React</p>
<p>The web app was deployed to <strong>Heroku</strong> as two separate projects that communicate with each other securely via HTTPS</p>
<p>This GitHub repository contains the local version of the app</p>
<p>The actual Heroku web app is a bit different(updated links, HTTPS support) & has a different folder layout</p>

# Features
<p><strong>Dynamically</strong> generated pages with products from a database</p>
<p>User <strong>Authentication</strong> & <strong>Registration</strong></p>
<p>MySQL Database with <strong>secured</strong> passwords</p>
<p><strong>Role-based</strong> authentication(<strong>User</strong> & <strong>Admin</strong>, but can easily be extended to any number)</p>
<p>Admin panel for adding/editing products(the entire web app can be controlled through the UI, no need to dive into the code)</p>
<p>All content served over <strong>HTTPS</strong></p>

# Things I learned
<p>Developing a <strong>CRUD</strong> application using Java & Spring(previous basic experience with Node.js)</p>
<p>Concepts such as the MVC pattern, Java Beans, DAOs, Spring annotations(Entities, Controllers, Repository) </p>
<p> Basic understanding of <strong>Maven</strong> </p>
<p>Better understanding of <strong>HTTP</strong> & <strong>HTTPS</strong> requests/responses, headers, CORS, cookies</p>
  <p>Better understanding of <strong>relational database</strong> concepts such as many to many relationships or join tables(previous basic experience with <strong>NoSQL</strong>)</p>
<p>Deploying a web app online</p>

# To Do
<p>Shopping Cart</p>
<p>Generate a unique order ID after checkout & send the order confirmation to the user's email</p>
<p>Tidy up the UI & make it more mobile-friendly</p>

<strong>User Panel</strong>    |  <strong>Admin Panel</strong>
:-------------------------:|:-------------------------:
![sitelanding](https://user-images.githubusercontent.com/14853367/105646957-8ba1fe00-5eab-11eb-9a98-06a432759bac.jpg)  |  ![image](https://user-images.githubusercontent.com/14853367/105647772-8b583180-5eb0-11eb-8749-2dd4af07b171.png)

<strong>Admin Panel Edit Product</strong>    |  <strong>Admin Panel Add Product</strong>
:-------------------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/14853367/105648243-2520de00-5eb3-11eb-971d-89209eac365f.png)  |  ![image](https://user-images.githubusercontent.com/14853367/105648273-4aade780-5eb3-11eb-8e2b-2e0f5818413c.png)

# Product page
![image](https://user-images.githubusercontent.com/14853367/105648119-5fd64680-5eb2-11eb-9aa8-4a42dd956fa6.png)

# Product database
![image](https://user-images.githubusercontent.com/14853367/105648155-a88dff80-5eb2-11eb-9d08-409fa3466826.png)


