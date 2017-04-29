const $ = window.$

const HttpRequest = {
  post: (path, params) => {
    const form = $('<form></form>')
    form.attr('method', 'post')
    form.attr('action', path)

    for (const key in params) {
      const field = $('<input></input>')
      field.attr('type', 'hidden')
      field.attr('name', key)
      field.attr('value', params[key])
      form.append(field)
    }

    $(window.document.body).append(form)
    form.submit()
  },

  delete: (path) => {
    const params = {_method: 'delete'}
    HttpRequest.post(path, params)
  },
}

export default HttpRequest
