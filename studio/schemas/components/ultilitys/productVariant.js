export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Weight in grams',
      name: 'grams',
      type: 'number'
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number'
    },
    {
      title: 'Unit Amount',
      name: 'unit_amount',
      type: 'number'
    },
    {
      title: 'Active',
      description:'Is this product currently for sale?' ,
      name: 'active',
      type: 'boolean'
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string'
    },
    {
      title: 'Taxable',
      name: 'taxable',
      type: 'boolean'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'pic',
          title: 'Main Pic',
          type: 'pic',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ]
}
