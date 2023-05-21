/* 声明文件
 * typings 同名文件
 */
import axios from 'axios'
import express from 'express'

const app = express()

const router = express.Router()

app.use('./api', router)

router.get('./api', (req, res) => {
  res.json({
    code: 200,
  })
})

app.listen(9000, () => {
  console.log('9000')
})
