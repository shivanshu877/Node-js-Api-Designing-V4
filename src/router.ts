import { Router } from 'express';
import { body, param, validationResult } from 'express-validator';
import handleInputErrors from './middlewares';
import { CreateNewProduct, GetAllProducts, GetaOneProduct, UpdateProduct, DeleteProduct } from '../src/handlers/product';
import { GetAllUpdate, CreateUpdate, GetOneUpdate, UpdateUpdate, DeleteUpdate } from '../src/handlers/update';

const router = Router();


router.get('/product', GetAllProducts)

router.get('/product/:id', GetaOneProduct)


router.put('/product/:id', body('name').isString(), handleInputErrors, UpdateProduct)


router.post('/product', body('name').isString().not().isEmpty(), handleInputErrors, CreateNewProduct);



router.delete('/product/:id', DeleteProduct)






router.get('/update', GetAllUpdate)


router.get('/update/:id', GetOneUpdate)




router.put('/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
    body('version').optional(), UpdateUpdate)


router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productID').exists().isString(),
    handleInputErrors, CreateUpdate)

router.delete('/update/:id', DeleteUpdate)














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
