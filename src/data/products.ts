export interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
    featured?: boolean;
    code?: string;
}

export const products: Product[] = [
    // PAPEL TOALHA BOBINA
    {
        id: '1',
        name: 'Papel Toalha Bobina 22g Extra Luxo',
        description: 'Medida: 20cm x 150m. Alta qualidade e absorção.',
        category: 'Papel Toalha Bobina',
        image: '/products/PAPEL TOALHA BOBINA.png',
        code: '01215',
        featured: true,
    },
    {
        id: '9',
        name: 'Toalha Bobina Auto Corte 32g Celulose (150m)',
        description: 'Medida: 20cm x 150m. 100% Celulose. Máxima eficiência.',
        category: 'Papel Toalha Bobina',
        image: '/products/PAPEL TOALHA BOBINA - AUTO CORTE 32G CELULOSE.png',
        code: '01210',
        featured: true,
    },
    {
        id: '10',
        name: 'Toalha Bobina Auto Corte 28g Celulose (150m)',
        description: 'Tamanho: 20cm x 150m. 100% Celulose.',
        category: 'Papel Toalha Bobina',
        image: '/products/PAPEL TOALHA BOBINA - AUTO CORTE 28g CELULOSE.png',
        code: '01208',
        featured: false,
    },
    {
        id: '11',
        name: 'Toalha Bobina 24g Celulose (150m)',
        description: 'Tamanho: 20cm x 150m. 100% Celulose.',
        category: 'Papel Toalha Bobina',
        image: '/products/PAPEL TOALHA BOBINA 24g celulose.png',
        code: '01206',
        featured: false,
    },
    {
        id: '12',
        name: 'Toalha Bobina 20g Celulose (150m)',
        description: 'Medida: 20cm x 150m. 100% Celulose.',
        category: 'Papel Toalha Bobina',
        image: '/products/papel toalha bobina 20g celulose.png',
        code: '01204',
        featured: false,
    },
    {
        id: '18',
        name: 'Toalha Bobina Auto Corte 32g Celulose (200m)',
        description: 'Medida: 20cm x 200m. 100% Celulose. Alta autonomia.',
        category: 'Papel Toalha Bobina',
        image: '/products/PAPEL TOALHA BOBINA - AUTO CORTE 32G CELULOSE.png',
        code: '01203',
        featured: true,
    },
    {
        id: '19',
        name: 'Toalha Bobina Auto Corte 28g Celulose (200m)',
        description: 'Medida: 20cm x 200m. 100% Celulose.',
        category: 'Papel Toalha Bobina',
        image: '/products/PAPEL TOALHA BOBINA - AUTO CORTE 28g CELULOSE.png',
        code: '01202',
        featured: false,
    },
    {
        id: '20',
        name: 'Toalha Bobina 24g Celulose (200m)',
        description: 'Medida: 20cm x 200m. 100% Celulose.',
        category: 'Papel Toalha Bobina',
        image: '/products/PAPEL TOALHA BOBINA 24g celulose.png',
        code: '01201',
        featured: false,
    },
    {
        id: '21',
        name: 'Toalha Bobina 20g Celulose (200m)',
        description: 'Medida: 20cm x 200m. 100% Celulose.',
        category: 'Papel Toalha Bobina',
        image: '/products/papel toalha bobina 20g celulose.png',
        code: '01200',
        featured: false,
    },

    // PAPEL HIGIÊNICO ROLÃO
    {
        id: '2',
        name: 'Higiênico Rolão Folha Simples (Fardo Branco)',
        description: 'Medidas: 09cm x 200m (Big Tube) ou 09cm x 150m. Fardo Econômico.',
        category: 'Papel Higiênico Rolão',
        image: '/products/HIGIÊNICO ROLÃO - FOLHA SIMPLES FARDO.png',
        code: '01110 || 01111',
        featured: true,
    },
    {
        id: '3',
        name: 'Higiênico Rolão Folha Simples (Fardo Luxo)',
        description: 'Medidas: 09cm x 200m (Big Tube) ou 09cm x 150m.',
        category: 'Papel Higiênico Rolão',
        image: '/products/HIGIÊNICO ROLÃO - FOLHA SIMPLES.png',
        code: '01109 || 01117',
        featured: false,
    },
    {
        id: '4',
        name: 'Higiênico Rolão Folha Simples (Fardo Celulose)',
        description: 'Medidas: 09cm x 200m (Big Tube) ou 09cm x 150m. 100% Celulose.',
        category: 'Papel Higiênico Rolão',
        image: '/products/HIGIÊNICO ROLÃO - FOLHA SIMPLES 2.png',
        code: '01105 || 01115',
        featured: false,
    },
    {
        id: '5',
        name: 'Higiênico Rolão Big Roll (Celulose/Luxo/Branco)',
        description: 'Medidas: 09cm x 350m ou 09cm x 500m. Alta capacidade.',
        category: 'Papel Higiênico Rolão',
        image: '/products/HIGIÊNICO ROLÃO - BIG ROLL.png',
        code: '01126-01130 (350m) | 01125-01129 (500m)',
        featured: true,
    },
    {
        id: '16',
        name: 'Higiênico Rolão Folha Simples Celulose (300m)',
        description: 'Medida: 10cm x 300m. Fardo Celulose.',
        category: 'Papel Higiênico Rolão',
        image: '/products/HIGIÊNICO ROLÃO - FOLHA SIMPLES 3.png',
        code: '01103',
        featured: false,
    },
    {
        id: '17',
        name: 'Higiênico Rolão Folha Dupla Caixa Celulose',
        description: 'Medida: 10cm x 200m. Maciez superior. Embalagem Caixa.',
        category: 'Papel Higiênico Rolão',
        image: '/products/HIGIÊNICO ROLÃO - FOLHA DUPLA CAIXA.png',
        code: '01101',
        featured: true,
    },

    // PAPEL TOALHA INTERFOLHADO
    {
        id: '13',
        name: 'Toalha Interfolhada Caixa Celulose',
        description: 'Medidas: 20cm x 21cm ou 22cm x 21cm. Embalagem em caixa.',
        category: 'Papel Toalha Interfolhado',
        image: '/products/PAPEL TOALHA INTERFOLHADO - folha dupla  caixa.png',
        code: '01026 || 01006',
        featured: true,
    },
    {
        id: '14',
        name: 'Toalha Interfolhada Simples Fardo Branco',
        description: 'Tamanho: 20cm x 21cm. Folha Simples.',
        category: 'Papel Toalha Interfolhado',
        image: '/products/PAPEL TOALHA INTERFOLHADO - FOLHA SIMPLES.png',
        code: '01010',
        featured: false,
    },
    {
        id: '15',
        name: 'Toalha Interfolhada Fardo Luxo',
        description: 'Medida: 20cm x 21cm. Linha Luxo.',
        category: 'Papel Toalha Interfolhado',
        image: '/products/PAPEL TOALHA INTERFOLHADO SIMPLES 20x21.png',
        code: '01008',
        featured: false,
    },
    {
        id: '16b',
        name: 'Toalha Interfolhada Simples Fardo Celulose',
        description: 'Medidas: 20cm x 21cm ou 22cm x 21cm. 100% Celulose.',
        category: 'Papel Toalha Interfolhado',
        image: '/products/PAPEL TOALHA INTERFOLHADO - FOLHA SIMPLES 22x21.png',
        code: '01003 || 01007',
        featured: true,
    },
    {
        id: '22',
        name: 'Toalha Interfolhada Simples Celulose (22x21)',
        description: 'Medida: 22cm x 21cm. Folha Simples Celulose.',
        category: 'Papel Toalha Interfolhado',
        image: '/products/PAPEL TOALHA INTERFOLHADO - FOLHA SIMPLES 22x21.png',
        code: '01005',
        featured: false,
    },
    {
        id: '23',
        name: 'Toalha Interfolhada Simples Celulose (20x21)',
        description: 'Medida: 20cm x 21cm. Folha Simples Celulose.',
        category: 'Papel Toalha Interfolhado',
        image: '/products/PAPEL TOALHA INTERFOLHADO SIMPLES 20x21.png',
        code: '01001',
        featured: false,
    },
    {
        id: '24',
        name: 'Toalha Interfolhada Folha Dupla Celulose',
        description: 'Medidas: 20cm x 21cm ou 22cm x 21cm. Folha Dupla.',
        category: 'Papel Toalha Interfolhado',
        image: '/products/PAPEL TOALHA INTERFOLHADO - FOLHA SIMPLES.png', // Generic fallback or specific if available
        code: '01022 || 01017',
        featured: true,
    },

    // PAPEL LENÇOL
    {
        id: '7',
        name: 'Papel Lençol Simples 70cm (Celulose/Luxo/Branco)',
        description: 'Medida: 70cm x 50m. Alta resistência e proteção.',
        category: 'Papel Lençol',
        image: '/products/PAPEL LENÇOL - FOLHA SIMPLES 70x50.png',
        code: '01403 || 01404 || 01402',
        featured: true,
    },
    {
        id: '8',
        name: 'Papel Lençol Simples 50cm (Celulose/Luxo/Branco)',
        description: 'Medida: 50cm x 50m. Ideal para macas padrão.',
        category: 'Papel Lençol',
        image: '/products/PAPEL LENÇOL - FOLHA SIMPLES 50x50.png',
        code: '01400 || 01401 || 01405',
        featured: false,
    },
];

export const categories = [
    'Todos',
    'Papel Toalha Bobina',
    'Papel Toalha Interfolhado',
    'Papel Higiênico Rolão',
    'Papel Lençol'
];
