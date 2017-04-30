import _ from 'lodash'

_.mixin({
  camelcaseKeys: (obj) => {
    const newObj = _.mapKeys(_.mapValues(obj, (value) => {
      return _.isObjectLike(value) ? _.camelcaseKeys(value) : value
    }), (value, key) => {
      return _.camelCase(key)
    })

    return _.isArray(obj) ? _.toArray(newObj) : newObj
  },
  snakecaseKeys: (obj) => {
    const newObj = _.mapKeys(_.mapValues(obj, (value) => {
      return _.isObjectLike(value) ? _.snakecaseKeys(value) : value
    }), (value, key) => {
      return _.snakeCase(key)
    })

    return _.isArray(obj) ? _.toArray(newObj) : newObj
  },
})
