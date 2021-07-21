export function getMajorTime(...times: Array<number | undefined>): number {
   const formatedTimes = times.map((time) => {
      if (!time) return 0;
      return time;
   });
   const majorTime = Math.max(...formatedTimes);
   return majorTime;
}
