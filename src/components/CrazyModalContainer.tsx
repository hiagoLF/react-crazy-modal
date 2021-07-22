import * as React from "react";
import { CrazyModalContainerProps } from "../@types";
import "../animations/slide/fade.scss";
import "../animations/slide/show.scss";
import "../animations/opacity/fade.scss";
import "../animations/opacity/show.scss";
import "../animations/crazy/fade.scss";
import "../animations/crazy/show.scss";
import "./styles.scss";

const CrazyModalContainer: React.FC<CrazyModalContainerProps> = ({
   children,
   renderProps,
   hookProps,
}) => {
   if (!hookProps.trulyOpen) return null;

   return (
      <div id="crazy-modal-container" style={{ zIndex: renderProps.zIndex }}>
         <div
            id="background-modal"
            onClick={renderProps.onBackGroundClick}
            style={{
               animationName: hookProps.closing
                  ? renderProps.animations?.background?.disappear
                  : renderProps.animations?.background?.appear,
               animationDuration:
                  renderProps.animations?.background?.time + "ms",
               animationTimingFunction:
                  renderProps.animations?.background?.timingFunction,
               backgroundColor: renderProps.backgroundColor,
               opacity:
                  renderProps.backgroundOpacity &&
                  renderProps.backgroundOpacity * 100 + "%",
            }}
         />

         <div
            id="modal-content"
            style={{
               animationName: hookProps.closing
                  ? renderProps.animations?.modal?.disappear
                  : renderProps.animations?.modal?.appear,
               animationDuration: renderProps.animations?.modal?.time + "ms",
               animationTimingFunction:
                  renderProps.animations?.modal?.timingFunction,
               top: renderProps.modalPositions?.top,
               bottom: renderProps.modalPositions?.bottom,
               right: renderProps.modalPositions?.right,
               left: renderProps.modalPositions?.left,
            }}
         >
            {children}
         </div>
      </div>
   );
};

export default CrazyModalContainer;
