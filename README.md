# chat-app

Simple chat application made with NodeJS + Express.js + Socket.IO and ReactJS on the frontend.  
For now, there is just one chat room.  
In the future, 'people-online' option and multiple chat rooms should be implemented.  

# Demo
You can check out live demo [here](https://react-express-chat.herokuapp.com/).

# How to use
First, clone the repository:  
```
git clone https://github.com/boris-ns/chat-app
cd chat-app
```

Then, to start the service you need to make ```.env``` file (there is ```.env.example```). Inside that file change the port to whatever you want, otherwise it will run at port 8080.   
Start the service:    
```
cd service
npm start
```

Client application is in ```web-app``` folder. Run ```npm start``` and application will be available at localhost:3000.
