import { Item, List } from "./CoursesList.styled"
import { CoursesListItem } from "components/CoursesListItem/CoursesListItem"

export const CoursesList = ({courses}) => {
    return (
        <List>
            {courses.map(course => (
                <Item key={course.id} >
                    <CoursesListItem course={course}></CoursesListItem>
                </Item>
            ))}
        </List>
    )
}