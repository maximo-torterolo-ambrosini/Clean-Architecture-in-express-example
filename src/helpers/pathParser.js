const removeSlash = /\/+/g

const parsePath = (path) => path.replaceAll(removeSlash, '')

export default parsePath
export { parsePath, removeSlash }
