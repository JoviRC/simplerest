interface CartaMap {
    tipo: string;
    idx: number;
    platos: [
        {
            nombre: string;
            content: string;
            precio: number;
        },
        ...any
    ];
}

interface Carta {
    [id: number]: CartaMap;
}

export const DataCarta: Carta = [
    {
        tipo: "Hamburguesas",
        idx: 0,
        platos: [
            {
                nombre: "Pontezuelo Blancos",
                content: "( Hamburguesa, Tomate, Palta )",
                precio: 5000,
            },
            {
                nombre: "Ajil de Quiles",
                content: "( Hamburguesa, Tomate, Palta, Lechuga )",
                precio: 5500,
            },
            {
                nombre: "Parral de Quiles",
                content: "( Hamburguesa, Tomate, Palta, Tocino )",
                precio: 5500,
            },
            {
                nombre: "Altos de Pechen",
                content: "( Hamburguesa, Queso Fundido )",
                precio: 5500,
            },
            {
                nombre: "Higuera de Quiles",
                content: "( Hamburguesa, Ketchup, Pepinillo, Tomate, Lechuga, Huevo )",
                precio: 6000,
            },
            {
                nombre: "Escorza",
                content: "( Hamburguesa, Tomate, Palta, Cebolla, Aji Verde )",
                precio: 6000,
            },
            {
                nombre: "Los Corrales",
                content: "( Hamburguesa, Queso Fundido, Champiñones )",
                precio: 5500,
            },
            {
                nombre: "El Cienago",
                content: "( Hamburguesa, Queso Fundido, Palta )",
                precio: 5500,
            },
            {
                nombre: "Don Fernando",
                content: "( Hamburguesa, Tomate, Lechuga, Choclo, Pimentón, Aceituna )",
                precio: 6000,
            },
            {
                nombre: "Doña Feli",
                content: "( Hamburguesa, Tomate, Lechuga, Aceituna )",
                precio: 5500,
            },
        ],
    },
    {
        tipo: "Churrascos",
        idx: 1,
        platos: [
            {
                nombre: "Churrasco a lo pobre",
                content: "( Carne, Papas Fritas, Huevo, Cebolla Frita )",
                precio: 6000,
            },
            {
                nombre: "Churrasco champiñon queso",
                content: "( Carne, Champiñones, Queso Mozzarella Fundido )",
                precio: 6000,
            },
            {
                nombre: "Churrasco Italiano",
                content: "( Carne, Tomate, Palta )",
                precio: 5000,
            },
            {
                nombre: "Barros Luco",
                content: "( Carne, Queso fundido )",
                precio: 5000,
            },
            {
                nombre: "Churrasco Chacarero",
                content: "( Carne, Tomate, Porotos verdes, Aji verde )",
                precio: 5500,
            },
            {
                nombre: "Churrasco Completo",
                content: "( Carne, Tomate, Palta, Lechuga, Cebolla )",
                precio: 6000,
            },
            {
                nombre: "Churrasco Brasileño",
                content: "( Carne, Palta, Queso Fundido )",
                precio: 5500,
            },
            {
                nombre: "Churrasco Simple",
                content: "( Carne, Tocino, Queso de Cabra o Mozzarella, Rucula, Aji, Pimenton )",
                precio: 6500,
            },
            {
                nombre: "Churrasco Americano",
                content: "( Carne, Tomate, Lechuga, Queso de Cabra, Oregano )",
                precio: 5500,
            },
            {
                nombre: "Churrasco Arriero",
                content: "( Carne, Pepinillos, Huevo Frito )",
                precio: 6000,
            },
            {
                nombre: "Churrasco a la Chilena",
                content: "( Carne, Tomate, Cebolla, Comino )",
                precio: 5500,
            },
            {
                nombre: "Don Fernando",
                content: "( Carne, Tomate, Lechuga, Choclo, Pimentón, Aceituna )",
                precio: 6000,
            },
            {
                nombre: "Doña Feli",
                content: "( Carne, Tomate, Queso, Lechuga, Aceituna )",
                precio: 5500,
            },
        ],
    },
    {
        tipo: "Mechadas",
        idx: 2,
        platos: [
            {
                nombre: "El Divisadero",
                content: "( Carne mechada, Tomate, Cebolla Caramelizada, Aji verde )",
                precio: 5500,
            },
            {
                nombre: "El Peral",
                content: "( Carne mechada, Ketchup, Pepinillo, Lechuga, Tomate )",
                precio: 5500,
            },
            {
                nombre: "El Hinojo",
                content: "( Carne mechada, Pepinillo, Huevo frito)",
                precio: 5500,
            },
            {
                nombre: "Viña Vijea",
                content: "( Carne mechada, Tomate, Lechuga, Queso de Cabra )",
                precio: 6000,
            },
            {
                nombre: "Las Ramadas",
                content: "( Carne mechada, Tomate, Lechuga, Palta, Cebolla )",
                precio: 5500,
            },
            {
                nombre: "La Rinconada",
                content: "( Carne mechada, Champiñón, Queso Fundido )",
                precio: 6000,
            },
            {
                nombre: "El Toro",
                content: "( Carne mechada, Palta, Queso Fundido )",
                precio: 5500,
            },
            {
                nombre: "La Higuera",
                content: "( Carne mechada, Palta, Tomate )",
                precio: 5000,
            },
            {
                nombre: "Graneros",
                content: "( Carne mechada, Queso Fundido )",
                precio: 5000,
            },
            {
                nombre: "La Granjita",
                content: "( Carne mechada, Porotos verdes, Tomate, Aji verde )",
                precio: 5500,
            },
            {
                nombre: "Mechada Simple",
                content:
                    "( Carne mechada, Tochino, Queso de Cabra o Mozzarella, Rucula, Aji, Pimenton )",
                precio: 6500,
            },
            {
                nombre: "Mechada Chilena",
                content: "( Carne mechada, Tomate, Cebolla, Aji verde )",
                precio: 5500,
            },
            {
                nombre: "Don Fernando",
                content: "( Carne mechada, Tomate, Lechuga, Choclo, Pimentón, Aceituna )",
                precio: 6000,
            },
            {
                nombre: "Doña Feli",
                content: "( Carne mechada, Tomate, Queso, Lechuga, Aceituna )",
                precio: 5500,
            },
        ],
    },
    {
        tipo: "Vegetariano",
        idx: 3,
        platos: [
            {
                nombre: "Agua del Ajial",
                content: "( Champiñón Salteado, Tomate, Cebolla Caramelizada, Aji verde )",
                precio: 5500,
            },
            {
                nombre: "El Altar",
                content: "( Champiñón Salteado, Ketchup, Pepinillo, Lechuga, Tomate )",
                precio: 5500,
            },
            {
                nombre: "Los Mantos",
                content: "( Champiñón Salteado, Pepinillo, Huevo frito)",
                precio: 5500,
            },
            {
                nombre: "El Llanito",
                content: "( Champiñón Salteado, Tomate, Lechuga, Queso de Cabra )",
                precio: 6000,
            },
            {
                nombre: "El Higueral",
                content: "( Champiñón Salteado, Tomate, Lechuga, Palta, Cebolla )",
                precio: 5500,
            },
            {
                nombre: "El Piden",
                content: "( Champiñón Salteado, Champiñón, Queso Fundido )",
                precio: 6000,
            },
            {
                nombre: "Las Cruces",
                content: "( Champiñón Salteado, Palta, Queso Fundido )",
                precio: 5500,
            },
            {
                nombre: "El Maitén",
                content: "( Champiñón Salteado, Palta, Tomate )",
                precio: 5000,
            },
            {
                nombre: "Pueblo Nuevo",
                content: "( Champiñón Salteado, Queso Fundido )",
                precio: 5000,
            },
            {
                nombre: "Pueblo Viejo",
                content: "( Champiñón Salteado, Porotos verdes, Tomate, Aji verde )",
                precio: 5500,
            },
            {
                nombre: "Simple Vegetariano",
                content:
                    "( Champiñón Salteado, Tochino, Queso de Cabra o Mozzarella, Rucula, Aji, Pimenton )",
                precio: 5500,
            },
            {
                nombre: "Maitencillo",
                content: "( Champiñón Salteado, Tomate, Cebolla, Aji verde )",
                precio: 5500,
            },
            {
                nombre: "Don Fernando",
                content: "( Champiñón Salteado, Tomate, Lechuga, Choclo, Pimentón, Aceituna )",
                precio: 6000,
            },
            {
                nombre: "Doña Feli",
                content: "( Champiñón Salteado, Tomate, Queso, Lechuga, Aceituna )",
                precio: 5500,
            },
        ],
    },
    {
        tipo: "Chorrillana",
        idx: 4,
        platos: [
            {
                nombre: "Chorrillana",
                content: "( Lonjas de Carne, Papas Fritas, Chorizo, Cebolla Salteada, Huevo )",
                precio: 14000,
            },
            {
                nombre: "Choriqueso",
                content:
                    "( Lonjas de Carne, Papas Fritas, Chorizo, Cebolla Salteada, Queso Fundido )",
                precio: 15000,
            },
            {
                nombre: "Chorrillana Mixta",
                content:
                    "( Lonjas de Carne, Pollo, Papas Fritas, Chorizo, Cebolla Salteada, Huevo )",
                precio: 16500,
            },
            {
                nombre: "Chorrillana Mongoliana",
                content: "( Lonjas de Carne, Papas Fritas, Chorizo, Cebollin, Aji verde, Huevo )",
                precio: 16500,
            },
        ],
    },
    {
        tipo: "Ensaladas",
        idx: 5,
        platos: [
            {
                nombre: "Ensalada Surtida",
                content: "",
                precio: 5500,
            },
            {
                nombre: "Ensalada Chilena",
                content: "",
                precio: 5500,
            },
            {
                nombre: "Acompañamientos",
                content:
                    "-Pollo a la Plancha (Filetitos) -Churrascos (Posta) -Champiñones Salteados",
                precio: 0,
            },
        ],
    },
    {
        tipo: "Fajitas",
        idx: 6,
        platos: [
            {
                nombre: "Carne",
                content: "( Carne, Tomate, Cebolla, Lechuga, Palta, AJi verde )",
                precio: 5000,
            },
            {
                nombre: "Campiñón",
                content: "( Champiñónes, Tomate, Cebolla, Lechuga, Palta, AJi verde )",
                precio: 5000,
            },
            {
                nombre: "Pollo",
                content: "( Pollo, Tomate, Cebolla, Lechuga, Palta, AJi verde )",
                precio: 5000,
            },
        ],
    },
    {
        tipo: "Papas Fritas",
        idx: 7,
        platos: [
            {
                nombre: "Individual",
                content: "",
                precio: 2500,
            },
            {
                nombre: "Chica",
                content: "",
                precio: 3500,
            },
            {
                nombre: "Mediana",
                content: "",
                precio: 4500,
            },
            {
                nombre: "Grande",
                content: "",
                precio: 6500,
            },
        ],
    },
    {
        tipo: "Helados",
        idx: 8,
        platos: [
            {
                nombre: "Copa de Helado",
                content: "",
                precio: 4500,
            },
            {
                nombre: "Copa de Helado Maxi",
                content: "",
                precio: 6500,
            },
            {
                nombre: "Banana Split",
                content: "",
                precio: 5000,
            },
            {
                nombre: "Cafe Helado",
                content: "",
                precio: 4500,
            },
            {
                nombre: "Milk Shake",
                content: "",
                precio: 4500,
            },
        ],
    },
    {
        tipo: "Postres",
        idx: 9,
        platos: [
            {
                nombre: "Tartaleta",
                content: "",
                precio: 4000,
            },
            {
                nombre: "Kuchen",
                content: "",
                precio: 4000,
            },
            {
                nombre: "Pie de Limon",
                content: "",
                precio: 3500,
            },
            {
                nombre: "Torta",
                content: "",
                precio: 3000,
            },
        ],
    },
    {
        tipo: "Bebestibles",
        idx: 10,
        platos: [
            {
                nombre: "Jugo Natural Mix",
                content: "",
                precio: 4000,
            },
            {
                nombre: "Bebida Lata",
                content: "",
                precio: 1500,
            },
            {
                nombre: "Limonada",
                content: "",
                precio: 4000,
            },
            {
                nombre: "Agua Voss",
                content: "",
                precio: 4000,
            },
            {
                nombre: "Energetica",
                content: "",
                precio: 2500,
            },
            {
                nombre: "Cerbeza sin alcohol",
                content: "",
                precio: 2500,
            },
            {
                nombre: "Agua Voss Grande",
                content: "",
                precio: 5000,
            },
            {
                nombre: "Té o Café",
                content: "",
                precio: 1500,
            },
        ],
    },
];

export default DataCarta;
