import prisma from '../db'


export const GetAllUpdate = async (req: any, res: any) => {
  const Products = await prisma.product.findMany({
    where: {
      belongsToID: req.user.id
    },
    include: {
      Update: true
    }
  })
  const updates = Products.reduce((allUpdates: any, product: any) => {
    return [...allUpdates, ...product.Update]
  }, [])
  res.json({ updates })
  res.json({ Products })
}

export const GetOneUpdate = async (req: any, res: any) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id
    }
  })

  res.json({ data: update })
}
export const CreateUpdate = async (req: any, res: any) => {

  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productID
    }
  })

  if (!product) {
    return res.json({ msg: 'product not found' })
  }
  const Update = await prisma.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      product: { connect: { id: product.id } }
    }
  })


  res.json({ Update })
}



export const UpdateUpdate = async (req: any, res: any) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToID: req.user.id,
    },
    include: {
      Update: true
    }
  })

  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.Update]
  }, [])

  const match = updates.find(update => update.id === req.params.id)

  if (!match) {
    // handle this
    return res.json({ message: 'nope' })
  }


  const updatedUpdate = await prisma.update.update({
    where: {
      id: req.params.id
    },
    data: req.body
  })

  res.json({ data: updatedUpdate })
}

export const DeleteUpdate = async (req: any, res: any) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToID: req.user.id,
    },
    include: {
      Update: true
    }
  })

  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.Update]
  }, [])

  const match = updates.find(update => update.id === req.params.id)

  if (!match) {
    // handle this
    return res.json({ message: 'nope' })
  }

  const deleted = await prisma.update.delete({
    where: {
      id: req.params.id
    }
  })

  res.json({ data: deleted })
}
