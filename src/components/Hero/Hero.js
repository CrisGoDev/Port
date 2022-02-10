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
        <form method='get' action='res.pdf' target='_blank'>
          <Button>Descarga mi CV</Button>
        </form>

      </LeftSection>
    </Section>
  </>
);

export default Hero;