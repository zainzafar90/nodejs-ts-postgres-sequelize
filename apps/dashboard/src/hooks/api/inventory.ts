// import { CreateInventoryItemInput, HttpTypes, UpdateInventoryItemInput } from '@medusajs/types';
// import { QueryKey, useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';

// import { FetchError } from '@/lib/is-fetch-error';

// import { queryClient } from '../../lib/query-client';
import { queryKeysFactory } from '../../lib/query-key-factory';

const INVENTORY_ITEMS_QUERY_KEY = 'inventory_items' as const;
export const inventoryItemsQueryKeys = queryKeysFactory(INVENTORY_ITEMS_QUERY_KEY);

// const INVENTORY_ITEM_LEVELS_QUERY_KEY = 'inventory_item_levels' as const;
// export const inventoryItemLevelsQueryKeys = queryKeysFactory(INVENTORY_ITEM_LEVELS_QUERY_KEY);

// export const useInventoryItems = (
//   query?: Record<string, any>,
//   options?: Omit<
//     UseQueryOptions<
//       HttpTypes.AdminInventoryItemListResponse,
//       FetchError,
//       HttpTypes.AdminInventoryItemListResponse,
//       QueryKey
//     >,
//     'queryKey' | 'queryFn'
//   >
// ) => {
//   const { data, ...rest } = useQuery({
//     queryFn: () => sdk.admin.inventoryItem.list(query),
//     queryKey: inventoryItemsQueryKeys.list(query),
//     ...options,
//   });

//   return { ...data, ...rest };
// };

// export const useInventoryItem = (
//   id: string,
//   query?: Record<string, any>,
//   options?: Omit<
//     UseQueryOptions<HttpTypes.AdminInventoryItemResponse, FetchError, HttpTypes.AdminInventoryItemResponse, QueryKey>,
//     'queryKey' | 'queryFn'
//   >
// ) => {
//   const { data, ...rest } = useQuery({
//     queryFn: () => sdk.admin.inventoryItem.retrieve(id, query),
//     queryKey: inventoryItemsQueryKeys.detail(id),
//     ...options,
//   });

//   return { ...data, ...rest };
// };

// export const useCreateInventoryItem = (
//   options?: UseMutationOptions<HttpTypes.AdminInventoryItemResponse, FetchError, HttpTypes.AdminCreateInventoryItem>
// ) => {
//   return useMutation({
//     mutationFn: (payload: CreateInventoryItemInput) => sdk.admin.inventoryItem.create(payload),
//     onSuccess: (data, variables, context) => {
//       queryClient.invalidateQueries({
//         queryKey: inventoryItemsQueryKeys.lists(),
//       });
//       options?.onSuccess?.(data, variables, context);
//     },
//     ...options,
//   });
// };

// export const useUpdateInventoryItem = (
//   id: string,
//   options?: UseMutationOptions<HttpTypes.AdminInventoryItemResponse, FetchError, UpdateInventoryItemInput>
// ) => {
//   return useMutation({
//     mutationFn: (payload: UpdateInventoryItemInput) => sdk.admin.inventoryItem.update(id, payload),
//     onSuccess: (data, variables, context) => {
//       queryClient.invalidateQueries({
//         queryKey: inventoryItemsQueryKeys.lists(),
//       });
//       queryClient.invalidateQueries({
//         queryKey: inventoryItemsQueryKeys.detail(id),
//       });
//       options?.onSuccess?.(data, variables, context);
//     },
//     ...options,
//   });
// };

// export const useDeleteInventoryItem = (
//   id: string,
//   options?: UseMutationOptions<HttpTypes.AdminInventoryItemResponse, FetchError, void>
// ) => {
//   return useMutation({
//     mutationFn: () => sdk.admin.inventoryItem.delete(id),
//     onSuccess: (data, variables, context) => {
//       queryClient.invalidateQueries({
//         queryKey: inventoryItemsQueryKeys.lists(),
//       });
//       queryClient.invalidateQueries({
//         queryKey: inventoryItemsQueryKeys.detail(id),
//       });
//       options?.onSuccess?.(data, variables, context);
//     },
//     ...options,
//   });
// };

// export const useDeleteInventoryItemLevel = (
//   inventoryItemId: string,
//   locationId: string,
//   options?: UseMutationOptions<HttpTypes.AdminInventoryItemResponse, FetchError, void>
// ) => {
//   return useMutation({
//     mutationFn: () => sdk.admin.inventoryItem.deleteLevel(inventoryItemId, locationId),
//     onSuccess: (data, variables, context) => {
//       queryClient.invalidateQueries({
//         queryKey: inventoryItemsQueryKeys.lists(),
//       });
//       queryClient.invalidateQueries({
//         queryKey: inventoryItemsQueryKeys.detail(inventoryItemId),
//       });
//       queryClient.invalidateQueries({
//         queryKey: inventoryItemLevelsQueryKeys.detail(inventoryItemId),
//       });
//       options?.onSuccess?.(data, variables, context);
//     },
//     ...options,
//   });
// };

// export const useInventoryItemLevels = (
//   inventoryItemId: string,
//   query?: Record<string, any>,
//   options?: Omit<
//     UseQueryOptions<
//       HttpTypes.AdminInventoryLevelListResponse,
//       FetchError,
//       HttpTypes.AdminInventoryLevelListResponse,
//       QueryKey
//     >,
//     'queryKey' | 'queryFn'
//   >
// ) => {
//   const { data, ...rest } = useQuery({
//     queryFn: () => sdk.admin.inventoryItem.listLevels(inventoryItemId, query),
//     queryKey: inventoryItemLevelsQueryKeys.detail(inventoryItemId),
//     ...options,
//   });

//   return { ...data, ...rest };
// };

// export const useUpdateInventoryLevel = (
//   inventoryItemId: string,
//   locationId: string,
//   options?: UseMutationOptions<HttpTypes.AdminInventoryItemResponse, FetchError, UpdateInventoryItemInput>
// ) => {
//   return useMutation({
//     mutationFn: (payload: UpdateInventoryItemInput) =>
//       sdk.admin.inventoryItem.updateLevel(inventoryItemId, locationId, payload),
//     onSuccess: (data, variables, context) => {
//       queryClient.invalidateQueries({
//         queryKey: inventoryItemsQueryKeys.lists(),
//       });
//       queryClient.invalidateQueries({
//         queryKey: inventoryItemsQueryKeys.detail(inventoryItemId),
//       });
//       queryClient.invalidateQueries({
//         queryKey: inventoryItemLevelsQueryKeys.detail(inventoryItemId),
//       });
//       options?.onSuccess?.(data, variables, context);
//     },
//     ...options,
//   });
// };
