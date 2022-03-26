import jsonwebtoken from 'jsonwebtoken'
const { verify } = jsonwebtoken

const authMiddeware = async (req, res, next) => {

  if (req.method === "OPTIONS") {
    return next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1]

    if (token === 'null') {
      return res.status(401).json({ message: `User not authorized` })
    }

    const clientUser = verify(token, process.env.SECRET_KEY)
    req.user = clientUser
    next()
  } catch (e) {
    res.status(401).json({ message: `User not authorized` })
  }
}

export default authMiddeware