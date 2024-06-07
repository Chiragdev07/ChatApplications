import { createContext, useState ,useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContex";
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocketContext=()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {Authuser} = useAuthContext();

    useEffect(() => {
        if (Authuser) {
            const socket = io("http://localhost:5000",{
                query:{
                    userId:Authuser._id,
                }

            });

            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            // Return cleanup function to close the socket connection
            return () => {
                socket.close();
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [Authuser]); // Depend on Authuser to reconnect when it changes

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    );
};
