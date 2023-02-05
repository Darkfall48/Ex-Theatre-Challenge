import { robotService } from "../../services/robot.service"

export function loadRobots() {

    return async (dispatch, getState) => {
        try {
            const filterBy = getState().robotModule.filterBy
            const robots = await robotService.query(filterBy)
            dispatch({ type: 'SET_ROBOTS', robots })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeRobot(robotId) {

    return async (dispatch) => {
        try {
            const robots = await robotService.remove(robotId)
            dispatch({ type: 'REMOVE_ROBOT', robotId })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function setFilterBy(filterBy) {

    return (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER_BY', filterBy: { ...filterBy } })
        } catch (err) {
            console.log('err:', err)
        }
    }
}