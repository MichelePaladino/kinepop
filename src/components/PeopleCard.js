import React from "react";
import { Link, Redirect } from "react-router-dom";

import { Fab } from 'rmwc/Fab';

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
import { Icon } from 'rmwc/Icon';

const PeopleCard = ( {char, name, pic, id, order, job } ) => {
  let avatar = pic ? `url(https://image.tmdb.org/t/p/original/${pic})` : `url(https://yt3.ggpht.com/-uGYJvczbuow/AAAAAAAAAAI/AAAAAAAAAAA/VQbgt1FitYs/s900-c-k-no-mo-rj-c0xffffff/photo.jpg)`;
  return (
    <Card style={{ width: "19.5rem", margin: "1rem 0rem" }}>
      <Link className="Link" to={`/people/${id}`}><CardPrimaryAction>
        <CardMedia
        //   square
          style={{
            backgroundImage: `${avatar}`,
            height: "30rem"
          }}
        />
        <div style={{ padding: "0rem 1rem 0rem 1rem" }}>
          <Typography use="headline5" tag="h2">
            {name}
          </Typography>
          <Typography
            use="subtitle1"
            tag="h3"
            theme="text-secondary-on-background"
            style={{ marginTop: "-1rem" }}
          >
            {char} {job}
          </Typography>
          {/* <Typography
            use="body1"
            tag="div"
            theme="text-secondary-on-background"
          >
            {overview.length >= 160 ? overview.slice(0, 160).concat("...") : overview}
          </Typography> */}
        </div>
      </CardPrimaryAction></Link>

      {/* <CardActions>
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
      </CardActions> */}
    </Card>
  );
};

export default PeopleCard;