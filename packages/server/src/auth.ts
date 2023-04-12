import jwt from 'jsonwebtoken';


import { config } from './config';

export const getUser = async (token?: string) => {
    if (!token) return null;

    const decodedToken = jwt.verify(token.substring(4), config.JWT_SECRET);

};