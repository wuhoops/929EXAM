import React from "react";
import { Card, CardImg, CardSubtitle, CardTitle } from "reactstrap";

const AboutMe = () => {
    return (
        <div>
            <div className="row my-5 justify-content-center">
                <Card className="col-3 ">
                    <CardImg src="myself.png" />
                    <CardTitle className="fs-5 fw-bold">Do today, sleep tomorrow</CardTitle>
                </Card>
            </div>
            <div className="row text-center my-5">
                <h1><p className=" fw-bold">It's me, "Pasinun Wittayawinit"</p></h1>
            </div>
            <h3>Education</h3>
            <div className="row mb-5 justify-content-evenly">
                <Card className="col-3">
                    <CardImg src="bj.png" />
                    <CardTitle className="fw-bold">Benchamarachuthit Chanthaburi</CardTitle>
                    <CardSubtitle>Mid school</CardSubtitle>
                </Card>
                <Card className="col-3">
                    <CardImg src="bj.png" />
                    <CardTitle className="fw-bold">Benchamarachuthit Chanthaburi</CardTitle>
                    <CardSubtitle>High school</CardSubtitle>
                </Card>
                <Card className="col-3">
                    <CardImg src="kmutt.jpg" />
                    <CardTitle className="fw-bold">KMUTT</CardTitle>
                    <CardSubtitle>College</CardSubtitle>
                </Card>
            </div>
            {/* <h3>favorite subjects </h3>
            <div className="row mb-5 justify-content-evenly">
                <Card className="col-3">
                    <CardImg src="english.png" />
                    <CardTitle className="fw-bold">English</CardTitle>
                    <CardSubtitle>English is good for everyone, Useful for communicate with other.</CardSubtitle>
                </Card>
                <Card className="col-3">
                    <CardImg src="ewbapp.jpg" />
                    <CardTitle className="fw-bold">Web Application</CardTitle>
                    <CardSubtitle>We use Web Aapplication in everyday. It might be good if we able to create it own.</CardSubtitle>
                </Card>
                <Card className="col-3">
                    <CardImg src="datastruc.png" />
                    <CardTitle className="fw-bold">Data Structure</CardTitle>
                    <CardSubtitle>Pom chop wi cha nee mak mak</CardSubtitle>
                </Card>
            </div>
            <h3>favorite movies</h3>
            <div className="row mb-5 justify-content-evenly">
                <Card className="col-3">
                    <CardImg src="kingman.jpg" />
                    <CardTitle className="fw-bold">Kingsman</CardTitle>
                    <CardSubtitle>A spy organisation recruits a promising street kid into the agency's training program, while a global threat emerges from a twisted tech genius.</CardSubtitle>
                </Card>
                <Card className="col-3">
                    <CardImg src="dontorstrange.jpg" />
                    <CardTitle className="fw-bold">Docter Strange</CardTitle>
                    <CardSubtitle>Marvel's "Doctor Strange" follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New York City's Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies beyond, utilising a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.</CardSubtitle>
                </Card>
                <Card className="col-3">
                    <CardImg src="badgenius.jpg" />
                    <CardTitle className="fw-bold">Bad genius</CardTitle>
                    <CardSubtitle>Lynn, a genius high school student who makes money by cheating tests, receives a new task that leads her to set foot on Sydney, Australia. In order to complete the millions-Baht task, Lynn and her classmates have to finish the international STIC(SAT) exam and deliver the answers back to her friends in Thailand before the exam takes place once again in her home country.</CardSubtitle>
                </Card>
            </div> */}
            
            <div className="row">
                <div className="col-12 col-sm-6">
                <h3>Favorite subjects </h3>
                    <ul className="list-unstyled ">
                        <li className="fw-bold">English</li>
                        <p>English is good for everyone, Useful for communicate with other.</p>
                        <li className="fw-bold">Web Application</li>
                        <p>We use Web Aapplication in everyday. It might be good if we able to create it own.</p>
                        <li className="fw-bold">Data Structure</li>
                        <p>This class can explain what I wondering about sonething deeper.</p>
                    </ul>
                </div>
                
                <div className="col-12 col-sm-6">
                <h3>Favorite movies</h3>
                    <ul className="list-unstyled ">
                        <li className="fw-bold">Kingsman</li>
                        <p>A spy organisation recruits a promising street kid into the agency's training program, while a global threat emerges from a twisted tech genius.</p>
                        <li className="fw-bold">Doctor Strange</li>
                        <p>follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New York City's Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies beyond, utilising a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.</p>
                        <li className="fw-bold">Bad genius</li>
                        <p>Lynn, a genius high school student who makes money by cheating tests, receives a new task that leads her to set foot on Sydney, Australia. In order to complete the millions-Baht task, Lynn and her classmates have to finish the international STIC(SAT) exam and deliver the answers back to her friends in Thailand before the exam takes place once again in her home country.</p>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;