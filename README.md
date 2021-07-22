# react-crazy-modal

 - A versatile animated modal component for ReactJS
 - See a [LIVE DEMO](https://hiagolf.github.io/live-demo-react-crazy-modal/)

<img src='https://raw.githubusercontent.com/hiagoLF/react-crazy-modal/main/preview/animations.gif?token=AJRARGCPR7CBC2GCBDFZYWDA7GPJO'/>

.
## Install

```shell
npm install react-crazy-modal

or

yarn add react-crazy-modal
```

.
## Usage
```js
import React, { useState } from "react";
import CrazyModal from "react-crazy-modal";

const buttonStyle = {
   width: "220px",
   backgroundColor: "#8291e3",
   color: "#fff",
   fontWeight: 600,
   fontSize: "30px",
   padding: "10px",
};

const modalStyle = {
   backgroundColor: "#fff",
   display: "flex",
   alignItems: "center",
   flexDirection: "column",
   padding: "10px",
   borderRadius: "5px",
};

const animations = {
   modal: {
      appear: "showByDownSlide",
      disappear: "fadeByUpSlide",
      time: 200,
      timingFunction: "ease",
   },
   background: {
      appear: "showByOpacity",
      disappear: "fadeByOpacity",
      time: 300,
      timingFunction: "ease",
   },
};

function App() {
   const [modalOpen, setModalOpen] = useState(false);

   return (
      <div>
         <CrazyModal
            open={modalOpen}
            onBackGroundClick={() => setModalOpen(false)}
            animations={animations}
         >
            <div style={modalStyle}>
               <h1>Crazy Modal</h1>
               <h3>Simple an easy</h3>
               <button 
                  onClick={() => setModalOpen(false)} 
                  style={buttonStyle}
               >
                  Close Modal
               </button>
            </div>
         </CrazyModal>

         <button 
            onClick={() => setModalOpen(true)}
            style={buttonStyle}
         >
            Open Modal
         </button>
      </div>
   );
}

export default App;
```

.
## Properties
| Name              | Type    | Required | Default | Description                                                 |
| ----------------- | ------- | -------- | ------- | ----------------------------------------------------------- |
| open              | boolean | false    | -       | State for modal open or not.                                |
| onBackGroundClick | func    | false    | -       | Function called when background of modal is clicked.        |
| animations        | object  | false    | -       | The show and Fade animations for modal and background.      |
| zIndex            | number  | false    | 5       | z-index position of CrazyModal component.                   |
| backgroundColor   | string  | false    | #000    | The color for background of modal.                          |
| backgroundOpacity | number  | false    | 0.5     | The opacity for background of modal.                        |
| modalPositions    | object  | false    | -       | Top, Bottom, Right and Left positions of modal. See bellow. |

.
## Animations
```js
<CrazyModal
   animations={{
      modal: {
         appear: "showByDownSlide",    // See bellow available appear animations
         disappear: "fadeByDownSlide", // See bellow available disappear animations
         time: number,
         timingFunction: string,
      },
      background: {
         appear: "showByDownSlide",    // See bellow available appear animations
         disappear: "fadeByDownSlide", // See bellow available disappear animations
         time: 300,                    // Time of animations in milliseconds
         timingFunction: "ease",       // Speed curve of animation. All css animation-timing-function are available 
      };
   }}
>
   Modal Content
</CrazyModal>
```

### Appear and Desappear Animations
| appear               | disappear            |
| -------------------- | -------------------- |
| "showByDownSlide"    | "fadeByDownSlide"    |
| "showByRightSlide"   | "fadeByRightSlide"   |
| "showByUpSlide"      | "fadeByUpSlide"      |
| "showByLeftSlide"    | "fadeByLeftSlide"    |
| "showByOpacity"      | "fadeByOpacity"      |
| "showByApproachSpin" | "fadeByApproachSpin" |

.
## Modal Positions
```js
<CrazyModal
   modalPositions= {{
      top: "20px",
      bottom: "20px",
      right: "20px",
      left: "20px",
   }}
>
   Modal Content
</CrazyModal>
```

.
## License
Code released under [MIT License](https://github.com/hiagoLF/react-crazy-modal/blob/main/LICENSE).
