# eCommerce Web App - https://am-shopwebapp.herokuapp.com/ (Currently in development)
<p> Features RESTful back-end with stateless authentication using JWT tokens and custom filters written in Java & Spring</p>
<p>The front-end was written in <strong>JavaScript</strong>, using the <strong>React.js</strong> framework.</p>
<p>Fully encrypted user passwords using the bcrypt hashing function provided by Spring Security</p>
<p>Almost real-time message refresh(no need for user refresh)</p>
<p>The web app was deployed to <strong>Heroku</strong> as two separate projects that communicate with each other securely via HTTPS</p>
<p>This GitHub repository contains the local version of the app</p>

# Back-end endpoints
<p> <strong>GET</strong>  /api/user -- returns all users(returns 401 if unauthenticated)</p>
<p><strong>GET</strong> /api/user/test -- tests current user(returns 401 if unauthenticated)</p>
<p>MySQL Database with <strong>secured</strong> passwords</p>
<p><strong>Role-based</strong> authentication(<strong>User</strong> & <strong>Admin</strong>, but can easily be extended to any number)</p>
<p>Admin panel for adding/editing products(the entire web app can be controlled through the UI, no need to dive into the code)</p>
<p>All content served over <strong>HTTPS</strong></p>

# Product page
![image](https://user-images.githubusercontent.com/14853367/105648119-5fd64680-5eb2-11eb-9aa8-4a42dd956fa6.png)

# Product database
![image](https://user-images.githubusercontent.com/14853367/105648155-a88dff80-5eb2-11eb-9d08-409fa3466826.png)


