import React, { useEffect, useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// import { projects } from '../../constants/constants';

import { proyectos } from '../../api/fetchProyecto';
const Projects = () => {
  const [projects, setprojects] = useState([])

  useEffect(async () => {
    const proy = await proyectos();
    setprojects(proy.data.proyectos)
  }, [])


  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Proyectos</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                {p.visit === '' ? null : <ExternalLinks target='_blank' href={p.visit}>Visitalo!</ExternalLinks>}
                <ExternalLinks href={p.source} target='_blank'>Codigo Fuente</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  )
}

export default Projects;