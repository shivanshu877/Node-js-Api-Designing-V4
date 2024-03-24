
import prisma from '../db'
export const CreateNewProduct = async (req: any, res: any) => {
  const Product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToID: req.user.id
    }
  })
  res.json({ Product })
}


export const GetAllProducts = async (req: any, res: any) => {
  const Products = await prisma.product.findMany({
    where: {
      belongsToID: req.user.id
    }
  })
  res.json({ Products })
}

export const GetaOneProduct = async (req: any, res: any) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.id
    }
  })
  res.json({ product })

}

export const UpdateProduct = async (req: any, res: any) => {
  const Product = await prisma.product.update({
    where: {
      id: req.params.id,
      belongsToID: req.user.id
    },
    data: {
      name: req.body.name
    }

  })
  res.json({ Product })
}



export const DeleteProduct = async (req: any, res: any) => {
  const Product = await prisma.product.delete({
    where: {
      id: req.params.id,
      belongsToID: req.user.id
    }
  })

  res.json({ Product })
}
