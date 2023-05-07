                          

https://user-images.githubusercontent.com/109414918/229374051-89a3671c-4a9c-4315-97ba-6da0306d48c5.mp4


                             
                             Weather App
                 Built a Weather application using React
                 
         The files in the application are mainly public and src file
         
         while public folder contains the basic boiler plate files which generate once React project is set up the src folder contains the main component files
         
         src --> this continas all the files related to the main App structure, the files are as follows
            i) App.js --> contains the main header part and also the input section of the application
                          contains the functions to fetch the weather API data
                          contains miscellaneous function to detect input values like more than two characters and also correct city name
                          contains required state variables to set the API, to detect input values, to store the temperature units
                          
            ii) index.js --> The main root element which sets the main <div> component of the page and calls the App component
            iii) WeatheCard.js --> The component set the layout for all  the cards to be called on to the page
             iv) Card.js --> Detects the days of teh week
                             Loads the specific image based on weather condition
                             Defines the structure for the card
            v) Images--> this contians the required images based on the type of weather                 
                           
                           
                           
                           
                           How to run the project on you local machine
             i) Download the Github repository
             ii) Open the file in vscode and open the terminal
             iii) Check if the terminal is pointing to the correct directory then run ">> npm install" this will install all required packages.
             iv) To run the project enter ">>npm start" this will run the project.
             v)The roject will open in the default web browser with server address "localhost:800" for windows and "localhost:3000" for mac.
             
             
             
                               Block diagram of the Set up
                               
               ![image](https://user-images.githubusercontent.com/109414918/229373916-b7738c84-bbcf-4533-aaed-01811554f370.png)
                
             
         
