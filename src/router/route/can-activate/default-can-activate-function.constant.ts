import { IObservable, singleN } from '@lifaon/rx-js-light';
import {
  ICanActivateFunction,
  ICanActivateFunctionReturn,
  ICanActivateFunctionReturnedObservableValue,
  ICanActivateFunctionReturnedValue,
} from './can-activate-function.type';

const DEFAULT_CAN_ACTIVATE_FUNCTION_RETURN: ICanActivateFunctionReturn = singleN<ICanActivateFunctionReturnedValue>(true);

export const DEFAULT_CAN_ACTIVATE_FUNCTION: ICanActivateFunction = (): IObservable<ICanActivateFunctionReturnedObservableValue> => {
  return DEFAULT_CAN_ACTIVATE_FUNCTION_RETURN;
};
