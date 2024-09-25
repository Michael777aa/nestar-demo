/** @format */

import { Stack } from "@mui/material";
import React from "react";

const agents = [
   { name: "Monica", role: "Agent", img: "/img/profile/girl.svg" },
   { name: "John", role: "Agent", img: "/img/profile/girl.svg" },
   { name: "Martin", role: "Agent", img: "/img/profile/girl.svg" },
   { name: "Alice", role: "Agent", img: "/img/profile/girl.svg" },
   { name: "Guy Hawkins", role: "Agent", img: "/img/profile/girl.svg" },
];

const TopAgentCard = () => {
   return (
      <Stack
         className="agent-cards-row"
         spacing={2}>
         {agents.map((agent, index) => (
            <Stack
               key={index}
               className="top-agent-card"
               alignItems="center">
               <img
                  src={agent.img}
                  alt={agent.name}
               />
               <strong>{agent.name}</strong>
               <span>{agent.role}</span>
            </Stack>
         ))}
      </Stack>
   );
};

export default TopAgentCard;
