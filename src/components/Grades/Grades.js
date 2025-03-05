import React, { useCallback, useEffect, useState } from 'react'
import './grades.css'
import axios from 'axios'

export const Grades = () => {

    const [user, setUser] = useState()
    const [userGrades, setUserGrades] = useState({})

    const getLoginUser = () => {
        axios.get('http://localhost:5000/getLoginUser')
        .then(response => {
            setUser(response.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const getGrades = useCallback(
        () => {
            if(user){
                axios.get(`http://localhost:5000/getGrades/${user.userID}`)
                .then((res) => {
                    setUserGrades(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        }, [user]
    )
    
    
    let level0_term1_Sum = 0;
    let level0_term1_Fullmark = 0;


    let level0_term1 = userGrades.length ? 
    userGrades.filter((val) => val.level === 0 && val.term === '1st')
    .map((grade, id) => {
        level0_term1_Sum += grade.grade
        level0_term1_Fullmark += grade.fullmark
        return(
            <tr key={id}>
                <td>{grade.name}</td>
                <td>{grade.grade}</td>
                <td>{grade.fullmark}</td>
                <td>{grade.state}</td>
            </tr>
        )
    })
    : null

    let level0_term2_Sum = 0;
    let level0_term2_Fullmark = 0;

    let level0_term2 = userGrades.length ? 
    userGrades.filter((val) => val.level === 0 && val.term === '2nd')
    .map((grade, id) => {
        level0_term2_Sum += grade.grade
        level0_term2_Fullmark += grade.fullmark
        return(
            <tr key={id}>
                <td>{grade.name}</td>
                <td>{grade.grade}</td>
                <td>{grade.fullmark}</td>
                <td>{grade.state}</td>
            </tr>
        )
    })
    : null


    let level1_term1_Sum = 0;
    let level1_term1_Fullmark = 0;

    let level1_term1 = userGrades.length ? 
    userGrades.filter((val) => val.level === 1 && val.term === '1st')
    .map((grade, id) => {
        level1_term1_Sum += grade.grade
        level1_term1_Fullmark += grade.fullmark
        return(
            <tr key={id}>
                <td>{grade.name}</td>
                <td>{grade.grade}</td>
                <td>{grade.fullmark}</td>
                <td>{grade.state}</td>
            </tr>
        )
    })
    : null


    let level1_term2_Sum = 0;
    let level1_term2_Fullmark = 0;

    let level1_term2 = userGrades.length ? 
    userGrades.filter((val) => val.level === 1 && val.term === '2nd')
    .map((grade, id) => {
        level1_term2_Sum += grade.grade
        level1_term2_Fullmark += grade.fullmark
        return(
            <tr key={id}>
                <td>{grade.name}</td>
                <td>{grade.grade}</td>
                <td>{grade.fullmark}</td>
                <td>{grade.state}</td>
            </tr>
        )
    })
    : null

    let level2_term1_Sum = 0;
    let level2_term1_Fullmark = 0;

    let level2_term1 = userGrades.length ? 
    userGrades.filter((val) => val.level === 2 && val.term === '1st')
    .map((grade, id) => {
        level2_term1_Sum += grade.grade
        level2_term1_Fullmark += grade.fullmark
        return(
            <tr key={id}>
                <td>{grade.name}</td>
                <td>{grade.grade}</td>
                <td>{grade.fullmark}</td>
                <td>{grade.state}</td>
            </tr>
        )
    })
    : null


    let level2_term2_Sum = 0;
    let level2_term2_Fullmark = 0;

    let level2_term2 = userGrades.length ? 
    userGrades.filter((val) => val.level === 2 && val.term === '2nd')
    .map((grade, id) => {
        level2_term2_Sum += grade.grade
        level2_term2_Fullmark += grade.fullmark
        return(
            <tr key={id}>
                <td>{grade.name}</td>
                <td>{grade.grade}</td>
                <td>{grade.fullmark}</td>
                <td>{grade.state}</td>
            </tr>
        )
    })
    : null


    let level3_term1_Sum = 0;
    let level3_term1_Fullmark = 0;

    let level3_term1 = userGrades.length ? 
    userGrades.filter((val) => val.level === 3 && val.term === '1st')
    .map((grade, id) => {
        level3_term1_Sum += grade.grade
        level3_term1_Fullmark += grade.fullmark
        return(
            <tr key={id}>
                <td>{grade.name}</td>
                <td>{grade.grade}</td>
                <td>{grade.fullmark}</td>
                <td>{grade.state}</td>
            </tr>
        )
    })
    : null

    let level3_term2_Sum = 0;
    let level3_term2_Fullmark = 0;

    let level3_term2 = userGrades.length ? 
    userGrades.filter((val) => val.level === 3 && val.term === '2nd')
    .map((grade, id) => {
        level3_term2_Sum += grade.grade
        level3_term2_Fullmark += grade.fullmark
        return(
            <tr key={id}>
                <td>{grade.name}</td>
                <td>{grade.grade}</td>
                <td>{grade.fullmark}</td>
                <td>{grade.state}</td>
            </tr>
        )
    })
    : null


    let level4_term1_Sum = 0;
    let level4_term1_Fullmark = 0;

    let level4_term1 = userGrades.length ? 
    userGrades.filter((val) => val.level === 4 && val.term === '1st')
    .map((grade, id) => {
        level4_term1_Sum += grade.grade
        level4_term1_Fullmark += grade.fullmark
        return(
            <tr key={id}>
                <td>{grade.name}</td>
                <td>{grade.grade}</td>
                <td>{grade.fullmark}</td>
                <td>{grade.state}</td>
            </tr>
        )
    })
    : null


    let level4_term2_Sum = 0;
    let level4_term2_Fullmark = 0;

    let level4_term2 = userGrades.length ? 
    userGrades.filter((val) => val.level === 4 && val.term === '2nd')
    .map((grade, id) => {
        level4_term2_Sum += grade.grade
        level4_term2_Fullmark += grade.fullmark
        return(
            <tr key={id}>
                <td>{grade.name}</td>
                <td>{grade.grade}</td>
                <td>{grade.fullmark}</td>
                <td>{grade.state}</td>
            </tr>
        )
    })
    : null



    useEffect(() => {
        getLoginUser()
        getGrades()
    }, [user, getGrades])

  return (
    <div className='grades_cont'>

        <h1 className='grades_h'>your grades</h1>


        
        {/* Level 0 Term 1 */}

        {
            level0_term1 ? level0_term1.length ?
            <table className='grades'>
            <thead>
                <tr><th colSpan={4} className='table_h'>level 0, 1st term</th></tr>
                <tr className='props'>
                    <th>name</th>
                    <th>grade</th>
                    <th>fullmark</th>
                    <th>state</th>
                </tr>
            </thead>
            <tbody>
                {level0_term1}
                <tr>
                    <td colSpan={2}>GPA</td>
                    <td colSpan={2}>{(level0_term1_Sum / level0_term1_Fullmark) * 4}</td>
                </tr>
            </tbody>
        </table> : null : null
        }


        {/* Level 0 Term 2 */}

        {
            level0_term2 ? level0_term2.length ?
            <table className='grades'>
                <thead>
                    <tr><th colSpan={4} className='table_h'>level 0, 2nd term</th></tr>
                    <tr className='props'>
                        <th>name</th>
                        <th>grade</th>
                        <th>fullmark</th>
                        <th>state</th>
                    </tr>
                </thead>
                <tbody>
                    {level0_term2}
                    <tr>
                        <td colSpan={2}>GPA</td>
                        <td colSpan={2}>{(level0_term2_Sum / level0_term2_Fullmark) * 4}</td>
                    </tr>
                </tbody>
            </table> : null: null
        }


        {/* Level 1 Term 1 */}

        {
            level1_term1? level1_term1.length ?
            <table className='grades'>
                <thead>
                    <tr><th colSpan={4} className='table_h'>level 1, 1st term</th></tr>
                    <tr className='props'>
                        <th>name</th>
                        <th>grade</th>
                        <th>fullmark</th>
                        <th>state</th>
                    </tr>
                </thead>
                <tbody>
                    {level1_term1}
                    <tr>
                        <td colSpan={2}>GPA</td>
                        <td colSpan={2}>{(level1_term1_Sum / level1_term1_Fullmark) * 4}</td>
                    </tr>
                </tbody>
            </table> : null : null
        }



        {/* Level 1 Term 2 */}

        {
            level1_term2? level1_term2.length ?
            <table className='grades'>
                <thead>
                    <tr><th colSpan={4} className='table_h'>level 1, 2nd term</th></tr>
                    <tr className='props'>
                        <th>name</th>
                        <th>grade</th>
                        <th>fullmark</th>
                        <th>state</th>
                    </tr>
                </thead>
                <tbody>
                    {level1_term2}
                    <tr>
                        <td colSpan={2}>GPA</td>
                        <td colSpan={2}>{(level1_term2_Sum / level1_term2_Fullmark) * 4}</td>
                    </tr>
                </tbody>
            </table>: null: null
        }


        {/* Level 2 Term 1 */}

        {
            level2_term1? level2_term1.length ?
            <table className='grades'>
                <thead>
                    <tr><th colSpan={4} className='table_h'>level 2, 1st term</th></tr>
                    <tr className='props'>
                        <th>name</th>
                        <th>grade</th>
                        <th>fullmark</th>
                        <th>state</th>
                    </tr>
                </thead>
                <tbody>
                    {level2_term1}
                    <tr>
                        <td colSpan={2}>GPA</td>
                        <td colSpan={2}>{(level2_term1_Sum / level2_term1_Fullmark) * 4}</td>
                    </tr>
                </tbody>
            </table> : null : null
        }

        {/* Level 2 Term 2 */}

        {
            level2_term2? level2_term2.length ?
            <table className='grades'>
                <thead>
                    <tr><th colSpan={4} className='table_h'>level 2, 2nd term</th></tr>
                    <tr className='props'>
                        <th>name</th>
                        <th>grade</th>
                        <th>fullmark</th>
                        <th>state</th>
                    </tr>
                </thead>
                <tbody>
                    {level2_term2}
                    <tr>
                        <td colSpan={2}>GPA</td>
                        <td colSpan={2}>{(level2_term2_Sum / level2_term2_Fullmark) * 4}</td>
                    </tr>
                </tbody>
            </table> : null : null
        }


        {/* Level 3 Term 1 */}

        {
            level3_term1? level3_term1.length ?
            <table className='grades'>
                <thead>
                    <tr><th colSpan={4} className='table_h'>level 3, 1st term</th></tr>
                    <tr className='props'>
                        <th>name</th>
                        <th>grade</th>
                        <th>fullmark</th>
                        <th>state</th>
                    </tr>
                </thead>
                <tbody>
                    {level3_term1}
                    <tr>
                        <td colSpan={2}>GPA</td>
                        <td colSpan={2}>{(level3_term1_Sum / level3_term1_Fullmark) * 4}</td>
                    </tr>
                </tbody>
            </table> : null : null
        }


        {/* Level 3 Term 2 */}

        {
            level3_term2? level3_term2.length ?
            <table className='grades'>
                <thead>
                    <tr><th colSpan={4} className='table_h'>level 3, 2nd term</th></tr>
                    <tr className='props'>
                        <th>name</th>
                        <th>grade</th>
                        <th>fullmark</th>
                        <th>state</th>
                    </tr>
                </thead>
                <tbody>
                    {level3_term2}
                    <tr>
                        <td colSpan={2}>GPA</td>
                        <td colSpan={2}>{(level3_term2_Sum / level3_term2_Fullmark) * 4}</td>
                    </tr>
                </tbody>
            </table> : null : null
        }


        {/* Level 4 Term 1 */}

        {
            level4_term1? level4_term1.length ?
            <table className='grades'>
                <thead>
                    <tr><th colSpan={4} className='table_h'>level 4, 1st term</th></tr>
                    <tr className='props'>
                        <th>name</th>
                        <th>grade</th>
                        <th>fullmark</th>
                        <th>state</th>
                    </tr>
                </thead>
                <tbody>
                    {level4_term1}
                    <tr>
                        <td colSpan={2}>GPA</td>
                        <td colSpan={2}>{(level4_term1_Sum / level4_term1_Fullmark) * 4}</td>
                    </tr>
                </tbody>
            </table> : null : null
        }


        {/* Level 4 Term 2 */}

        {
            level4_term2? level4_term2.length ?
            <table className='grades'>
                <thead>
                    <tr><th colSpan={4} className='table_h'>level 4, 2nd term</th></tr>
                    <tr className='props'>
                        <th>name</th>
                        <th>grade</th>
                        <th>fullmark</th>
                        <th>state</th>
                    </tr>
                </thead>
                <tbody>
                    {level4_term2}
                    <tr>
                        <td colSpan={2}>GPA</td>
                        <td colSpan={2}>{(level4_term2_Sum / level4_term2_Fullmark) * 4}</td>
                    </tr>
                </tbody>
            </table> : null : null
        }

        
        {!userGrades.length? <p className='empty'>no grades yet</p> : null}
        

    </div>
  )
}
