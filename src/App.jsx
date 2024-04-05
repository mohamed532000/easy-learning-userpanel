import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Footer from './components/footer/js/Footer';
import NavBar from './components/navbar/js/NavBar';
import ToTopBtn from './components/to-top-btn/js/ToTopBtn';
import Preloader from './components/preloader/js/Preloader';
// import RequireAuth from './project-actions/RequireAuth';
import { ProtectRoutes } from './project-actions/ProtectRoutes';
let HomePage = lazy(()=>import ("./pages/home-page/js/HomePage"));
let AboutPage = lazy(()=>import ("./pages/about-page/js/AboutPage"));
let CoursesPage = lazy(()=>import ("./pages/courses-page/js/CoursesPage"));
let PlaningPage = lazy(()=>import ("./pages/planing-page/js/PlaningPage"));
let InstructorsPage = lazy(()=>import ("./pages/instructors-page/js/InstructorsPage"));
let SignUpPage = lazy(()=>import ("./pages/sign-up-page/js/SignUpPage"));
let SignInPage = lazy(()=>import ("./pages/sign-in-page/js/sign-in-page"));
let AboutInstructorPage = lazy(()=>import ("./pages/instructor-about-page/js/InstructorAboutPage"));
let EventPage = lazy(()=>import ("./pages/event-page/js/EventPage"));
let TestmonialsPage = lazy(()=>import ("./pages/testmonials-page/js/TestmonialsPage"));
let AboutEventPage = lazy(()=>import ("./pages/about-event-page/js/AboutEventPage"));
let ContactPage = lazy(()=>import ("./pages/contact-page/js/ContactPage"));
let CartPage = lazy(()=>import ("./pages/cart-page/js/CartPage"));
let WishListPage = lazy(()=>import ("./pages/wishlist-page/js/WishListPage"));
let CourseDetailsPage = lazy(()=>import ("./pages/course-details-page/js/CourseDetailsPage"));
let CheckoutPage = lazy(()=>import ("./pages/checkout-page/js/CheckoutPage"));
// let StudentDahsboard = lazy(()=>import ("./pages/student-dashboard/js/StudentDashboard"));
// let OwnerDashboard = lazy(()=>import ("./pages/owner-dashboard/js/OwnerDashboard"));
function App() {
  return (
    <>
      <NavBar/>
      <Suspense fallback={<Preloader/>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route element={<ProtectRoutes/>}>
            <Route path='/sign-up-page' element={<SignUpPage/>}/>
            <Route path='/sign-in-page' element={<SignInPage/>}/>
          </Route>
          <Route path='/courses-page' element={<CoursesPage/>}/>
          <Route path='/sign-in-page/courses-page' element={<CoursesPage/>}/>
          <Route path='/cart-page/courses-page' element={<CoursesPage/>}/>
          <Route path='/sign-up-page/sign-in-page/courses-page' element={<CoursesPage/>}/>
          <Route path='/planing-page' element={<PlaningPage/>}/>
          <Route path='/events-page' element={<EventPage/>}/>
          <Route path='/events-page/about-event/:eventId' element={<AboutEventPage/>}/>
          <Route path='/instructors-page' element={<InstructorsPage/>}/>
          <Route path='/testmonials-page' element={<TestmonialsPage/>}/>
          <Route path='/contact-page' element={<ContactPage/>}/>
          <Route path='/cart-page' element={<CartPage/>}/>
          <Route path='/courses-page/about-course/:courseId/cart-page' element={<CartPage/>}/>
          <Route path='/checkout-page' element={<CheckoutPage/>}/>
          <Route path='/cart-page/checkout-page' element={<CheckoutPage/>}/>
          <Route path='/about-page' element={<AboutPage/>}/>
          <Route path='/about-course/:courseId' element={<CourseDetailsPage/>}/>
          <Route path='/courses-page/about-course/:courseId' element={<CourseDetailsPage/>}/>
          <Route path='/sign-in-page/courses-page/about-course/:courseId' element={<CourseDetailsPage/>}/>
          <Route path='/cart-page/courses-page/about-course/:courseId' element={<CourseDetailsPage/>}/>
          <Route path='/cart-page/about-course/:courseId' element={<CourseDetailsPage/>}/>
          <Route path='/wishlist-page' element={<WishListPage/>}/>
          <Route path='/sign-up-page/sign-in-page' element={<SignInPage/>}/>
          <Route path='/about-instructor-page' element={<AboutInstructorPage/>}/>
          <Route path='/instructors-page/about-instructor/:instructorId' element={<AboutInstructorPage/>}/>
        </Routes>
      </Suspense>
      <Footer/>
      <ToTopBtn/>
    </>
  )
}

export default App
