/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Regalos, 'id'>, schemaOptions: { title: 'NewRegalos', exclude: [ 'id' ] })
 */
export interface NewRegalos {
  descripcion: string;
  monto?: number;
  sorpresa?: boolean;

  [key: string]: any;
}
