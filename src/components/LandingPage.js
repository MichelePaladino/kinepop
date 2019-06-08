import React, { Component } from "react";
import { Icon } from 'rmwc/Icon';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  two = React.createRef()

  scrollToContent = (section) => {
    this[section].current.scrollIntoView({'behavior': 'smooth', 'block': 'center'})
  }
  render() {
    return (
/*       <div>
        <Grid style={{ height: '100vh', background: 'linear-gradient(#eb0000, #eb0000)', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <GridCell span='12' style={{ textAlign:'center', color:'rgba(255,255,255,.93)'}}><Typography use="headline2" style={{color: 'white'}}>KinePOP</Typography><br/><br/><Icon strategy="ligature" use="event_seat" style={{fontSize: '48px'}}/><br/><br/><Typography use="headline5">The movie search engine with the best recommendation algorithm in the world*.</Typography><br/><br/><br/><Typography use="body1" className='adv'>*Recommendation algorithm not included.</Typography></GridCell>
        </Grid>
        <Grid >
          <GridCell span='12' style={{padding: '5% 10% 1.5% 10%', textAlign:'center', color:'rgba(0,0,0,.75)'}}>
            <Typography use="headline5">I had a problem. <br/><br/>Whenever my girlfriend and I were looking for a movie to watch, we would spend ages trying to find the right movie. <br/><br/>Well, I'll admit it: it was my fault. <br/><br/>I would usually open different websites. I wanted to scan movie posters quickly, examine actors/directors filmographies at light speed, and get a general feeling about the rating. <br/><br/>This is why I created KinePOP.</Typography>
          </GridCell>
          <GridCell span='12' style={{textAlign:'center', color:'rgba(0,0,0,.75)'}}>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/MichelePaladino/"><Icon strategy="className" basename="icon" prefix="ion-" use="logo-github" style={{fontSize: '48px'}}/></a>&nbsp;&nbsp;
            <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/michelepaladino/"><Icon strategy="className" basename="icon" prefix="ion-" use="logo-linkedin" style={{fontSize: '48px'}}/></a>&nbsp;&nbsp;
          </GridCell>
        </Grid>
      </div> */

      <div className='LandingPage'>
        <div className='LandingPage__first'>
          <div id='stripes'></div>
          <div className='LandingPage__first__box' onClick={() => this.scrollToContent('two')}>
            <span className='LandingPage__text-secondary'>hey,</span>
            <span className='LandingPage__title'>KinePOP</span>
            <span className='LandingPage__text-secondary'>help me choose a movie!</span>
            <Icon strategy="url" style={{width: '32px', height: '32px'}} use="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/global/new-upright.ac91cc241ac.png" />
          </div>
        </div>
        <div className='LandingPage__second' ref={this.two}>
            <div className='LandingPage__second__boxes'>
              <div className='LandingPage__second__box'><Link to="/movies/discover/">Discover</Link></div>
              <div className='LandingPage__second__box'><Link to="/movies/now_playing/">Now Playing</Link></div>
              <div className='LandingPage__second__box'><Link to="/movies/upcoming/">Coming soon</Link></div>
              <div className='LandingPage__second__box'><Link to="/movies/search/">Search</Link></div>
            </div>
        </div>
        <footer>
          <p className='footer__text'>KinePOP</p>
          <p className='footer__text'>Michele Paladino | June 2019</p>
          <div className="footer__logos">
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/MichelePaladino/"><svg width="2rem" height="2rem" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill="#161614"><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" fill='#fff'/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" fill='#fff'/></g></svg></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/michelepaladino/"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="7.025 7.025 497.951 497.95"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-974.482" y1="1306.773" x2="-622.378" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient><path d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z" fill="#fff"/></svg></a>
          </div>
        </footer>
      </div>

    ); 
  }
}

export default LandingPage;
