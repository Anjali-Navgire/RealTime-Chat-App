# Real-Time Chat Application

This is a **simple chat application** built using **Socket.IO** where users can communicate in real-time. This project helped me understand how chat applications work and how WebSocket events are handled.

---

## Features

- **Real-time messaging**: Send and receive messages instantly.
- **Rooms support**: Users can join specific chat rooms using the `roomNotice` event.
- **Typing indicators**: Shows when a user is typing using `typing` and `stopTyping` events.
- **Event-driven architecture**: All chat interactions are handled using WebSocket events.
- **Lightweight and simple**: Perfect for learning the basics of Socket.IO and real-time communication.

---

## WebSocket Events Used

1. **roomNotice** - Notifies users when someone joins or leaves a chat room.  
2. **typing** - Indicates that a user is currently typing a message.  
3. **stopTyping** - Indicates that a user has stopped typing.  
4. **chatMessage** - Handles sending and receiving chat messages in real-time.  

---

## Technologies Used

- **Node.js**  
- **Express.js** 
- **Socket.IO**
- **React

---

## What I Learned

- How **real-time communication** works using WebSockets.  
- How to handle multiple **events** like typing indicators, joining rooms, and sending messages.  
- How to structure a simple **chat application** with Socket.IO.  

---

## Future Enhancements

- **Add user authentication.
- **Support private messaging.
- **Store chat history in a database.
- **Add notifications for new messages.

