import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import {
  Stack,
  Typography,
  Table,
  TableRow,
  TableCell,
  Alert,
  Card,
  CardHeader,
  CardContent,
  InputAdornment,
  Paper,
  TableContainer,
  TableBody,
} from '@mui/material';
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

export default function Confirmation({ handleNext, handleBack }) {
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
            title="EARLY TERMINATION FEE"
            sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
          />
          <CardContent padding={5}>
            <Stack spacing={2}>
              <Typography component="p" sx={{ fontSize: '14px' }}>
                The initial term of this Agreement is three years from the date of your approval by our Credit
                Department (the Initial Term). If you terminate this Agreement before the end of the then current term
                or otherwise stop processing your transactions with us, you will be charged this Early Termination Fee.
                After the Initial Term, subject to Part IV, Section A.3, this Agreement shall automatically extend for
                an additional period of one year each (each an Extended Term).
              </Typography>
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <Typography component="p" sx={{ fontSize: '14px' }}>
                  Early Termination Fee
                </Typography>
                <RHFTextField
                  name="terminationFee"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </Stack>
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <Typography component="p" sx={{ fontSize: '14px' }}>
                  Client Initails
                </Typography>
                <RHFTextField name="clientInitials" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
          <CardHeader
            title="PERSONAL GUARANTEE"
            sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
          />
          <CardContent padding={5}>
            <Stack spacing={2}>
              <Typography component="p" sx={{ fontSize: '14px' }}>
                In exchange for CardConnect LLC, PNC Bank, N.A., (a member of Visa USA, Inc. and Mastercard
                International, Inc.), and TeleCheck Services, LLC (the Guaranteed Parties) acceptance of, as applicable,
                the Agreement, and/or the Equipment Agreement and/or the TeleCheck/TRS Solutions Agreement, the
                undersigned unconditionally and irrevocably guarantees the full payment and performance of Client's
                obligations under the foregoing agreements, as applicable, as they now exist or as modified from time to
                time, whether before or after termination or expiration of such agreements and whether or not the
                undersigned has received notice of any amendment of such agreements. The undersigned waives notice of
                default by Client and agrees to indemnify the Guaranteed Parties for any and all amounts due from Client
                under the foregoing agreements. The Guaranteed Parties shall not be required to first proceed against
                Client to enforce any remedy before proceeding against the undersigned. This is a continuing personal
                guaranty and shall not be discharged or affected for any reason. The undersigned understands that this
                is a Personal Guaranty of payment and not of collection and that the Guaranteed Parties are relying upon
                this Personal Guaranty in entering into the foregoing agreements, as applicable.
              </Typography>
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <RHFTextField name="signature" label="Signature" />
                <RHFTextField name="date" label="Date" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
          <CardHeader
            title="AGREEMENT APPROVAL"
            sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
          />
          <CardContent padding={5}>
            <Stack spacing={2}>
              <Typography component="p" sx={{ fontSize: '14px' }}>
                Client certifies that all information set forth in this completed Merchant Processing Application is
                true and correct and that Client has received a copy of the Program Guide and Confirmation Page, which
                is part of this Merchant Processing Application, and by this reference incorporated herein. Client
                acknowledges and agrees that we, our Affiliates and our third party subcontractors and/or agents may use
                automatic telephone dialing systems to contact Client at the telephone number(s) Client has provided in
                this Merchant Processing Application and/or may leave a detailed voice message in the event that Client
                is unable to be reached, even if the number provided is a cellular or wireless number or if Client has
                previously registered on a Do Not Call list or requested not to be contacted Client for solicitation
                purposes. Client hereby consents to receiving commercial electronic mail messages from us, our
                Affiliates and our third party subcontractors and/or agents from time to time. Client further agrees
                that Client will not accept more than 20% of its card transactions via mail, telephone or Internet
                order. However, if your Application is approved based upon contrary information stated in Banking and
                Processing section above, you are authorized to accept transactions in accordance with the percentages
                indicated in that section. This signature page also serves as a signature page to the TeleCheck
                Solutions Agreement appearing in the Third Party Section of the Program Guide, if selected, the
                undersigned Client being "You" and "Your" for the purposes of the TeleCheck Solutions Agreement. By
                signing below, each of the undersigned authorizes us, our Affiliates and our third party subcontractors
                and/or agents to verify the information contained in this Application and to request and obtain from any
                consumer reporting agency and other sources, including bank references, personal and business consumer
                reports and other information and to disclose such information amongst each other for any purpose
                permitted by law. If the Application is approved, each of the undersigned also authorizes us, our
                Affiliates and our third party subcontractors and/or agents to obtain subsequent consumer reports and
                other information from other sources, including bank references, in connection with the review,
                maintenance, updating, renewal or extension of the Agreement or for any other purpose permitted by law
                and disclose such information amongst each other. Each of the undersigned furthermore agrees that all
                references, including banks and consumer reporting agencies, may release any and all personal and
                business credit financial information to us, our Affiliates and our third party subcontractors and/or
                agents. Each of the undersigned authorizes us, our Affiliates and our third party subcontractors and/or
                agents to provide amongst each other the information contained in this Merchant Processing Application
                and Agreement and any information received subsequent thereto from all references, including banks and
                consumer reporting agencies for any purpose permitted by law. It is our policy to obtain certain
                information in order to verify your identity while processing your account application. As part of our
                approval, processing services, continuing fraud prevention and account review processes, the undersigned
                consents to the use of information gathered online or that you submit to us, and/or automated electronic
                computer security screening, by us or our third party vendors. Client authorizes FDMS and Bank and their
                affiliates to debit Client's designated bank account via Automated Clearing House (ACH) for costs
                associated with equipment hardware, software and shipping. You further acknowledge and agree that you
                will not use your merchant account and/or the Services for illegal transactions, for example, those
                prohibited by the Unlawful Internet Gambling Enforcement Act, 31 U.S.C. Section 5361 et seq, as may be
                amended from time to time, or processing and acceptance of transactions in certain jurisdictions
                pursuant to 31 CFR Part 500 et seq. and other laws enforced by the Office of Foreign Assets Control
                (OFAC). To help the government fight the funding of terrorism and money laundering activities, Servicers
                obtain, verify, and record certain information including your full name, physical address, and any other
                information needed for identity verification purposes while processing this MPA, as described in the USA
                Patriot Act. Client certifies, under penalties of perjury, that the federal taxpayer identification
                number and corresponding filing name provided herein are correct. Client agrees to all the terms of this
                Merchant Processing Application and Agreement. This Merchant Processing Application and Agreement will
                not take effect until Client has been approved and this Agreement has been accepted by Processor and
                Bank. Acceptance by Processor and Bank will occur upon the earlier of the execution of this Merchant
                Processing Application and Agreement by Processor and Bank, or the commencement of the provision of the
                Services by Processor and Bank.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="SIGN YOUR AGREEMENT"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={2}>
                <RHFTextField name="signature" label="Signature" />
                <RHFTextField name="date" label="Date" />
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="SIGN YOUR AGREEMENT"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={2}>
                <Typography component="p" sx={{ fontSize: '16px' }}>
                  Application Approved by:
                </Typography>
                <RHFTextField name="signature" label="Signature" />
                <Stack direction={'row'} spacing={3}>
                  <RHFTextField name="title" label="Title" />
                  <RHFTextField name="date" label="Date" />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="(SERVICER): FOR CARDCONNECT LLC, PNC BANK N.A. (A
                MEMBER OF VISA USA, INC. AND MASTERCARD INTERNATIONAL
                INC.)."
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={2}>
                <Typography component="p" sx={{ fontSize: '16px' }}>
                  By: First Data Merchant Services LLC, pursuant to a limited power of attorney
                </Typography>
                <RHFTextField name="signature" label="Signature" />
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="PROCESSOR INFORMATION"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow sx={{ borderBottom: '1px solid lightGray' }}>
                      <TableCell component="th" scope="row" sx={{ fontSize: '16px', paddingBottom: '0px' }}>
                        Name
                      </TableCell>
                      <TableCell align="right" sx={{ fontSize: '16px', paddingBottom: '0px' }}>
                        CardConnect LLC
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ borderBottom: '1px solid lightGray' }}>
                      <TableCell component="th" scope="row" sx={{ fontSize: '16px', paddingBottom: '0px' }}>
                        Address
                      </TableCell>
                      <TableCell align="right" sx={{ fontSize: '16px', paddingBottom: '0px' }}>
                        1000 Continental Drive, Suite 300, King of Prussia PA, 19406
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ borderBottom: '1px solid lightGray' }}>
                      <TableCell component="th" scope="row" sx={{ fontSize: '16px', paddingBottom: '0px' }}>
                        URL
                      </TableCell>
                      <TableCell align="right" sx={{ fontSize: '16px', paddingBottom: '0px' }}>
                        www.cardconnect.com
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ borderBottom: '1px solid lightGray' }}>
                      <TableCell component="th" scope="row" sx={{ fontSize: '16px', paddingBottom: '0px' }}>
                        Customer Service(Phone)
                      </TableCell>
                      <TableCell align="right" sx={{ fontSize: '16px', paddingBottom: '0px' }}>
                        1-877-828-0720
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
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
