import React from 'react'
import './pages.scss'

const AboutComponent = () => {
    return (
        <section id="about">
            <div className="col-1">
                <h2>Get in touch</h2>
                <p>Our programme is usually planned 6-12 months ahead. But get in touch with us, if you have a great idea or project you’d like to become real.
                    If you want us to participate in your fair, have us as a speaker at your festival or do a workshop at your school or university,
                    write us. <span id="email">hi@p-oo-l.com</span></p>
            </div>
            <div className="col-2">
                <h2>About us</h2>
                <p>We are an independent publishing house from Vienna with a focus on illustration, graphic design and photography. We reach out to creatives from all over the world to create new and so far unseen publications.
                    We are a design studio with a focus on editorial products and corporate publishing. We are specialized in art and creative direction and produce unique and contemporary work in the field of editorial design, creative content and indie publishing. We also speak on conferences about our work and run workshops in the area of self-publishing.</p>
            </div>
            <div className="col-3">
                <h2>Press</h2>
                <p>i-D Germany, k-t-l-g, People Of Print, Take Festival, Kurier Schreiben, It’s Nice That, AIGA Eye On Design, Sleek Magazine
                </p>
                <h2>Fairs</h2>
                <p>Indiecon 2017 | Hamburg, Forward Festival 2018 | Vienna, Friends with Books 2018 | Berlin, Volumes 2018 | Zurich, Friends with Books 2019 | Berlin</p>
                <h2>Workshops, Parties & Exhibitions  </h2>
                <p>WComerc 2017 | Vienna, Improper Walls Gallery 2017 | Vienna, Museum für Angewandte Kunst 2018 | Frankfurt, Mumok 2019 | Vienna, Improper Walls Gallery 2019 | Vienna, Kunstraum Super 2020 | Vienna
                </p>
            </div>
            <div className="col-4">
                <h2>Contact</h2>
                <p>Catherine Hazotte<br />
                    Straussengasse 18/5<br />
                    1050 Vienna<br />
                    Austria<br /><br />

                    Maximilian Mauracher<br />
                    Kienitzer Strasse 103<br />
                    12049 Berlin<br />
                    Germany
                </p>
            </div>
        </section>)
}

export default AboutComponent;