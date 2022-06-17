/* 

------------------------------------------------
Integrate sending data form client to server
------------------------------------------------
18.Client side: create a Form ?
19.on submit get form data and create user object ?
20.on Server: Create user POST method to receive data on the backend  
21.on client side: set fetch with POST, headers, body > send to the server
22.Make sure you return a json from the POST API - server post take json retren korsi
23.userclient.insertOne kore user ke mongodb te pataici ?
-----------------------------
LOAD DATA to the client side 
------------------------------
24.create get API on the server
25.create a query object 
26. collection find (query)
27.cursor.toArray()
28.return the result



----------get-post---------
// Find multiple doucment --- mane sob gula data nite chai ...
amara insert a post kore amara je data gula mongodb te rakci oi data gula akon niya client side dekbo sob gula data tar jonno  | data gula nite hobe mongodb take atar jonno use korte hobe ---Find-multifple-document--
 ------
1. const query = { };
2. const cursor = movies.find(query);
3.  const users = await cursor.toArray()
res.send(users)
---------get-post-all-user-end--------



----------post--------
// insert a one ....
 const result = await haiku.insertOne(doc); -----> akta data mongodb te raktaci form clik ar modde me. ------> client take server  ----> server take mongodb te data jom raktaci |
--------post-end---------






-------------
1.cors na use korle 5000 take 3000 cominicate hobe na . kaj korbe na.
2.app.use(express.json()) = ada na use korle reqest ar body data kinto poya jabe na.

----------------------
     error
---------------------
1. POST https://localhot:300/user/add/ 404   Not found --- karon amra post oi fetch ar modde url link ta bosai nai.  
2.Uncaught (in promise) syntaxError: unexpected token in json at position 0 --- karon server take tumi string babe pataico akarone pase korte pari nai. tumi taile object hise parse korte paro.                 






*/