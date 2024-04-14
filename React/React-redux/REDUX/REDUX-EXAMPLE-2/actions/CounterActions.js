const incrementAction = payloadValue => { return { type: 'INCREMENT', payload: payloadValue || 1 }};
const decrementAction = payloadValue => { return { type: 'DECREMENT', payload: payloadValue || 1 }};

module.exports = {
    incrementAction,
    decrementAction
}