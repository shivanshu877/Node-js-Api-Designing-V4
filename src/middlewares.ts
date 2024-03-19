import { body, validationResult } from 'express-validator';

const handleInputErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(402).json({ errors: errors.array() })
    }
    next();
}
export default handleInputErrors;
