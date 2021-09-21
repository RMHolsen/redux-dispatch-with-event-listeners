// add code snippets from README
// let state = { count: 0 };
// sets the state: both declares and assigns
let state;
// now it only declares the state variable

function changeState(state = { count: 0 }, action) {
    // handle the various actions that can be taken upon state
    switch(action.type) {
        case 'INCREASE_COUNT': 
            return { count: state.count + 1 }
        default: 
            return state;
    }
}

function dispatch(action) {
    // actually persist the changes to state
    state = changeState(state, action);
    render();
}

function render() {
    // render to HTML
    let container = document.getElementById('container');
    container.textContent = state.count;
}

// dispatch({type: '@@INIT'}) // sets html to display the initial state

let button = document.getElementById('button')

button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
    // when the button is clicked dispatch/INCREASE_COUNT is invoked
    // thus the state is changed and the page is re-rendered etc
})