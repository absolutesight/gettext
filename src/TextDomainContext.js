import React from 'react';
import buildTextDomain from './buildTextDomain';

const TextDomainContext = React.createContext(buildTextDomain({}, 'n != 1'));

export default TextDomainContext;
