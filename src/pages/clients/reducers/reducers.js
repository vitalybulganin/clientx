import * as types from '../../../constants/action-types';

const initialState = {
    clients: [
        {
            id: 1,
            lastName: 'Иванов',
            firstName: 'Иван',
            secondName: 'Петрович',
            mobile: '(903) 000-00-00',
            email: 'xxx@xxx.com',
            birthday: '20-05-2016',
            gender: 'F',
            contacts: [
                {
                id: 1,
                    value: '333-33-44',
                comment: ''
                },
                {
                    id: 2,
                    value: '555-55-55',
                    comment: 'Хрень!'
                }
            ],
            comment: ''
        }
    ],
    error: ''
};

function clientsReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.GET_CLIENTS:
            return state;

        case types.ADD_CLIENT:
            const clients = state.clients;
            const client = {
                id: clients.length + 1,
                lastName: action.client.lastName,
                firstName: action.client.firstName,
                secondName: action.client.secondName,
                mobile: action.client.mobile,
                email: action.client.email,
                birthday: action.client.birthday,
                gender: action.client.gender,
                contacts: [],
                comment: action.client.comment
            };
            action.client.contacts.map((contact, idx) => {client.contacts.push(contact)});

            clients.push(client);

            return Object.assign({}, state, {
                clients,
                showForm: true
            });

        case types.UPDATE_CLIENT:
            const clientIndex = state.clients.findIndex((client) => {client.id === action.client.id});

            if (clientIndex !== -1)
            {
                return Object.assign({}, state, {
                    client: state.clients[clientIndex],
                    showForm: true
                });
            }
            return state;

        case types.DELETE_CLIENT:
            return state;

        default:
            return state;
    }
}

const ClientsReducer = {
    clients: clientsReducer
};

export default ClientsReducer;
