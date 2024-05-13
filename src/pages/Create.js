import React from 'react';
// @mui
import { Container, Box, Stepper, Step, StepLabel, StepContent, Paper, Button, Typography, Stack } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// sections
import BusinessInfo from '../sections/merchants/BusinessInfo';
import OwnerInfo from '../sections/merchants/OwnerInfo';
import BankingAndProcessing from '../sections/merchants/BankingAndProcessing';
import Equipment from '../sections/merchants/Equipment';
import MerchantService from '../sections/merchants/MerchantService';
import PricingInfo from '../sections/merchants/PricingInfo';
import Confirmation from '../sections/merchants/Confirmation';

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

// ----------------------------------------------------------------------

const steps = [
  {
    label: 'Business Details',
    description: ``,
  },
  {
    label: 'Owner Information',
    description:
      'Please provide the following information for each individual who owns, directly or indirectly, 25% or more of the equity interest of your business, or who have significant responsibility to control, manage, or direct your business.',
  },
  {
    label: 'BANKING AND PROCESSING',
    description: ``,
  },
  {
    label: 'EQUIPMENT',
    description: '',
  },
  {
    label: 'MERCHANT SERVICES',
    description: '',
  },
  {
    label: 'PRICING INFORMATION',
    description: '',
  },
  {
    label: 'CONFIRMATION',
    description: '',
  },
];

export default function Create() {
  const { themeStretch } = useSettings();

  const [activeStep, setActiveStep] = React.useState(6);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Page title="Create">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        {/* <PaymentForm /> */}

        <Stack direction="row" spacing={1}>
          <Box sx={{ maxWidth: 400 }} position={'fixed'}>
            <Typography variant="h3" component="h1" paragraph>
              Merchant form
            </Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel optional={index === 6 ? <Typography variant="caption">Last step</Typography> : null}>
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
          </Box>
          <Box sx={{ width: '100%', marginLeft: '400px !important' }}>
            {activeStep === 0 && <BusinessInfo handleNext={handleNext} />}
            {activeStep === 1 && <OwnerInfo handleNext={handleNext} handleBack={handleBack} />}
            {activeStep === 2 && <BankingAndProcessing handleNext={handleNext} handleBack={handleBack} />}
            {activeStep === 3 && <Equipment handleNext={handleNext} handleBack={handleBack} />}
            {activeStep === 4 && <MerchantService handleNext={handleNext} handleBack={handleBack} />}
            {activeStep === 5 && <PricingInfo handleNext={handleNext} handleBack={handleBack} />}
            {activeStep === 6 && <Confirmation handleNext={handleNext} handleBack={handleBack} />}
          </Box>
        </Stack>
      </Container>
    </Page>
  );
}
