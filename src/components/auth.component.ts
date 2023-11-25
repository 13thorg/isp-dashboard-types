import { verify, sign, SignOptions } from 'jsonwebtoken';
import { TokenPayloadType } from '../types/token.interface';

class Token {
    Encode(data: TokenPayloadType, options?: SignOptions) {
        return sign(data, process.env.SECRET as string, options)
    }

    Decode(token: string): Promise<TokenPayloadType> {
        return new Promise((resolve, reject) => verify(token, process.env.SECRET as string, (err: any, decode: any) => {
            if (err) reject(err)
            else resolve(decode as any)
        }))
    }
}

const JWTToken = new Token();
export default JWTToken