<template>
<svg class="img-fluid  " x="0" y="0" height="auto" viewBox="12 0 100 150" width="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet">
<rect id="svgEditorBackground" x="0" y="0" width="100" height="100" style="fill:none; stroke: none;"/>
<!-- Add here your SVG shapes (circles, rectangles, ...) -->
<!-- Or remove everything, if you want to paste an entire drawing (<svg...>...</svg>).-->
<rect  x="13.877" y="10.1576" style="fill:black;stroke:black;stroke-width:1px;" id="e3_rectangle" width="55.3652" height="19.8855" transform="matrix(1.79115, 0, 0, 1.7044, -9.84696, -6.14733)"/>
<rect x="36.3372" y="21.1726" style="fill:lime;stroke:black;stroke-width:1px;" id="e4_rectangle" width="55.794" height="12.589" transform="matrix(1.68542, 0, 0, 2.12063, -43.5403, -30.4569)"/>
<text id="e5_texte" style="fill: black; font-family: Arial; font-size: 28px;text-anchor:end;" x="108.887" y="-3.88824" transform="matrix(0.931056, 0, 0, 0.644587, 8.62455, 36.7281)">{{test1}}</text>
</svg>
</template>

<script>
import { default as dataInv } from "@/components/Inverter/data-inv-01"
import { computed } from '@/computed/computedInv01.js'
// module.exports = {
//   props: {
//     'pwr': {type: String, default: '0'},
//   },
// }
export default {
  name: 'mainsvg1',
    props: {
    test1: {type: String, default: "123"},
  },
  mixins: [computed],
  data() {
    // return dataInv
    return{
    test: "123",
    }
  },
  
  // ActivePower_Output_Total_Str: "",
  created: function() {


  // this.pwr = "345",
  // this.ActivePower_Output_Total_Str = ActivePower_Output_Total.toString();
  }
}

