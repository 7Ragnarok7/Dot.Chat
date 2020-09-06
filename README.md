[![DotChat-ico](https://raw.githubusercontent.com/7Ragnarok7/Dot.Chat/master/public/images/logo.png?raw=true)][page] &emsp; [![Node-ico](https://raw.githubusercontent.com/7Ragnarok7/Dot.Chat/master/public/images/node.png?raw=true)][node] 

# Project Description

## [*{.}Chat --> Project Front-End(Click here)*][page]

>##### {.}Dot.Chat is a ***user-friendly*** chatting web application which is made with the motto of keeping your conversations secure.
>You can use our emojis to bring life to your conversation :nail_care: :eyes: :ocean: :dog: :sparkler: .  
>Feel free to chat here in Dot Chat.
>***Launch the application by clicking the link above(Project Front-End)***

### Technology Stack :-
- [Node Js][node]
- [Express JS Framework][ex]
- [EJS Template][ejs]
- [Express generator][exg]
- [Postgresql DB][db]
- [Socket.io][sock]

### Highlights :-
- Minimalistic :octocat:
- Single-Threaded :point_up:
- Real-Time Chat :clock430:
- Secure Platform :closed_lock_with_key:
- Emojis available :blush: :sunflower: :moon: :wine_glass: :rocket:

### Requirements for hosting Dot.Chat :-  
- [Node Js][node]
- [Npm][npm]
- [Postgresql DB][db]

### Installation :-
```sh
$ git clone https://github.com/7Ragnarok7/Dot.Chat.git
$ cd Dot.Chat
$ npm install
```

### Configuration :-
- 
- 
- 
-

### Usage :-
- Start the server
```sh
$ cd Dot.Chat
$ npm start
```
- Ctrl+C to stop the server

### Folder Structure :-
- [***bin/***](bin/) : This folder consists of the [***www***](bin/www) file in which all the node server configurations are defined.

- [***public/***](public/) : This folder consists of the :-  

  - [***images/***](public/images/) folder which consists of all the images used in the project.  
  
  - [***stylesheets/***](public/stylesheets/) folder which consists of the [***style.css***](stylesheets/style.css) file where the styling details of the project is defined.
 
 - [***views/***](views/) : This folder contains the files used by the template engine. Express is configured to look here for a matching view when the render method is called. The default view (template) engine used in our project is [***ejs***][ejs].
 
- [***routes/***](routes/) : This folder contains all the route handlers for the application. Each file in this folder defines a route to the view-template of the queried location.

- [***routings/***](routings/) : This folder consists of a file named [***siteRoutings***](routings/siteRoutings.js) where all the different routes to reach the different files under the [***views/***](views/) folder are defined. 

- [***app.js***](app.js) : This file contains the configurations to set up the initial connection of the application. It loads up all the modules and begins serving user requests.

- [***package.json***](package.json) : This file contains the project description, scripts manager, and app manifest. Its main purpose is to track the project's dependencies and their respective versions and can be used to install all the dependencies automatically. 

### Development Team :-
- [**Anurag Mondal**][anurag]
- [**Liza Rozario**][liza]
- [**Subhra Patra**][subhra]

### About Us :-
>***We are students of Brainware University located in Barasat, Kolkata, West Bengal, India.   
>We are currently in our final year at college and are look forward to do greater projects in near future.  
>We have worked on this product as a project of our industrial training on Node Js.  
>To know more about us and contact us directly, [**CLICK HERE.**](public/contact.html)***

### Reporting :-
 - Report BUGS and SUGGESTIONS at [( https://github.com/7Ragnarok7/Node-Js-Project/issues )](https://github.com/7Ragnarok7/Node-Js-Project/issues)
 
 
 [//]: # "References below :-"

[node]:<https://nodejs.org/en/>
[ex]:<https://expressjs.com/>
[db]:<https://www.postgresql.org/>
[page]:<public/index.html>
[anurag]:<https://github.com/7Ragnarok7>
[liza]:<https://github.com/BlazinGirl>
[subhra]:<https://github.com/subhrapatra>
[sock]:<https://socket.io/>
[npm]:<https://www.npmjs.com/>
[ejs]:<https://ejs.co/>
[exg]:<https://www.npmjs.com/package/express-generator>
