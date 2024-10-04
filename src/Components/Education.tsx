

export default function Education() {
  return (
    <>
        <article className="about">
        <header>
          <h2 className="article-title">Education</h2>
        </header>
        <section className="timeline">
      <ol className="timeline-list">

        
          <li className="timeline-item">
            <div className="education-header">
              <h4 className="h4 timeline-item-title">University of Rajshahi</h4>
              <span>Jan 2022 - present</span>
            </div>
            <div className="education-header">
              <h5 className="h5 timeline-item-subtitle">B.Sc. in Computer Science and Engineering</h5>
              <span>CGPA: 3.00/4.00</span>
            </div>
            <p className="timeline-text">
              {/* Ranked in the top 15% of class with two Dean's List awards for merit. Additionally, was recognized once for outstanding extra curricular activities.  */}
            </p>
            
              <div className="multicol-list">
                <div className="blog-text">Notable Courses</div>
                <ul>
                  
                    <li><p className="timeline-text">CSE3111 - Software Engineering</p></li>

                    <li><p className="timeline-text">CSE3121 - Database Management Systems </p></li>

                    <li><p className="timeline-text">CSE3131 - Web Engineering </p></li>

                    <li><p className="timeline-text">CSE3141 - Compiler Design </p></li>
                  
                    <li><p className="timeline-text">CSE3161 - Communication Engineering </p></li>
                   
                  
                </ul>
              </div>
            
          </li>
        
          <li className="timeline-item">
            <div className="education-header">
              <h4 className="h4 timeline-item-title">Gov't Science College, Tejgaon, Dhaka</h4>
              <span>2020</span>
            </div>
            <div className="education-header">
              <h5 className="h5 timeline-item-subtitle">Higher Secondary Certificate (HSC)</h5>
              <span>GPA: 5.00/5.00</span>
            </div>
            <p className="timeline-text">
              
            </p>
            
          </li>
        
          <li className="timeline-item">
            <div className="education-header">
              <h4 className="h4 timeline-item-title">Milestone School &amp; College, Uttara, Dhaka</h4>
              <span>2018</span>
            </div>
            <div className="education-header">
              <h5 className="h5 timeline-item-subtitle">Secondary School Certificate (SSC)</h5>
              <span>GPA: 5.00/5.00</span>
            </div>
            <p className="timeline-text">
              
            </p>
            
          </li>
        
       
      </ol>

    </section>
      </article>
    </>
  )
}
