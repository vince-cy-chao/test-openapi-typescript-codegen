/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Item } from '../models/Item';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Read Item
     * Read item by id.
     * @param itemId
     * @returns Item Successful Response
     * @throws ApiError
     */
    public static readItem(
        itemId: number,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/items/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Item
     * Delete item by id.
     * @param itemId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteItem(
        itemId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/items/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
