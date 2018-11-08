import React from 'react';
import { Svg } from 'expo';
const Robot1 = ()=>(
  <Svg width="140" height="140" viewBox="0 0 140 140">
    <Svg.Rect x="10" y="30" width="100" height="100" rx="10" fill="#FF0000"/>
    <Svg.Rect x="25" y="70" width="70" height="40" fill="black"/>
    <Svg.Path d="M0 95C0 92.2386 2.23858 90 5 90H10V120H5C2.23858 120 0 117.761 0 115V95Z" fill="black"/>
    <Svg.Path d="M110 90H115C117.761 90 120 92.2386 120 95V115C120 117.761 117.761 120 115 120H110V90Z" fill="black"/>
    <Svg.Path d="M110 40H115C117.761 40 120 42.2386 120 45V65C120 67.7614 117.761 70 115 70H110V40Z" fill="black"/>
    <Svg.Path fill-rule="evenodd" clip-rule="evenodd" d="M120 50H130C135.523 50 140 54.4772 140 60V100C140 105.523 135.523 110 130 110H120V100H127.865L125 100C127.761 100 130 97.7614 130 95V61C130 63.5 130 67.7615 130 65C130 62.2386 127.761 60 125 60L130 60H120V50Z" fill="#FF0000"/>
    <Svg.Rect x="55" y="10" width="10" height="10" fill="#FF0000"/>
    <Svg.Path d="M10 0H110V5C110 7.76142 107.761 10 105 10H15C12.2386 10 10 7.76142 10 5V0Z" fill="black"/>
    <Svg.Path d="M45 25C45 22.2386 47.2386 20 50 20H70C72.7614 20 75 22.2386 75 25V30H45V25Z" fill="black"/>
    <Svg.Path d="M35 130H85V135C85 137.761 82.7614 140 80 140H40C37.2386 140 35 137.761 35 135V130Z" fill="black"/>
  </Svg>
)

export default Robot1;
