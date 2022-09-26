import alert from 'sweetalert'

export function useAlert () {
  const LoginAlert = (res) => {
    if (res === 'Usuario incorrecto') {
      alert({
        title: res,
        icon: 'warning'
      })
      return null
    }
    if (res === 'Contraseña incorrecta') {
      alert({
        title: res,
        icon: 'warning'
      })
      return null
    }
    alert({
      title: '¡Todo correcto!',
      icon: 'success',
      timer: 2000
    })
  }

  const RegisterAlert = (res) => {
    if (res === 'Nombre de usuario existente') {
      alert({
        title: res,
        icon: 'warning'
      })
      return null
    }
    if (res === 'Email existente') {
      alert({
        title: res,
        icon: 'warning'
      })
      return null
    }
    alert({
      title: 'Usuario nuevo',
      icon: 'success',
      timer: 2000
    })
  }

  return {
    LoginAlert,
    RegisterAlert
  }
}
