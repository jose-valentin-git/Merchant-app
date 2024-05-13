import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';

// ----------------------------------------------------------------------

RHFPhoneNumber.propTypes = {
  name: PropTypes.string,
};

export default function RHFPhoneNumber({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <MuiTelInput {...field} fullWidth error={!!error} helperText={error?.message} {...other} />
      )}
    />
  );
}
