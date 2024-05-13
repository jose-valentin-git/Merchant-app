import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Typography, Box, Alert, Card, CardHeader, CardContent, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
// import useAuth from '../../hooks/useAuth';
import useIsMountedRef from '../../hooks/useIsMountedRef';
// components
// import Iconify from '../../components/Iconify';
import { FormProvider, RHFTextField, RHFPhoneNumber, RHFCheckbox, RHFSelect } from '../../components/hook-form';

// ----------------------------------------------------------------------

export default function OwnerInfo({ handleNext, handleBack }) {
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
          <CardHeader
            title="BUSINESS OWNER INFORMATION"
            sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
          />
          <CardContent padding={5}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent={'space-between'}>
              <Stack spacing={2} sx={{ width: '100%' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="firstName" label="First name" />
                  <RHFTextField name="lastName" label="Last name" />
                </Stack>
                <RHFSelect name="title" label="Title">
                  <option value="ceo">CEO</option>
                  <option value="cfo">CFO</option>
                  <option value="coo">COO</option>
                  <option value="llc member">LLC Member</option>
                  <option value="owner">Owner</option>
                  <option value="partner">Partner</option>
                  <option value="president">President</option>
                  <option value="secretary">Secretary</option>
                  <option value="treasurer">Treasurer</option>
                  <option value="vice preseident">Vice President</option>
                </RHFSelect>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField
                    name="%ownership"
                    label="% Ownership"
                    InputProps={{
                      endAdornment: <InputAdornment position="start">%</InputAdornment>,
                    }}
                  />
                  <Stack direction="row" sx={{ width: '100%' }} alignItems={'center'} justifyContent={'flex-end'}>
                    <Typography component="div" sx={{ fontSize: '14px' }} paddingX={2}>
                      Personal Guarantee
                    </Typography>
                    <RHFCheckbox name="personalGuarantee" label="Yes" />
                  </Stack>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="SSN" label="SSN" />
                  <RHFTextField name="dateOfBirth" label="Date of Birth" />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="mobilePhone" label="Mobile Phone" />
                  <RHFTextField name="email" label="Email" />
                </Stack>
              </Stack>
              <Stack spacing={2} sx={{ width: '100%' }}>
                <RHFTextField name="mailingStreetAddress1" label="Street Address 1" />
                <Stack direction={'row'} spacing={4}>
                  <RHFTextField name="mailingStreetAddress2" label="Street Address 2" />
                  <RHFTextField name="mailingCity" label="City" />
                </Stack>
                <Stack direction={'row'} spacing={4}>
                  <RHFTextField name="mailingState" label="State" />
                  <RHFTextField name="mailingZip" label="ZIP" />
                </Stack>
                <RHFTextField name="mailingCountry" label="Country" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
          <CardHeader
            title="ADDITIONAL BUSINESS INFORMATION 1"
            sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
          />
          <CardContent padding={5}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent={'space-between'}>
              <Stack spacing={2} sx={{ width: '100%' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="firstName" label="First name" />
                  <RHFTextField name="lastName" label="Last name" />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField
                    name="%ownership"
                    label="% Ownership"
                    InputProps={{
                      endAdornment: <InputAdornment position="start">%</InputAdornment>,
                    }}
                  />
                  <RHFTextField name="SSN" label="SSN" />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="dateOfBirth" label="Date of Birth" />
                  <RHFTextField name="mobilePhone" label="Mobile Phone" />
                </Stack>
              </Stack>
              <Stack spacing={2} sx={{ width: '100%' }}>
                <RHFTextField name="mailingStreetAddress1" label="Street Address 1" />
                <Stack direction={'row'} spacing={4}>
                  <RHFTextField name="mailingStreetAddress2" label="Street Address 2" />
                  <RHFTextField name="mailingCity" label="City" />
                </Stack>
                <Stack direction={'row'} spacing={4}>
                  <RHFTextField name="mailingState" label="State" />
                  <RHFTextField name="mailingZip" label="ZIP" />
                </Stack>
                <RHFTextField name="mailingCountry" label="Country" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
          <CardHeader
            title="ADDITIONAL BUSINESS INFORMATION 2"
            sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
          />
          <CardContent padding={5}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent={'space-between'}>
              <Stack spacing={2} sx={{ width: '100%' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="firstName-2" label="First name" />
                  <RHFTextField name="lastName-2" label="Last name" />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField
                    name="%ownership-2"
                    label="% Ownership"
                    InputProps={{
                      endAdornment: <InputAdornment position="start">%</InputAdornment>,
                    }}
                  />
                  <RHFTextField name="SSN" label="SSN" />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="dateOfBirth-2" label="Date of Birth" />
                  <RHFTextField name="mobilePhone-2" label="Mobile Phone" />
                </Stack>
              </Stack>
              <Stack spacing={2} sx={{ width: '100%' }}>
                <RHFTextField name="mailingStreetAddress1-2" label="Street Address 1" />
                <Stack direction={'row'} spacing={4}>
                  <RHFTextField name="mailingStreetAddress2-2" label="Street Address 2" />
                  <RHFTextField name="mailingCity-2" label="City" />
                </Stack>
                <Stack direction={'row'} spacing={4}>
                  <RHFTextField name="mailingState-2" label="State" />
                  <RHFTextField name="mailingZip-2" label="ZIP" />
                </Stack>
                <RHFTextField name="mailingCountry-2" label="Country" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
          <CardHeader
            title="ADDITIONAL BUSINESS INFORMATION 3"
            sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
          />
          <CardContent padding={5}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent={'space-between'}>
              <Stack spacing={2} sx={{ width: '100%' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="firstName-3" label="First name" />
                  <RHFTextField name="lastName-3" label="Last name" />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField
                    name="%ownership-3"
                    label="% Ownership"
                    InputProps={{
                      endAdornment: <InputAdornment position="start">%</InputAdornment>,
                    }}
                  />
                  <RHFTextField name="SSN-3" label="SSN" />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="dateOfBirth-3" label="Date of Birth" />
                  <RHFTextField name="mobilePhone-3" label="Mobile Phone" />
                </Stack>
              </Stack>
              <Stack spacing={2} sx={{ width: '100%' }}>
                <RHFTextField name="mailingStreetAddress1-3" label="Street Address 1" />
                <Stack direction={'row'} spacing={4}>
                  <RHFTextField name="mailingStreetAddress2-3" label="Street Address 2" />
                  <RHFTextField name="mailingCity-3" label="City" />
                </Stack>
                <Stack direction={'row'} spacing={4}>
                  <RHFTextField name="mailingState-3" label="State" />
                  <RHFTextField name="mailingZip-3" label="ZIP" />
                </Stack>
                <RHFTextField name="mailingCountry-3" label="Country" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
          <CardHeader
            title="ADDITIONAL BUSINESS INFORMATION 4"
            sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
          />
          <CardContent padding={5}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent={'space-between'}>
              <Stack spacing={2} sx={{ width: '100%' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="firstName-4" label="First name" />
                  <RHFTextField name="lastName-4" label="Last name" />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField
                    name="%ownership-4"
                    label="% Ownership"
                    InputProps={{
                      endAdornment: <InputAdornment position="start">%</InputAdornment>,
                    }}
                  />
                  <RHFTextField name="SSN" label="SSN" />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <RHFTextField name="dateOfBirth-4" label="Date of Birth" />
                  <RHFTextField name="mobilePhone-4" label="Mobile Phone" />
                </Stack>
              </Stack>
              <Stack spacing={2} sx={{ width: '100%' }}>
                <RHFTextField name="mailingStreetAddress1-4" label="Street Address 1" />
                <Stack direction={'row'} spacing={4}>
                  <RHFTextField name="mailingStreetAddress2-4" label="Street Address 2" />
                  <RHFTextField name="mailingCity-4" label="City" />
                </Stack>
                <Stack direction={'row'} spacing={4}>
                  <RHFTextField name="mailingState-4" label="State" />
                  <RHFTextField name="mailingZip-4" label="ZIP" />
                </Stack>
                <RHFTextField name="mailingCountry-4" label="Country" />
              </Stack>
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
