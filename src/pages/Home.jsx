import { fetchAllCourses } from "API/API";
import { Button } from "components/Button/Button";
import { CoursesList } from "components/CoursesList/CoursesList";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";


export default function Home() {
    
    const [allCourses, setAllCourses] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [visibleCourse, setVisibleCourse] = useState([])
    const [startIdx, setStartIdx] = useState(0)
    const [endIdx, setEndIdx] = useState(10)


    useEffect(() => {
        const controller = new AbortController();
        const getCourses = async () =>  {
            try {
                setIsLoading(true)
                const arrCourses = await fetchAllCourses(controller.signal)
                setAllCourses(arrCourses.courses)
                setVisibleCourse(arrCourses.courses.slice(startIdx, endIdx))
            } catch(error) {
                console.log(error)
            }  finally {
                setIsLoading(false)
            }
         }
         getCourses()
         
         return () => controller.abort()
    }, [])

    useEffect(() => {
        
        if(visibleCourse.length === 0) {
            return
        }
        setVisibleCourse(prevState => [
            ...prevState,
            ...allCourses.slice(startIdx, endIdx)
        ])

    }, [startIdx])



    const onIncrementPage = () => {
        setStartIdx(prevState => prevState + 10);
        setEndIdx(prevState => prevState + 10)
      };




    return(
        <>
        {isLoading ? (
        <Loader />
      ) : (
        <>
        <CoursesList courses={visibleCourse}></CoursesList>
        {visibleCourse.length < allCourses.length && <Button onLoad={onIncrementPage}>LoadMore</Button>}
        </>
        )}
        </>
    )
}