/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint */
import mongoose, { Document } from 'mongoose'

export type TimeSheetDocument = Document & {
  Date: string
  From: number
  To: string
  Duration: number
  Rate: number
  Internal_rate: number
  User: string
  Customer: string
  Project: string
  Activity: string
  Exported: string
  Billable: string
  Tags: string
  Hourly_rate: string
  Fixed_rate: string
  label_category: string
  Account: string
  VAT_ID: string
  Type: string
  Order_number: string

  

}

const TimeSchema = new mongoose.Schema({
  Date: {
    type: String,
  },
  From: {
    type: String,
  },
  To: {
    type: String,
  },
  Duration: {
    type: Number,
  },
  Rate: {
    type: Number,
  },
  Internal_rate: {
    type: Number,
  },
  User: {
    type: String,
  },
  Customer: {
    type: String,
  },
  Project: {
    type: String,
  },
  Activity: {
    type: String,
  },
  Billable: {
    type: String,
  },
  Tags: {
    type: String,
  },
  Hourly_rate: {
    type: String,
  },
  Fixed_rate: {
    type: String,
  },
  Type: {
    type: String,
  },
  label_category: {
    type: String,
  },
  Account: {
    type: String,
  },
  VAT_ID: {
    type: String,
  },
  Order_number: {
    type: String,
  },

})

export default mongoose.model<TimeSheetDocument>('TimeSheet', TimeSchema)
