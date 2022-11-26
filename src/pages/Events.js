import React from 'react'
import './events.css'

function Events() {
  return (
    <div>
      <section class="about-section">
    <div class="container ">
        <div class="row">                
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div class="inner-column">
                    <div class="sec-title">
                        <span class="title">Global practices</span>
                        <h2>We are an international center <br/>for global practices</h2>
                    </div>
                    <div style={{color:'black'}} class="text">Golden life runs an innovation hub for knowledge and leadership
                    managementby creating a platform for conversation on ideas, research and practices leading to developing countries,
                    institutions, individuals to attain global standards in their processes and activities. We offer seminars,webinars, continous medical education and training 
                    on various topics of local and global concern. We offer the following special courses register to cover the follwings topics with us.</div>
                    <ul class="list-style-one">
                        <li>Certified nurse assistant</li>
                        <li>NCLEX nurses preperation</li>
                        <li>IELTS preperation</li>
                        <li>Global diplomacy</li>
                    </ul>
                    <div class="btn-box">
                        <a href="#" class="theme-btn btn-style-one">View upcoming events</a>
                    </div>
                </div>
            </div>

           
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
                <div class="inner-column wow fadeInLeft">
                    <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"><img className='img1' src={process.env.PUBLIC_URL + '/images/globe.jpg'} alt="" /></a></figure>
                    <figure class="image-2"><a href="#" class="lightbox-image" data-fancybox="images"><img className='img1' src={process.env.PUBLIC_URL + '/images/globe.jpg'} alt="" /></a></figure>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Events
