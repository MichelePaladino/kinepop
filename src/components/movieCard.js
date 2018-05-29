import React from "react";
import { Link, Redirect } from "react-router-dom";

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

const MovieCard = ( {title, year, poster, id, overview, rating, onFavClick, inDatabase } ) => {
  return (
    <Card style={{ width: "21rem", margin: "1rem" }}>
      <Link className="Link" to={`/movies/movie/${id}`}><CardPrimaryAction>
        <CardMedia
        //   square
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster})`,
            height: "30rem"
          }}
        />
        <div style={{ padding: "0 1rem 1rem 1rem", height: "12rem"}}>
          <Typography use="headline6" tag="h2">
            {title}
          </Typography>
          <Typography
            use="subtitle2"
            tag="h3"
            theme="text-secondary-on-background"
            style={{ marginTop: "-1rem" }}
          >
            {year.slice(0,4)}
          </Typography>
          <Typography
            use="body1"
            tag="div"
            theme="text-secondary-on-background"
          >
            {overview.length >= 160 ? overview.slice(0, 160).concat("...") : overview}
          </Typography>
        </div>
      </CardPrimaryAction></Link>
      <CardActions >
        <CardActionButtons>
          <CardAction
            iconToggle onChange={(e) => onFavClick(e)}
            checked={inDatabase}
            on={{ label: "Remove from favorites", content: "favorite" }}
            off={{ label: "Add to favorites", content: "favorite_border" }}
          />
        </CardActionButtons>
        <CardActionIcons >
          <CardAction onClick={() => window.open(`https://www.rottentomatoes.com/search/?search=${title.replace(/\W+/gi, '%20')}`, "_blank")}>
            Search on RottenTomatoes {rating >= 8 && <Icon strategy="url" style={{width: '32px', height: '32px'}} use="https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/ATV_Template_Guide/Art/Rotten-Tomatoes-Certified-Fresh_2x.png" />} {rating < 6 && <Icon strategy="url" style={{width: '24px', height: '24px'}} use="https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/ATV_Template_Guide/Art/Rotten-Tomatoes-Rotten_2x.png" />} {rating >= 6 && rating < 8 && <Icon strategy="url" style={{width: '24px', height: '24px'}} use="https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/ATV_Template_Guide/Art/Rotten%20Tomatoes-Fresh_2x.png" />}
          </CardAction>
        </CardActionIcons>
      </CardActions>
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

export default MovieCard;