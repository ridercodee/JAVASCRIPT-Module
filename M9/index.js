import chalk from 'chalk';
import { logObject } from './logging.js';


const employee = { 
  id: 0,
  email: "lauren_shaffer@globomantics.com",
  firstName: "lauren",
  lastName: "shaffer",
  salaryUSD: 246463,
  localCurrency: "PEN",
  dateBirth: "1988-02-08",
  startDate: "2006-02-04",
  isActive: true
};  

logObject(employee);
