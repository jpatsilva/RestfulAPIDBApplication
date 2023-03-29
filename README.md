# RestfulAPIDBApplication
The purpose of this assignment is to familiarize yourself with creating a database powered web application. While that can entail a variety of different technologies, for this assignment you will use node.js and MongoDB. It's highly recommended you also use the express and mongoose node packages.

For this assignment, you must create a web application that allows you to:

Create, Read, and Query documents within a MongoDB collection.
These documents should represent some kind of object or record of your choosing (e.g. a scientific data set, an inventory, a user group, etc.)
Each document must have at least 4 different fields, of at least 3 different types, e.g. string, number, and date. 
Note that these fields do not include the requisite id for each document.
To create new documents, your node.js application should serve a simple html form at the path /upload that allows for the entry of a new document into the mongodb collection using an HTTP post request.

Your node.js application should serve a page at the /list path that lists all objects within your collection. This page can be either rendered server side or client side using AJAX to a rest route.

Your node.js application should finally serve a page at the /query path that takes some input into a form and makes a parameterized query of your data set. For example, given a number, display all inventoried items that cost less than that price sorted from least expensive to most. This request must be made via AJAX from the page at /query, i.e., using XMLHttpRequest or Fetch.

Your application should support at least two rest routes: one POST route at /<object name> to create an object in your dataset, and one GET route at /<object name>s that takes query parameters to make to return query result of objects.

Bonus 10pts: Create two collections within your mongo database that are linked by ObjectId reference. For example, if you create an inventory of items, your secondary collection could be a collection of manufacturers. Your inventory items could then have a manufacturer id field that links to the objects in the manufacturer collection. Your upload page should allow you to either enter a new document in either collection, and support the linking of objects by reference. Your list page should list both collections, using the mongoose populate feature to populate the the object references between the two documents.

For the purposes of testing your submissions, you may assume I will have a functional and unrestricted mongodb database running on my machine at localhost:27017 without any existing databases or collections.
