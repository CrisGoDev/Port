import React from 'react';
import { DiFirebase, DiReact, DiVisualstudio, DiAngularSimple, DiMsqlServer, DiNodejs, DiJava, DiJavascript, DiHtml5, DiCss3 } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      He trabajado en todo el rango de distintos stack para la creación de aplicaciones web, para ser un un desarrollador completo
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiJavascript size="3rem" />
          <DiCss3 size="3rem" />
        </picture>
        <picture>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>

        <picture>
          <DiJava size="3rem" />
        </picture>
        <picture>
          <DiJavascript size="3rem" />
        </picture>
        <picture>
          <DiNodejs size="3em" />
        </picture>
        <picture>
          <DiMsqlServer size="3em" />
          <DiVisualstudio size="3em" />
        </picture>

        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiencia en bases de datos SQl y nosql<br />
            Asi como el entorno de .net para la creacion de .net y el uso de node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
