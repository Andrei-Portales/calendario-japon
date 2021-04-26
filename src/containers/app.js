import React, { useState } from 'react';

import './app.scss';
import playIcon from '../assets/icons/play.svg';
import pauseIcon from '../assets/icons/pause.svg';
import CalendarShow from '../components/CalendarShow/CalendarShow';



import audioFile from '../assets/audio/audio.mp3';



const App = (props) => {
  const [state, setState] = useState({
    currentCalendar: 1,
    showCalendar: false,
    play: true,
  });

  // const url =
  //   'https://drive.google.com/uc?id=1dTRWP-gEa9a3YCHiXuUAQVEnZRofmMQU';

  const [audio] = useState(new Audio(audioFile));
   

  const togglePlay = () => {
    if (state.play) {
      audio.play();
    } else {
      audio.pause();
    }

    setState({
      play: !state.play,
      showCalendar: state.showCalendar,
      currentCalendar: state.currentCalendar,
    });
  };

  const onPressedCalendar = (index) => {
    setState({
      currentCalendar: index,
      showCalendar: true,
      play: state.play,
    });
  };

  const hideDialog = () => {
    setState({
      showCalendar: false,
      play: state.play,
      currentCalendar: state.currentCalendar,
    });
  };

  const { play } = state;
  const { showCalendar, currentCalendar } = state;



  return (
   
      <div className="content">
      
        <div className="audio-manager" onClick={togglePlay}>
          <img src={play ? playIcon : pauseIcon} alt="manage" />
        </div>
        <div className="imagen-div">
          <img
            src="https://drive.google.com/uc?id=1MVCDVjF1dzrXg3GZnVopaRu7oECgkysj"
            alt="calendarios"
          />
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => {
            return (
              <div
                key={`calendario1${e}`}
                className={`calendario${e}`}
                onClick={() => onPressedCalendar(e)}
              />
            );
          })}
        </div>
        {showCalendar ? (
          <CalendarShow calendar={currentCalendar} hideDialog={hideDialog} />
        ) : null}
      </div>

  );
};

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       currentCalendar: 1,
//       showCalendar: false,
//       play: true,
//     };

//     this.url =
//       'https://drive.google.com/uc?id=1e5nrnESdoSbvcQSTy2CQZD8CMp3jcs0P';

//     this.togglePlay = this.togglePlay.bind(this);
//     // this.handleFullScreen = useFullScreenHandle();
//   }

//   togglePlay() {
//     this.setState({
//       play: !this.state.play,
//     });

//     if (this.state.play) {
//       this.audio = new Audio(this.url);
//       this.audio.play();
//     } else {
//       this.audio.pause();
//     }
//   }

//   onPressedCalendar(index) {
//     this.setState({
//       currentCalendar: index,
//       showCalendar: true,
//     });
//   }

//   hideDialog() {
//     this.setState({
//       showCalendar: false,
//     });
//   }

//   render() {
//     const { play } = this.state;
//     const { showCalendar, currentCalendar } = this.state;
//     return (
//       // <FullScreen >
//         <div className="content">
//           <div className="audio-manager" onClick={this.togglePlay}>
//             <img src={play ? playIcon : pauseIcon} alt="manage" />
//           </div>
//           <div className="imagen-div">
//             <img
//               src="https://drive.google.com/uc?id=1MVCDVjF1dzrXg3GZnVopaRu7oECgkysj"
//               alt="calendarios"
//             />
//             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => {
//               return (
//                 <div
//                   key={`calendario1${e}`}
//                   className={`calendario${e}`}
//                   onClick={this.onPressedCalendar.bind(this, e)}
//                 />
//               );
//             })}
//           </div>
//           {showCalendar ? (
//             <CalendarShow
//               calendar={currentCalendar}
//               hideDialog={this.hideDialog.bind(this)}
//             />
//           ) : null}
//         </div>
//       // </FullScreen>
//     );
//   }
// }

export default App;

{
  /* <div style="width: 100%; height: 600px;">
    <iframe style="width: 100%; height: 100%;" title="calendario japon" src="http://stw-uvg.site/labs/lab02/Portales/calendario/" data-mce-fragment="1"></iframe>
</div> */
}

// http://stw-uvg.site/labs/lab02/Portales/calendario/

{
  /* <div style="width: 100%; height: 650px;">
    <iframe style="width: 100%; height: 100%;" title="calendario japon" src="https://calendario-japon.web.app" allowfullscreen></iframe>
</div> */
}

// https://calendario-japon.web.app
