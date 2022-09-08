export default {
    name: 'productCardArray',
    title: 'Product Card array',
    type: 'object',
    fields: [
        {
            name: 'cardArray',
            title: 'cardArray',
            type: 'array',
            of: [{ type: 'productCard' }],
        },
    ],
}