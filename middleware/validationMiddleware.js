//middleware : antara root dan callback
// request dari user
// respon dari server ke yang lain
// next kalau terpenuhi maka akan lanjut ke middleware selanjutnya jika tdk ada maka ke callback

const { validationResult } = require("express-validator");


const validationMiddleware = (req, res, next) => {
   const errors = validationResult(req);

   if (!errors.isEmpty())
     return res.status(422).json({
       errors: errors.mapped(),
     });
     next();
}

module.exports = validationMiddleware;