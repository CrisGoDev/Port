import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';




const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenido a <br />
          Mi Portafolio Personal
        </SectionTitle>
        <SectionText>
        Soy estudiantes de ingeniería en sistemas con afición en el desarrollo de aplicaciones web
        </SectionText>
        {/* <a href={require('../../resume/res.pdf')} download={res.pdf}>
        <Button onClick={()=>{
          
        }} >Obten mi Cv</Button>
        </a> */}

      </LeftSection>
    </Section>
  </>
);

export default Hero;