import TimeSheet, { TimeSheetDocument } from '../models/TimeSheet'
import { NotFoundError } from '../helpers/apiError'

const create = async (time: TimeSheetDocument): Promise<TimeSheetDocument> => {
  return time.save()
}
const createm = async (time: TimeSheetDocument): Promise<TimeSheetDocument> => {
  // @ts-ignore
  return time.insertMany()
}

const findById = async (timeId: string): Promise<TimeSheetDocument> => {
  const foundTimeSheet = await TimeSheet.findById(timeId)

  if (!foundTimeSheet) {
    throw new NotFoundError(`time ${timeId} not found`)
  }

  return foundTimeSheet
}

const findAll = async (): Promise<TimeSheetDocument[]> => {
  return TimeSheet.find().sort({ name: 1, publishedYear: -1 })
}

const update = async (
  timeId: string,
  update: Partial<TimeSheetDocument>
): Promise<TimeSheetDocument | null> => {
  const foundTimeSheet = await TimeSheet.findByIdAndUpdate(timeId, update, {
    new: true,
  })

  if (!foundTimeSheet) {
    throw new NotFoundError(`time ${timeId} not found`)
  }

  return foundTimeSheet
}

const deleteTimeSheet = async (timeId: string): Promise<TimeSheetDocument | null> => {
  const foundTimeSheet = TimeSheet.findByIdAndDelete(timeId)

  if (!foundTimeSheet) {
    throw new NotFoundError(`time ${timeId} not found`)
  }

  return foundTimeSheet
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteTimeSheet,
  createm
}
