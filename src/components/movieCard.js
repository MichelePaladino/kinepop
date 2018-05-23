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

const MovieCard = ( {title, year, poster } ) => {
  return (
    <Card style={{ width: "21rem", margin: "1rem" }}>
      <CardPrimaryAction>
        <CardMedia
        //   square
          style={{
            backgroundImage:
              `url(${poster})`
          }}
        />
        <div style={{ padding: "0 1rem 1rem 1rem" }}>
          <Typography use="headline6" tag="h2">
            {title}
          </Typography>
          <Typography
            use="subtitle2"
            tag="h3"
            theme="text-secondary-on-background"
            style={{ marginTop: "-1rem" }}
          >
            {year}
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
