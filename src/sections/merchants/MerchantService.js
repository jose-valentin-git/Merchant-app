import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Typography, Box, Alert, Card, CardHeader, CardContent, InputAdornment, Radio } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
// import useAuth from '../../hooks/useAuth';
import useIsMountedRef from '../../hooks/useIsMountedRef';
// components
// import Iconify from '../../components/Iconify';
import {
  FormProvider,
  RHFTextField,
  RHFPhoneNumber,
  RHFCheckbox,
  RHFSelect,
  RHFRadioGroup,
} from '../../components/hook-form';

// ----------------------------------------------------------------------

export default function MerchantService({ handleNext, handleBack }) {
  const isMountedRef = useIsMountedRef();

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const RegisterSchema = Yup.object().shape({});

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      handleNext();
    } catch (error) {
      console.error(error);
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <Stack direction={'row'} spacing={2}>
          <Stack sx={{ width: '100%' }} direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
              <CardHeader
                title="AMERICAN EXPRESS"
                sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
              />
              <CardContent padding={5}>
                <Stack spacing={2}>
                  <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="span" fontWeight={600}>
                      Amex Program
                    </Typography>
                    <RHFRadioGroup
                      name="hasThirdPartyProvider"
                      options={[
                        { value: 'optBlue', label: 'Amex OptBlue' },
                        { value: 'ESA', label: 'Amex ESA' },
                      ]}
                    />
                  </Stack>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <RHFTextField name="amexESA" label="Amex ESA SE" />
                    <RHFTextField name="iataNumber" label="IATA/ARC Number" />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
              <CardHeader title="DISCOVER" sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }} />
              <CardContent padding={5}>
                <Stack spacing={2}>
                  <Typography component="span" fontWeight={600}>
                    Discover Program
                  </Typography>
                  <RHFRadioGroup
                    name="program"
                    options={[
                      { value: 'fullACQ', label: 'Discover Full ACQ' },
                      { value: 'EASI', label: 'Discover EASI' },
                    ]}
                  />
                  <RHFTextField name="discoverEASISE" label="Discover EASI SE" />
                  <Typography component="span" fontWeight={600}>
                    Discover Industry Options
                  </Typography>
                  <RHFCheckbox name="enableIncreAuto" label="Enable incremental Authorization" />
                  <RHFCheckbox name="debt" label="Debt Repayment Program" />
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Proceed
          </LoadingButton>
          <LoadingButton fullWidth size="large" variant="contained" onClick={() => handleBack()}>
            Back
          </LoadingButton>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
