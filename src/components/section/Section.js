import React from 'react';
import { TitleSection, SectionDiv } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionDiv>
    <TitleSection>{title}</TitleSection>
    {children}
  </SectionDiv>
);

export default Section;
