import User from './../api/user/user.model';
import Local from './../api/local/model';

Local
    .find({})
    .remove()
    .then(() => {
        Local.create({
            name: 'Sala',
            description: '',
            tables: [{
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Fazendo pedido',
                    isOccupied: false,
                },
                {
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Fazendo pedido',
                    isOccupied: true,
                },
                {
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Fazendo pedido',
                    isOccupied: true,
                },
                {
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Fazendo pedido',
                    isOccupied: true,
                },
            ],
        }, {
            name: 'Sala',
            description: '',
            tables: [{
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Fazendo pedido',
                    isOccupied: false,
                },
                {
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Fazendo pedido',
                    isOccupied: true,
                },
                {
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Fazendo pedido',
                    isOccupied: true,
                },
                {
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Fazendo pedido',
                    isOccupied: true,
                }
            ]
        });
    });

User.find({})
    .remove()
    .then(() => {
        User.create({
            name: 'Henrique Rodrigues',
            password: 12345678,
            email: 'henryqrm@gmail.com'
        });
    });
