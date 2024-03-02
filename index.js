import express from "express";
import bodyParser from "body-parser";


const app= express();
const port= 3000;
var eventValue;
var array;
  
  const appleNavbar = [
    {
      name: ["Explore Mac", "Shop Mac", "More from Mac"],
      content1: ["Explore all Mac", "MacBook Air", "MacBook Pro"], // Replace "..." with actual links
      content2: ["Shop Mac", "Mac Accessories", "Apple Trade In"],
      content3: ["Mac support", "AppleCare+ for Mac", "macOS Ventura"] // Replace "..." with actual links
    },
     {
      name: ["Explore iPad", "Shop iPad", "More from iPad"],
      content1: ["Explore all iPad", "iPad Air", "iPad Pro", "iPad mini", "iPad Accessories"],
      content2: ["Shop iPad", "iPad Accessories"],
      content3: ["iPadOS 16", "iPad Support", "Apple Pencil", "Magic Keyboard"]
    },
     {
      name: ["Explore iPhone", "Shop iPhone", "More from iPhone"],
      content1: ["Explore all iPhone", "iPhone 15", "iPhone 15 Pro", "iPhone 15 Pro Max", "iPhone SE", "iPhone Accessories"],
      content2: ["Shop iPhone", "iPhone Accessories", "Apple Trade In"],
      content3: ["iOS 16", "iPhone Support", "MagSafe", "iPhone cases"]
    },
   {
      name: ["Explore Apple Watch", "Shop Apple Watch", "More from Apple Watch"],
      content1: ["Explore all Apple Watch", "Apple Watch Series 8", "Apple Watch SE", "Apple Watch bands", "Apple Watch Accessories"],
      content2: ["Shop Apple Watch", "Apple Watch bands", "Apple Watch Accessories"],
      content3: ["watchOS 9", "Apple Watch Support", "Apple Watch bands", "Apple Watch cases"]
    },
     {
      name: ["Explore AirPods", "Shop AirPods", "More from AirPods"],
      content1: ["Explore all AirPods", "AirPods Max", "AirPods Pro", "AirPods (3rd generation)", "AirPods accessories"],
      content2: ["Shop AirPods", "AirPods Accessories"],
      content3: ["AirPods support", "Compare AirPods models", "AirPods cases"]
    },
     {
      name: ["Apple Music", "Apple TV+", "Apple Arcade", "Apple Fitness+", "iCloud", "Apple News+", "Apple Card", "See all services"],
      content1: ["link_to_apple_music_page", "link_to_apple_tv_plus_page", "link_to_apple_arcade_page", "link_to_apple_fitness_plus_page", "link_to_icloud_page", "link_to_apple_news_plus_page", "link_to_apple_card_page", "link_to_all_services_page"]
    },
     {
      name: ["Get Support", "AppleCare", "Self Service", "Contact Us", "Search"],
      content1: ["link_to_get_support_page", "link_to_applecare_page", "link_to_self_service_page", "link_to_contact_us_page", "link_to_search_page"]
    }
  ];
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs"); // Set EJS as the view engine

app.set("views/partials/navbar.ejs"); // Set the views directory

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Define your route to render the EJS template
app.get("/", (req, res) => {

    // Handle the case when array is not defined or doesn't have name property


    // Render the template with the provided data
    res.render("partials/navbar.ejs");
});



app.listen(port,()=>{
    console.log("the server is running");

})

app.post("/record-mouseenter", (req, res) => {
    // Retrieve the eventValue from the request body
    eventValue = req.body.eventValue;
    switch(eventValue){
      case "Mac": array= appleNavbar[0];
      break;

      case "iPad": array= appleNavbar[1];
      break;

      case "iPhone": array= appleNavbar[2];
      break;

      case "Watch": array= appleNavbar[3];
      break;

      case "Vision": array= appleNavbar[4];
      break;

      case "AirPods": array= appleNavbar[5];
      break;

      case "Supports": array= appleNavbar[6];
      break;

    
    
    }

    res.send(array);

});

