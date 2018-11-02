import { Sticker } from './sticker';
import { STICKERS } from '../assets/enviroments/mock/stickers-mock';

export class User {
    public userId: string;
    public profilePicture: string;
    public name: string;
    public lastName: string;
    public user: string;
    public password: string;
    public stickersList: Sticker[] = STICKERS;
}

