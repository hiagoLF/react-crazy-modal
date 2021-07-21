export type appearAnimations =
   | "showByDownSlide"
   | "showByRightSlide"
   | "showByUpSlide"
   | "showByLeftSlide"
   | "showByOpacity"
   | "showByApproachSpin";

export type desapearAnimations =
   | "fadeByDownSlide"
   | "fadeByRightSlide"
   | "fadeByUpSlide"
   | "fadeByLeftSlide"
   | "fadeByOpacity"
   | "fadeByApproachSpin";

export type CrazyModalProps = {
   open?: boolean;
   onBackGroundClick?: any;
   animations?: {
      modal?: {
         appear?: appearAnimations;
         disappear?: desapearAnimations;
         time?: number;
         timingFunction?: string;
      };
      background?: {
         appear?: appearAnimations;
         disappear?: desapearAnimations;
         time?: number;
         timingFunction?: string;
      };
   };
   zIndex?: number;
   backgroundColor?: string;
   backgroundOpacity?: number;
   modalPositions?: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
   };
};

export type CrazyModalContainerProps = {
   renderProps: CrazyModalProps;
   hookProps: {
      trulyOpen: boolean;
      closing: boolean;
   };
};
