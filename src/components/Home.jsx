import React from "react";
import bg from "../assets/atom.webp";
import "../styles/Home.scss";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Sciencenetic</h1>
          <p>Solution to all your science problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={bg} alt="demo" />
        <div>
          <p>
            Science is defined as the observation, identification, description,
            experimental investigation, and theoretical explanation of natural
            phenomena. The word Science comes from Latin word "scientia" meaning
            "knowledge" and in the broadest sense it is any systematic
            knowledge-base or prescriptive practice capable of resulting in
            prediction. Science can also be understood as a highly skilled
            technique or practice.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            id ea facilis? Illo cumque, nisi porro officiis ad consequatur
            provident distinctio laboriosam libero consectetur nemo cupiditate?
            Voluptatum dolores perspiciatis architecto?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Obcaecati consequuntur non labore
            vero minima quae totam nostrum libero quaerat, qui et magnam, saepe
            tenetur minus iste pariatur recusandae est natus enim voluptates.
            Incidunt obcaecati aspernatur quia soluta nihil officia aut nemo.
            Voluptas soluta sapiente eveniet corrupti, sunt error at ab facere
            voluptate sint? Dignissimos corrupti expedita laudantium in nisi non
            accusamus dolor consequuntur eos, amet molestiae ea, ut voluptate
            possimus distinctio ipsam excepturi rerum vel quod quibusdam officia
            illo pariatur repellendus autem? Iusto esse deleniti a! Provident,
            iusto at rerum officia quidem illo. Non totam, dolorum eos, numquam
            accusamus dolor inventore voluptas temporibus quas ullam amet ut
            ipsum maiores rerum eaque at voluptatum cumque earum animi
            exercitationem veniam eum? Aut unde tenetur, ipsum est quas
            voluptas, quia dolorem labore ipsam beatae quo harum quasi
            repellendus eligendi consequatur veniam culpa magnam et. Praesentium
            hic, rerum excepturi sint inventore ut temporibus provident
            repudiandae at! Ab labore, quis doloribus vero quia in sit at. Nihil
            corrupti possimus ipsam iure iste adipisci dolore earum, ea aut,
            magni est nesciunt illum quas, quibusdam nam provident repellat
            ullam hic aliquam cupiditate. Voluptates minus id reprehenderit
            dignissimos nemo atque tenetur? Corrupti totam cumque corporis, quo
            recusandae officia!
          </p>
        </div>
      </div>
      <div className="home4" id="links">
        <div>
          <h1>Links</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <a href="/">
                <AiFillGoogleCircle />
                <p>Google</p>
              </a>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <a href="/">
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </a>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <a href="/">
                <AiFillInstagram />
                <p>Instagram</p>
              </a>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <a href="/">
                <AiFillYoutube />
                <p>YouTube</p>
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
