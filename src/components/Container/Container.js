import PropTypes from 'prop-types';
import { ContainerStyle } from './Container.styled';

export const Container = ({ children }) => (
  <ContainerStyle>{children}</ContainerStyle>
);

Container.propTypes = { 
    children: PropTypes.node, 
};