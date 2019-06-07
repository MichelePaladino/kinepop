import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
} from "rmwc/Card";
import { Typography } from "rmwc/Typography";
import { Icon } from 'rmwc/Icon';

const MovieCard = ( {title, year="", poster, id, overview, rating, onFavClick, inDatabase } ) => {
  let art = poster ? poster : '4Ll653TYNjXaKlYGmiPRr236Vhi.jpg'
  return (
    <Card style={{ width: "19.5rem", margin: "1rem 0rem" }}>
      <Link className="Link" to={`/movies/movie/${id}`}><CardPrimaryAction>
        <CardMedia
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/${art})`,
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
      <CardActions fullBleed>
        {/* <CardActionButtons>
          <CardAction
            iconToggle onChange={(e) => onFavClick(e)}
            checked={inDatabase}
            on={{ label: "Remove from favorites", content: "favorite" }}
            off={{ label: "Add to favorites", content: "favorite_border" }}
          />
        </CardActionButtons> */}
        {/* <CardActionIcons > */}
          <CardAction onClick={() => window.open(`https://www.rottentomatoes.com/search/?search=${title.replace(/\W+/gi, '%20')}`, "_blank")}>
            {rating >= 8 && <Icon strategy="url" style={{width: '32px', height: '32px', paddingLeft: '8rem'}} use="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/global/new-cf.9b01b08d257.png" />} {rating < 6 && <Icon strategy="url" style={{width: '24px', height: '24px', paddingLeft: '8rem'}} use="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/global/new-rotten.efc30acb29c.png" />} {rating >= 6 && rating < 8 && <Icon strategy="url" style={{width: '24px', height: '24px', paddingLeft: '8rem'}} use="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/global/new-fresh.587bf3a5e47.png" />}
          </CardAction>
        {/* </CardActionIcons> */}
        </CardActions>
    </Card>
  );
}; 

export default MovieCard; 
