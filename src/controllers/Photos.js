import multer from 'multer';
import multerConfig from '../config/multer';
import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photos');

class PhotosController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const photo = await Photo.create({ originalname, filename, aluno_id });

        return res.json(photo);
      } catch (e) {
        return res.status(404).json({
          errors: ["Aluno doesn't exist"],
        });
      }
    });
  }
}

export default new PhotosController();
