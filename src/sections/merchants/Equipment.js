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

export default function Equipment({ handleNext, handleBack }) {
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
        <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
          <CardHeader title="NEW ORDERS" sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }} />
          <CardContent padding={5}>
            <Stack direction={'row'} spacing={1}>
              <Stack spacing={1} sx={{ width: '100%' }}>
                <Typography component="p" sx={{ fontSize: '14px' }} paddingLeft={1} paddingRight={4}>
                  Product Name
                </Typography>
                <RHFTextField name="name1" label="" />
                <RHFTextField name="name2" label="" />
                <RHFTextField name="name3" label="" />
                <RHFCheckbox name="menuRequested" label="Clover Menu Requested" />
              </Stack>
              <Stack spacing={1}>
                <Stack direction={'row'} spacing={1}>
                  <Stack direction={'row'} spacing={1}>
                    <Stack spacing={1}>
                      <Typography component="p" sx={{ fontSize: '14px' }} paddingLeft={1} paddingRight={4}>
                        Network
                      </Typography>
                      <RHFTextField name="network1" label="" />
                      <RHFTextField name="network2" label="" />
                      <RHFTextField name="network3" label="" />
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="p" sx={{ fontSize: '14px' }} paddingLeft={1} paddingRight={4}>
                        Qty
                      </Typography>
                      <RHFTextField name="qty1" label="" />
                      <RHFTextField name="qty2" label="" />
                      <RHFTextField name="qty3" label="" />
                    </Stack>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <Stack spacing={1}>
                      <Typography component="p" sx={{ fontSize: '14px' }} paddingLeft={1} paddingRight={4}>
                        Price *
                      </Typography>
                      <RHFTextField
                        name="price1"
                        label=""
                        InputProps={{
                          startAdornment: <InputAdornment position="start">%</InputAdornment>,
                        }}
                      />
                      <RHFTextField
                        name="price2"
                        label=""
                        InputProps={{
                          startAdornment: <InputAdornment position="start">%</InputAdornment>,
                        }}
                      />
                      <RHFTextField
                        name="price3"
                        label=""
                        InputProps={{
                          startAdornment: <InputAdornment position="start">%</InputAdornment>,
                        }}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <Typography component="p" sx={{ fontSize: '14px' }} paddingLeft={1} paddingRight={4}>
                        Frequency
                      </Typography>
                      <RHFTextField name="frequency1" label="" />
                      <RHFTextField name="frequency2" label="" />
                      <RHFTextField name="frequency3" label="" />
                    </Stack>
                  </Stack>
                </Stack>
                <Typography
                  component="p"
                  sx={{ fontSize: '14px' }}
                  paddingRight={2}
                  fontStyle={'italic'}
                  textAlign={'end'}
                >
                  * Price does not include tax and shipping & handling
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
          <CardHeader
            title="SHIP EQUIPMENT TO"
            sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
          />
          <CardContent padding={5}>
            <Stack spacing={2}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="shipToAttention" label="Ship To Attention" />
                <RHFTextField name="shipToEmail" label="Ship To Email" />
              </Stack>
              <RHFTextField name="address1" label="Street Address 1" />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="address2" label="Street Address 1" />
                <RHFTextField name="city" label="City" />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="state" label="State" />
                <RHFTextField name="zip" label="Zip" />
              </Stack>
              <RHFTextField name="country" label="Country" />
            </Stack>
          </CardContent>
        </Card>
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
