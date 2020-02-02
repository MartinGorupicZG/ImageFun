import * as THREE from 'three';
import { TweenMax } from 'gsap';
import hoverEffect from 'hover-effect';

new hoverEffect({
    parent : document.querySelector('.distortion'),
    intensity: 0.2,
    image1 : './img1.jpg',
    image2 : './img2.jpg',
    displacementImage : './diss.png'
})