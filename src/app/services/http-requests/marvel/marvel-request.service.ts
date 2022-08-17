import { environment } from './../../../../environments/environment';
import { IParamHolder } from './models/interfaces/IParamHolder';
import { IDataWrapper } from './models/interfaces/IDataWrapper';
import { Injectable } from '@angular/core';
import { AbstractApiConnectionHandler } from '../abstract-crud';
import { Observable, reduce } from 'rxjs';
import { ECategory } from './models/enums/ECategory';

@Injectable({
  providedIn: 'root'
})
export class MarvelRequestService extends AbstractApiConnectionHandler<
  IDataWrapper,
  IParamHolder
> {
  protected apiUrl!: string;

  //#region ADD FUNCTIONALITIES TO PARENT FUNCTIONS
  override getSingle(
    params: Partial<IParamHolder> = { category: ECategory.Characters }
  ): Observable<IDataWrapper> {
    this.apiUrl = this.customizeUrl(params);
    this.generateParams(params);
    return super.getSingle(params);
  }

  protected override generateParams(params: Partial<IParamHolder>): string {
    let paramString = super.generateParams(params);
    paramString += this.addKey();
    return paramString;
  }
  //#endregion

  //#region PROTECTED METHODS
  protected customizeUrl(params: Partial<IParamHolder>): string {
    const value = environment.marvelApi + params.category;
    params['category'] = undefined;
    return value;
  }

  protected addKey(): string {
    return `&ts=${environment.ts}&apikey=${environment.publicKey}&hash=${environment.hash}`;
  }
  //#endregion
}
