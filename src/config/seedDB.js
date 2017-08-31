import Local from './../api/local/model';
import Command from './../api/command/model';

Command
    .find({})
    .remove()
    .exec();

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
                    status: 'Livre',
                    isOccupied: false,
                },
                {
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Livre',
                    isOccupied: false,
                },
                {
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Livre',
                    isOccupied: false,
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
                    status: 'Livre',
                    isOccupied: false,
                },
                {
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Livre',
                    isOccupied: false,
                },
                {
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Livre',
                    isOccupied: false,
                },
                {
                    id: 1,
                    name: 'Mesa 1',
                    occupations: {
                        total: 10,
                        current: 5,
                    },
                    status: 'Livre',
                    isOccupied: false,
                }
            ]
        });
    });