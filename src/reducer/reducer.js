const SET_ARGU = 'SET_ARGU'

function setBags(people, money) {
    people = +people
    money = +money
    var bags = []
    var currsum = 0
    for (var i = 0; i < people - 1; i++) {
        var ave = ((money - currsum) / (people - i))
        bags[i] = ((Math.random() + 0.01) * (ave * 2)).toFixed(2)
        currsum += +bags[i]
    }
    bags[people - 1] = (money - currsum).toFixed(2)
    return bags
}

function reducer(state, action) {
    if (!state) {
        return {
            people: '',
            money: '',
            bags: [0],
        }
    }
    
    switch (action.type) {
        case SET_ARGU:
        var bags = setBags(action.people, action.money)
            return {
                ...state, 
                people: action.people,
                money: action.money,
                bags: bags,
            }

        default: 
            return state
    }
}

export default reducer