import { Router } from 'express';
import { body, param, validationResult } from 'express-validator';
import handleInputErrors from './middlewares';
const router = Router();


router.get('/product', (req: Request, res: any) => {
    res.json({ message: 'hello' });
    res.status(200)
});


router.get('/product/:id', (req: Request, res: any) => {


});


router.put('/product/:id', body('name').isString(), handleInputErrors, (req: Request, res: any) => {

    return res.status(200).json({ msg: 'good' })


}
);


router.post('/product', body('name').isString(), handleInputErrors, (req, res) => {

    return res.status(200).json({ msg: 'good' })
});


router.delete('/product/:id', param('id').exists().toInt(), handleInputErrors, (req, res) => {
    return res.status(200).json({ msg: 'good' })

});






router.get('/update', (req, res) => {


});


router.get('/update/:id', param('id').exists().toInt(), body('title').optional().isString(),
    body('title').optional().isString(), body('body').optional().isString(),
    body('status').matches(/^(IN_PROGRESS | SHIPPED | DEPRECATED)$/).withMessage('Status must be either accept, reject, or declined'),
    handleInputErrors, (req, res) => {


    });


router.put('/update/:id', param('id').exists().toInt(), (req, res) => {


});


router.post('/update', (req, res) => {


});


router.delete('/update/:id', (req, res) => {


});













router.get('/updatepoint', (req, res) => {


});


router.get('/updatepoint/:id', (req, res) => {


});


router.put('/updatepoint/:id', (req, res) => {


});


router.post('/updatepoint', (req, res) => {


});


router.delete('/updatepoint/:id', (req, res) => {


});


export default router;
