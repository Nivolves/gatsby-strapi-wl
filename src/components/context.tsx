import { createContext } from 'react';

import { IContext } from '../Types/ContextTypes';

const context = createContext<IContext>({ language: 'en' });

export default context;
