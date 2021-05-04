import mobile from './mobile'
const templates = {
    ...mobile
}
const templateArray = []
Object.keys(mobile).forEach(key => {
    if (mobile[key].dataTpl) templateArray.push(mobile[key].dataTpl)
})
export {
    templateArray
}
export default templates