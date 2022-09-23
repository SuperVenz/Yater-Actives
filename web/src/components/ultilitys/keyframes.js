import { keyframes } from 'styled-components';

export const slideInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  20% {
    opacity: 1;
    transform: translateY(0px);
  }
  85% {
    opacity: 1;
    transform: translateY(0px);
  }
 
`;

export const fade = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}

`

export const rgb = keyframes`
  0%,
  100% {
    color: red;
  }
  12.5% {
    color: orange;
  }
  25% {
    color: yellow;
  }
  37.5% {
    color: lime;
  }
  50% {
    color: aqua;
  }
  62.5% {
    color: deepskyblue;
  }
  75% {
    color: fuchsia;
  }
  87.5% {
    color: purple;
  }

`

export const slidein = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0%);
}` 

const change = keyframes`
  0% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
`;

const entry = keyframes`
  0% {
    left: 0;
    transform: scale(0.8);
  }
  100% {
    left: 0;
    transform: scale(1);
  }
`;

const exit = keyframes`
  0% {
    left: 0;
    opacity: 1;
    transform: scale(1);
  }
  99% {
    left: 0;
    opacity: 0;
    transform:  scale(0.8);
  }
  100% {
    left: 100%;
    opacity: 0;
    transform:scale(0.8);
  }
`;
const simpleEntry = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const deadSimpleEntry = keyframes`
  from {
    opacity: .25;
  }
`;

const change2 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;