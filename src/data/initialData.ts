export const allShoes = [
    {
        brand: 'Nike',
        id: 1,
        name: 'Nike Air Max',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35c07f69-1d7a-4272-abe4-4adf4b9a9d2f/AIR+MAX+DN.png',
        description: {
            type: 'running',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Nike Air Max DN',
                        },
                    ],
                },
            ],
        },
        price: 100,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 2,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Adidas',
        id: 3,
        name: 'Adidas Superstar',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/2d8b4d4b4f4d4d6c8a7aa9b100f6a0c8_9366/Superstar_Shoes_Black_C77124_01_standard.jpg',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Adidas Superstar',
                        },
                    ],
                },
            ],
        },
        price: 80,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 4,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Puma',
        id: 5,
        name: 'Puma Suede',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374453/01/sv01/fnd/EEA/fmt/png/Suede-Classic-XXI-Trainers',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Puma Suede',
                        },
                    ],
                },
            ],
        },
        price: 70,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 6,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Reebok',
        id: 7,
        name: 'Reebok Classic',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/2f4f3b3c7d4f4c5b9a4daa9b0f6a0c8_9366/Classic_Leather_Shoes_Black_49797_01_standard.jpg',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Reebok Classic',
                        },
                    ],
                },
            ],
        },
        price: 90,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 8,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Converse',
        id: 9,
        name: 'Converse Chuck Taylor',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://media.finishline.com/i/FL10_1644_001?$Main_gray$',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Converse Chuck Taylor',
                        },
                    ],
                },
            ],
        },
        price: 60,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 10,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Vans',
        id: 11,
        name: 'Vans Old Skool',
        colors:
            [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Vans Old Skool',
                        },
                    ],
                },
            ],
        },
        price: 75,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 12,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'New Balance',
        id: 13,
        name: 'New Balance 574',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://nb.scene7.com/is/image/NB/ml574egb_nb_02_i?$pdpflexf2$',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The New Balance 574',
                        },
                    ],
                },
            ],
        },
        price: 85,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 14,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Fila',
        id: 15,
        name: 'Fila Disruptor',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://www.fila.com/on/demandware.static/-/Sites-FILA-Library/default/dw3a4e6a5b/images/hi-res/5FM00541_014_m1.jpg',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Fila Disruptor',
                        },
                    ],
                },
            ],
        },
        price: 95,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 16,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Under Armour',
        id: 17,
        name: 'Under Armour HOVR',
        colors: [{ color: '#000000', color_name: 'Black' }, {
            color: '#FF0000', color_name
                : 'Red'
        }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://underarmour.scene7.com/is/image/Underarmour/3022586-001_DEFAULT?scl=1&fmt=jpg&qlt=80&wid=600&hei=600&size=600,600',
        description: {
            type: 'running',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Under Armour HOVR',
                        },
                    ],
                },
            ],
        },
        price: 110,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 18,
                stock: 10,
                size: 10,

            }
        ]
    },

]

export const recentsShpoes = [
    {
        brand: 'Nike',
        id: 1,
        name: 'Nike Air Max',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35c07f69-1d7a-4272-abe4-4adf4b9a9d2f/AIR+MAX+DN.png',
        description: {
            type: 'running',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Nike Air Max DN',
                        },
                    ],
                },
            ],
        },
        price: 100,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 2,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Adidas',
        id: 3,
        name: 'Adidas Superstar',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/2d8b4d4b4f4d4d6c8a7aa9b100f6a0c8_9366/Superstar_Shoes_Black_C77124_01_standard.jpg',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Adidas Superstar',
                        },
                    ],
                },
            ],
        },
        price: 80,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 4,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Puma',
        id: 5,
        name: 'Puma Suede',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374453/01/sv01/fnd/EEA/fmt/png/Suede-Classic-XXI-Trainers',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Puma Suede',
                        },
                    ],
                },
            ],
        },
        price: 70,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 6,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Reebok',
        id: 7,
        name: 'Reebok Classic',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/2f4f3b3c7d4f4c5b9a4daa9b0f6a0c8_9366/Classic_Leather_Shoes_Black_49797_01_standard.jpg',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Reebok Classic',
                        },
                    ],
                },
            ],
        },
        price: 90,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 8,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Converse',
        id: 9,
        name: 'Converse Chuck Taylor',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://media.finishline.com/i/FL10_1644_001?$Main_gray$',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Converse Chuck Taylor',
                        },
                    ],
                },
            ],
        },
        price: 60,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 10,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Vans',
        id: 11,
        name: 'Vans Old Skool',
        colors:
            [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Vans Old Skool',
                        },
                    ],
                },
            ],
        },
        price: 75,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 12,
                stock: 10,
                size: 10,

            }
        ]
    },
]

export const popularShoes = [
    {
        brand: 'Nike',
        id: 1,
        name: 'Nike Air Max',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35c07f69-1d7a-4272-abe4-4adf4b9a9d2f/AIR+MAX+DN.png',
        description: {
            type: 'running',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Nike Air Max DN',
                        },
                    ],
                },
            ],
        },
        price: 100,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 2,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Adidas',
        id: 3,
        name: 'Adidas Superstar',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/2d8b4d4b4f4d4d6c8a7aa9b100f6a0c8_9366/Superstar_Shoes_Black_C77124_01_standard.jpg',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Adidas Superstar',
                        },
                    ],
                },
            ],
        },
        price: 80,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 4,
                stock: 10,
                size: 10,

            }
        ]
    },
    {
        brand: 'Puma',
        id: 5,
        name: 'Puma Suede',
        colors: [{ color: '#000000', color_name: 'Black' }, { color: '#FF0000', color_name: 'Red' }, { color: '#FFFFFF', color_name: 'White' }],
        created_at: new Date().toISOString(),
        img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374453/01/sv01/fnd/EEA/fmt/png/Suede-Classic-XXI-Trainers',
        description: {
            type: 'casual',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'The Puma Suede',
                        },
                    ],
                },
            ],
        },
        price: 70,
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 6,
                stock: 10,
                size: 10,

            }
        ]
    },
]
