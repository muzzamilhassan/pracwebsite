import TextCard from "./courses/Components/TextCard";
import Image from "next/image";
import ImageCard from "./courses/Components/ImageCard";
import Link from "next/link";
import Courses from "./courses/page";
export default function Home() {
  return (
    <div>
          <section className="header">
        <nav>
            <Link href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className="nav-links" id="navLinks">
                {/* <!-- Reposnive bar open and close --> */}
                <i className="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars" onclick="showMenu()"></i>
            {/* <!-- Reposnive bar open and close --> */}
        </nav>

        <div className="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <Link href="#" className="hero_btn">Visit Us To Know More</Link>
        </div>
    </section>

    {/* <!-- Course Section Start --> */}
    <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <TextCard title="Undergraduate Programs" />
          <TextCard title="Graduate Programs" />
          <TextCard title="Adult Learning & Degree Completion" />
        </div>
      </section>
    {/* <!-- Course Section End --> */}

    {/* <!-- Campus Section Start--> */}

    <section className="campus">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="campus-col">
                <img src="/img/Campus1.png" width={100} height={250} alt="" quality={100}/>
                <div className="layer">
                    <h3>DELHI</h3>
                </div>
            </div>
            <div className="campus-col">
            <img src="/img/Campus2.png" width={100} height={250} alt=""/>
                <div className="layer">
                    <h3>HYDERABAD</h3>
                </div>
            </div>
            <div className="campus-col">
            <img src="/img/Campus3.png" width={100} height={250} alt=""/>
                <div className="layer">
                    <h3>MUMBAI</h3>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Campus Section End --> */}

    {/* <!-- Facilities Section Start --> */}
    <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <ImageCard source="/img/course1.png" title="Web Development" />
          <ImageCard source="/img/course2.png" title="Artificial Intelligence" />
          <ImageCard source="/img/course3.png" title="Data Science" />

        </div>
      </section>
    {/* <!-- Facilities Section End --> */}

    {/* <!-- Testimonials Section Start --> */}
    <section className="testimonials">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="testimonials-col">
            <img src="/img/user.png" width={100} height={250} alt=""/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
            <div className="testimonials-col">
            <img src="/img/user.png" width={100} height={250} alt=""/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Testimonials Section End --> */}

    {/* <!-- Call To Action Section Start --> */}
    <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Link href="/contact" className="hero_btn">CONTACT US</Link>
    </section>
    {/* <!-- Call To Action Section End --> */}
    </div>
  );
}
