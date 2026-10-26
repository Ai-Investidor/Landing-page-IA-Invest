import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Registro único dos plugins. Tudo que anima ligado ao scroll importa daqui.
gsap.registerPlugin(ScrollTrigger, useGSAP);

// No celular a barra de endereço some/aparece e muda a altura da janela — sem isso a seção presa "pula".
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, useGSAP };
