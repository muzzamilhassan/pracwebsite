import React from 'react'
import Header from '../components/header/Header'
import ImageCard from './Components/ImageCard'
import TextCard from './Components/TextCard'
// import '@/styles/pages/course.css'
// import TextCard from './(components)/textCard'
// import ImageCard from './(components)/imageCard'
const Courses = () => {
  return (
    <div>
      
      <Header title="OUR COURSES" />

      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <TextCard title="Undergraduate Programs" />
          <TextCard title="Graduate Programs" />
          <TextCard title="Adult Learning & Degree Completion" />
        </div>
      </section>



      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <ImageCard source="/img/course1.png" title="Web Development" />
          <ImageCard source="/img/course2.png" title="Artificial Intelligence" />
          <ImageCard source="/img/course3.png" title="Data Science" />

        </div>
      </section>

    </div>
  )
}

export default Courses