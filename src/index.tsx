import * as React from "react";
import { CrazyModalProps } from "./@types";
import CrazyModalContainer from "./components/CrazyModalContainer";
import { getMajorTime } from "./utils/independentFunctions";

const CrazyModal: React.FC<CrazyModalProps> = ({
   open,
   onBackGroundClick,
   animations,
   zIndex,
   backgroundColor,
   backgroundOpacity,
   children,
   modalPositions,
}) => {
   const [trulyOpen, setTrulyOpen] = React.useState(false);
   const [closing, setClosing] = React.useState(false);
   const [counter, setCounter] = React.useState(0);

   React.useEffect(() => {
      console.log("open >>>", open);
      if (open) {
         setTrulyOpen(true);
         return;
      }
      if (counter === 0) {
         setCounter((c) => c + 1);
         return;
      }
      requestClose();
   }, [open]);

   const requestClose = () => {
      setClosing(true);

      const majorTime = getMajorTime(
         animations?.modal?.time || 0,
         animations?.background?.time || 0
      );

      setTimeout(() => {
         setTrulyOpen(false);
         setClosing(false);
      }, majorTime);
   };

   return (
      <CrazyModalContainer
         renderProps={{
            backgroundColor,
            zIndex,
            onBackGroundClick,
            modalPositions,
            backgroundOpacity,
            animations,
         }}
         hookProps={{ closing, trulyOpen }}
      >
         {children}
      </CrazyModalContainer>
   );
};

export default CrazyModal;
