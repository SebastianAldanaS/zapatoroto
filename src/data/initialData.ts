import { v4 as uuidv4 } from 'uuid';

export const allShoes = [
    {
        brand: 'Nike',
        colors: [{ color: '#000000', color_name: 'Negro' }],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Descripción de prueba',
                        },
                    ],
                },
            ],
        },
        id: uuidv4(),
        images: ['https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/117443400_01/w=1500,h=1500,fit=pad'],
        name: 'Nike flex',
        price: 449.99,
        slug: 'nike flex',
        variants: [
            {
                color: '#000000',
                color_name: 'Negro',
                id: uuidv4(),
                price: 449.99,
                stock: 10,
                size: 10,
            },
        ],
    },
    {
        brand: 'Fila',
        colors: [{ color: '#FF0000', color_name: 'Rojo' }],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Descripción de prueba',
                        },
                    ],
                },
            ],
        },
        id: uuidv4(),
        images: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Fila flex',
        price: 449.99,
        slug: 'fila flex',
        variants: [
            {
                color: '#FF0000',
                color_name: 'Rojo',
                id: uuidv4(),
                price: 449.99,
                stock: 10,
                size: 10,
            },
        ],
    },
    {
        brand: 'Adidas',
        colors: [{ color: '#000000', color_name: 'Negro' }],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Descripción de prueba',
                        },
                    ],
                },
            ],
        },
        id: uuidv4(),
        images: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Adidas flex',
        price: 449.99,
        slug: 'adidas flex',
        variants: [
            {
                color: '#000000',
                color_name: 'Negro',
                id: uuidv4(),
                price: 449.99,
                stock: 10,
                size: 10,
            },
        ],
    },

]

export const recentsShoes = [
    {
        brand: 'Nike',
        colors: [{ color: '#000000', color_name: 'Negro' }],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Descripción de prueba',
                        },
                    ],
                },
            ],
        },
        id: uuidv4(),
        images: ['https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/117443400_01/w=1500,h=1500,fit=pad'],
        name: 'Nike flex',
        price: 449.99,
        slug: 'nike flex',
        variants: [
            {
                color: '#000000',
                color_name: 'Negro',
                id: uuidv4(),
                price: 449.99,
                stock: 10,
                size: 10,
            },
        ],
    },
    {
        brand: 'Fila',
        colors: [{ color: '#FF0000', color_name: 'Rojo' }],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Descripción de prueba',
                        },
                    ],
                },
            ],
        },
        id: uuidv4(),
        images: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Fila flex',
        price: 449.99,
        slug: 'fila flex',
        variants: [
            {
                color: '#FF0000',
                color_name: 'Rojo',
                id: uuidv4(),
                price: 449.99,
                stock: 10,
                size: 10,
            },
        ],
    },
    {
        brand: 'Adidas',
        colors: [{ color: '#000000', color_name: 'Negro' }],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Descripción de prueba',
                        },
                    ],
                },
            ],
        },
        id: uuidv4(),
        images: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Adidas flex',
        price: 449.99,
        slug: 'adidas flex',
        variants: [
            {
                color: '#000000',
                color_name: 'Negro',
                id: uuidv4(),
                price: 449.99,
                stock: 10,
                size: 10,
            },
        ],
    },
]

export const popularShoes = [
    {
        brand: 'Nike',
        colors: [{ color: '#000000', color_name: 'Negro' }],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Descripción de prueba',
                        },
                    ],
                },
            ],
        },
        id: uuidv4(),
        images: ['https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/117443400_01/w=1500,h=1500,fit=pad'],
        name: 'Nike flex',
        price: 449.99,
        slug: 'nike flex',
        variants: [
            {
                color: '#000000',
                color_name: 'Negro',
                id: uuidv4(),
                price: 449.99,
                stock: 10,
                size: 10,
            },
        ],
    },
    {
        brand: 'Fila',
        colors: [{ color: '#FF0000', color_name: 'Rojo' }],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Descripción de prueba',
                        },
                    ],
                },
            ],
        },
        id: uuidv4(),
        images: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Fila flex',
        price: 449.99,
        slug: 'fila flex',
        variants: [
            {
                color: '#FF0000',
                color_name: 'Rojo',
                id: uuidv4(),
                price: 449.99,
                stock: 10,
                size: 10,
            },
        ],
    },
    {
        brand: 'Adidas',
        colors: [{ color: '#000000', color_name: 'Negro' }],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Descripción de prueba',
                        },
                    ],
                },
            ],
        },
        id: uuidv4(),
        images: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Adidas flex',
        price: 449.99,
        slug: 'adidas flex',
        variants: [
            {
                color: '#000000',
                color_name: 'Negro',
                id: uuidv4(),
                price: 449.99,
                stock: 10,
                size: 10,
            },
        ],
    },
]
