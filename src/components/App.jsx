import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Course = lazy(() => import('../pages/Course'));


export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="/course/:courseId" element={<Course />} />
      <Route path='*' element={<Home/>}/>
      </Route>
    </Routes>
  </>
  );
};
