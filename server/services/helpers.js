export const addUserId = (userId, socketId, OnlineUsers) => {
  // Set the user data in the map 
  if (!OnlineUsers.has(userId)) {
    OnlineUsers.set(userId, { userId, socketId });
  }
};

export const RemoveUser = (socketId, OnlineUsers) => {
  // Get the key and value of the map
  for (let [userId, user] of OnlineUsers.entries()) {
    if (user.socketId === socketId) {
      // remove the user's socketid data the === socketid
      OnlineUsers.delete(userId);
      break; // remove from the loop
    }
  }
};

export const getASpecificUser = (userId, OnlineUsers) => {
  return OnlineUsers.get(userId);
};

export const getAllGroupUsers = (OnlineUsers) => {
  return Array.from(OnlineUsers.values());
};
