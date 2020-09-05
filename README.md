[![DotChat-ico](https://raw.githubusercontent.com/7Ragnarok7/Dot.Chat/master/public/images/logo.png?raw=true)][page] &emsp; [![Node-ico](https://raw.githubusercontent.com/7Ragnarok7/Dot.Chat/master/public/images/node.png?raw=true)][node] 

# Project Description

## [*{.}Chat --> Project Front-End(Click here)*][page]

>##### {.}Dot.Chat is a ***user-friendly*** chatting web application which is made with the motto of keeping your conversations secure.
>You can use our emojis to bring life to your conversation :nail_care: :eyes: :ocean: :dog: :sparkler: .  
>Feel free to chat here in Dot Chat.

### Highlights :-
- Minimalistic
- Single-Threaded
- Real Time Chat
- Secure Platform :email:
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

### Folder Structure :-
- [***bin/***](bin/) : The ***bin*** folder consists of the [***www***](bin/www) file in which all the actual server configurations are defined.

- [***public/***](public/) : The ***public*** folder consists of the -<br>
  -[***images/***](public/images/) folder which consists of all the images used in the project. <br>
  -[***stylesheets/***](public/stylesheets/) folder which consists of the [***style.css***](stylesheets/style.css) file where the styling details of the project is defined.
  
- [***routes/***](routes/) : The ***routes/*** folder contains all the route handlers for the application. Each file in this folder defines a route to the view-template of the queried location.

- [***routings/***](routings/) : The ***routings/*** folder consists of a file named [***siteRoutings***](routings/siteRoutings.js) where all the different routes to reach the different files under the ***views*** folder are defined. 

- [***views/***](views/) : The ***views/*** folder contains the files used by the template engine. Express is configured to look here for a matching view when the render method is called. The default template engine is Jade, but Jade has been deprecated in favor of Pug, so we used the --view flag to change the view (template) engine.

- [***app.js***](app.js) : The ***app.js*** file is basically the starting point of the app. It loads everything and begins serving user requests. It's basically the glue that holds all the parts together.
Contains the project description, scripts manager, and app manifest. Its main purpose is to track your app's dependencies and their respective versions.

- [***package.json***](package.json) : The ***package.json*** file contains the project description, scripts manager, and app manifest. Its main purpose is to track the app's dependencies and their respective versions.


### Configuration :-
- 
- 
- 

### Usage :-
- Start the server
```sh
$ npm start
```
- Ctrl+C to stop the server

### Technology Stack :-
- [Node Js][node]
- [Express JS Framework][ex]
- [Postgresql DB][db]
- [Socket.io][sock]

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
