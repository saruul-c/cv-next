import "react";
import Head from "next/head";
<Head>
  <title>Saruul's cv</title>
  <link rel="icon" href="/saruul icon.png" type="image/png" />
  {/* <script src="https://kit.fontawesome.com/b99e675b6e.js" /> */}
</Head>;
function App() {
  return (
    <div className="resume">
      <div className="resume_left">
        <div className="resume_profile">
          <img src={"/zurag.jpg"} alt="zurag" />
        </div>
        <div className="resume_content">
          <div className="resume_item resume_info">
            <div className="title">
              <p className="bold">Saruulmaa Bayarjargal</p>
              <p className="regular">Programmist</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  {/* <i className="fas fa-map-signs"></i> */}
                  <img src="/location-svgrepo-com.svg" />
                </div>
                <div className="data">
                  Ulaanbaatar 14200 <br /> Mongolia
                </div>
              </li>
              <li>
                <div className="icon">
                  {/* <i className="fas fa-envelope"></i> */}
                  <img src="/mail-svgrepo-com.svg" />
                </div>
                <div className="data">saruulmaa@gmail.com</div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_skills">
            <div className="title">
              <p className="bold">skill's</p>
            </div>
            <ul>
              <li>
                <div className="skill_name">HTML</div>
                <div className="skill_progress">
                  <span style={{ width: "50%" }}></span>
                </div>
                <div className="skill_per">50%</div>
              </li>
              <li>
                <div className="skill_name">CSS</div>
                <div className="skill_progress">
                  <span style={{ width: "50%" }}></span>
                </div>
                <div className="skill_per">50%</div>
              </li>
              <li>
                <div className="skill_name">JS</div>
                <div className="skill_progress">
                  <span style={{ width: "50%" }}></span>
                </div>
                <div className="skill_per">50%</div>
              </li>
              <li>
                <div className="skill_name">JQUERY</div>
                <div className="skill_progress">
                  <span style={{ width: "20%" }}></span>
                </div>
                <div className="skill_per">20%</div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_social">
            <div className="title">
              <p className="bold">Social</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  {/* <i className="fab fa-facebook-square"></i> */}
                  <img src="/facebook-svgrepo-com.svg" />
                </div>
                <div className="data">
                  <p className="semi-bold">Facebook</p>
                  <p>Saruul Saruulmaa @facebook</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  {/* <i className="fab fa-twitter-square"></i> */}
                  <img src="/twitter-svgrepo-com.svg" />
                </div>
                <div className="data">
                  <p className="semi-bold">Twitter</p>
                  <p>Saruulmaa@twitter</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  {/* <i className="fab fa-youtube"></i> */}
                  <img src="/youtube-svgrepo-com.svg" />
                </div>
                <div className="data">
                  <p className="semi-bold">Youtube</p>
                  <p>MusicChill@youtube</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  {/* <i className="fab fa-linkedin"></i> */}
                  <img src="/linkedin-svgrepo-com.svg" />
                </div>
                <div className="data">
                  <p className="semi-bold">Linkedin</p>
                  <p>Saruulmaa2@linkedin</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume_right">
        <div className="resume_item resume_about">
          <div className="title">
            <p className="bold">About us</p>
          </div>
          <p>
            As a web developer, I have many years of experience with CSS,
            JavaScript, and HTML. On top of that, my software development skills
            allowed me to build up my object-oriented programming abilities.
          </p>
        </div>
        <div className="resume_item resume_work">
          <div className="title">
            <p className="bold">Study Journey</p>
          </div>
          <ul>
            <li>
              <div className="date">2021 - </div>
              <div className="info">
                <p className="semi-bold">Deep Learnig Team's particant.</p>
                <p>The worst learner</p>
              </div>
            </li>
            <li>
              <div className="date">2019 - </div>
              <div className="info">
                <p className="semi-bold">Hackum club member.</p>
                <p>
                  someone who is a member of a club. gild, guild, social club,
                  society, club, lodge, order - a formal association of person.
                </p>
              </div>
            </li>
            <li>
              <div className="date">2022 - Present</div>
              <div className="info">
                <p className="semi-bold">Women In Techmakers Volunteer</p>
                <p>
                  {" "}
                  a person who voluntarily undertakes or expresses a willingness
                  to undertake a service.
                </p>
              </div>
            </li>
            <li>
              <div className="date">2024 - </div>
              <div className="info">
                <p className="semi-bold">Google game development.</p>
                <p>
                  someone who is a member of a club. gild, guild, social club,
                  society, club, lodge, order - a formal association of person.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="resume_item resume_education">
          <div className="title">
            <p className="bold">Education</p>
          </div>
          <ul>
            <li>
              <div className="date">2019 - </div>
              <div className="info">
                <p className="semi-bold">
                  Software Engineer (National University of Mongolia)
                </p>
                <p>
                  The flame of progress flourishes from the forge of education
                </p>
              </div>
            </li>
            <li>
              <div className="date">2008 - 2018</div>
              <div className="info">
                <p className="semi-bold">14th school of erdenet</p>
                <p>
                  Developing caring learners who are actively growing and
                  achieving
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="resume_item resume_hobby">
          <div className="title">
            <p className="bold">Hobby</p>
          </div>
          <ul>
            <li>
              {/* <i className="fas fa-book"></i> */}
              <img src="/book-svgrepo-com.svg"/>
            </li>
            <li>
            <img src="/game-svgrepo-com.svg"/>
            </li>
            <li>
            <img src="/music-svgrepo-com.svg"/>
            </li>
            <li>
            <img src="/plant-svgrepo-com.svg"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
