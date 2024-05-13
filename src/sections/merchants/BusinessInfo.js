import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Typography, Box, Alert, Card, CardHeader, CardContent, Select, MenuItem } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
// import useAuth from '../../hooks/useAuth';
import useIsMountedRef from '../../hooks/useIsMountedRef';
// components
// import Iconify from '../../components/Iconify';
import { FormProvider, RHFTextField, RHFPhoneNumber, RHFCheckbox, RHFSelect } from '../../components/hook-form';

// ----------------------------------------------------------------------

export default function BusinessInfo({ handleNext, handleBack }) {
  const isMountedRef = useIsMountedRef();

  const phoneRegExp = /^(\+?\d{1,4}[\s-])?(\(?\d{1,3}\)?[\s-])?\d{3}[\s-]\d{4}$/;

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, { message: 'Invalid Phone Number!' })
      .required('Phone Number Required !'),
    businessLegalName: Yup.string().required('Business Legal Name is required'),
    typeOfOwnership: Yup.string().required('Type Of Ownership is required'),
    dbaName: Yup.string().required('DBA Name is required'),
    taxIDEIN: Yup.string().required('Tax ID EIN is required'),
    taxFillingName: Yup.string().required('Tax Filling Name is required'),
    stockTickerSymbol: Yup.string().required('Stock Ticker Symbol is required'),
    'industry(MCC)': Yup.string().required('Industry(MCC) is required'),
    businessDescription: Yup.string().required('Business Description is required'),
    website: Yup.string().required('Website is required'),
    streetAddress1: Yup.string().required('Street Address 1 is required'),
    streetAddress2: Yup.string().required('Street Address 2 is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().required('Zip is required'),
    country: Yup.string().required('Country is required'),
    mailingStreetAddress1: Yup.string().required('Street Address 1 is required'),
    mailingStreetAddress2: Yup.string().required('Street Address 2 is required'),
    mailingCity: Yup.string().required('City is required'),
    mailingState: Yup.string().required('State is required'),
    mailingZip: Yup.string().required('Zip is required'),
    mailingCountry: Yup.string().required('Country is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

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
            title="CONTACT INFORMATION"
            sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
          />
          <CardContent padding={5}>
            <Stack spacing={2}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="firstName" label="First name" />
                <RHFTextField name="lastName" label="Last name" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="email" label="Email address" />
                <RHFPhoneNumber name="phoneNumber" defaultCountry="US" label="Phone number" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
          <CardHeader
            title="BUSINESS INFORMATION"
            sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
          />
          <CardContent padding={5}>
            <Stack spacing={2}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="businessLegalName" label="Business Legal Name" />
                <RHFTextField name="dbaName" label="DBA Name" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="taxFillingName" label="Tax Filling Name" />
                <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'}>
                  <Typography component="div" sx={{ fontSize: '14px' }} paddingX={2}>
                    Tax Filling Method
                  </Typography>
                  <RHFCheckbox name="EIN" label="EIN" />
                  <RHFCheckbox name="SSN" label="SSN" />
                </Stack>
              </Stack>
              <RHFTextField sx={{ width: '49.5%', marginRight: '4px' }} name="taxIDEIN" label="Tax ID(EIN)" />
              <RHFSelect name="typeOfOwnership" label="Type Of Ownership">
                <option value="government">Government</option>
                <option value="individual/sole proprietor">Individual/Sole Proprietor</option>
                <option value="LLC">LLC</option>
                <option value="nor profit org">Non-Profit Org</option>
                <option value="private corporation">Private Corporation</option>
                <option value="partnership">Partnersip</option>
                <option value="public corporation">Public Corporation</option>
                <option value="tax exempt">Tax Exempt</option>
              </RHFSelect>
              <Stack direction={'row'} spacing={2}>
                <Box sx={{ width: '100%' }}>
                  <Typography component="h4">Stock Exchange (Only applicable for Public Corporations)</Typography>
                  <Stack direction={'row'}>
                    <RHFCheckbox name="nyse/nasdaq" label="NYSE or NASDAQ" />
                    <RHFCheckbox name="other/notApplicable" label="Other/Not Applicable" />
                  </Stack>
                </Box>
                <RHFTextField
                  sx={{ width: '100%' }}
                  name="stockTickerSymbol"
                  label="Stock Ticker Symbol"
                  placeholder="(NYSE or NASDAQ)"
                />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="industry(MCC)" label="Industry(MCC)" placeholder="Example, restaurant" />
                <RHFTextField
                  name="businessDescription"
                  label="Business Description"
                  placeholder="Exp:Eating, sit down"
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ fontSize: '14px' }} paddingX={2}>
                    Industry Options
                  </Typography>
                  <RHFCheckbox name="quasiCash" label="Quasi Cash" />
                </Stack>
                <RHFTextField name="businessStartDate" label="Business Start Date" />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="website" label="Website" />
                <RHFPhoneNumber defaultCountry="US" name="businessPhone" label="Business Phone" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="BUSINESS ADDRESS"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={2}>
                <RHFTextField name="streetAddress1" label="Street Address 1" />
                <Stack direction={'row'} spacing={4}>
                  <RHFTextField name="streetAddress2" label="Street Address 2" />
                  <RHFTextField name="city" label="City" />
                </Stack>
                <Stack direction={'row'} spacing={4}>
                  <RHFTextField name="state" label="State" />
                  <RHFTextField name="zip" label="ZIP" />
                </Stack>
                <RHFTextField name="country" label="Country" />
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="BUSINESS LEGAL MAILING ADDRESS"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={2}>
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
