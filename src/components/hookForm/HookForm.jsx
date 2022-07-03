import {
  Stack,
  Typography,
  Button,
  TextField,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from '@mui/material'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/system'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export const HookForm = ({ json, schema, button }) => {
  // const navigate = useNavigate();
  const { register, control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    console.log(data)
  }
  const nestedInputs = (item) => {
    return (
      <>
        {item.type === 'text' && (
          <>
            <Controller
              name={item.name}
              control={control}
              inputRef={register}
              rules={{ required: 'სავალდებულო ველი' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  sx={{ borderColor: 'red' }}
                  fullWidth
                  {...field}
                  label={item.label}
                  type={item.type}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </>
        )}

        {item.type === 'password' && (
          <>
            <Controller
              name={item.name}
              control={control}
              inputRef={register}
              rules={{ required: 'სავალდებულო ველი' }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <TextField
                    sx={{ borderColor: 'red' }}
                    fullWidth
                    {...field}
                    label={item.label}
                    type={item.type}
                    error={!!error}
                    helperText={error?.message}
                  />
                </>
              )}
            />
          </>
        )}

        {item.type === 'number' && (
          <>
            <Controller
              name={item.name}
              control={control}
              inputRef={register}
              rules={{ required: 'სავალდებულო ველი' }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <TextField
                    fullWidth
                    {...field}
                    label={item.label}
                    type={item.type}
                    error={!!error}
                    helperText={error?.message}
                  />
                </>
              )}
            />
          </>
        )}
        {item.type === 'mail' && (
          <>
            <Controller
              name={item.name}
              control={control}
              inputRef={register}
              rules={{ required: 'სავალდებულო ველი' }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <TextField
                    fullWidth
                    {...field}
                    label={item.label}
                    type={item.type}
                    error={!!error}
                    helperText={error?.message}
                  />
                </>
              )}
            />
          </>
        )}
        {item.type === 'date' && (
          <>
            <Controller
              name={item.name}
              control={control}
              inputRef={register}
              rules={{ required: 'სავალდებულო ველი' }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <TextField
                    fullWidth
                    {...field}
                    label={item.label}
                    type={item.type}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={!!error}
                    helperText={error?.message}
                  />
                </>
              )}
            />
          </>
        )}
        {item.type === 'radio' && (
          <>
            <Controller
              name={item.name}
              control={control}
              inputRef={register}
              rules={{ required: 'სავალდებულო ველი' }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    label={item.label}
                    type={item.type}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={!!error}
                    helperText={error?.message}
                    {...field}
                  >
                    {item.item.map((e) => (
                      <FormControlLabel
                        value={e.value}
                        control={<Radio />}
                        error={!!error}
                        helperText={error?.message}
                        type="radio"
                        label={e.name}
                      />
                    ))}
                  </RadioGroup>
                  {error && (
                    <>
                      <Typography fontSize="13px" color="error">
                        {error?.message}
                      </Typography>
                    </>
                  )}
                </>
              )}
            />
          </>
        )}

        {item.type === 'enum' && (
          <>
            <Controller
              name={item.name}
              control={control}
              inputRef={register}
              render={({ field, fieldState: { error } }) => (
                <>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      {item.label}
                    </InputLabel>
                    <Select
                      {...field}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label={item.label}
                    >
                      {item.options.map((e, i) => (
                        <MenuItem key={i} value={e.label}>
                          {e.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {error && (
                    <Typography fontSize="13px" color="error">
                      {error?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </>
        )}
      </>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {json.properties.map((item, i) => {
          return (
            <Box mt={2} key={i}>
              {nestedInputs(item)}
              {item.type === 'object' && (
                <>
                  <Stack
                    direction={{
                      xs: 'column',
                      md: 'column',
                      lg: 'row',
                    }}
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    {item.properties.map((item, i) => {
                      return (
                        <Box width="100%" key={i}>
                          {nestedInputs(item)}
                        </Box>
                      )
                    })}
                  </Stack>
                </>
              )}
            </Box>
          )
        })}
        <Stack direction="row" justifyContent="flex-end" mt={2}>
          <Button type="submit">{button ?? 'Submit'}</Button>
        </Stack>
      </form>
    </>
  )
}
