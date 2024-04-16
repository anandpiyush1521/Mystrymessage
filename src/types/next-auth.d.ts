import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface User{
        _id?: string; //optional but data type is string
        isVerified?: boolean; 
        isAcceptingMessages?: boolean;
        username?: string;
    }
    interface Session{
        user: {
            _id?: string;
            isVerified?: boolean; 
            isAcceptingMessages?: boolean;
            username?: string;
        } & DefaultSession['user']
    }S
}

declare module 'next-auth/jwt'{
    interface JWT{
        _id?: string;
        isVerified?: boolean; 
        isAcceptingMessages?: boolean;
        username?: string;
    }
}