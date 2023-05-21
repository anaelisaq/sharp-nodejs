import 'dotenv/config'
import express, {Request, Response} from 'express'
import multer, { memoryStorage } from 'multer'
import { ImageSharp } from './sharp'

const app = express()
const PORT = process.env.PORT || 9090

const uploadMulter = multer({
    storage: memoryStorage() //armazenamento in memory
})

const uploadSharp = new ImageSharp()

app.post('/', uploadMulter.single('file'), async (req: Request, res: Response) => {
    // await uploadSharp.createThumb(req.file?.buffer, 200, 200, 'contain','#000')
    // await uploadSharp.resizeOriginalImage(req.file?.buffer, 1280, 920)
    await uploadSharp.changeImageToGrayscale(req.file?.buffer, 1280, 920)
    res.json({
        message: `File ${req.file?.originalname} was send`
    })
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})