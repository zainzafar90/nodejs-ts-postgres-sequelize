/**
 * Temporary types for API responses until we export them from `@medusajs/types`
 */

import { Product, ProductOption, ProductType, ProductVariant, Store } from '@medusajs/medusa';

type ListRes = {
  count: number;
  offset: number;
  limit: number;
};

type DeleteRes = {
  id: string;
  object: string;
  deleted: true;
};

// Auth
export type EmailPassRes = {
  tokens: {
    access: {
      token: string;
      expires: string;
    };
    refresh: {
      token: string;
      expires: string;
    };
  };
};

// Users
type User = {
  name: string;
  email: string;
  role: 'user' | 'admin';
  isEmailVerified: boolean;
  id: string;
};
export type UserRes = { user: User };
export type UserListRes = { users: User[] } & ListRes;
export type UserDeleteRes = DeleteRes;

// Product
export type ProductRes = { product: Product };
export type ProductListRes = { products: Product[] } & ListRes;
export type ProductDeleteRes = DeleteRes;

// Product Type
export type ProductTypeRes = { product_type: ProductType };
export type ProductTypeListRes = { product_types: ProductType[] } & ListRes;
export type ProductTypeDeleteRes = DeleteRes;

// Product Option
export type ProductOptionRes = { product_option: ProductOption };
export type ProductOptionListRes = { product_options: ProductOption[] } & ListRes;
export type ProductOptionDeleteRes = DeleteRes;

// Product Variant
export type ProductVariantRes = { product_variant: ProductVariant };
export type ProductVariantListRes = { product_variants: ProductVariant[] } & ListRes;
export type ProductVariantDeleteRes = DeleteRes;

// Stores
export type StoreRes = { store: Store };
export type StoreListRes = { stores: Store[] } & ListRes;
export type StoreDeleteRes = DeleteRes;
