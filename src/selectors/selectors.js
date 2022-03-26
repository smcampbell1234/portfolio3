import {demos} from "../data/demoData.js"
/*
 * DEMO DETAIL SELECTOR
 * gets demo object using id or title
 * @params id - numb
 * @params title - string
 * @returns - demo object
 */
const getDemo = (id = null, title = null) => {
  // sentinel, no id or title, return nothing
  if (!(id || title)) return null
  if (id) // get with id
    return demos.find(demo => demo.id === id)
  else if (title) // get with title
    return demos.find(demo => demo.title === title)
  // fail safe, return nothing
  return null
}

export {
  getDemo
}