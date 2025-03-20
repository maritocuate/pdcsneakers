import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
// import { productType } from "./productTypes";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripeCheckoutSessionId",
      title: "Stripe Checkout Session ID",
      type: "string",
    }),
    defineField({
      name: "stripeCostumerId",
      title: "Stripe Costumer ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "costumerName",
      title: "Costumer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "costumerEmail",
      title: "Costumer Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripePaymentIntentId",
      title: "Stripe Payment Intent ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Failed", value: "failed" },
        ],
      },
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            /* defineField({
              name: "product",
              title: "product bought",
              type: "reference",
              to: { type: "product" },
            }), */
            defineField({
              name: "quantity",
              title: "Quantity",
              type: "number",
            }),
          ],
          preview: {
            select: {
              product: "product.name",
              quantity: "quantity",
              image: "product.image",
              price: "product.price",
            },
            prepare(selection) {
              const { product, quantity, image, price } = selection;
              return {
                title: `${product} ${quantity}`,
                subtitle: `${price}`,
                media: image,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      name: "costumerName",
      orderNumber: "orderNumber",
      status: "status",
      products: "products",
    },
    prepare(selection) {
      const { orderNumber, status, products } = selection;
      return {
        title: `${orderNumber}`,
        subtitle: `${status} - ${products.length} products`,
      };
    },
  },
});
