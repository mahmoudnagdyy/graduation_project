import { createStore } from "redux";

const initState = {
    subjects: [
        {
            name: 'Network', 
            lectures: [
            {id: 1, name: 'lecture 1', url:'https://drive.google.com/file/d/1ARyR_VDwrjgo2bpVT8AedqDRitP5FgrL/view?usp=drive_link'},
            {id: 2, name: 'lecture 2', url:'https://drive.google.com/file/d/1I4MbYMGeCs140146MUyh5zE48eZe4E31/view?usp=drive_link'},
            {id: 3, name: 'lecture 3', url:'https://drive.google.com/file/d/1rhwyHn-Vdaq2-fKUIOWJ5WCtsm1EOd8l/view?usp=drive_link'},
            {id: 4, name: 'lecture 4', url:'https://drive.google.com/file/d/1J8fRZ-AzUAkNRQ-HKRSlR1g5PgOIHuwA/view?usp=drive_link'},
            {id: 5, name: 'lecture 5', url:'https://drive.google.com/file/d/19juw-3OI5-suabeB0Aykfooin_Jsb-pl/view?usp=drive_link'},
        ]},
        
        {
            name: 'Control', 
            lectures: [
            {id: 1, name: 'lecture 1', url:'https://drive.google.com/file/d/11H9c8p3jAz7VtLU404tp7ssZbHPJaUap/view?usp=drive_link'},
            {id: 2, name: 'lecture 2', url:'https://drive.google.com/file/d/1hf5-ZaEYzj5UoK1hBZH6gH372muMJtwF/view?usp=drive_link'},
            {id: 3, name: 'lecture 3', url:'https://drive.google.com/file/d/1mTC_lBPdneLovZIDTIHfVGpe1akjPMm3/view?usp=drive_link'},
        ]},
        
        {
            name: 'AI', 
            lectures: [
            {id: 1, name: 'lecture 1', url:'https://drive.google.com/file/d/11H9c8p3jAz7VtLU404tp7ssZbHPJaUap/view?usp=drive_link'},
            {id: 2, name: 'lecture 2', url:'https://drive.google.com/file/d/1hf5-ZaEYzj5UoK1hBZH6gH372muMJtwF/view?usp=drive_link'},
            {id: 3, name: 'lecture 3', url:'https://drive.google.com/file/d/1mTC_lBPdneLovZIDTIHfVGpe1akjPMm3/view?usp=drive_link'},
        ]},
        
        {
            name: 'Mobile', 
            lectures: [
            {id: 1, name: 'lecture 1', url:'https://drive.google.com/file/d/11H9c8p3jAz7VtLU404tp7ssZbHPJaUap/view?usp=drive_link'},
            {id: 2, name: 'lecture 2', url:'https://drive.google.com/file/d/1hf5-ZaEYzj5UoK1hBZH6gH372muMJtwF/view?usp=drive_link'},
            {id: 3, name: 'lecture 3', url:'https://drive.google.com/file/d/1mTC_lBPdneLovZIDTIHfVGpe1akjPMm3/view?usp=drive_link'},
        ]},
        
    ],
}


const lectureReducer = (state = initState, action) => {
    return state;
}


const Store = createStore(lectureReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default Store;







