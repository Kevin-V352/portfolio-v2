import { createContext } from 'react';
import { Context } from '../shared/interfaces/global-interfaces';

export const GlobalContex = createContext<Context | null>(null);
export const { Provider } = GlobalContex;
