import React, { useState } from 'react';
import './CalendarShow.scss';
import { data, names } from '../../util/data_drive';
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';
import Spinner from 'react-bootstrap/Spinner';

import { FullScreen, useFullScreenHandle } from 'react-full-screen';

import fullScreenIcon from '../../assets/icons/full-screen.svg';

const CalendarShow = (props) => {
  const { calendar } = props;
  const images = data[calendar - 1];

  const [state, setState] = useState({
    currentIndex: 0,
    isLoading: true,
    imageScale: 1.0,
  });

  const handle = useFullScreenHandle();

  const nextImage = () => {
    const { currentIndex } = state;

    if (currentIndex < images.length - 1) {
      setState({
        currentIndex: currentIndex + 1,
        isLoading: true,
        imageScale: 1,
      });
    }
  };

  const prevImage = () => {
    const { currentIndex } = state;

    if (currentIndex > 0) {
      setState({
        currentIndex: currentIndex - 1,
        isLoading: true,
        imageScale: 1,
      });
    }
  };

  const onFinishLoad = () => {
    const { currentIndex, imageScale } = state;

    setState({
      isLoading: false,
      currentIndex: currentIndex,
      imageScale: imageScale,
    });
  };

  const [fullScreen, setFullScreen] = useState(false);

  const enterFullScreen = () => {
    if (fullScreen) {
      handle.exit();
      setFullScreen(false);
    } else {
      handle.enter();
      setFullScreen(true);
    }
  };

  const { hideDialog } = props;
  const { currentIndex, isLoading, imageScale } = state;

  const imageName = names[images[currentIndex]];

  return (
    <div className="main-content">
      <div className="dialog-back" onClick={hideDialog}></div>

      <FullScreen handle={handle}>
        <div className="dialog-main">
          {imageName !== undefined ? (
            <div className="text-image">{imageName}</div>
          ) : null}
          <div
            className={
              imageName !== undefined
                ? 'calendar-content-text'
                : 'calendar-content'
            }
          >
            <div
              key={`${images[currentIndex]}_${imageScale}`}
              className="calendar-image"
            >
              <img
                alt="calendar"
                src={`https://drive.google.com/uc?id=${images[currentIndex]}`}
                onLoad={onFinishLoad.bind(this)}
                style={{ height: `calc(100% * ${imageScale})` }}
              />
              {isLoading ? (
                <div className="loading-text">
                  <div>
                    <Spinner animation="border" variant="light" />
                  </div>
                </div>
              ) : null}
            </div>

            <div className="zoom-options" onClick={enterFullScreen.bind(this)}>
              <img src={fullScreenIcon} alt="fullscreen" />
            </div>

            <div className="left-arrow" onClick={prevImage.bind(this)}>
              <img src={leftArrow} alt="arrow" />
            </div>
            <div className="right-arrow" onClick={nextImage.bind(this)}>
              <img src={rightArrow} alt="arrow" />
            </div>
          </div>
        </div>
      </FullScreen>
    </div>
  );
};

// class CalendarShow extends Component {
//   constructor(props) {
//     super(props);

//     const { calendar } = this.props;
//     this.images = data[calendar - 1];
//     this.state = {
//       currentIndex: 0,
//       isLoading: true,
//       imageScale: 1.0,
//     };

//     const handle = useFullScreenHandle();
//   }

//   nextImage() {
//     const { currentIndex } = this.state;

//     if (currentIndex < this.images.length - 1) {
//       this.setState({
//         currentIndex: currentIndex + 1,
//         isLoading: true,
//         imageScale: 1,
//       });
//     }
//   }

//   prevImage() {
//     const { currentIndex } = this.state;

//     if (currentIndex > 0) {
//       this.setState({
//         currentIndex: currentIndex - 1,
//         isLoading: true,
//         imageScale: 1,
//       });
//     }
//   }

//   onFinishLoad() {
//     this.setState({
//       isLoading: false,
//     });
//   }

//   plusScale() {
//     /*const { imageScale } = this.state;

//     this.setState({
//       imageScale: imageScale + 0.2,
//     });*/
//     this.handle.enter();
//   }

//   minusScale() {
//     const { imageScale } = this.state;
//     this.setState({
//       imageScale: imageScale - 0.2,
//     });
//   }

//   render() {
//     const { hideDialog } = this.props;
//     const { currentIndex, isLoading, imageScale } = this.state;

//     const imageName = names[this.images[currentIndex]];

//     return (
//       <div className="main-content">
//         <div className="dialog-back" onClick={hideDialog}></div>

//         <FullScreen handle={this.handle}>
//           <div className="dialog-main">
//             {imageName !== undefined ? (
//               <div className="text-image">{imageName}</div>
//             ) : null}
//             <div
//               className={
//                 imageName !== undefined
//                   ? 'calendar-content-text'
//                   : 'calendar-content'
//               }
//             >
//               <div
//                 key={`${this.images[currentIndex]}_${imageScale}`}
//                 className="calendar-image"
//               >
//                 <img
//                   alt="calendar"
//                   src={`https://drive.google.com/uc?id=${this.images[currentIndex]}`}
//                   onLoad={this.onFinishLoad.bind(this)}
//                   style={{ height: `calc(100% * ${imageScale})` }}
//                 />
//                 {isLoading ? (
//                   <div className="loading-text">
//                     <div>
//                       <Spinner animation="border" variant="light" />
//                     </div>
//                   </div>
//                 ) : null}
//               </div>

//               {isLoading ? null : (
//                 <div className="zoom-options">
//                   <span className="plus" onClick={this.plusScale.bind(this)}>
//                     +
//                   </span>
//                   <span>|</span>
//                   <span className="minus" onClick={this.minusScale.bind(this)}>
//                     -
//                   </span>
//                 </div>
//               )}

//               <div className="left-arrow" onClick={this.prevImage.bind(this)}>
//                 <img src={leftArrow} alt="arrow" />
//               </div>
//               <div className="right-arrow" onClick={this.nextImage.bind(this)}>
//                 <img src={rightArrow} alt="arrow" />
//               </div>
//             </div>
//           </div>
//         </FullScreen>
//       </div>
//     );
//   }
// }

export default CalendarShow;
