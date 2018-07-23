import React, { Component } from "react";

import { Grid, GridCell } from "rmwc/Grid";
import { ImageListImage } from "rmwc/ImageList";
import { Typography } from "rmwc/Typography";
import { Icon } from 'rmwc/Icon';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Grid style={{ height: '100vh', background: 'linear-gradient(#eb0000, #ff6d54)', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <GridCell span='12' style={{ textAlign:'center', color:'rgba(255,255,255,.93)'}}><Typography use="headline2" style={{color: 'white'}}>KinePOP</Typography><br/><br/><Icon strategy="ligature" use="event_seat" style={{fontSize: '48px'}}/><br/><br/><Typography use="headline5">The movie search engine with the best recommendation algorithm in the world*.</Typography><br/><br/><br/><Typography use="body1" className='adv'>*Recommendation algorithm not included.</Typography></GridCell>
        </Grid>
        <Grid >
          <GridCell span='12' style={{padding: '5% 10% 1.5% 10%', textAlign:'center', color:'rgba(0,0,0,.75)'}}>
            <Typography use="headline5">I had a problem. <br/><br/>Whenever my girlfriend and I were looking for a movie to watch, we would spend ages trying to find the right movie. <br/><br/>Well, I'll admit it: it was my fault. <br/><br/>I would usually open different websites. I wanted to scan movie posters quickly, examine actors/directors filmographies at light speed, and get a general feeling about the rating. <br/><br/>This is why I created KinePOP.</Typography>
          </GridCell>
          <GridCell span='12' style={{textAlign:'center', color:'rgba(0,0,0,.75)'}}>
            <ImageListImage  style={{height: '178px', width: "178px", display: 'block', margin: '0 auto', borderRadius:'40%', marginBottom:'0.3rem' }} src={'https://image.ibb.co/mM9rDT/Screen_Shot_2018_06_11_at_20_40_09.png'}/>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/MichelePaladino/"><Icon strategy="className" basename="icon" prefix="ion-" use="logo-github" style={{fontSize: '48px'}}/></a>&nbsp;&nbsp;
            <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/"><Icon strategy="className" basename="icon" prefix="ion-" use="logo-linkedin" style={{fontSize: '48px'}}/></a>&nbsp;&nbsp;
            <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/"><Icon strategy="className" basename="icon" prefix="ion-" use="md-contact" style={{fontSize: '48px'}}/></a>
          </GridCell>
        </Grid>
      </div>
    ); 
  }
}

export default LandingPage;
