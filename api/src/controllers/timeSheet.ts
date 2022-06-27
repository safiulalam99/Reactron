import { Request, Response, NextFunction } from 'express'

import Time from '../models/TimeSheet'
import TimeService from '../services/TimeSheet'
import { BadRequestError } from '../helpers/apiError'

// POST /times
export const createTimeSheet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { Date, From, To, Duration, Rate, Internal_rate, User, Customer, Project, Activity, Exported, Billable, Tags, Hourly_rate, Fixed_rate, label_category, Account, VAT_ID, Type, Order_number, } = req.body

    const time = new Time({
      Date,
      From,
      To,
      Duration,
      Rate,
      Internal_rate,
      User,
      Customer,
      Project,
      Activity,
      Exported,
      Billable,
      Tags,
      Hourly_rate,
      Fixed_rate,
      label_category,
      Account,
      VAT_ID,
      Type,
      Order_number,
    })

    await TimeService.createm(time)
    res.json(time)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /times/:timeId
export const updateTimeSheet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const timeId = req.params.timeId
    const updatedTime = await TimeService.update(timeId, update)
    res.json(updatedTime)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /times/:timeId
export const deleteTimeSheet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await TimeService.deleteTimeSheet(req.params.timeId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /times/:timeId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await TimeService.findById(req.params.timeId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /times
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await TimeService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
