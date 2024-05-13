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

export default function BankingAndProcessing({ handleNext, handleBack }) {
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
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="DEPOSIT BANK ACCOUNT"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={2}>
                <RHFTextField name="bankName" label="Bank Name" />
                <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ fontSize: '14px' }} paddingLeft={2} paddingRight={4}>
                    Account Type
                  </Typography>
                  <RHFRadioGroup
                    name="accountType"
                    options={[
                      { value: 'checking', label: 'Checking' },
                      { value: 'saving', label: 'Saving' },
                    ]}
                  />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="routingNumber" label="Routing Number" />
                  <RHFTextField name="accountNumber" label="Account Number" />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="DEPOSIT BANK ACCOUNT"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Typography component="p" sx={{ fontSize: '14px' }} paddingLeft={2} paddingRight={4}>
                Withdrawal account is not required if it is the same as the Deposit account.
              </Typography>
              <Stack spacing={2}>
                <RHFTextField name="bankName" label="Bank Name" />
                <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ fontSize: '14px' }} paddingLeft={2} paddingRight={4}>
                    Account Type
                  </Typography>
                  <RHFRadioGroup
                    name="accountType"
                    options={[
                      { value: 'checking', label: 'Checking' },
                      { value: 'saving', label: 'Saving' },
                    ]}
                  />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="routingNumber" label="Routing Number" />
                  <RHFTextField name="accountNumber" label="Account Number" />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="PROCESSING VOLUME"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={3}>
                <RHFTextField
                  name="averageMonthlyCardVolumn"
                  label="Average Monthly Card Volumn"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    endAdornment: <InputAdornment position="start">/month</InputAdornment>,
                  }}
                />
                <RHFTextField
                  name="averageTransactionAmount"
                  label="Average Transaction Amount"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="DEPOSIT BANK ACCOUNT"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Typography component="h6" paddingRight={4}>
                On average, Products/Services are delivered in
              </Typography>
              <RHFRadioGroup
                name="accountType"
                options={[
                  { value: 'same', label: 'Same Day' },
                  { value: '0/7', label: '0-7 Days' },
                  { value: '8/14', label: '8-14 Days' },
                  { value: '15/30', label: '15-30 Days' },
                  { value: '30+', label: '30+ Days' },
                ]}
              />
            </CardContent>
          </Card>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="MODE OF TRANSACTION"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={3}>
                <RHFTextField
                  name="inPerson"
                  label="In Person"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">%</InputAdornment>,
                  }}
                />
                <RHFTextField
                  name="telephone"
                  label="Telephone"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
                <RHFTextField
                  name="online"
                  label="Online"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
                <Typography component="h6" paddingRight={4} textAlign={'center'}>
                  Must total 100%
                </Typography>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="THIRD PARTY PROVIDER"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack>
                <Typography component="p" paddingRight={4}>
                  <Typography component="span" fontWeight={600}>
                    Do you use any third party provider (TPP) to store, process or transmit cardholder data?
                  </Typography>
                  (Examples include but are not limited to web hosting companies, Electronic Data Capture, Loyalty
                  programs, software)
                </Typography>
                <RHFRadioGroup
                  name="hasThirdPartyProvider"
                  options={[
                    { value: 'true', label: 'Yes' },
                    { value: 'false', label: 'No' },
                  ]}
                />
                <Typography component="span" paddingRight={4}>
                  If so, please provide third party provider information:
                </Typography>
                <Stack spacing={2}>
                  <RHFTextField name="TPPName" label="TPP Name" />
                  <RHFTextField name="TPPEmail" label="TPP Email" />
                  <RHFTextField name="TPPPhone" label="TPP Phone" />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
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
