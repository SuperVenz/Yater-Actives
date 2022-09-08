export default {
    name: 'product',
    title: 'Product List',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
    
      },
      {
        title: 'Default variant',
        name: 'defaultProductVariant',
        type: 'productVariant',
      },
      {
        title: 'Variants',
        name: 'variants',
        type: 'array',
        of: [
          {
            title: 'Variant',
            type: 'productVariant',
          },
        ],
      },
      {
        title: 'Tags',
        name: 'tags',
        type: 'array',
        of: [
          {
            type: 'string',
          },
        ],
        options: {
          layout: 'tags',
        },
      },
      
      {
        name: 'body',
        title: 'Body',
        type: 'editor',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        manufactor: 'manufactor.title',
        media: 'defaultProductVariant.images[0]',
      },
    },
  }