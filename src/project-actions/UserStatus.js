import { createSlice } from "@reduxjs/toolkit";

let userStatus = createSlice({
    name : "user-status",
    initialState : [],
    reducers : {
        loggedStatus : (state , action) => {
            return state = action.payload
        }
    }
});
export default userStatus.reducer;
export let { loggedStatus } = userStatus.actions;

let course = {
    poster : "https://i.pinimg.com/564x/71/62/17/716217c766d3a72329e7962c739331bd.jpg",
    overView : {
      courseTitle : "Web Design for Web Developers: Build Beautiful Websites!",
    //   importantNote : "The material of this course is also covered in my other course about web design and development with HTML5 & CSS3. Scroll to the bottom of this page to check out that course, too! If you're already taking my other course, you already have all it takes to start designing beautiful websites today!",
      description : {
          whatWillLearn : [
              "The 25+ guidelines of amazing web design: simple rules and guidelines that go straight to the point",
              "Immediate FREE access to the course e-book Best Resources for Web Design and Development with HTML5 & CSS3",
              "How to make text look professionally designed",
              "How to correctly use the power of colors",
              "How to get and use amazing images, fonts and icons to make your website shine — all for FREE.",
              "How to create a layout using whitespace and visual hierarchy",
              
          ],
          requirmnet : [
              "You don't need any experience at all",
              "A computer with internet connection"
          ],
          whoIsCourseFor : [
              "Complete beginners who want to build stunning websites that no one can take their eyes off",
              "Back-end developers who want to learn how to make their websites more beautiful"
          ]
      },
      instructor : {
          img : "https://img-c.udemycdn.com/user/200_H/7799204_2091_5.jpg",
          name : "Jonas Schmedtmann",
          career : "Web Developer, Designer, and Teacher",
          contactLinks : {
              twitter : "https://www.twitter.com",
              youtube : "https://www.youtube.com",
              facebook : "https://www.facebook.com",
          },
          info : "Hi, I'm Jonas! I'm one of Udemy's Top Instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfaction.I'm a full-stack web developer and designer with a passion for building beautiful web interfaces from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privilege of training 1,500,000+ learners in the field of web development.What learners love the most about all my courses is the fact that I take the time to explain every single concept in a way that everyone can easily understand.So, do you want to learn how to build awesome websites with modern HTML and CSS?Looking for a complete JavaScript course that takes you from zero to an advanced developer?Or maybe you want to build modern and powerful front-end applications with React?Then don't waste your time with random tutorials or incomplete youtube videos. All my courses are easy-to-follow, all-in-one packages that will take your skills to the next level.These courses are exactly the courses I wish I had when I was first getting into web development!But see for yourself, enroll in one of my courses, and join 1,500,000+ happy students today."
      },
      byTheMemeber : {
          level : "Beginner",
          students : 5524,
          language : "English",
          captions : "Yes",
          lectures : 19,
          Video : 2.5,
          rating : 4
      },
    },
    coursesections : [
      {
          sectionId : 1,
          sectionTitle : "Course Introduction",
          lessons : [
              {
                  lessonId : 1,
                  lessonTitle : "Welcome To This Course",
                  video : "https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/sample-mp4-file.mp4",
                  lessonTime : "3min"
              },
              {
                  lessonId : 2,
                  lessonTitle : "E-Book resources",
                  video : "https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/sample-mp4-file.mp4",
                  lessonTime : "7min"
              }
          ],
      },
      {
          sectionId : 2,
          sectionTitle : "The 25+ Guidelines Of Amazing Web Design",
          lessons : [
              {
                  lessonId : 1,
                  lessonTitle : "Introduction To Web Design",
                  video : "https://player.vimeo.com/progressive_redirect/playback/802399211/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=c07bacc7124244bbb03ddf0f3694aea91d8469f384396d64c64a2e7552c022e1",
                  lessonTime : "7min"
              },
              {
                  lessonId : 2,
                  lessonTitle : "Using Colors Like A Pro",
                  video : "https://player.vimeo.com/progressive_redirect/playback/802399211/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=c07bacc7124244bbb03ddf0f3694aea91d8469f384396d64c64a2e7552c022e1",
                  lessonTime : "9min"
              },
              {
                  lessonId : 3,
                  lessonTitle : "Working With Images",
                  video : "https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/sample-mp4-file.mp4",
                  lessonTime : "3min"
              }
          ]
      }
    ]
}