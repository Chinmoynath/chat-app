import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Loader, Nav } from "rsuite";
import NavItem from "rsuite/lib/Nav/NavItem";
import { useRooms } from "../../context/rooms.context";
import RoomItem from "./RoomItem";

const ChatRoomList = ({ aboveElHeight }) => {
  const rooms = useRooms();
  const location = useLocation();

  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `calc(100% - ${aboveElHeight}px)`,
      }}
      activeKey={location.pathname}
    >
      {!rooms && (
        <Loader center vertical content="loading" speed="slow" size="md" />
      )}
      {rooms &&
        rooms.length > 0 &&
        rooms.map((room) => (
          <NavItem 
            componentClass={Link} 
            to={`/chat/${room.id}`} 
            key={room.id}
            eventKey={`/chat/${room.id}`}
            >
            <RoomItem room={room} />
          </NavItem>
        ))}
    </Nav>
  );
};

export default ChatRoomList;