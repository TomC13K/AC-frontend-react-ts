import { yupResolver } from '@hookform/resolvers/yup';
import { Button, ThemeProvider, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import IVehicleFormInputs from '../../dataTypes/IVehicleDataType';
import vehicleDataService from '../../services/vehicleData.service';
import { theme, TextFieldDefault } from './form-styles';

const vehicleSchema = yup.object().shape({
  vehicleMake: yup.string().required('You need to fill car make'),
  vehicleModel: yup.string().required('You need to fill car model'),
  vehicleType: yup.string().required('You need to fill car type'),
  spz: yup.string().required('You need to fill plate number'),
  enginePower: yup.string().notRequired(),
  vehicleCode: yup.string().notRequired(),
  yearMake: yup.date().notRequired(),
  vin: yup.string().notRequired(),
  color: yup.string().notRequired(),
  hasAircon: yup.boolean().notRequired(),
  isHybrid: yup.boolean().notRequired(),
  isElectric: yup.boolean().notRequired(),
  airconCoolerType: yup.string().notRequired(),
  airconFillAmount: yup.number().notRequired(),
  stkEndDate: yup.date().notRequired(),
  ekEndDate: yup.date().notRequired(),
  hasAutomaticGearbox: yup.boolean().notRequired(),
  automaticGearboxDataID: yup.number().notRequired(),
  automaticGearboxOilType: yup.string().notRequired(),
  automaticGearboxOilAmount: yup.number().notRequired(),
  engineOilType: yup.string().notRequired(),
  engineOilAmount: yup.number().notRequired(),
  dashDistance: yup.number().notRequired(),
});

export interface INewVehicleForm {}

const NewVehicleForm: FC<INewVehicleForm> = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IVehicleFormInputs>({
    resolver: yupResolver(vehicleSchema),
  });

  const onSubmit: SubmitHandler<IVehicleFormInputs> = (formData: IVehicleFormInputs) => {
    vehicleDataService.create(formData);
    //after submit clear form
    reset();
  };

  let today = new Date();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h1Bold" gutterBottom>
          Form custom h1 style
        </Typography>
      </ThemeProvider>
      <form>
        <Controller
          name="vehicleMake"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              inputProps={{ maxLength: 20 }}
              style={{ width: 200 }}
              label={t('vehicleForm.vehicleMake')}
              variant="outlined"
              error={!!errors.vehicleMake}
              helperText={errors.vehicleMake ? errors.vehicleMake.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="vehicleModel"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.vehicleModel')}
              variant="filled"
              error={!!errors.vehicleModel}
              helperText={errors.vehicleModel ? errors.vehicleModel.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="vehicleType"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.vehicleType')}
              variant="filled"
              error={!!errors.vehicleType}
              helperText={errors.vehicleType ? errors.vehicleType.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="spz"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault {...field} style={{ width: 300 }} label={t('vehicleForm.spz')} variant="filled" error={!!errors.spz} helperText={errors.spz ? errors.spz.message : ''} />
          )}
        />
        <p></p>
        <Controller
          name="enginePower"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.enginePower')}
              variant="filled"
              error={!!errors.enginePower}
              helperText={errors.enginePower ? errors.enginePower.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="vehicleCode"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.vehicleCode')}
              variant="filled"
              error={!!errors.vehicleCode}
              helperText={errors.vehicleCode ? errors.vehicleCode.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="yearMake"
          defaultValue={today}
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.yearMake')}
              variant="filled"
              error={!!errors.yearMake}
              helperText={errors.yearMake ? errors.yearMake.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="vin"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault {...field} style={{ width: 300 }} label={t('vehicleForm.vin')} variant="filled" error={!!errors.vin} helperText={errors.vin ? errors.vin.message : ''} />
          )}
        />
        <p></p>
        <Controller
          name="color"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault {...field} style={{ width: 300 }} label={t('vehicleForm.color')} variant="filled" error={!!errors.color} helperText={errors.color ? errors.color.message : ''} />
          )}
        />
        <p></p>
        <Controller
          name="hasAircon"
          defaultValue={false}
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.hasAircon')}
              variant="filled"
              error={!!errors.hasAircon}
              helperText={errors.hasAircon ? errors.hasAircon.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="isHybrid"
          defaultValue={false}
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.isHybrid')}
              variant="filled"
              error={!!errors.isHybrid}
              helperText={errors.isHybrid ? errors.isHybrid.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="isElectric"
          defaultValue={false}
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.isElectric')}
              variant="filled"
              error={!!errors.isElectric}
              helperText={errors.isElectric ? errors.isElectric.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="airconCoolerType"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.airconCoolerType')}
              variant="filled"
              error={!!errors.airconCoolerType}
              helperText={errors.airconCoolerType ? errors.airconCoolerType.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="airconFillAmount"
          defaultValue={0}
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.airconFillAmount')}
              variant="filled"
              error={!!errors.airconFillAmount}
              helperText={errors.airconFillAmount ? errors.airconFillAmount.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="stkEndDate"
          defaultValue={today}
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.stkEndDate')}
              variant="filled"
              error={!!errors.stkEndDate}
              helperText={errors.stkEndDate ? errors.stkEndDate.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="ekEndDate"
          defaultValue={today}
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.ekEndDate')}
              variant="filled"
              error={!!errors.ekEndDate}
              helperText={errors.ekEndDate ? errors.ekEndDate.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="hasAutomaticGearbox"
          defaultValue={false}
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.hasAutomaticGearbox')}
              variant="filled"
              error={!!errors.hasAutomaticGearbox}
              helperText={errors.hasAutomaticGearbox ? errors.hasAutomaticGearbox.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="automaticGearboxDataID"
          defaultValue={0}
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.automaticGearboxDataID')}
              variant="filled"
              error={!!errors.automaticGearboxDataID}
              helperText={errors.automaticGearboxDataID ? errors.automaticGearboxDataID.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="automaticGearboxOilType"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.automaticGearboxOilType')}
              variant="filled"
              error={!!errors.automaticGearboxOilType}
              helperText={errors.automaticGearboxOilType ? errors.automaticGearboxOilType.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="automaticGearboxOilAmount"
          defaultValue={0}
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.automaticGearboxOilAmount')}
              variant="filled"
              error={!!errors.automaticGearboxOilAmount}
              helperText={errors.automaticGearboxOilAmount ? errors.automaticGearboxOilAmount.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="engineOilType"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.engineOilType')}
              variant="filled"
              error={!!errors.engineOilType}
              helperText={errors.engineOilType ? errors.engineOilType.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="engineOilAmount"
          defaultValue={0}
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.engineOilAmount')}
              variant="filled"
              error={!!errors.engineOilAmount}
              helperText={errors.engineOilAmount ? errors.engineOilAmount.message : ''}
            />
          )}
        />
        <p></p>
        <Controller
          name="dashDistance"
          defaultValue={0}
          control={control}
          render={({ field }) => (
            <TextFieldDefault
              {...field}
              style={{ width: 300 }}
              label={t('vehicleForm.dashDistance')}
              variant="filled"
              error={!!errors.dashDistance}
              helperText={errors.dashDistance ? errors.dashDistance.message : ''}
            />
          )}
        />
        <p></p>

        <p></p>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Add New Vehicle
        </Button>
      </form>
    </>
  );
};

export default NewVehicleForm;
