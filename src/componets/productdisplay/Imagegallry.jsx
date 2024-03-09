import React from 'react'
export const Imagegallry = (props) => {
    const w = window.innerWidth;
   
  if(w<=800)
  {
    return(
        <>
         <div id="demo" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div class="carousel-inner">
  <div class="carousel-item active">
  <a  href={props.img}  id="galary-img1" data-fancybox="gallery">
            <img src={props.img} alt="" />
          </a>
  </div>
  <div class="carousel-item">
  <a  href={props.img}  id="galary-img1" data-fancybox="gallery">
            <img src={props.img} alt="" />
          </a>
  </div>
  <div class="carousel-item">
  <a  href={props.img}  id="galary-img1" data-fancybox="gallery">
            <img src={props.img} alt="" />
          </a>
  </div>
</div>


<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
          {/* crousalend */}

        </>
    )
  }
  else{
    return(
        <>

         <a  href={props.img}  id="galary-img1" data-fancybox="gallery">
              <img src={props.img} alt="" />
            </a>
            <a href={props.img}  id="galary-img2"  data-fancybox="gallery">
              <img src={props.img} alt="" />
            </a>
            <a href={props.img} id="galary-img3"  data-fancybox="gallery">
              <img src={props.img} alt="" />
            </a>
            <a href={props.img} id="galary-img4"  data-fancybox="gallery">
              <img src={props.img} alt="" />
              
            </a>
        </>
    )
  }
}
