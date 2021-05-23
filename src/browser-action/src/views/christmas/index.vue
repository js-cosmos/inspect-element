<template lang="pug">
ul.g-snows(v-if="new Date().getMonth() === 11 && (new Date().getDate() === 24 || new Date().getDate() === 25)")
  - for (var i = 0; i < 40; i++) {
    li
  - }
</template>

<style scoped>
.g-snows {
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding-left: 0 !important;
  background-image: linear-gradient(to bottom, navy, darkgray);
  opacity: 0.3;
  list-style-type: none;
  z-index: -1;
}
.g-snows > li {
  opacity: 0;
  position: absolute;
  top: 0;
  border-radius: 100%;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 100% auto;
  animation-name: snow-drop;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.g-snows > li:nth-child(1) {
  left: 112%;
  width: 3px;
  height: 3px;
  animation-duration: 5662ms;
  animation-delay: 3009ms;
  filter: blur(5px);
}
.g-snows > li:nth-child(2) {
  left: 15%;
  width: 7px;
  height: 7px;
  animation-duration: 6778ms;
  animation-delay: 313ms;
  filter: blur(2px);
}
.g-snows > li:nth-child(3) {
  left: 7%;
  width: 8px;
  height: 8px;
  animation-duration: 8652ms;
  animation-delay: 4982ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(4) {
  left: 72%;
  width: 12px;
  height: 12px;
  animation-duration: 8850ms;
  animation-delay: 1874ms;
  filter: blur(5px);
}
.g-snows > li:nth-child(5) {
  left: 57%;
  width: 4px;
  height: 4px;
  animation-duration: 5143ms;
  animation-delay: 1967ms;
  filter: blur(3px);
}
.g-snows > li:nth-child(6) {
  left: 103%;
  width: 2px;
  height: 2px;
  animation-duration: 10263ms;
  animation-delay: 1134ms;
  filter: blur(2px);
}
.g-snows > li:nth-child(7) {
  left: 7%;
  width: 0px;
  height: 0px;
  animation-duration: 5610ms;
  animation-delay: 4730ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(8) {
  left: 131%;
  width: 1px;
  height: 1px;
  animation-duration: 10031ms;
  animation-delay: 1797ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(9) {
  left: 67%;
  width: 0px;
  height: 0px;
  animation-duration: 7436ms;
  animation-delay: 2183ms;
  filter: blur(2px);
}
.g-snows > li:nth-child(10) {
  left: 74%;
  width: 3px;
  height: 3px;
  animation-duration: 8304ms;
  animation-delay: 1198ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(11) {
  left: 39%;
  width: 10px;
  height: 10px;
  animation-duration: 7316ms;
  animation-delay: 286ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(12) {
  left: 77%;
  width: 11px;
  height: 11px;
  animation-duration: 9246ms;
  animation-delay: 4938ms;
  filter: blur(3px);
}
.g-snows > li:nth-child(13) {
  left: 21%;
  width: 5px;
  height: 5px;
  animation-duration: 9526ms;
  animation-delay: 1407ms;
  filter: blur(5px);
}
.g-snows > li:nth-child(14) {
  left: 67%;
  width: 5px;
  height: 5px;
  animation-duration: 6820ms;
  animation-delay: 1377ms;
  filter: blur(5px);
}
.g-snows > li:nth-child(15) {
  left: 28%;
  width: 1px;
  height: 1px;
  animation-duration: 8779ms;
  animation-delay: 3153ms;
  filter: blur(4px);
}
.g-snows > li:nth-child(16) {
  left: 58%;
  width: 0px;
  height: 0px;
  animation-duration: 12076ms;
  animation-delay: 4017ms;
  filter: blur(3px);
}
.g-snows > li:nth-child(17) {
  left: 127%;
  width: 11px;
  height: 11px;
  animation-duration: 11650ms;
  animation-delay: 4249ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(18) {
  left: 2%;
  width: 8px;
  height: 8px;
  animation-duration: 11543ms;
  animation-delay: 2326ms;
  filter: blur(2px);
}
.g-snows > li:nth-child(19) {
  left: 8%;
  width: 5px;
  height: 5px;
  animation-duration: 7618ms;
  animation-delay: 1854ms;
  filter: blur(5px);
}
.g-snows > li:nth-child(20) {
  left: 36%;
  width: 5px;
  height: 5px;
  animation-duration: 10149ms;
  animation-delay: 3484ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(21) {
  left: 117%;
  width: 12px;
  height: 12px;
  animation-duration: 5219ms;
  animation-delay: 2973ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(22) {
  left: 74%;
  width: 9px;
  height: 9px;
  animation-duration: 7089ms;
  animation-delay: 2586ms;
  filter: blur(4px);
}
.g-snows > li:nth-child(23) {
  left: 71%;
  width: 7px;
  height: 7px;
  animation-duration: 7072ms;
  animation-delay: 565ms;
  filter: blur(5px);
}
.g-snows > li:nth-child(24) {
  left: 22%;
  width: 5px;
  height: 5px;
  animation-duration: 9272ms;
  animation-delay: 3083ms;
  filter: blur(4px);
}
.g-snows > li:nth-child(25) {
  left: 108%;
  width: 3px;
  height: 3px;
  animation-duration: 10769ms;
  animation-delay: 3823ms;
  filter: blur(4px);
}
.g-snows > li:nth-child(26) {
  left: 27%;
  width: 11px;
  height: 11px;
  animation-duration: 9807ms;
  animation-delay: 1097ms;
  filter: blur(3px);
}
.g-snows > li:nth-child(27) {
  left: 27%;
  width: 1px;
  height: 1px;
  animation-duration: 8561ms;
  animation-delay: 692ms;
  filter: blur(3px);
}
.g-snows > li:nth-child(28) {
  left: 50%;
  width: 2px;
  height: 2px;
  animation-duration: 10118ms;
  animation-delay: 2332ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(29) {
  left: 28%;
  width: 8px;
  height: 8px;
  animation-duration: 7500ms;
  animation-delay: 4571ms;
  filter: blur(5px);
}
.g-snows > li:nth-child(30) {
  left: 124%;
  width: 12px;
  height: 12px;
  animation-duration: 10798ms;
  animation-delay: 1430ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(31) {
  left: 68%;
  width: 9px;
  height: 9px;
  animation-duration: 10209ms;
  animation-delay: 1344ms;
  filter: blur(2px);
}
.g-snows > li:nth-child(32) {
  left: 73%;
  width: 0px;
  height: 0px;
  animation-duration: 8362ms;
  animation-delay: 1232ms;
  filter: blur(5px);
}
.g-snows > li:nth-child(33) {
  left: 87%;
  width: 2px;
  height: 2px;
  animation-duration: 7812ms;
  animation-delay: 2500ms;
  filter: blur(3px);
}
.g-snows > li:nth-child(34) {
  left: 75%;
  width: 1px;
  height: 1px;
  animation-duration: 7428ms;
  animation-delay: 335ms;
  filter: blur(2px);
}
.g-snows > li:nth-child(35) {
  left: 25%;
  width: 5px;
  height: 5px;
  animation-duration: 7538ms;
  animation-delay: 4170ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(36) {
  left: 120%;
  width: 12px;
  height: 12px;
  animation-duration: 5185ms;
  animation-delay: 2646ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(37) {
  left: 51%;
  width: 3px;
  height: 3px;
  animation-duration: 12458ms;
  animation-delay: 4171ms;
  filter: blur(4px);
}
.g-snows > li:nth-child(38) {
  left: 39%;
  width: 2px;
  height: 2px;
  animation-duration: 8959ms;
  animation-delay: 1851ms;
  filter: blur(2px);
}
.g-snows > li:nth-child(39) {
  left: 17%;
  width: 9px;
  height: 9px;
  animation-duration: 13842ms;
  animation-delay: 3059ms;
  filter: blur(6px);
}
.g-snows > li:nth-child(40) {
  left: 21%;
  width: 8px;
  height: 8px;
  animation-duration: 13310ms;
  animation-delay: 1814ms;
  filter: blur(5px);
}
@keyframes snow-drop {
  0% {
    transform: translate(0, 0);
    opacity: 0.5;
    margin-left: 0;
  }
  10% {
    margin-left: 15px;
  }
  20% {
    margin-left: 20px;
  }
  25% {
    transform: translate(0, 166.6666666667px);
    opacity: 0.75;
  }
  30% {
    margin-left: 15px;
  }
  40% {
    margin-left: 0;
  }
  50% {
    transform: translate(0, 333.3333333333px);
    opacity: 1;
    margin-left: -15px;
  }
  60% {
    margin-left: -20px;
  }
  70% {
    margin-left: -15px;
  }
  75% {
    transform: translate(0, 500px);
    opacity: 0.5;
  }
  80% {
    margin-left: 0;
  }
  100% {
    transform: translate(0, 666.6666666667px);
    opacity: 0;
  }
}
</style>
