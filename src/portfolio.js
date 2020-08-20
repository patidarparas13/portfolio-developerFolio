/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "patidarparas13",
    title: emoji("Hola, I'm Paras 🇮🇳"),
    subTitle: emoji("A passionate Developer 🚀 having an experience of building Web, Cloud and Machine Learning Applications with Python / JavaScript / Reactjs / GCP / AWS and some other cool libraries and frameworks."),
    resumeLink: "https://drive.google.com/file/d/16VKvQVzDEM15kqbQ_03gG3vuZDj6sxcf/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

    github: "https://github.com/patidarparas13",
    linkedin: "https://www.linkedin.com/in/patidarparas13/",
    twitter: "https://twitter.com/patidarparas13",
    gmail: "patidarparas13@gmail.com",
    facebook: "https://www.facebook.com/paras.patidar.923/",
    medium: "https://medium.com/@patidarparas13",
    stackoverflow: "https://stackoverflow.com/users/8490683/paras-patidar"
    // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
    title: "What I Love to do",
    subTitle: "CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji("⚡ Develop highly interactive Front end / User Interfaces for your web apps"), emoji("⚡ Using Machine Learning to solve complex tasks"), emoji("⚡ Using the power of Cloud, experience in GCP / AWS / Firebase / Heroku ")
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        }, {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        }, {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },{
            skillName: "aws",
            fontAwesomeClassname: "fab fa-aws"
        }, {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
          skillName: "Cloud",
          fontAwesomeClassname: "fas fa-cloud"
      },
      {
        skillName: "Machine Learning",
        fontAwesomeClassname: "fas fa-robot"
    },
         {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },{
          skillName: "Wordpress",
          fontAwesomeClassname: "fab fa-wordpress"
      }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, // Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Machine Learning", // Insert stack or technology you have experience in
            progressPercentage: "70%" // Insert relative proficiency in percentage
        },{
          Stack: "Cloud",
          progressPercentage: "60%"
      },{
            Stack: "Web",
            progressPercentage: "60%"
        }
    ]
};


// Your top 3 work experiences

const workExperiences = {
    viewExperiences: true, // Set it to true to show workExperiences Section
    experience: [
        {
            role: "Former Core Member",
            company: "Developer Student Clubs LPU",
            companylogo: require("./assets/images/dsc.png"),
            date: "Mar 2019 – Aug 2020",
            desc: "Developer Student Clubs are university based community groups for students interested in Google developer technologies. ",
            descBullets: ["Machine Learning Speaker", "Event Organiser"]
        },/* 
        {
            role: "Front-End Developer",
            company: "Quora",
            companylogo: require("./assets/images/quoraLogo.png"),
            date: "May 2017 – May 2018",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }, {
            role: "Software Engineer Intern",
            company: "Airbnb",
            companylogo: require("./assets/images/airbnbLogo.png"),
            date: "Jan 2015 – Sep 2015",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        */
        
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "patidarparas13", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            image: require("./assets/images/Small-Logo.png"),
            link: "https://mlait.in/"
        }, /*{
            image: require("./assets/images/nextuLogo.webp"),
            link: "http://nextu.se/"
        }
        */
    ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achivementsCards: [
        {
            title: "Google Code-In Mentor For Tensorflow",
            subtitle: "Google Code-in was an international annual programming competition hosted by Google LLC for pre-university students. I have been invited as a mentor for Google Code-In 2019.",
            image: require("./assets/images/codeInLogo.webp"),
            footerLink: [
              /*
                {
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },  {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                }, {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                } */
            ]
        }, {
            title: "Explore ML Facilitator",
            subtitle: "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of Machine Learning Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus",
            image: require("./assets/images/explore-ml.jpeg"),
            footerLink: [
                {
                    name: "Check Out",
                    url: "https://events.withgoogle.com/explore-ml-in/"
                }
            ]
        }, {
            title: "Deep Learning Nanodegree",
            subtitle: "Deep learning is driving advances in artificial intelligence that are changing our world. Enroll now to build and apply your own deep neural networks to challenges like image classification and generation, time-series prediction, and model deployment.",
            image: require("./assets/images/udacity.png"),
            footerLink: [
                {
                    name: "Certification",
                    url: "https://graduation.udacity.com/confirm/74HLSDF3"
                }, /*{
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                } */
            ]
        },
        {
          title: "Machine Learning With Tensorflow On Google Cloud",
          subtitle: "Deep learning is driving advances in artificial intelligence that are changing our world. Enroll now to build and apply your own deep neural networks to challenges like image classification and generation, time-series prediction, and model deployment.",
          image: require("./assets/images/tensorflowcloud.png"),
          footerLink: [
              {
                  name: "Certification",
                  url: "https://graduation.udacity.com/confirm/74HLSDF3"
              }, /*{
                  name: "Final Project",
                  url: "https://pakistan-olx-1.firebaseapp.com/"
              } */
          ]
      }
    ]
};

// Blogs Section

const blogSection = {

    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [
        {
            url: "https://medium.com/@patidarparas13",
            title: "Check My Blogs On Medium",
            description: "I love sharing knowledge on Machine Learning, Cloud and Web."
        }, {
            url: "https://mlait.in/",
            title: "Check My Blogs On MLAIT",
            description: "I love sharing knowledge on Machine Learning, Cloud and Web."
        }
    ]
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE, CONTRIBUTE TO COMMUNITIES AND GET A SPEAKER BADGE 😅"),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Google Plex LPU",
            slides_url: "#",
            event_url: "https://www.facebook.com/events/766547617014981/"
        },
        {
          title: "ML Beginner's Track|ExploreML",
          subtitle: "Developer Student Clubs LPU",
          slides_url: "#",
          event_url: "https://www.facebook.com/DSCLPU/photos/a.117381195610502/427158664632752/"
      },
      {
        title: "ML Intermediate Track|ExploreML",
        subtitle: "Developer Student Clubs LPU",
        slides_url: "#",
        event_url: "https://www.facebook.com/DSCLPU/photos/a.117381195610502/427161584632460/"
    },
    {
      title: "ML Session 101",
      subtitle: "Developer Student Clubs LPU",
      slides_url: "#",
      event_url: "https://www.facebook.com/DSCLPU/photos/a.117744988907456/375212649827354/"
  }
    ]
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: ["https://www.youtube.com/watch?v=kjTtaOIlIT4"]
};

const contactInfo = {
    title: emoji("Contact Me or Hire Me☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+91-9131674223",
    email_address: "patidarparas13@gmail.com"
};

// Twitter Section

const twitterDetails = {

    userName: "patidarparas13" // Replace "twitter" with your twitter username without @

};
export {
    greeting,
    socialMediaLinks,
    skillsSection,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};
