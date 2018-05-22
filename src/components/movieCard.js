import React from "react";

import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "rmwc/Card";

import { Typography } from "rmwc/Typography";

const MovieCard = () => {
  return (
    <Card style={{ width: "21rem", margin: "1rem" }}>
      <CardPrimaryAction>
        <CardMedia
          
          style={{
            backgroundImage:
              "url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg)"
          }}
        />
        <div style={{ padding: "0 1rem 1rem 1rem" }}>
          <Typography use="headline6" tag="h2">
            Our Changing Planet
          </Typography>
          <Typography
            use="subtitle2"
            tag="h3"
            theme="text-secondary-on-background"
            style={{ marginTop: "-1rem" }}
          >
            by Kurt Wagner
          </Typography>
          <Typography
            use="body1"
            tag="div"
            theme="text-secondary-on-background"
          >
            Visit ten places on our planet that are undergoing the biggest
            changes today.
          </Typography>
        </div>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButtons>
          <CardAction>Read</CardAction>
          <CardAction>Bookmark</CardAction>
        </CardActionButtons>
        <CardActionIcons>
          <CardAction
            iconToggle
            on={{ label: "Remove from favorites", content: "favorite" }}
            off={{ label: "Add to favorites", content: "favorite_border" }}
          />
          <CardAction icon use="share" />
          <CardAction icon use="more_vert" />
        </CardActionIcons>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
