import { Router } from 'express';
import { body, param, validationResult } from 'express-validator';
import handleInputErrors from './middlewares';
import { CreateNewProduct, GetAllProducts, GetaOneProduct, UpdateProduct, DeleteProduct } from '../src/handlers/product';
const router = Router();


router.get('/product', GetAllProducts)

router.get('/product/:id', GetaOneProduct)


router.put('/product/:id', body('name').isString(), handleInputErrors, UpdateProduct)


router.post('/product', body('name').isString().not().isEmpty(), handleInputErrors, CreateNewProduct);



router.delete('/product/:id', DeleteProduct)






router.get('/update', (req: Request, res: any) => {


});


router.get('/update/:id', param('id').exists().toInt().isInt({ min: 0 }), handleInputErrors, (req: Request, res: any) => {


});


router.put('/update/:id', param('id').exists().toInt(), (req: Request, res: any) => {


});


router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    handleInputErrors, (req: Request, res: any) => {

        return res.status(200).json({ msg: 'good' })

    });


router.delete('/update/:id', (req: Request, res: any) => {


});













router.get('/updatepoint', (req: Request, res: any) => {


});


router.get('/updatepoint/:id', (req: Request, res: any) => {


});


router.put('/updatepoint/:id', (req: Request, res: any) => {


});


router.post('/updatepoint',

    body('name').exists().isString(),
    body('desciripton').exists().isString(),
    body('updateID').exists().isString(),
    handleInputErrors,
    (req: Request, res: any) => {


    });


router.delete('/updatepoint/:id', (req: Request, res: any) => {


});


export default router;
