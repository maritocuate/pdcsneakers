import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { productType } from "./productTypes";
import { orderType } from "./orderType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    orderType,
    blockContentType,
    categoryType,
    postType,
    authorType,
    productType,
  ],
};
