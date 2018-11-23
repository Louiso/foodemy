import React from 'react';
import { View } from 'react-native';
import { Svg } from 'expo';
export default ({style}) => {

  const y1 = [130, 90, 80]
  const c95 = [145,105, 95]
  const c95_next = [142.239,102.239,92.2386];
  const c95_next_next = [140,100,90];

  const y2 = [80, 40, 30];
  const y3 = [60,20,10]
  const v55c = [50,10,00]
  const v55c_next = [57.7614, 17.7614, 7.76142]
  const v55c_next_next = [60,20, 10 ]
  return (
    <View style = { style }>
      <Svg width="190" height="150" viewBox="0 0 190 150">
        <Svg.Circle cx="110" cy="120" r="25" fill="#C4C4C4"/>
        <Svg.Path d="M85 140H135V145C135 147.761 132.761 150 130 150H90C87.2386 150 85 147.761 85 145V140Z" fill="black"/>
        <Svg.Rect x="105" y={y1} width="10" height="10" fill="#C4C4C4"/>
        <Svg.Path d={`M95 ${c95}C95 ${c95_next} 97.2386 ${c95next_next} 100 ${c95_next_next}H120C122.761 ${c95_next_next} 125 ${c95_next} 125 ${c95}V150H95V145Z`} fill="black"/>
        <Svg.Rect x="85" y={y2} width="50" height="50" rx="5" fill="#C4C4C4"/>
        <Svg.Rect x="105" y="60" width="10" height="10" fill="#C4C4C4"/>

        <Svg.Path d={`M60 ${v55c}H160V55C160 ${v55c_next} 157.761 ${v55c_next_next} 155 ${v55c_next_next}H65C62.2386 ${v55c_next_next} 60 ${v55c_next} 60 55V50Z`} fill="black"/>

        
        <Svg.Path d="M95 75C95 72.2386 97.2386 70 100 70H120C122.761 70 125 72.2386 125 75V80H95V75Z" fill="black"/>
        <Svg.Rect x="60" y="40" width="100" height="100" rx="10" fill="#C4C4C4"/>
        <Svg.Rect x="110" y="55" width="45" height="30" rx="6" fill="black"/>
        <Svg.Rect x="65" y="105" width="45" height="30" rx="6" fill="black"/>
        <Svg.Circle cx="85" cy="65.1304" r="15.6522" fill="#828282"/>
        <Svg.Rect x="99.7826" y="62.5217" width="5.21739" height="5.21739" fill="#828282"/>
        <Svg.Rect x="65" y="61.6522" width="5.21739" height="5.21739" fill="#828282"/>
        <Svg.Rect x="89.4241" y="50.7762" width="5.51511" height="5.51511" transform="rotate(-60 89.4241 50.7762)" fill="#828282"/>
        <Svg.Rect x="72.0909" y="80.7154" width="5.51511" height="5.51511" transform="rotate(-60 72.0909 80.7154)" fill="#828282"/>
        <Svg.Rect x="74.8484" y="54.3217" width="5.51511" height="5.51511" transform="rotate(-120 74.8484 54.3217)" fill="#828282"/>
        <Svg.Rect x="92.1816" y="84.2608" width="5.51511" height="5.51511" transform="rotate(-120 92.1816 84.2608)" fill="#828282"/>
        <Svg.Circle cx="84.5652" cy="64.6956" r="3.91304" fill="black"/>
        <ellipse cx="134.5" cy="114.5" rx="10" ry="10.5" fill="#828282"/>
        <Svg.Rect x="144" y="113" width="3" height="3" fill="#828282"/>
        <Svg.Rect x="122" y="112" width="3" height="3" fill="#828282"/>
        <Svg.Rect x="137.323" y="105.121" width="3.60363" height="3.60363" transform="rotate(-60 137.323 105.121)" fill="#828282"/>
        <Svg.Rect x="125.997" y="124.683" width="3.60363" height="3.60363" transform="rotate(-60 125.997 124.683)" fill="#828282"/>
        <Svg.Rect x="127.799" y="107.437" width="3.60363" height="3.60363" transform="rotate(-120 127.799 107.437)" fill="#828282"/>
        <Svg.Rect x="139.124" y="127" width="3.60363" height="3.60363" transform="rotate(-120 139.124 127)" fill="#828282"/>
        <Svg.Circle cx="134.5" cy="114.5" r="2.5" fill="black"/>
        <Svg.Path d="M160 100H165C167.761 100 170 102.239 170 105V125C170 127.761 167.761 130 165 130H160V100Z" fill="black"/>
        <Svg.Path d="M160 50H165C167.761 50 170 52.2386 170 55V75C170 77.7614 167.761 80 165 80H160V50Z" fill="black"/>
        <Svg.Path fill-rule="evenodd" clip-rule="evenodd" d="M170 60H180C185.523 60 190 64.4772 190 70V110C190 115.523 185.523 120 180 120H170V110H177.865L175 110C177.761 110 180 107.761 180 105V71C180 73.5 180 77.7615 180 75C180 72.2386 177.761 70 175 70L180 70H170V60Z" fill="#C4C4C4"/>
        <Svg.Path d="M50 105C50 102.239 52.2386 100 55 100H60V130H55C52.2386 130 50 127.761 50 125V105Z" fill="black"/>
        <Svg.Path fill-rule="evenodd" clip-rule="evenodd" d="M40 60C34.4772 60 30 64.4772 30 70V110C30 115.523 34.4772 120 40 120H50V110H42.135L45 110C42.2386 110 40 107.63 40 104.707V60Z" fill="#C4C4C4"/>
        <Svg.Path d="M20 70H50V75C50 77.7614 47.7614 80 45 80H25C22.2386 80 20 77.7614 20 75V70Z" fill="black"/>
        <Svg.Rect width="70" height="70" rx="10" fill="#C4C4C4"/>
        <Svg.Rect x="10" y="30" width="50" height="30" rx="5" fill="black"/>
        </Svg>

    </View>
    )
}