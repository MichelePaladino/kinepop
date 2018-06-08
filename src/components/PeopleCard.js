import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardPrimaryAction,
  CardMedia
} from "rmwc/Card";

import { Typography } from "rmwc/Typography";

const PeopleCard = ( {char, name, pic, id, order, job } ) => {
  let avatar = pic ? `url(https://image.tmdb.org/t/p/original/${pic})` : `url(https://yt3.ggpht.com/-uGYJvczbuow/AAAAAAAAAAI/AAAAAAAAAAA/VQbgt1FitYs/s900-c-k-no-mo-rj-c0xffffff/photo.jpg)`;
  return (
    <Card style={{ width: "19.5rem", margin: "1rem 0rem" }}>
      <Link className="Link" to={`/people/${id}`}><CardPrimaryAction>
        <CardMedia
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
        </div>
      </CardPrimaryAction></Link>
    </Card>
  );
};

export default PeopleCard;