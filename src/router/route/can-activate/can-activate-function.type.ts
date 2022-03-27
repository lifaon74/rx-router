import { IDefaultNotificationsUnion, IObservable } from '@lifaon/rx-js-light';
import { INavigateTo } from '../navigate-to/navigate-to.type';
import { IRouteParams } from '../route-params/route-params.type';

export type ICanActivateFunctionReturnedValue = INavigateTo | true;

export type ICanActivateFunctionReturnedObservableValue = IDefaultNotificationsUnion<ICanActivateFunctionReturnedValue>;

export type ICanActivateFunctionReturn = IObservable<ICanActivateFunctionReturnedObservableValue>;

export interface ICanActivateFunction {
  (
    params: IRouteParams,
  ): ICanActivateFunctionReturn;
}
