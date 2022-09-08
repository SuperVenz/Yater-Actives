export default {
    name: 'productCard',
    title: 'Product card',
    type: 'object',
    fields: [
        {
            name: 'product',
            title: 'product',
            type: 'reference',
            to: [{ type: 'product' }],
        },
    ],
}