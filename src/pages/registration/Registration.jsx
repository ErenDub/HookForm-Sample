import { Paper, Stack, Typography } from '@mui/material'
import * as yup from 'yup'
import { HookForm } from '../../components/hookForm/HookForm'
import regJson from './../../json/registration.json'
const schema = yup
  .object()
  .shape({
    name: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    birthDay: yup.string().required('Required'),
    idNumber: yup
      .number()
      .test('len', 'Minimum number of symbols 11', (val) => {
        if (val) return val.toString().length === 11
      })
      .typeError('Must be number')
      .required('Required'),
    mobileNumber: yup
      .string()
      .test('len', 'Minimum number of Stybols 9', (val) => {
        if (val) return val.toString().length === 9
      })
      .typeError('Must be number')
      .required('Required'),
    password: yup
      .string()
      .test('len', 'Minimum number of Stybols 8', (val) => {
        if (val) return val.toString().length >= 8
      })
      .required('Required'),
    eMail: yup.string().email('Must be E-mail').required('Required'),
    gender: yup.string().required('Required'),
    repeatePassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords does not match')
      .required('Required'),
  })
  .required()

export const Registration = () => {
  return (
    <>
      <Stack direction="row" justifyContent="center" mt={2} mb={2} width="100%">
        <Paper
          sx={{
            width: { xs: '300px', sm: '400px', lg: '600px' },
            p: 3,
            boxShadow: 8,
            borderRadius: '20px',
            background: '#e2e2e2',
          }}
        >
          <Stack
            direction={{ sm: 'row', xs: 'column' }}
            justifyContent="space-between"
          >
            <Typography variant="h5" sx={{ py: 1 }}>
              რეგისტრაცია
            </Typography>
          </Stack>
          <HookForm json={regJson} schema={schema} button="Registration" />
        </Paper>
      </Stack>
    </>
  )
}
