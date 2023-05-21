import {randomUUID} from 'crypto';
import sharp from 'sharp';

export class ImageSharp{
    async createThumb(buffer: any, width: number, height: number, fit: 'cover' | 'contain' | 'fill', colorBg: string){
        sharp(buffer).resize(width, height, {kernel: sharp.kernel.nearest, fit: fit, position: 'center', background: colorBg}).toFile(`./uploads/${randomUUID()}.png`)
    } //cria minitatura

    async resizeOriginalImage(buffer: any, width: number, height: number){
        sharp(buffer).resize(width, height).toFile(`./uploads/${randomUUID()}.png`)
    } //redimensiona a imagem

    async changeImageToGrayscale(buffer: any, width: number, height: number){
        sharp(buffer).grayscale().resize(width, height).toFile(`./uploads/${randomUUID()}.png`)
    } //muda para escala cinza
}