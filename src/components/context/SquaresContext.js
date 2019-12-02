import React, { createContext } from 'react';

export const SquaresContext = React.createContext([]);
export const SquaresProvider = SquaresContext.Provider;
export const SquaresConsumer = SquaresContext.Consumer;
export default SquaresContext;
