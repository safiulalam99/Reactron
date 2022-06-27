import express from 'express'

import {
  createTimeSheet,
  findById,
  deleteTimeSheet,
  findAll,
  updateTimeSheet,
} from '../controllers/timeSheet'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.get('/:timeId', findById)
router.put('/:timeId', updateTimeSheet)
router.delete('/:timeId', deleteTimeSheet)
router.post('/', createTimeSheet)

export default router
