export const actionTypes={
    BOOK_TICKET:"BOOK_TICKETS",
    CANCEL_TICKET:"CANCEL_TICKETS",
    CHANGE_TOTAL_TICKETS:"CHANGE_TOTAL_TICKETS",
    CHANGE_MOVIE:"CHANGE_MOVIE"

};

 export const initialState = {
    movieTheater:"MARUTHI DOLBY ATMOS",
    location: "Palakollu",
    moviename: "Takkari Donga",
    totalTickets: 100,
    BookedTickets:50,
    CurrentAvailableTickets:0,
};


export const reducer = (state=initialState, action) => {
    console.log("i am reaching reducer");
    switch (action.type) {
      case actionTypes.BOOK_TICKET:
        return {
          ...state,
          bookedTickets: state.BookedTickets + action.payload,
          currentAvailableTickets: state.CurrentAvailableTickets - action.payload,
        };
      case actionTypes.CANCEL_TICKET:
        return {
          ...state,
          bookedTickets: state.BookedTickets - action.payload,
          currentAvailableTickets: state.CurrentAvailableTickets + action.payload,
        };
        case actionTypes.CHANGE_TOTAL_TICKETS:
            return {...state,
                totalTickets: state.totalTickets + action.payload,
            }
        case actionTypes.CHANGE_MOVIE:
            return { ...state, movieName: action.payload };
            default:
              return state;

            }
            }


