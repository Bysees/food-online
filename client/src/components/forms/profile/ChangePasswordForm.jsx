import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import cn from 'classnames'

import Input from '../fields/Input'

import Validate from '../Validate'
import { useChangePasswordMutation } from '../../../redux/RTKquery/auth'

import styles from '../form.module.scss'
import profileStyles from './profileForms.module.scss'


const ChangePasswordForm = () => {

  const { login, role } = useSelector(state => state.user)

  const { formState: { errors }, handleSubmit, register, getValues } = useForm({
    defaultValues: {
      login: login,
      password: 'qwer1555',
      passwordRepeat: 'qwer1555',
    }
  })

  const [changePassword, { isLoading, error: serverError }] = useChangePasswordMutation()

  const onSubmit = async (formData) => {
    const response = await changePassword({
      login: formData.login,
      password: formData.password,
      role: role
    })
    if (!response.error) {
      alert('Password has been changed')
    }
  }

  return (
    <form
      className={cn(styles.form, profileStyles.box)}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete='off'>

      <Input
        className={styles.field}
        name='login'
        label='Логин: '
        disabled

        register={register}
      />
      <Input
        className={styles.field}
        name='password'
        label='Новый Пароль: '
        placeholder='Придумайте новый пароль...'

        validate={Validate.password()}
        register={register}
        errors={errors}
      />
      <Input
        className={styles.field}
        name='passwordRepeat'
        label='Повторите пароль: '
        placeholder='Повторите новый пароль...'

        validate={Validate.passwordRepeat(getValues)}
        register={register}
        errors={errors}
        serverError={serverError?.data?.message}
      />

      <div className={styles.button}>
        <button disabled={isLoading}>Сохранить изменения</button>
      </div>
    </form>
  )
}

export default ChangePasswordForm