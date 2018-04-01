To run this app:

The badapibackend needs to also be downloaded.  You can get the code for the backend here: https://github.com/thesands/badapibackend

Once both the back-end and front-end pieces are downloaded, run the back-end.
(You can make sure the back-end is properly running by going to http://localhost:8080/api/values, make sure
your IDE is hosting it on the appropriate port)

You can either run a dev instance of the front-end or a production build.  To run a dev instance, open the terminal in the
front-end directory and run: npm run start.  This will begin the front-end compilation.  You should be able to go to
http://localhost:3000/ and see it properly displayed.

To run a production version of the front-end, start Docker and run the following commands in the front-end directory:
docker build -t react-docker .
This will serve the api on http://localhost:5000/


My main React file for the front-end is App.js.  Here, the table and fetch to API are rendered.  These are then rendered through
index.js in the root div (see index.html for full HTML layout of webpage).  There is only one class here.  This class, badapi, 
uses the helper functions Table and TableRow to create a table based on the data retrieved in the fetch call.  
It pulls the headers that are retrieved and applies it to the table.  The ID value is ignored.  Marvel is also really awesome
and thus received a sweet Infinity War banner at the top.

If I had more time to work on the front-end piece, I would have implemented paging on the table.  Additionally, I would
consider tabbing or separating out the months for better display and searching between the tweets.  It would also help
to filter the table as well (retweets versus original tweets).