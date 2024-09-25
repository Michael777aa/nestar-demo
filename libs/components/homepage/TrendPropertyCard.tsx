/** @format */

import { Box, Stack, Divider, Typography } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertyCard = () => {
   return (
      <Stack className="top-card-box">
         <Box
            className="card-img"
            sx={{
               backgroundImage: "url('/img/banner/types/apartment.webp')",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}>
            <div className="price">$52000</div>
         </Box>
         <Box className="info">
            <Typography
               variant="h6"
               className="title">
               Run Will Buildings
            </Typography>
            <Typography
               variant="body2"
               className="desc">
               Seoul Gangnam Apartments
            </Typography>
            <Stack
               direction="row"
               spacing={1}
               className="options">
               <Box>
                  <img
                     src="/img/icons/bed.svg"
                     alt="bed icon"
                  />
                  <Typography variant="body2"> 3 beds</Typography>
               </Box>
               <Box>
                  <img
                     src="/img/icons/room.svg"
                     alt="room icon"
                  />
                  <Typography variant="body2"> 7 rooms</Typography>
               </Box>
               <Box>
                  <img
                     src="/img/icons/expand.svg"
                     alt="expand icon"
                  />
                  <Typography variant="body2"> 250 m²</Typography>
               </Box>
            </Stack>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Stack
               direction="row"
               justifyContent="space-between"
               className="bott">
               <Typography variant="body2">rent</Typography>
               <Box className="view-like-box">
                  <IconButton color="default">
                     <RemoveRedEyeIcon />
                  </IconButton>
                  <Typography className="view-cnt">50</Typography>
                  <IconButton color="default">
                     <FavoriteIcon sx={{ color: "red" }} />
                  </IconButton>
                  <Typography className="view-cnt">200</Typography>
               </Box>
            </Stack>
         </Box>
      </Stack>
   );
};

export default TrendPropertyCard;
