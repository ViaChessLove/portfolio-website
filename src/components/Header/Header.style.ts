import { RiLightbulbLine } from 'react-icons/ri';
import { TbLanguage } from 'react-icons/tb';
import styled from 'styled-components';

export const style = `
  font-size: 28px;
  margin-left: 5px;
  &:hover{
    cursor: pointer;
    opacity: 0.9;
  }
`

export const ThemeSwitcher = styled(RiLightbulbLine)`
  ${style}
`

export const LanguageSwitcher = styled(TbLanguage)`
  ${style}
`