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

export default function PricingInfo({ handleNext, handleBack }) {
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
          <CardHeader title="PRICING" sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }} />
          <CardContent padding={5}>
            <Stack direction={'row'} spacing={1} justifyContent={'space-between'}>
              <Stack spacing={1}>
                <Typography component="p" sx={{ fontSize: '14px' }} paddingLeft={1} paddingRight={4}>
                  Discount Frequency
                </Typography>
                <Stack direction={'row'}>
                  <RHFCheckbox name="monthly" label="Monthly" />
                  <RHFCheckbox name="daily" label="Daily" />
                </Stack>
              </Stack>
              <Stack spacing={1}>
                <Typography component="p" sx={{ fontSize: '14px' }} paddingLeft={1} paddingRight={4}>
                  Funding Rollup
                </Typography>
                <Stack direction={'row'}>
                  <RHFCheckbox name="netFee" label="Net Fees and Deposits" />
                  <RHFCheckbox name="separateFee" label="Separate Fees and Deposits" />
                  <RHFCheckbox name="individual" label="Individual Batches" />
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
          <CardHeader
            title="DUES & ASSESSMENTS"
            sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
          />
          <CardContent padding={5}>
            <RHFCheckbox name="dues&assessment" label="Dues & Assessment" />
            <Typography component="p" fontSize={16}>
              In addition to the fees described in this Merchant Application and Agreement, you must pay us all Card
              Organization Charges. "Card Organization Charges" means all fees, charges, liabilities, or obligations
              that a Card Organization imposes on us (1) in connection with your acceptance of its payment types, (2) in
              connection with the transactions processed under your MID, (3) as a result of your acts or omissions, or
              (4) as a result of the acts or omissions of others that act on your behalf or that provide services to
              you. Card Organization Charges are not subject to the consequential damages exclusion in Section 28 of the
              Program Guide and include but are not limited to: assessments (including but not limited to dues, issuer
              reimbursements, fines, penalties, and fraud recovery losses); fees established by the Card Organizations
              (including but not limited to access fees, switch fees, and file fees); adjustments; and Chargebacks.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
          <CardHeader title="PROGRAM" sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }} />
          <CardContent padding={5}>
            <RHFCheckbox name="surchargeProgram" label="Merchant Surcharge Program" />
            <Typography component="p" fontSize={16}>
              A Surcharge is an additional fee that you add to relevant transactions as permitted by the Card
              Organization Rules and applicable laws (together, Applicable Laws). By choosing to assess a Surcharge and
              participate in this "Merchant Surcharge Program" (MSP), you agree that you are solely responsible for: (1
              ) complying with all Applicable Laws and the Your Payments Acceptance Guide (which is contained in your
              Program Guide); (2) properly and clearly disclosing the existence and amount of any Surcharge to
              Cardholders in accordance with Applicable Laws; and (3) ensuring any Surcharge you add to a transaction
              does not exceed the limit provided in the Card Organization Rules. MSP is provided to you only by
              Processor and not by Bank.
            </Typography>
            <Typography component="p" fontSize={16} paddingY={2}>
              You also agree that: (1) you are assessing a Surcharge on Cardholders for certain Credit Card transactions
              in an amount equal to the Surcharge Rate reflected below; (2) you will pay us the Discount Fees for Credit
              Card and Debit Card transactions on gross sales for all of the transactions that you submit (without
              reduction for refunds, returns, or chargebacks); (3) you will pay us the Transaction Fee (the fixed charge
              per transaction reflected below for each Debit Card transaction) for each sale and refund that you submit,
              as well as any other fees or charges reflected in this merchant processing agreement and which are not
              replaced by the MSP; (4) you will not assess a Surcharge for the portion of the transaction that is tip on
              paper, and you will be responsible to pay us the Discount Fee for the gross amount of all tips on paper;
              (5) you will be responsible to refund Cardholders any Surcharge you assess in the amount billed on such
              transaction; (6) you will not assess a Surcharge for card not present transactions on cardholders whose
              billing ZIP code corresponds to states or US territories where Surcharging is prohibited by Applicable Law
              (including but not limited to, Connecticut, Massachusetts, Puerto Rico), you will be responsible to pay us
              the Discount Fee for such transactions, and you will comply with Applicable Laws any time you apply the
              MSP; and (7) we may change or cancel this Merchant Surcharge Program upon notice to you. We disclaim all
              warranties regarding the MSP; it is provided to you on an "as-is, with all faults" basis. Your use of the
              MSP does not: (1) guarantee compliance with any laws, Card Organization Rules, or applicable standards
              (including the PCl DSS), (b) affect your obligation to comply with laws, Card Organization Rules, and
              applicable standards (including the PCl DSS), or (3) guarantee protection against a Data Incident.
            </Typography>
            <Stack direction={'row'} spacing={3}>
              <Stack spacing={2}>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography sx={{ width: '100%' }}>Visa Credit Card Discount Fee</Typography>
                  <RHFTextField
                    name="visaFee"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography sx={{ width: '100%' }}>Mastercard Credit Card Discount Fee</Typography>
                  <RHFTextField
                    name="masterCardFee"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography sx={{ width: '100%' }}>Discover Credit Card Discount Fee</Typography>
                  <RHFTextField
                    name="discoverFee"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography sx={{ width: '100%' }}>Amex Credit Card Discount Fee</Typography>
                  <RHFTextField
                    name="amexFee"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography sx={{ width: '100%' }}>Debit Card Discount Fee</Typography>
                  <RHFTextField
                    name="debitFee"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography sx={{ width: '100%' }}>Consumer Surcharge Rate Billed by Merchant</Typography>
                  <RHFTextField
                    name="surchargeRate"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography sx={{ width: '100%' }}>Debit Card Transaction Fee</Typography>
                  <RHFTextField
                    name="debitTransFee"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      endAdornment: <InputAdornment position="start">/Each</InputAdornment>,
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
          <CardHeader title="TIERED" sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }} />
          <CardContent padding={5}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
              <Stack spacing={2}>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  <Typography component="h6" sx={{ width: '100%' }}>
                    Discount Fees
                  </Typography>
                  <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
                    <Typography component="h6" sx={{ width: '100%' }}>
                      Credit
                    </Typography>
                    <Typography component="h6" sx={{ width: '100%' }}>
                      Non-PIN Debit
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ width: '100%' }}>
                    Visa Qualified
                  </Typography>
                  <Stack direction={'row'} spacing={2}>
                    <RHFTextField
                      name="visaQualified-credit"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                    <RHFTextField
                      name="visaQualified-credit"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ width: '100%' }}>
                    Visa Mid-Qualified
                  </Typography>
                  <Stack direction={'row'} spacing={2}>
                    <RHFTextField
                      name="visaMidQualified-credit"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                    <RHFTextField
                      name="visaMidQualified-pin"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ width: '100%' }}>
                    Visa Non-Qualified
                  </Typography>
                  <Stack direction={'row'} spacing={2}>
                    <RHFTextField
                      name="visaNonQualified-credit"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                    <RHFTextField
                      name="visaNonQualified-pin"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ width: '100%' }}>
                    Mastercard Qualified
                  </Typography>
                  <Stack direction={'row'} spacing={2}>
                    <RHFTextField
                      name="masterQualified-credit"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                    <RHFTextField
                      name="masterQualified-credit"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ width: '100%' }}>
                    Mastercard Mid-Qualified
                  </Typography>
                  <Stack direction={'row'} spacing={2}>
                    <RHFTextField
                      name="masterMidQualified-credit"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                    <RHFTextField
                      name="masterMidQualified-pin"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ width: '100%' }}>
                    Mastercard Non-Qualified
                  </Typography>
                  <Stack direction={'row'} spacing={2}>
                    <RHFTextField
                      name="masterNonQualified-credit"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                    <RHFTextField
                      name="masterNonQualified-pin"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  <Typography component="h6" sx={{ width: '100%' }}>
                    Discount Fees
                  </Typography>
                  <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
                    <Typography component="h6" sx={{ width: '100%' }}>
                      Credit
                    </Typography>
                    <Typography component="h6" sx={{ width: '100%' }}>
                      Non-PIN Debit
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ width: '100%' }}>
                    Discover Qualified
                  </Typography>
                  <Stack direction={'row'} spacing={2}>
                    <RHFTextField
                      name="discoverQualified-credit"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                    <RHFTextField
                      name="discoverQualified-credit"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ width: '100%' }}>
                    Discover Mid-Qualified
                  </Typography>
                  <Stack direction={'row'} spacing={2}>
                    <RHFTextField
                      name="discoverMidQualified-credit"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                    <RHFTextField
                      name="discoverMidQualified-pin"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ width: '100%' }}>
                    Discover Non-Qualified
                  </Typography>
                  <Stack direction={'row'} spacing={2}>
                    <RHFTextField
                      name="discoverNonQualified-credit"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                    <RHFTextField
                      name="discoverNonQualified-pin"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ width: '100%' }}>
                    Amex Qualified
                  </Typography>
                  <RHFTextField
                    name="amexQualified-credit"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ width: '100%' }}>
                    Amex Mid-Qualified
                  </Typography>
                  <RHFTextField
                    name="amexMidQualified-credit"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
                <Stack direction={'row'} alignItems={'center'}>
                  <Typography component="p" sx={{ width: '100%' }}>
                    Amex Non-Qualified
                  </Typography>
                  <RHFTextField
                    name="AmexNonQualified-credit"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="INTERCHANGE PLUS"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={2}>
                <Stack sx={{ width: '100%' }} alignItems={'center'} spacing={2}>
                  <Typography component="p" sx={{ fontSize: '14px' }}>
                    Pass Thrmjgh Interchange — You Will be charged the applicable interchange rate tram Mastercard. Visa. Discover and American Express as well as the Discount Fees listed below. Interchange Rates are vanable and are determined by how your transactions clear, and are subject to change.
                  </Typography>
                  <Stack direction={'row'} alignItems={'center'}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Passthrough Interchange Costs
                    </Typography>
                    <RHFRadioGroup
                      name="interchange"
                      options={[
                        { value: 'gross', label: 'Gross Interchange' },
                        { value: 'net', label: 'Net Interchange' },
                      ]}
                    />
                  </Stack>
                </Stack>
                <Stack spacing={2}>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="h6" sx={{ fontSize: '14px', width: '100%' }}>
                      Discount Fees
                    </Typography>
                    <Typography component="h6" sx={{ fontSize: '14px', width: '100%' }}>
                      Credit/Non-PIN Debit
                    </Typography>
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Visa Qualified
                    </Typography>
                    <RHFTextField
                      name="Visa Qualified"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Mastercard Qualified
                    </Typography>
                    <RHFTextField
                      name="Mastercard Qualified"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Discover Qualified
                    </Typography>
                    <RHFTextField
                      name="Discover Qualified"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Amex Qualified
                    </Typography>
                    <RHFTextField
                      name="Amex Qualified"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="BILL BACK"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={2}>
                <Typography component="p" sx={{ fontSize: '14px' }}>
                  Non-Qualrtied Surcharge Fee (exduding intercnange pass-through tees. see Section 26.1 ) Apples to Non-qualified Visa. Discover, American Express tBlue Credit and.o Mon-PIN Debit Transactions
                </Typography>
                <RHFTextField
                  name="Visa Qualified"
                  InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                />
                <Stack spacing={2}>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="h6" sx={{ fontSize: '14px', width: '100%' }}>
                      Discount Fees
                    </Typography>
                    <Stack sx={{ width: '100%' }} direction={'row'} spacing={2}>
                      <Typography component="h6" sx={{ fontSize: '14px', width: '100%' }}>
                        Credit
                      </Typography>
                      <Typography component="h6" sx={{ fontSize: '14px', width: '100%' }}>
                        Non-PIN Debit
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Visa Qualified
                    </Typography>
                    <Stack sx={{ width: '100%' }} direction={'row'} spacing={2}> 
                      <RHFTextField
                        name="Visa Qualified Credit"
                        InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                      />
                      <RHFTextField
                        name="Visa Qualified Non-PIN Debit"
                        InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                      />
                    </Stack>
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Mastercard Qualified
                    </Typography>
                    <Stack sx={{ width: '100%' }} direction={'row'} spacing={2}> 
                      <RHFTextField
                        name="Mastercard Qualified Credit"
                        InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                      />
                      <RHFTextField
                        name="Mastercard Qualified Non-PIN Debit"
                        InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                      />
                    </Stack>
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Discover Qualified
                    </Typography>
                    <Stack sx={{ width: '100%' }} direction={'row'} spacing={2}> 
                      <RHFTextField
                        name="Discover Qualified Credit"
                        InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                      />
                      <RHFTextField
                        name="Discover Qualified Non-PIN Debit"
                        InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                      />
                    </Stack>
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Amex Qualified
                    </Typography>
                    <RHFTextField
                      name="Amex Qualified"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="SWIPED/NON-SWIPED"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={2}>
                <Typography component="p" sx={{ fontSize: '14px' }}>
                  (If selected, the discount fees below apply to all payment types and brands accepted unless otherwise noted in this agreement)
                </Typography>
                <Stack spacing={2}>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Swiped or Dipped Discount Fee (% of gross transactions)
                    </Typography>
                    <RHFTextField
                      name="Swiped or Dipped Discount Fee (% of gross transactions)"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Swiped or Dipped Transaction Fee
                    </Typography>
                    <RHFTextField
                      name="Swiped or Dipped Transaction Fee"
                      InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                    />
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Non-Swiped or Non-Dipped Discount Fee (% of gross transactions)
                    </Typography>
                    <RHFTextField
                      name="Non-Swiped or Non-Dipped Discount Fee (% of gross transactions)"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Non-Swiped or Non-Dipped Tranaction Fee
                    </Typography>
                    <RHFTextField
                      name="Non-Swiped or Non-Dipped Tranaction Fee"
                      InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="FLAT RATE"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={2}>
                <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                  <Typography component="h6" sx={{ fontSize: '14px', width: '100%' }}>
                    Discount Fees
                  </Typography>
                  <Typography component="h6" sx={{ fontSize: '14px', width: '100%' }}>
                    Credit/Non-PIN Debit
                  </Typography>
                </Stack>
                <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                  <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                    Visa Qualified
                  </Typography>
                  <RHFTextField
                    name="Visa Qualified"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
                <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                  <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                    Mastercard Qualified
                  </Typography>
                  <RHFTextField
                    name="Mastercard Qualified"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
                <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                  <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                    Discover Qualified
                  </Typography>
                  <RHFTextField
                    name="Discover Qualified"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
                <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                  <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                    Amex Qualified
                  </Typography>
                  <RHFTextField
                    name="Amex Qualified"
                    InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="AUTHORIZATION & TRANSACTION FEES"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
            <Stack spacing={2}>
                <Stack spacing={2}>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Authorization Fees (All Card Types)
                    </Typography>
                    <RHFTextField
                      name="Authorization Fees (All Card Types)"
                      InputProps={{ 
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        endAdornment: <InputAdornment position="start">/Each</InputAdornment>,
                      }}
                    />
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      ACH Batch Fee
                    </Typography>
                    <RHFTextField
                      name="ACH Batch Fee"
                      InputProps={{ 
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        endAdornment: <InputAdornment position="start">/Each</InputAdornment>,
                      }}
                    />
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Voice Authonzatjon Fee
                    </Typography>
                    <RHFTextField
                      name="Voice Authonzatjon Fee"
                      InputProps={{ 
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        endAdornment: <InputAdornment position="start">/Each</InputAdornment>,
                      }}
                    />
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Address Verification Fee (AVS)
                    </Typography>
                    <RHFTextField
                      name="Address Verification Fee (AVS)"
                      InputProps={{ 
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        endAdornment: <InputAdornment position="start">/Each</InputAdornment>,
                      }}
                    />
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Transaction Fees (All Card Types)**
                    </Typography>
                    <RHFTextField
                      name="Transaction Fees (All Card Types)**"
                      InputProps={{ 
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        endAdornment: <InputAdornment position="start">/Each</InputAdornment>,
                      }}
                    />
                  </Stack>
                </Stack>
                <Typography component="p" sx={{ fontSize: '14px' }}>
                  **Transaction Fees (All Card Types) and Gateway Transaction Fee will be added together and billed your merchant statement as "Trans Fee".
                </Typography>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ width: '100%', border: '1px solid lightGray' }}>
            <CardHeader
              title="PIN DEBIT"
              sx={{ background: 'lightGray', textAlign: 'center', padding: '10px' }}
            />
            <CardContent padding={5}>
              <Stack spacing={2}>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Discount Fee
                    </Typography>
                    <RHFTextField
                      name="Discount Fee"
                      InputProps={{ endAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    />
                  </Stack>
                  <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography component="p" sx={{ fontSize: '14px', width: '100%' }}>
                      Transaction Fee
                    </Typography>
                    <RHFTextField
                      name="Transaction Fee"
                      InputProps={{ 
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        endAdornment: <InputAdornment position="start">/Each</InputAdornment>,
                      }}
                    />
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
