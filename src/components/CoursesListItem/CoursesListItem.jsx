import { FaLock } from 'react-icons/fa'
import { FaLockOpen } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { Desc, Icon, Image, ImgWrap, InfoCourseWrap, Lessons, Line, LinkCourse, Rating, Tag, Title, WrapStats } from "./CoursesListItem.styled"
import { useLocation } from 'react-router-dom'

export const CoursesListItem = ({course}) => {
    const {title, id, previewImageLink, description, lessonsCount, tags, rating, containsLockedLessons} = course
    const location = useLocation()

    const image = `${previewImageLink}/cover.webp`
    return (
        <LinkCourse to={`/course/${id}`} state={{ from: location }}>
            <Icon locked={containsLockedLessons}>
            {containsLockedLessons ? <FaLock/> : <FaLockOpen/>}
            </Icon>
            <ImgWrap>
                <Image src={image} alt={title} />
            </ImgWrap>
            <InfoCourseWrap>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
            <Line></Line>
            <WrapStats>
                <Lessons>Lessons: {lessonsCount}</Lessons>
                <Tag>{tags.map(tag => tag)}</Tag>
                <Rating><AiFillStar/>{rating}</Rating>
            </WrapStats>
            </InfoCourseWrap>

        </LinkCourse>
    )
}