const DRAG_END_SELECTOR_API = 'DRAG_END_SELECTOR_API'

let initialState = {
    APIs: {
        '1': {
            id: '1',
            title: 'Погода',
            api: 'weatherAPI',
            parameters: []
        },
        '2': {
            id: '2',
            title: 'Погода',
            api: 'COVID_API',
            parameters: []
        },
        '3': {
            id: '3',
            title: 'Погода',
            api: 'COVID_API_2',
            parameters: []
        },
        '4': {
            id: '4',
            title: 'Погода',
            api: 'COVID_API_3',
            parameters: []
        },
        // weatherAPI: {
        //     id: '1',
        //     title: 'Погода',
        //     api: 'weatherAPI',
        //     parameters: []
        // },
        // COVID_API: {
        //     id: '2',
        //     title: 'Погода',
        //     api: 'COVID_API',
        //     parameters: []
        // },
        // COVID_API_2: {
        //     id: '3',
        //     title: 'Погода',
        //     api: 'COVID_API_2',
        //     parameters: []
        // },
        // COVID_API_3: {
        //     id: '4',
        //     title: 'Погода',
        //     api: 'COVID_API_3',
        //     parameters: []
        // },
    },

    APIsColumns: {
        SelectedAPIs: {
            id: 'SelectedAPIs',
            title: 'SelectedAPIs',
            APIsId: ['4'],
        },
        UnselectedAPIs: {
            id: 'UnselectedAPIs',
            title: 'UnselectedAPIs',
            APIsId: ['1', '2', '3'],
        }
    },


    APIsColumnsOrder: ['SelectedAPIs', 'UnselectedAPIs']
}
// tasks: {
//         'task': { id: 'task', content: 'Some content' },
//         'task1': { id: 'task1', content: 'Some content' },
//         'task2': { id: 'task2', content: 'Some content' },
//         'task3': { id: 'task3', content: 'Some content' },
//         'task4': { id: 'task4', content: 'Some content' },
//         'task5': { id: 'task5', content: 'Some content' },
//     },

//     columns: {
//         'coloumn-1': {
//             id: 'column1',
//             title: 'todo',
//             tasksID: ['task1', 'task2', 'task3', 'task4', 'task5']
//         },


let createOrderReducer = (state = initialState, action) => {
    let copyState;
    // let ss = {
    //     "draggableId": "1",

    //     "source": {
    //         "index": 0,
    //         "droppableId": "2"
    //     },

    //     "destination": {
    //         "droppableId": "1",
    //         "index": 0
    //     },
    // }

    // {
    //     "draggableId": "4",

    //     "source": {
    //         "index": 0,
    //         "droppableId": "SelectedAPIs"
    //     },

    //     "destination": {
    //         "droppableId": "UnselectedAPIs",
    //         "index": 1
    //     },
    // }


    switch (action.type) {

        case DRAG_END_SELECTOR_API:
            const { destination, source, draggableId } = action.result;

            let dropAPiByID = (DragableId, APIsId) => {
                // debugger
                let indexOfDragableId = APIsIdSource.indexOf(DragableId);
                if (indexOfDragableId !== -1) {
                    APIsId.splice(indexOfDragableId, 1);
                    // debugger
                }
                return APIsId;
            }

            // debugger
            if (!destination) {
                return state;
            }

            let APIsIdSource = [...state.APIsColumns[source.droppableId].APIsId]
            APIsIdSource = dropAPiByID(draggableId,APIsIdSource)
            let APIsIdDestination = [...state.APIsColumns[destination.droppableId].APIsId, draggableId]

            // debugger

    
            if (
                destination.droppableId === source.droppableId 
                // destination.index === source.index
            ) {
                return state;
            }

     
       
            copyState = {
                ...state
            }

            copyState.APIsColumns[source.droppableId].APIsId = [...APIsIdSource]
            copyState.APIsColumns[destination.droppableId].APIsId = [...APIsIdDestination]
            console.log(state.APIsColumns.UnselectedAPIs.APIsId)
            console.log(state.APIsColumns.SelectedAPIs.APIsId)
            console.log(copyState.APIsColumns.UnselectedAPIs.APIsId)
            console.log(copyState.APIsColumns.SelectedAPIs.APIsId)

            // debugger
            return copyState

        // case LOG_IN: {
        //     copyState = { ...state }
        //     let login = state.login
        //     let password = state.password
        //     AuthService.login(login, password).then(data => {
        //         copyState.token = data.token;
        //         copyState.stateAuth = true;
        //         console.log(copyState)
        //     })
        //     return copyState
        // }
        // case SIGN_IN: {
        //     UserService.getPublicContent(state)
        //     return state
        // }
        // case INPUT_LOGIN_TEXT_UPDATE: {
        //     return {
        //         ...state,
        //         login: action.body
        //     }
        // }
        // case INPUT_PASSWORD_TEXT_UPDATE: {
        //     return {
        //         ...state,
        //         password: action.body
        //     }
        // }
        default:
            return state
    }
}


export const onDragEndCreator = (result) => ({ type: DRAG_END_SELECTOR_API, result: result })
// export const updatePasswordTextAreaCreator = (body) => ({ type: INPUT_PASSWORD_TEXT_UPDATE, body: body })


export default createOrderReducer;
