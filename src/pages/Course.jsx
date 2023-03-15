import { fetchCourseById } from "API/API";
import { BackLink } from "components/BackLink/BackLink";
import { Loader } from "components/Loader/Loader";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

export default function Course() {
    const [courseDetails, setCourseDetails] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { courseId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const backLinkHref = location.state?.from ?? '/';
    const backlinkRef = useRef(backLinkHref);
  
    useEffect(() => {
      const controller = new AbortController();
      const getCourseById = async () => {
        try {
          setIsLoading(true);
          console.log(courseId)
          const resp = await fetchCourseById(courseId, controller.signal);
          setCourseDetails(resp.meta.courseVideoPreview.link);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      getCourseById();
      return () => controller.abort()
    }, [courseId]);

    const handleGoBack = () => {
        navigate(backLinkHref);
      };
      const linkVideo = courseDetails
      console.log(linkVideo)
    

    

    return(
        <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <BackLink onClick={handleGoBack} to={backlinkRef.current}/>
              <video controls autoplay preload="auto" crossOrigin="anonymous">
                <source src={linkVideo} type="application/x-mpegURL"/>
                
              </video>
            {/* <MovieInfo movieDetails={movieDetails} /> */}
          </>
        )}
      </>
    )
}