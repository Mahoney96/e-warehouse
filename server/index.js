// What is Node? // - ANSWER: Node is a javascript run-time Environment. It can run paralle with your browser , reason we use it = > It allows us to interact with both the external and internal runtime environements. 
// Frameworks/ Packages needed for building a Server with Node: //
                // EXPRESS - Framework used to build/constuct the server. //
                // HOW to use EXPRESS TO BUILD A SERVER:
                // STEP-ONE: Import Expres:  const express = require("express");   //
                 //STEP-TWO: Hey we're going to re-use the 'app' keyword, to create a new instance of the server: const app = express(); // 
                 //Step-THREE: Crete a Port:  const port = 3993;
                 //Step-FOUR: Saying- Everytime we rget a request, to run the server through evey level of the framework of the App: app.use(express.json());
                 //Step-FIVE: app.listen, takes (2) Arguments //
                 //Step-SIX: Get The Server up and Running - Can get server running by; ' nodemon server/index.js ' ; OR running - ' node server/index.js '
                 //Step-SEVEN: Tell Nodemon to go directly into the server folder and check the ' index.js file: Change path in our Package json file. 
                            // 1. Go To: Package.json File
                            // 2. Updating Change the ' "main": ' line of code to:   "main": "./server/index.js" - This makes it so the server will read the server file 1st. //
                            // 3. WHY: Whenever we run this node process, we want by default for whenever we run this server, for node to go into the ' server/index.js file 1st. //


const express = require("express");             //Step-ONE//requiring-in our express framework //

const app = express();                          //Step-TWO//Creating a New Instance of the Server. //

const port = 3993;                              //Step-THREE// Running every request through the server when the app gets a request. 

app.use(express.json());                        //Step-FOUR: This is Top-Level mIddleware: It takes all the informatonadn turns it into JSON, so we can interact with it.
                                               //Front-end to Back-end WONT WORK WITHOUT THIS LINE of Code. 

app.listen(port, ()=> console.log(`Server UP and running on port ${port}, Aright Aright Aright`) ); // Step-FIVE: Checing that the Server is Running. //



                                
