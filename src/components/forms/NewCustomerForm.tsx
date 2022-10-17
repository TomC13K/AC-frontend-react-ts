import React, { FC } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { theme, TextFieldDefault } from './form-styles';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import ICustomerFormInputs from '../../dataTypes/ICustomerDataType';
import customerDataService from '../../services/customerData.service';

//TODO add notes to DB

const customerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('You need to provide some First Name')
    .matches(/^[A-Za-z]+$/i, 'You can use only letters'),
  lastName: yup
    .string()
    .required('You need to provide some Last Name')
    .matches(/^[A-Za-z]+$/i, 'You can use only letters'),
  businessName: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  emailName: yup.string().notRequired(),
  ico: yup
    .string()
    .nullable()
    .optional(),
  //.min(6)
  //.max(8),
  dic: yup
    .string()
    .nullable()
    .optional(),
  //.matches(/^[0-9]+$/, 'Must be only digits')
  //.min(5, 'Must be exactly 5 digits')
  //.max(5, 'Must be exactly 5 digits'),
  street: yup.string().notRequired(),
  town: yup.string().notRequired(),
  psc: yup.string().notRequired(),
});

export interface INewCustomerForm {}

const NewCustomerForm: FC<INewCustomerForm> = props => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICustomerFormInputs>({
    resolver: yupResolver(customerSchema),
  });

  const onSubmit: SubmitHandler<ICustomerFormInputs> = (formData: ICustomerFormInputs) => {
    customerDataService.create(formData);
    //after submit clear form
    reset();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h1Bold" gutterBottom>
          Form custom h1 style
        </Typography>
      </ThemeProvider>
      <form>
        <Controller
          name="firstName"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              inputProps={{ maxLength: 20 }}
              style={{ width: 200 }}
              label={t('customerForm.firstName')}
              variant="outlined"
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="lastName"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('customerForm.lastName')}
              variant="filled"
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="phone"
          defaultValue=""
          control={control}
          render={({ field }) => <TextFieldDefault {...field} label={t('customerForm.phone')} variant="standard" error={!!errors.businessName} helperText={errors.phone ? errors.phone.message : ''} />}
        />
        <p></p>
        <Controller
          name="emailName"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault {...field} label={t('customerForm.emailName')} variant="standard" error={!!errors.businessName} helperText={errors.emailName ? errors.emailName.message : ''} />
          )}
        />
        <p></p>
        <Controller
          name="businessName"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 350 }}
              label={t('customerForm.businessName')}
              variant="filled"
              error={!!errors.businessName}
              helperText={errors.businessName ? errors.businessName.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="ico"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault {...field} style={{ width: 150 }} label={t('customerForm.ico')} variant="outlined" error={!!errors.businessName} helperText={errors.ico ? errors.ico.message : ''} />
          )}
        />
        <p></p>
        <Controller
          name="dic"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault {...field} label={t('customerForm.dic')} style={{ width: 150 }} variant="outlined" error={!!errors.businessName} helperText={errors.dic ? errors.dic.message : ''} />
          )}
        />
        <p></p>
        <Controller
          name="street"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 350 }}
              label={t('customerForm.street')}
              variant="outlined"
              error={!!errors.businessName}
              helperText={errors.street ? errors.street.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="town"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault {...field} style={{ width: 350 }} label={t('customerForm.town')} variant="outlined" error={!!errors.businessName} helperText={errors.town ? errors.town.message : ''} />
          )}
        />
        <p></p>
        <Controller
          name="psc"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault {...field} style={{ width: 150 }} label={t('customerForm.psc')} variant="outlined" error={!!errors.businessName} helperText={errors.psc ? errors.psc.message : ''} />
          )}
        />
        <p></p>
        <Controller
          name="notes"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              label={t('customerForm.notes')}
              multiline
              rows="5"
              style={{ width: 500 }}
              variant="outlined"
              error={!!errors.businessName}
              helperText={errors.notes ? errors.notes.message : ''}
            />
          )}
        />
        <p></p>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Add New Customer
        </Button>
      </form>
    </>
  );
};

export default NewCustomerForm;
