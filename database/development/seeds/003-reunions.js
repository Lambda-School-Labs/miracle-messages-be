exports.seed = async function (knex) {
  return knex("reunions")
    .del()
    .then(async function () {
      return knex("reunions").insert([
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -80.13772397207923,
          latitude: 26.109914104701275,
          city: "Fort Lauderdale",
          state: "FL",
          title: "Reginald Brown",
          story:
            "Reginald was searching for his siblings when he found Miracle Messages. After extensive searching, a dedicated messenger was able to find Raynard, Reginald’s older brother. Miracle Messages relocated Reginald at a food service event and placed him on the phone with Raynard. The brothers have been reunited after 10 years of separation.",
          link_to_media: "https://www.youtube.com/watch?v=1SQE73lF5TA",
          reunion_img:
            "https://dl.airtable.com/.attachments/c76c9f73c8a28be9d6130c4db62afe88/978c5002/reginaldbrown.png",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -2.2550336732043292,
          latitude: 53.48690477310818,
          city: "Manchester",
          state: "England",
          title: "Wes Searles",
          story:
            "Wes was reunited with his brother Chester Searles after almost two decades of separation. A messenger was able to find the contact information for Charles and proceeded to reunited the brothers over the phone. Wes and Chester are hoping to reunite in person soon after 15-20 years of separation.",
          link_to_media: "https://youtu.be/yYNgIR1RBQs",
          reunion_img:
            "https://dl.airtable.com/.attachments/81f28bc16f887afceb740737ee89e926/1e049945/WesSearles.JPG",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -75.11684923705883,
          latitude: 39.911159659961946,
          city: "Camden",
          state: "NJ",
          title: "Vincent White",
          story:
            "Vincent was reconnected with his daughter Keyuanna after 20 years of separation. Miracle Messages was able to facilitate a reunion through facebook. Vincent is continuing to work on rebuilding his life, this reunion with his daughter being the first step.",
          link_to_media: "https://www.youtube.com/watch?v=TU72THT7i3U",
          reunion_img:
            "https://dl.airtable.com/.attachments/2d79fed5abc71e793ff6d36b6bf1e6fa/f2b523a1/VincentWhite.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.13183133306373,
          latitude: 37.4370522899737,
          city: "Palo Alto",
          state: "CA",
          title: "Vincent McDaniel",
          story:
            "Vincent was searching for his son, who shared his name, when he found Miracle Messages. He had been searching online for his son with no avail. A messenger was quickly able to find Vincent’s son using his nickname Goldie. With this information, a phone call was facilitated and Goldie revealed that he too had been searching for his father for 25 years. Goldie offered to fly his father to his home in Arizona. Vincent and his son have happily reunited.",
          link_to_media: "https://www.youtube.com/watch?v=eEXiQ1kC8p8",
          reunion_img:
            "https://dl.airtable.com/.attachments/55dab73cd89ca3ffc02ba48b3ed93d51/d959fdb1/VincentMcDaniel.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -75.97505540027467,
          latitude: 36.837604073479184,
          city: "Virginia Beach",
          state: "VA",
          title: "Tony Thornhill",
          story:
            "Tony was reunited with his mother and sister with the help of Miracle Messages. Shortly after the reunion, Tony was briefly off the streets, returning home to North Carolina to live with his mother. Recently he returned back to Virginia, getting a bus ticket with the help of a messenger. Tony has gotten a job and is contact with his sister after twenty-one years of separation.",
          link_to_media: "https://youtu.be/F02CQ7E5SAo",
          reunion_img:
            "https://dl.airtable.com/.attachments/608ab2a48906fc66ec7820373a912644/793f2f14/TonyThornhill.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -122.41288742302359,
          latitude: 37.7678599923402,
          city: "San Francisco",
          state: "CA",
          title: "Timothy Kelly Spires",
          story:
            "Timothy was reunited with his daughter Michaela after 17 years of separation. After a challenging search, a messenger was able to locate Michaela and send a message via Facebook. Shortly after the message was sent, the messenger was able to facilitate a phone call between Timothy and Michaela. Timothy has called the reunion with his daughter “the most amazing thing that will ever happen to [him]”. Following the reunion, Timothy spoke with his daughter every day, and carries photographs of her. Timothy became a In the months following his reunion with his daughter, Timothy Spires became a champion of the Miracle Messages program, and a member of the Miracle Messages community. He became a volunteer “community ambassador” attending outreach events with our volunteers and promoting the program to others in the homeless community. The same messenger who found Michaela shared that Timothy passed away in April of 2018. Mark Askins a volunteer who grew close to Timothy shared this: “Such an amazing gift to have spent time with Tim and to call him a friend. The friendship that blossomed between us is the epitome of what the ‘Neighborhood’ can be.” May he rest in peace. To see Timothy's video to his daughter visit this link: https://www.youtube.com/watch?v=viv8RQ3kjIc&feature=youtu.be",
          link_to_media: "https://youtu.be/viv8RQ3kjIc",
          reunion_img:
            "https://dl.airtable.com/.attachments/8fa80eb054070ab2d3443ec908ba342b/15414f3f/timothykellyspires.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -122.40757095867208,
          latitude: 37.782080742681124,
          city: "San Francisco",
          state: "CA",
          title: "Steven Clark Collins",
          story:
            "Steven wanted to reconnect with his brother’s son Logan. After several failed phone calls and unresponded facebook messages, a messenger was able to make contact with Logan. Steven was really excited to reconnect with his nephew with whom he hasn’t spoken in three years, sharing that it meant a lot to me.",
          link_to_media: "https://youtu.be/4jbN1GhoX3A",
          reunion_img:
            "https://dl.airtable.com/.attachments/8f72aadde2dc7ff2028dd6829572da23/66977cee/StevenCollins.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -112.05753537476797,
          latitude: 33.448337525647034,
          city: "Phoenix",
          state: "AZ",
          title: "Shelley Ann DeGuerre",
          story:
            "Shelley was reunited with her step-brother Ronnie with the help of Miracle Messages. A student at ASU partnered with Miracle Messages was able to find Ronnie’s information via White Pages and left a voicemail on behalf of Shelley. It wasn’t until a few months later that Shelley reached out to the volunteer sharing the happy news that her brother had reached out to reconnect with her after nearly 8 years of separation.",
          link_to_media: "https://youtu.be/RKgbpC-Tk2o",
          reunion_img:
            "https://dl.airtable.com/.attachments/25ca7344f5104a893eba04789891a49a/bcb83648/ShellyAnnD.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -97.15931499182986,
          latitude: 31.548254005841734,
          city: "Waco",
          state: "TX",
          title: "Luis Fernando Romas Jr",
          story:
            "Luis wanted to reunite with his mother Maria when he found Miracle Messages. In a video message recorded with the help of a messenger, Luis siad “Ma I need you to come back. I’m not doing drugs no more and I need to come back home. Love you.” Luis has since reconnected with his mother. To see Luis’s video, visit this link: https://www.youtube.com/watch?v=_3Q1DkWN5Fw",
          link_to_media: "https://www.youtube.com/watch?v=_3Q1DkWN5Fw",
          reunion_img:
            "https://dl.airtable.com/.attachments/df0fbb3767eccc96cb14dce633a656ef/2ce2bb4d/ScreenShot2020-01-13at10.39.03PM.png",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -0.1322546625344779,
          latitude: 51.52260901610615,
          city: "London",
          state: "England",
          title: "John Harry Gallagher",
          story:
            "John wanted to reconnect with his sister France when he found Miracle Messages. In a video message recorded with the help of a messenger, John refers to himself as Henry as his sister remembers him and says, “Hello friend, it’s your brother Henry. I’d love to meet you again love...Please reach me.” After over two decades of separation, John has finally been reunited with his sister. To see John’s video, visit this link: https://www.youtube.com/watch?v=3xOeEMoKZmE&feature=youtu.be",
          link_to_media: "https://youtu.be/3xOeEMoKZmE",
          reunion_img:
            "https://dl.airtable.com/.attachments/a8b9d8fa0ccab18829cb3d2b80a36e1f/50f192d5/ScreenShot2020-01-12at11.00.20PM.png",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -122.4095943500452,
          latitude: 37.76380982834984,
          city: "San Francisco",
          state: "CA",
          title: "Francis Downing",
          story:
            "Francis met a messenger at a service dinner in San Francisco and shared that he had not seen his cousins in 50 years. A messenger helped Francis record a video message in which he expressed that he hoped to see his family again one day. A little while after, a messenger found a number for Francis’s cousins. Francis has reunited with his family afters years of separation. To watch Francis’s video to his cousins, visit this link: https://www.youtube.com/watch?v=mF5WdqGyOXs&feature=youtu.be",
          link_to_media: "https://youtu.be/mF5WdqGyOXs",
          reunion_img:
            "https://dl.airtable.com/.attachments/2a891ffb2cada7854dcfdba42905b94e/49119f40/ScreenShot2019-10-07at10.02.30PM.png",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -118.23764811472203,
          latitude: 34.05195381652932,
          city: "Los Angeles",
          state: "CA",
          title: "Randy Bernard",
          story:
            "Randy was reconnected with his father Randolph with the help of Miracle Messages. In a video message recorded by a messenger, Randy said to his mom and dad, “I’m looking forward to seeing you soon for the holidays.” Randy has reconnected with his family after a year of separation.",
          link_to_media: "https://www.youtube.com/watch?v=S-UunUKzrmY",
          reunion_img:
            "https://dl.airtable.com/.attachments/e481e7b4e8357dfd9720f7f54130c108/a8aacc21/randybernard.png",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -0.12736326122559466,
          latitude: 51.49116140614536,
          city: "London",
          state: "England",
          title: "Radim Morkovsky",
          story:
            "Radim was hoping to reconnect with his mother, Jana. A messenger helped Radim recorded a video to share with his mother. After sharing the video, Radim was able to reconnect with his mother and they have happily reunited. To see Radim's video, visit this link: https://www.youtube.com/watch?v=WqDUBFo61k4&feature=youtu.be",
          link_to_media: "https://youtu.be/WqDUBFo61k4",
          reunion_img:
            "https://dl.airtable.com/.attachments/0383d7aa540bb8c5a8bf9c183e9e30ff/63b1d808/radimmorkovsky.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -75.97452453460657,
          latitude: 36.8427436922298,
          city: "Virginia Beach",
          state: "VA",
          title: "Paul O'Day",
          story:
            "Paul wanted to reconnect with his sister when he found Miracle Messages. In a video message recorded with the help of a messenger, Paul said “Hello Pat...I’d like to get back in contact with you...I just want to reconnect with you and all my loved ones. Thank you Pat, please respond. After over a decade of separation, Paul and Pat have happily reunited. To see Paul’s video, visit this link: https://youtu.be/gSlCREOZNmI",
          link_to_media: "https://youtu.be/gSlCREOZNmI",
          reunion_img:
            "https://dl.airtable.com/.attachments/3621255620f1a7acb06f464210fe7a1f/2cd390b9/pauliday.png",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.41850905739201,
          latitude: 37.771776623142074,
          city: "San Francisco",
          state: "CA",
          title: "Olivia Lyons-Boudoin (Smith)",
          story:
            "Miracle Messages was able to help Olivia reconnect with her daughters. A messenger was able to help give Olivia some support and reunite with her family, whom she hadn’t seen or spoken with in nearly two decades.",
          link_to_media: "https://www.youtube.com/watch?v=_yyNSvenhaE",
          reunion_img:
            "https://dl.airtable.com/.attachments/ba57e6a05a6541f4844a264d0a3514ff/0a7d9041/OliviaLyons.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -122.41702303783391,
          latitude: 37.75770913345823,
          city: "San Francisco",
          state: "CA",
          title: "Nicolas Bervell",
          story:
            "Nicolas was reconnected with his brother Koffi Niamke-Bervell and his family after being separated for 11 years. Nicolas will be heading home to Virginia to live with his family who are very excited to hear from him.",
          link_to_media: "https://www.youtube.com/watch?v=l0WxP3haNfk",
          reunion_img:
            "https://dl.airtable.com/.attachments/c34d083f99313cf7604afdbffd58106b/abf6277b/NicolasB.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -0.13094224164275917,
          latitude: 51.51457297592052,
          city: "London",
          state: "England",
          title: "Michael William Mulholland",
          story:
            "With the help of Miracle Messages, Michael has been given a chance to reunite with his father. A messenger was able to locate Michael’s father who accepted Michael’s number, with the possibility of a future reconnection.",
          link_to_media: "https://youtu.be/vmGqreQKsS8",
          reunion_img:
            "https://dl.airtable.com/.attachments/abfdb018f6944bdfe3fd2115047f93d2/5825ead5/MichaelWilliamM1.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -122.42821353463354,
          latitude: 37.763538804724675,
          city: "San Francisco",
          state: "CA",
          title: "Michael Kelly",
          story:
            "Michael Kelly was reunited with his sister Mary after 4 years of separation. A messenger was able to make a phone connection with Michael’s family and sent over a video. Michael has since gone back home to reunite with his family in person.",
          link_to_media: "https://youtu.be/Usa8a1XP6Lk",
          reunion_img:
            "https://dl.airtable.com/.attachments/f284990688d797d468efbedfd6558eee/111782bd/MichaelKelly.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.13988826317812,
          latitude: 37.4428290046121,
          city: "Palo Alto",
          state: "CA",
          title: "Lee Gardner",
          story:
            "Lee was hoping to find his younger sister Susan when he found Miracle Messages. In a video message recorded for his sister, Lee said, “This is your big brother. I’m having some tough times- I’ve been homeless for 14 months...So if you could please contact me, I’d greatly appreciate it.” After 6 years of separation, Lee and Susan have reconnected. To see Lee’s video, visit this link: https://www.youtube.com/watch?v=n9oKbGPSvY4",
          link_to_media: "https://www.youtube.com/watch?v=n9oKbGPSvY4",
          reunion_img:
            "https://dl.airtable.com/.attachments/75602ed5a4c58625311bbb93316163b5/08723906/leegardner.png",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.02168886905893,
          latitude: 37.36490399472711,
          city: "Sunnyvale",
          state: "CA",
          title: "Lannie Graham",
          story:
            "Lannie was hoping to reconnect with her father Phillip with the help of Miracle Messages. A messenger helped Lannie record an emotional video message to her father, in which she said, I want to “let him know that I love him...I miss him...he was like my angel.” Lannie has since reunited with her father after 10 years of separation and is off the streets. To see Lannie’s video to her father visit this link: https://www.youtube.com/watch?v=hlalhVM-JHE",
          link_to_media: "https://www.youtube.com/watch?v=hlalhVM-JHE",
          reunion_img:
            "https://dl.airtable.com/.attachments/1339176694e362348737f6be0516f54a/e19062b7/Lannie.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -122.43520395287116,
          latitude: 37.77660022790202,
          city: "San Francisco",
          state: "CA",
          title: "Keith Wilmington",
          story:
            "With the help of Miracle Messages, Keith reconnected with his sister Toni. A messenger was able to facilitate a phone call between Keith and Toni and since that initial call, Keith has been speaking regularly with his sister. Keith has happily reunited with his sister after a year of separation.",
          link_to_media: "https://www.youtube.com/watch?v=MSCHJBHZztE",
          reunion_img:
            "https://dl.airtable.com/.attachments/0a9394d6742acb5c8b76c2da9f6b86a1/e44d7539/keithwilmington.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -117.15933534924763,
          latitude: 32.70003102428196,
          city: "San Diego",
          state: "CA",
          title: "Kathleen Francis Henderson",
          story:
            "With the help of Miracle Messages, Kathleen was able to reunite with her brother Michael. A messenger was able to facilitate a phone call between Kathleen and her brother, allowing the siblings to reconnect after over a decade of separation.",
          link_to_media: "https://youtu.be/To8vO-OTve4",
          reunion_img:
            "https://dl.airtable.com/.attachments/02325f2cc153a93367019d6c8b3fb5fc/8f84f3d4/KathleenHenderson.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -122.42875902986154,
          latitude: 37.761436650916764,
          city: "San Francisco",
          state: "CA",
          title: "Johnny Dwyer",
          story:
            "After nearly 30 years of separation, Johnny was reunited with his family with the help of Miracle Messages. A messenger helped Johnny record a video to send to his family. Johnny; shared this message in his video: “I’m still alive and I miss you. You’re always in my thoughts.” From the video, a messenger was able to connect with Johnny’s brother and sisters who flew across the country  to San Francisco to see their brother. Johnny has happily reconnected with his family and continues to keep in touch with them. To see Jonny’s video to his family, visit this link: https://www.youtube.com/watch?v=wP9mkxjZTYQ",
          link_to_media: "https://www.youtube.com/watch?v=wP9mkxjZTYQ",
          reunion_img:
            "https://dl.airtable.com/.attachments/495d88e7890e13eda86996f10fa3d54f/95c0ae38/johnnydwyer.png",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.41545701294584,
          latitude: 37.78713790100714,
          city: "San Francisco",
          state: "CA",
          title: "Jeffery Gottshall",
          story:
            "Jeffrey Gottshall had not seen his family in 22 years and a missing person for nearly 12 years. Within three weeks of recording a video message with the help of messenger, Jeffrey heard back from his sister Jennifer-in her very own video. Jennifer introduces her children to Jeffrey and says that she wants him to come home. She ends the video my saying “If you don’t give up, I won’t either.” Jefferey was able to reconnect with his sister Jennifer over the phone, and then in person. For more of Jeffrey’s story, visit this link: https://miraclemessages.tumblr.com/post/185210437352/jeffrey-gottshall-of-san-francisco-ca-had-not",
          link_to_media: "https://youtu.be/BzE-flnDrfI?t=58s",
          reunion_img:
            "https://dl.airtable.com/.attachments/86c3680eff8422fe0931d7292d54f809/a371bf8b/JeffreyG.JPG",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -75.98716027230029,
          latitude: 36.86306574388025,
          city: "Virginia Beach",
          state: "VA",
          title: "Jamal Riddick",
          story:
            "Jamal was hoping to reunite with his father when he found Miracle Messages. After contacting several members of Jamal’s family, a messenger was able to get a call back from Jamal’s father, Jesse, who then called Jamal. The father and son have since reunited both over the phone and in-person after 9 years of separation.",
          link_to_media: "https://youtu.be/9Oc1Gtc_swc",
          reunion_img:
            "https://dl.airtable.com/.attachments/179f0e4beca25688aeefa5efb243e96a/0693fa4d/JamalRiddick.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -80.14874018463675,
          latitude: 26.12936677412374,
          city: "Fort Lauderdale",
          state: "FL",
          title: "Howard w. Taylor aka taylor",
          story:
            "Miracle Messages reconnected Howard and his best friend Robert Clyde Case after being separated for over 50 years. Howard and Robert were best friends that served in the army together as two front-line soldiers in Vietnam. Both men lost touch with one another. Howard sought out the help of Miracle Messages in locating his lost friend. After deep investigation, a messenger was able to locate Robert’s niece Rebecca Becki Case. Rebecca communicated with Miracle Messages on behalf of her uncle for some time until the messenger spoke directly with Robert. Robert was happy to hear that Howard was searching for him. Howard and Robert are happy to have found each other again.",
          link_to_media: "https://youtu.be/AyARfdil_2M",
          reunion_img:
            "https://dl.airtable.com/.attachments/64d34171c82f81a8dcc17e0506b3e707/d0213a3a/HowardTaylor.JPG",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -122.42798141412607,
          latitude: 37.774000447580164,
          city: "San Francisco",
          state: "CA",
          title: "Helia Silva",
          story:
            "Helia was reconnected with much of her family with the help of Miracle Messages. Much of Helia’s family lives in Azores and spent years searching for her. With the help of a volunteer, Helia recorded a video to share with her sisters in which she shared that she missed them and tearfully expressed, “Please tell Mom and Dad I’m alive.” Helia was able to reunite with her family over a phone call in which they welcomed Helia to come home with them. Shortly after, Helia was able to reunite in person with her family, leaving her in tears. Helia has yet to return home to her family, but has built a reconnection with them after 15 years of separation. To see Helia’s video to her family, visit this link: https://www.youtube.com/watch?v=WORgEyVIDc0&feature=youtu.be",
          link_to_media:
            "https://www.youtube.com/watch?v=WORgEyVIDc0&feature=youtu.be",
          reunion_img:
            "https://dl.airtable.com/.attachments/64428da4303bdc9fec4b03adce16ffa3/4a95bc4d/Helia.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -118.24135104093502,
          latitude: 34.04695235553213,
          city: "Los Angeles",
          state: "CA",
          title: "Helen Becker (Dollyann)",
          story:
            "Helen wanted to reconnect with her Aunt Janie and her Uncle Chuck. In a video message recorded with the help of a messenger, Helen said, “I miss you guys big time. I’ve been trying to get in touch with everybody.” She continued on to tearfully say, “You can always reach me- I seriously want to hear from you guys. Just want to let you know I’m okay and hear your voices. Love you.” Helen has since reunited with her family after nearly 24 years of separation. To see Helen’s video, visit this link: https://www.youtube.com/watch?v=_kdJ_VTJK8o&feature=youtu.be",
          link_to_media: "https://youtu.be/_kdJ_VTJK8o",
          reunion_img:
            "https://dl.airtable.com/.attachments/b06e8c426dcabe879153e15977c718f4/b481d93a/helenbeckerdollyann.png",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.41953763296546,
          latitude: 37.77949964849717,
          city: "San Francisco",
          state: "CA",
          title: "David K. Smith",
          story:
            "David was reunited with his family with the help of Miracle Messages. A messenger was able to track down his parents, Ed and Shirley Smith. The family was given a chance to reconnect over the phone. After almost two decades of separation, the Smith family has reunited.",
          link_to_media: "https://youtu.be/PUAJxLgYWDA",
          reunion_img:
            "https://dl.airtable.com/.attachments/54f8e40a6f8e4360d66b2f0d7014d014/bdb65d2e/DavidSmith.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -121.88415501510784,
          latitude: 37.32354828482285,
          city: "San Jose",
          state: "CA",
          title: "David Moffitt",
          story:
            "With the help of Miracle Messages, David was able to reunite with his daughter Crystal. A messenger was able to find contact information for Crystal and upon contact, she was extremely happy at the opportunity to reconnect with her father. David and Crystal have since reunited after nearly five years of separation.",
          link_to_media: "https://www.youtube.com/watch?v=PcbaR0gQ_pc&t=1s",
          reunion_img:
            "https://dl.airtable.com/.attachments/d444d4219fbace2c0794b5c0848441ab/d3f63923/DavidMoffitt.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -75.98755799682493,
          latitude: 36.85594879716599,
          city: "Virginia Beach",
          state: "VA",
          title: "David Lawrence Brown Jr.",
          story:
            "David was reconnected with his daughter Megan after being separated for 20 years. A Miracle Messages messenger was able to find Megan on instagram and messaged her there. David was nervous to reach out to his family and initially hesitated in communicating with his daughters. After two decades of silence, Megan too was hesitant. Miracle Messages was able to facilitate a third-party phone call and reunited David and Megan over the phone.",
          link_to_media: "https://www.youtube.com/watch?v=CfZ77YOBK2M",
          reunion_img:
            "https://dl.airtable.com/.attachments/dba5af7a5451134cae0a0cab64c557ec/12c7a0f5/DavidLawrence1.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -122.42798179865683,
          latitude: 37.7788111640587,
          city: "San Francisco",
          state: "CA",
          title: "David Hill",
          story:
            "Miracle Messages partnered with Homeward Bound to reunite David with his niece Latanya. They have been happily reunited and David is off the streets, living with his niece. ",
          link_to_media: "https://www.youtube.com/watch?v=x_V7s8ZV0lw&t=90s",
          reunion_img:
            "https://dl.airtable.com/.attachments/f873d9ae3a3fe697f6218477a44b4433/4e694a11/DavidHill2.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -75.12662392412412,
          latitude: 39.92799750210126,
          city: "Camden",
          state: "NJ",
          title: "Daniel McCarthy",
          story:
            "Daniel wanted to reconnect with his son Jason when he found Miracle Messages. In an emotional video message recorded for his son, Daniel tearfully says “Jason, I love you to death. I want to see you, I want to hold you, I want to kiss you. I miss you so much. I just want to be near you.” He continues on to sadly say about Jason “I just want to put my arms around him and hold him…” Daniel and Jason have since reconnected after two years of separation. To see Daniel’s video, visit this link: https://www.youtube.com/watch?v=VK2Ami2SJYc&feature=youtu.be",
          link_to_media: "https://youtu.be/VK2Ami2SJYc",
          reunion_img:
            "https://dl.airtable.com/.attachments/d788e1c9061cd24d49ad2b0d490947fe/df00dd66/DanielMcCarthy.png",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.43347073353667,
          latitude: 37.7714792010095,
          city: "San Francisco",
          state: "CA",
          title: "Clifton Killingsworth",
          story:
            "Clifton was able to reconnect with his mother Mary with the help of Miracle Messages. A messenger initially called Mary on behalf of Clifton which was unsuccessful. Clifton was later able to independently call Mary and reconnect with her after a year of separation.",
          link_to_media: "https://www.youtube.com/watch?v=nTtxd6E_f2c",
          reunion_img:
            "https://dl.airtable.com/.attachments/1bc9f878c2f55335bb25c4aee7c44a59/98627b90/cliftonkillingsworth.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.15140817019284,
          latitude: 37.44562051149249,
          city: "Palo Alto",
          state: "CA",
          title: "Chandra Arnold",
          story:
            "Chandra was reunited with her young daughter Shamaria. Shamaria is young and a Regional Center participant. Accordingly, Miracle Messages was cautious in not disturbing the stability of Shamaria in facilitation this reunion. A messenger was able to share a video message from Chandra with her daughter and send  set up a phone call. Chandra and Dhamaria have since been reunited. Chandra was also reunited with her cousin Simuel Lawrence Winston who is a current inmate.",
          link_to_media: "https://www.youtube.com/watch?v=6Y4Jq65Lh9w",
          reunion_img:
            "https://dl.airtable.com/.attachments/07eb01ffd7d2baf240c61ce5a8f8f399/4fe877a3/Chandra2.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -122.41944030331874,
          latitude: 37.778505867098524,
          city: "San Francisco",
          state: "CA",
          title: "Arturo Raul Noriega",
          story:
            "Arturo was reconnected with his brother with the help of Miracle Messages. After speaking with Arturo, his brother shared that he was happy to hear that his brother was on the road to getting clean and intended to send him some food to help care for him. Arturo was able to reconnect with his brother after nearly 5 years of separation.",
          link_to_media: "https://youtu.be/8cnTWPHPnMk",
          reunion_img:
            "https://dl.airtable.com/.attachments/5feb562719d69274ad15f02fe894bcc3/c948f948/ArturoRaul.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -122.41970598651042,
          latitude: 37.760501092077575,
          city: "San Francisco",
          state: "CA",
          title: "Arto Robuck Green",
          story:
            "Arto was reunited with his loved ones with the help of Miracle Messages. Initially the loved ones seemed hesitant to reunite, but as of now, Arto is in regular communication with his family. Arto has reconnected with his family after over twenty years of separation.",
          link_to_media: "https://www.youtube.com/watch?v=9PcloRcj71w",
          reunion_img:
            "https://dl.airtable.com/.attachments/c0e0626af2029c7c8d1de0efc448decf/a7577019/ArtoRobuck.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -76.2722588529674,
          latitude: 36.85410391263372,
          city: "Norfolk",
          state: "VA",
          title: "Mary Brown",
          story:
            "Mary wanted to reconnect with her brother Edward when she found Miracle Messages. In a video message recorded with the help of messenger, Mary said to her brother “You never know what’s going to happen in life...I really think we should try to agree and talk to one another...I’m sending you this message- I hope you will decide we should meet and talk to one another and try to get along...” Mary and Edward have since reunited after 5 years of separation. To see Mary’s video, visit this link: https://www.youtube.com/watch?v=JULxilTHjOY",
          link_to_media: "https://www.youtube.com/watch?v=JULxilTHjOY",
          reunion_img:
            "https://dl.airtable.com/.attachments/18abc066b4399694cf6d90e0519eddb4/83287987/marybrown.png",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.35044294105128,
          latitude: 37.93446802928828,
          city: "Richmond",
          state: "CA",
          title: "Maxine Mars",
          story:
            "Maxine was searching for his brother Danny Bowen after decades of separation. With help of Miracle Messages and Danny’s roommate, Tammy Lemacks, the two brothers were reunited. Maxine and Danny have been reunited after 38 years of separation.",
          link_to_media: "https://youtu.be/c6Ve0uq0u80",
          reunion_img:
            "https://dl.airtable.com/.attachments/c907ad9b946a7f148e4a385dd06dbe0d/f4459772/MaxineMars.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -114.06660503181367,
          latitude: 51.027728849447044,
          city: "Calgary",
          state: "Alberta",
          title: "Rebecca Lynn Brooks",
          story:
            "Rebecca was hoping to reconnect with her mom and aunt when she found Miracle Messages. In a video message recorded by a messenger, Rebecca says to her family “I’m doing okay...Please give me a call and let me know how you are.” She continues on to specifically ask about her mom saying “I just want to know if Mom is okay...what’s going… Please keep me informed and let me know…” After 19 years of not seeing one another and 3 years of not speaking, Rebecca has since reconnected with her mother. To see Rebecca’s video, visit this link: https://www.youtube.com/watch?v=CIN_NlZeB0s&feature=youtu.be",
          link_to_media: "https://youtu.be/CIN_NlZeB0s",
          reunion_img:
            "https://dl.airtable.com/.attachments/eae6d2262239680daf44e4ae8e05ed72/81cd11ba/ScreenShot2020-01-13at8.49.04PM.png",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -114.0658247593046,
          latitude: 51.028407445821074,
          city: "Calgary",
          state: "Alberta",
          title: "Adrian Maxwell",
          story:
            "Miracle Messages reunited Adrian with his sister Laura Maxwell after being separated for 6 months. A messenger sent a video message of Adrian to his sister. The message was well received by Laura, who responded back with video to be shared with her brother. Since then, Drain and Laura have happily reconnected over the phone.",
          link_to_media: "https://www.youtube.com/watch?v=LghY6sTFFyo",
          reunion_img:
            "https://dl.airtable.com/.attachments/f1f5a7b9568dec96517174f42b910c6d/ef318fa6/MAXWELLAdrian.png",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -114.07623778748906,
          latitude: 51.034985816578676,
          city: "Calgary",
          state: "Alberta",
          title: "Lance Eagle Speaker",
          story:
            "Miracle Messages and Calgary Drop-In & Rehabilitation Centre were able to reunite Lance with his mother Wanda. Lance had not seen or spoken with is mother in two years. With the help of a messenger and volunteers, Lance has since happily reunited with his mother.",
          link_to_media: "https://youtu.be/PMztqmSR7gk",
          reunion_img:
            "https://dl.airtable.com/.attachments/de1b4c507316053e5b2565c2df548254/a4babf95/EAGLESPEAKERLance.png",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -80.18164888209469,
          latitude: 25.76601758081373,
          city: "Miami",
          state: "FL",
          title: "Roberto Marcial Robert Ulloa",
          story:
            "Roberto was reunited with his family after 10 years of separation. Roberto’s family was contacted through Facebook and the reunion was facilitated from there. The family was very happy to hear from Roberto and drove all the way from New Jersey to Florida to pick him up and bring him home.",
          link_to_media: "https://www.youtube.com/watch?v=_RDgDoZloig",
          reunion_img:
            "https://dl.airtable.com/.attachments/dbc5d04984024c1085b73e5d4bac8425/b95520fb/RobertUlloa.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -80.190501276355,
          latitude: 25.74656469266962,
          city: "Miami",
          state: "FL",
          title: "Isaac H. Avila",
          story:
            "Miracle Messages partnered with Choose Love Foundation to reunite Isaac with is family. Isaac was reunited with his sister Guadalupe Avila after nearly 40 years of separation. Isaac is now off the streets and living with his sister.",
          link_to_media: "https://youtu.be/KrxpHosoJ6Y",
          reunion_img:
            "https://dl.airtable.com/.attachments/a8035e76798366933f39ad1025940973/8fcb967d/Jan2016IsaacAvila.png",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -97.33119697320717,
          latitude: 32.73991437298698,
          city: "Fort Worth",
          state: "TX",
          title: "Steven Rojas",
          story:
            "Steven wanted to reconnect with his son Joseph when he found Miracle Messages. In a video message recorded for his son, Steven said “Joseph, it’s your dad. I love you and I can’t wait to see you and your new wife. I’m really looking forward to seeing all of y’all. Calle me as soon as possible…” Steven has since reconnected with Joseph and his family. To see Steven’s video, visit this link: https://www.youtube.com/watch?v=voWt-n8d_ws",
          link_to_media: "https://www.youtube.com/watch?v=voWt-n8d_ws",
          reunion_img:
            "https://dl.airtable.com/.attachments/1a93f4efcf10dba8282740484798faac/bb27b43c/ScreenShot2020-01-13at9.23.11PM.png",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -97.33140073700564,
          latitude: 32.77217339830249,
          city: "Fort Worth",
          state: "TX",
          title: "Brian Keith Wallace",
          story:
            "Brian was reunited with his brother Darren Lee Wallace. A messenger was able to find Darren via White Pages and then facilitate a phone call between two brothers. Brian and Darren have been reunited after being separated for 10 years.",
          link_to_media: "https://youtu.be/U8NQUjfA2Mw",
          reunion_img:
            "https://dl.airtable.com/.attachments/8f0f9e5d019ebd7abfac2369d4b50fe7/e157cfc6/BrainWallace2.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -0.13750711305923324,
          latitude: 51.5137764841921,
          city: "London",
          state: "England",
          title: "Zbigniew Mikolaj Niejadlik",
          story:
            "Zbigniew was reunited with his sister with the help of Miracle Messages. A messenger was able to help Zbigniew speak with his sister over the phone.",
          link_to_media: "https://youtu.be/3yPGKjMg6Vk",
          reunion_img:
            "https://dl.airtable.com/.attachments/e7df831f8714ea6af049387c6a454420/99c1823b/Zbigneiw.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -121.87691444421368,
          latitude: 37.329722201583856,
          city: "San Jose",
          state: "CA",
          title: "Evelyn Diane Currie",
          story:
            "Diane was searching for her brother Robert when she found Miracle Messages. After being separated for decades, she deeply missed her younger brother. Extensive searching by several messengers yielded no results. Investigation occurred via Facebook, White Pages, local volunteer groups, and even the local Police Departments. Finally, after finding nothing, a team decided to “take to the streets” to find Robert. And sure enough, they found him. Through this contact, Diane was able to send a message to her brother. After thirty-five years of separation, Diane has reunited with her younger brother.",
          link_to_media: "https://youtu.be/GX_ChT9aK8M",
          reunion_img:
            "https://dl.airtable.com/.attachments/73096dd23753f87b2e5dcae8cfecf15f/7925207d/EvelynCurrie.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.4033505523529,
          latitude: 37.767742459389446,
          city: "San Francisco",
          state: "CA",
          title: "Asael Nuila",
          story:
            "Asael Nuila was searching to reunite with his sister Febe with the help of Miracle Messages. At first, our messenger has a difficult time finding information on Febe after several unresponded calls via contact information on White Pages. It wasn’t until a messenger was able to sit down with Asael and do a comprehensive facebook search that they were able to find Febe’s profile. From there, they reached out to Febe, sending a message in Spanish. Asael has since reunited with his Febe after 8 years of separation. Asael is now in school and is working and has repeatedly shared getting reconnected had changed his life and he continues to stay in contact with his sister.",
          link_to_media: "https://www.youtube.com/watch?v=IsdPu5Fn69A",
          reunion_img:
            "https://dl.airtable.com/.attachments/e8c4326a8675999a75b7ce356fcd5562/e9d70cdf/AsaelNuila.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.40328526905245,
          latitude: 37.76742990447015,
          city: "San Francisco",
          state: "CA",
          title: "Ambrosia Stricker",
          story:
            "Ambrosia lost contact with her father nearly 11 years ago. A messenger Miracle Messages was able to locate her father, Wayne Oliver Brown, after a comprehensive search and shared a video message on behalf of Ambrosia. Wayne was happy to hear from Ambrosia was excited to reconnect. Ambrosia and her father have since reunited.",
          link_to_media: "https://www.youtube.com/watch?v=4rMw4rIM3Q0",
          reunion_img:
            "https://dl.airtable.com/.attachments/937b6bee8a4876a23ac3f578e592322f/773d2638/AmbrosiaS2.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -122.03461390973816,
          latitude: 36.99060152771362,
          city: "Santa Cruz",
          state: "CA",
          title: "Devin Pierce",
          story:
            "Devin and his mother, Shirley Pierce were reunited after 14 years of separation. Miracle Messages was able to find a phone number for Shirley and communicated with her on behalf of Devin. After some time, she asked Miracle Messages to give her number to Devin and share some pictures with her.",
          link_to_media: "https://www.youtube.com/watch?v=bsfVjJVbSYQ",
          reunion_img:
            "https://dl.airtable.com/.attachments/0ba76fcebe5643441d5337ca7ae7fefa/814932e5/DevinPierce.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -122.42112915666259,
          latitude: 37.779175618913634,
          city: "San Francisco",
          state: "CA",
          title: "Angel Barrios",
          story:
            "Angel was searching for his sister Rafaela when he found Miracle Messages. After some investigating, a messenger found that Rafaela had been arrested and had an upcoming court date. The messenger was able to communicate with Rafael’s public defender on behalf of Angel to work to bring the siblings together. After some back and forth and some skepticism regarding her brother’s reunion interests, Rafaela spoke with Angel. The two siblings are now happily reunited after 15 years of separation.",
          link_to_media: "https://youtu.be/xGu0twxavwg",
          reunion_img:
            "https://dl.airtable.com/.attachments/92ce875be825aab944e6ee8aed4b4b7e/ea19d30d/AngelBarrios2.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -122.42164993623662,
          latitude: 37.76288377071055,
          city: "San Francisco",
          state: "CA",
          title: "William Augusta Coleman Jr.",
          story:
            "William wanted to reconnect with his daughter Tawanda. A messenger helped William record a video message to share with his daughter in which he said how much he missed his daughter and that he thinks about her all the time. William has since reunited with Tawanda after 9 years of separation. To watch William’s video to his family, visit this link: https://youtu.be/B0BSUMZDfJ4",
          link_to_media: "https://youtu.be/B0BSUMZDfJ4",
          reunion_img:
            "https://dl.airtable.com/.attachments/feeda00c1d73dec4bba9348669e7f3fd/f3b52a33/WilliamAugustaColemanJr.png",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.23874209937394,
          latitude: 37.49346333455835,
          city: "Redwood City",
          state: "CA",
          title: "Michael Fiore",
          story:
            "Michael was hoping to reunite with his family when he found Miracle Messages. With the help of a messenger, Michael was given the chance to communicate with his mother, Angela, over the phone. Michael has since gotten off the streets and returned home to family. Michael has reunited with his mother after 26 years of separation.",
          link_to_media: "https://youtu.be/MfHjZK1f8dM",
          reunion_img:
            "https://dl.airtable.com/.attachments/5932ded53193f6f3742ab68b3d105037/a2d47433/MichaelFiore.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -118.37705779533486,
          latitude: 34.08345555743818,
          city: "West Hollywood",
          state: "CA",
          title: 'Ellen Wharton "Francine Dancer"',
          story:
            "Ellen was searching for her family when she came across Miracle Messages. A messenger was able to locate her niece, Cheyenne. Cheyenne is a lovely woman who adopts special needs children. She expressed much love for her aunt and was incredibly happy to hear from her. She said that Ellen always sent a dollar and a birthday card Cheyenne’s children despite her own difficulties. Ellen has reunited with Cheyenne after 25 years of separation.",
          link_to_media: "https://www.youtube.com/watch?v=d--ZP4iZyXw",
          reunion_img:
            "https://dl.airtable.com/.attachments/737de2e2f251c59f7f7317e1414cb546/dd399a1d/EllenDancer.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -122.23428143156895,
          latitude: 37.4808031742398,
          city: "Redwood City",
          state: "CA",
          title: "Lorenzo Castenda",
          story:
            "Lorenzo has reunited with his family and friends. In an email shared with Miracle Messages by Lorenzo’s friend Jessie, he detailed that Lorenzo has really turned his life around. He has reconnected with his family, has a new home, and has even recently seen his kids. ",
          link_to_media: "https://www.youtube.com/watch?v=wCLl2lCOah0",
          reunion_img:
            "https://dl.airtable.com/.attachments/c7c121caed42f208022cb1098c9fe63a/074046a1/LorenzoC.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -75.97133396446495,
          latitude: 36.86765839458603,
          city: "Virginia Beach",
          state: "VA",
          title: "Debra Faye Foster Ferrara",
          story:
            "Debra was searching for her family when she found Miracle Messages. In a video message recorded with the help of a messenger, Debra emotionally shared, “I’m looking for you guys- I love you. I need you guys to get a hold of me if you can. I miss you guys and I need to talk to somebody.” After 30 years of separation, Debra was able to reconnect with her cousin Donald. To see Debra’s video, visit this link: https://www.youtube.com/watch?v=zVjgO7-FLZw&feature=youtu.be ",
          link_to_media: "https://youtu.be/zVjgO7-FLZw",
          reunion_img:
            "https://dl.airtable.com/.attachments/294d616fc2db48394270f424ef99a345/fd07f426/ScreenShot2020-01-13at10.29.52PM.png",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -122.42334980126668,
          latitude: 37.78182839554546,
          city: "San Francisco",
          state: "CA",
          title: "Vernell Robertson",
          story:
            "Miracle Messages was able to facilitate a reunion between Vernell and his foster parents. They were able to have a nice conversation after two years of separation.",
          link_to_media: "https://www.youtube.com/watch?v=t4SDURWpAQc",
          reunion_img:
            "https://dl.airtable.com/.attachments/242aa1d4a6ce920ceb23e1123d1877c4/a74a5a54/VernellRobertson.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.41196682625255,
          latitude: 37.78477656761851,
          city: "San Francisco",
          state: "CA",
          title: "Eddie Mcleod",
          story:
            "Eddie was reunited with his son Darren who lives in Ireland after 29 years of separation. Initially, a messenger was easily able to find Darren in Ireland reached out on behalf Eddie. Darren revealed that he too had been searching for his father for years and shared a video with Miracle Messages for Eddie. Soon after, Eddie and Darren spoke over video conference and continued to converse with the help of Miracle Messages. Eddie soon after obtained a phone to communicate independently with Darren. Speaking again with Darren turned Eddie’s life around. Eddie was struggling with substance abuse issues when he met Miracle Messages, but his reunion with Darren provided motivation to make changes. One month after reconnecting with Darren, Eddie decided to enter a 90-day rehab and has been working hard since. In the time since Eddie’s initial reconnection, Darren has connected with other members of Eddie’s family, including Eddie’s mother and  sister, as well as Eddie’s other son. The connections that Darren has made to these other family members have also drawn Eddie back into the family. Eddie is now communicating regularly with his sister, even though they had been estranged when Miracle Messages first began working with Eddie.",
          link_to_media: "https://youtu.be/PMJUzzQreHk",
          reunion_img:
            "https://dl.airtable.com/.attachments/647219eebe3ce33a83b7715ce5d2becc/044e0694/EddieMcleod.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.4047524094769,
          latitude: 37.78101486275234,
          city: "San Francisco",
          state: "CA",
          title: "David Scott Tehero",
          story:
            "David was interested in reuniting with his son and daughter. With the help of messenger, David was able to send a message to both his children. David was able to reconnect with his son, but his daughter was not interested in a reunion. A few months later, David’s daughter called Miracle Messages to share the sad news that David’s mother had passed away and that she wanted her dad to know. David was able to attend his mother’s funeral and additionally reunite with his family, including his daughter. David has reconnected with his family after 20 years of separation.",
          link_to_media: "https://www.youtube.com/watch?v=T0LTkvSNKHE",
          reunion_img:
            "https://dl.airtable.com/.attachments/6d30314b92c1e7331fe07a5316bcdb9e/e2bbb44e/DavidScottT.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -80.14310146580218,
          latitude: 26.124193581705065,
          city: "Fort Lauderdale",
          state: "FL",
          title: "Michael Collins",
          story:
            "Michael Collins was searching for his son Andre when he found Miracle Messages: With the help of a messenger, Michael and Andre were able to share a phone call. The father and son have reunited after 37 years of separation. ",
          link_to_media: "https://youtu.be/PBXfYUlKvxY",
          reunion_img:
            "https://dl.airtable.com/.attachments/8b375d8c8a68874388d1a3342fa6e13e/5b7b4c0a/MichaelCollins.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -80.14119091751579,
          latitude: 26.111896368084658,
          city: "Fort Lauderdale",
          state: "FL",
          title: "Juanita Haugabook",
          story:
            "Juanita was reunited with her sister Patricia Ann after nearly a decade of separation. Miracle Messages was able to bring the sisters together in person and helped them reconnect. Juanita is working to rebuild her life and recently got a job at her local airport.",
          link_to_media: "https://youtu.benyagy4PpM4E",
          reunion_img:
            "https://dl.airtable.com/.attachments/cc1bd8b767021912d294479fa0184923/dc59befa/JuanitaH..jpg",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -71.45813236618572,
          latitude: 43.00539616924751,
          city: "Manchester",
          state: "NH",
          title: "Mary Day",
          story:
            "Mary wanted to reconnect with her sisters Janet and Peggy and her brother Daniel when she found Miracle Messages. Mary was recently incarcerated and hadn’t seen her siblings prior to being in jail. In a video message recorded with the help of a messenger, Mary shared determinedly, “Hi guys, I miss you...I just want you to know...I’m staying in a shelter, trying to get my life back together. I’m staying sober, I’m going to meetings, I’m doing whatever I have to do.” Mary has since reconnected with her brother and sisters. To see Mary’s video, visit this link: https://www.youtube.com/watch?v=sgEkoNnVGtA&feature=youtu.be",
          link_to_media: "https://youtu.be/sgEkoNnVGtA",
          reunion_img:
            "https://dl.airtable.com/.attachments/a59172922af1afbf30da9f443a4d1a57/5e740205/ScreenShot2020-01-13at9.43.06PM.png",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -71.46717888058271,
          latitude: 42.98531832469461,
          city: "Manchester",
          state: "NH",
          title: "Dale Allen Lambert",
          story:
            "Dale was reunited with his sister Francine after 27 years of separation. Miracle Messages was able to help bring the siblings together. After meeting his sister in-person, Dale was able to get off the streets for a while. He recently passed away; rest in peace Dale.",
          link_to_media: "https://www.youtube.com/watch?v=K2FosAnQB6I",
          reunion_img:
            "https://dl.airtable.com/.attachments/c073b6b20e68aba237712a22fb746a46/c7d05a5e/DaleLambert.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -97.14262776337709,
          latitude: 31.554384476298324,
          city: "Waco",
          state: "TX",
          title: "Delair Eugene Watson",
          story:
            "Delair was hoping to reconnect with his mother Linda. With the help of Miracle Messages, Linda’s phone number was discovered and a reunion was fostered between her and her son. Since then, Linda and Delair have reunited over the phone after a year of separation.",
          link_to_media: "https://www.youtube.com/watch?v=cxT3rNIsmD0",
          reunion_img:
            "https://dl.airtable.com/.attachments/41a696e9c47f3f30341a9425bcbe338c/007009a7/DelarWatson.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -97.13249420470993,
          latitude: 31.5537430968358,
          city: "Waco",
          state: "TX",
          title: "Brent Lawrie Fitch",
          story:
            "Brent was searching for his sister Debra when he found Miracle Messages. In a video message recorded with the help of a messenger, Brent said to his sister “I don’t know where you live, but I would like to know. Please give me some of your information if you can. Thank you. God Bless.” Brent has since reunited with Debra after a year of separation. To see Brent’s video, visit this link: https://www.youtube.com/watch?v=q_wbZEF28cM",
          link_to_media: "https://www.youtube.com/watch?v=q_wbZEF28cM",
          reunion_img:
            "https://dl.airtable.com/.attachments/80bdeb3d59b3c2c291bdad3f265efd87/84f57fb5/BrentLawrieFitch.png",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -122.42568362669765,
          latitude: 37.78635366384755,
          city: "San Francisco",
          state: "CA",
          title: "Gary Jordan",
          story:
            "Gary was reunited with his family over the phone. His niece reached out, Savon Marie reached out to her uncle via facebook and the two were able to communicate again. Gary has been happily reunited with his family after decades of separation.",
          link_to_media: "https://youtu.be/Cjs2n4rzqSk",
          reunion_img:
            "https://dl.airtable.com/.attachments/e78bf45d689d81b80ffcc95aa4b17c57/53e35bb4/GaryJordan.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -111.90312525910288,
          latitude: 40.76293484415494,
          city: "Salt Lake City",
          state: "UT",
          title: "Charles Michael Cooler",
          story:
            "Charles, when initially working with Miracle Messages was interested in finding his sister Amy Marie Cooler, with whom he has not spoken in 6 years. A messenger located his sister and messaged her on Facebook. She was excited to hear from her brother and wanted to communicate with him and help. Shortly after hearing back from Amy, Miracle Messages had difficulty locating Charles as he was in and out of shelters. It was discovered that he was arrested for retail theft. A messenger remained in contact with Amy and shared the information with her. She continued to show interest in reuniting with Charles and has been working with Miracle Messages to bring Charles home and give him support upon his release.",
          link_to_media:
            "https://www.youtube.com/watch?v=P7cxTXAGVn4&feature=youtu.be",
          reunion_img:
            "https://dl.airtable.com/.attachments/c515122b338a7c5e775a75218c64f1ab/281af869/CharlesCooler.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -111.8927919930633,
          latitude: 40.776784345272354,
          city: "Salt Lake City",
          state: "UT",
          title: "Susanne Hatch",
          story:
            "When Susanne found Miracle Messages, she was hoping to reconnect with her daughter Amber. Despite investigation done by a messenger, Susanne was able to independently reconnect with her daughter. Susanne and Amber have since reunited after months of separation.",
          link_to_media: "https://youtu.be/SeI1mgCJhpo",
          reunion_img:
            "https://dl.airtable.com/.attachments/54f41a659011875b3d2293035d005701/67fec9da/SusanneHatch.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.41614183761685,
          latitude: 37.7862358037173,
          city: "San Francisco",
          state: "CA",
          title: "Ben Hinds",
          story:
            "Ben was reunited with his brother Russel with the help of Miracle Messages. A messenger was able to find Russel and proposed a potential reunion. Ben’s friend, Howard was also found and he shared this messages regarding Ben: “I am so glad that he is alive because I still love him. He is a great person.” Ben has since reunited with his brother after being separated since 1999. He has returned home to his family.",
          link_to_media: "https://youtu.be/kTfgCMIquwM",
          reunion_img:
            "https://dl.airtable.com/.attachments/8779dbd3840189468b1bfd4166fefa41/6d23215f/BenHinds2.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "2",
          volunteersid: "00ud5cf5v0zK8zYCG4x6",
          longitude: -73.21707314977903,
          latitude: 44.46586272867928,
          city: "Burlington",
          state: "VT",
          title: "Perry Early Thornley",
          story:
            "Perry was reunited with his son Joseph. Miracle Messages was able to facilitate this reunited in person. Additionally, Perry is now off the streets and has returned home. After twenty years of separation, the father and son have been happily reunited.",
          link_to_media: "https://www.youtube.com/watch?v=bUVjygU5B7A",
          reunion_img:
            "https://dl.airtable.com/.attachments/74cd69b2b7ce0874bc5b4c8ca3508565/51fa90f1/PerryEarly.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00uc4zemuUeyaDfEd4x6",
          longitude: -70.26045343858932,
          latitude: 43.64683991008668,
          city: "Portland",
          state: "ME",
          title: "Dean Martin",
          story:
            "Dean was looking for his mother Cheryl Martin, last seeing her in 2001, and last speaking with her in 2008. A messenger searched thoroughly for Cheryl Martin, beginning by sending a video recording of Dean to various emails, and then various facebook searches, until her number was found on White Pages. Cheryl was happy to hear from Miracle Messages saying that she had long been looking for her son. Cheryl and dean are now reunited after 10 years of separation.",
          link_to_media:
            '"https://youtu.be/1XxTcnoePDc , https://youtu.be/IV6wF2Z5wfc"',
          reunion_img:
            "https://dl.airtable.com/.attachments/5be980410af08c9e098b3de75672e83f/d5cfc4f9/Dean1.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "5",
          volunteersid: "00ud5eh8zUduV6GTR4x6",
          longitude: -122.99223398726957,
          latitude: 38.49792349120111,
          city: "Guerneville",
          state: "CA",
          title: "Ed Long",
          story:
            "Ed was hoping to reconnect with his best friend Glen when he found Miracle Messages. Ed and Glen met during their time as navy seals but had lost touch over the years. In a video message, Ed shared that he hadn’t seen Glen in 30 years. Ed had a jovial smile as he recounted their friendship and said “I sure do miss you [Glen]...I love you, God bless.” A messenger searched for Glen and learned that he had passed away only a year prior. May Glen rest in peace. The messenger reached out to Glen’s family on Ed’s behalf, allowing him to cherish and remember his best friend with his family. To see Ed’s video, visit this link: https://www.youtube.com/watch?v=6IUNkrWXNgM&feature=youtu.be",
          link_to_media: "https://youtu.be/6IUNkrWXNgM",
          reunion_img:
            "https://dl.airtable.com/.attachments/736b6f95c3f3f8b0d4b64aaf90077140/bfc4d1f4/ScreenShot2020-01-13at9.28.56PM.png",
          approved: "TRUE",
        },
        {
          chapterid: "4",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -122.98549486919602,
          latitude: 38.510899125057215,
          city: "Guerneville",
          state: "CA",
          title: "Larry Allen",
          story:
            "With the help of Miracle Messages, Larry was able to reconnect with daughter, Rebecca. After some investigation, a messenger was able to find Rebecca via facebook and at her salon. From there, a reunion was facilitated between the father and daughter. Larry has since reunited with his daughter after 13 years of separation.",
          link_to_media: "https://youtu.be/rIIcOQpuvFc",
          reunion_img:
            "https://dl.airtable.com/.attachments/ed62ced205a3089ab14ead14d260a412/a6279bb0/LarryAllen.jpg",
          approved: "TRUE",
        },
        {
          chapterid: "1",
          volunteersid: "00ucjaxelCFMx6uiO4x6",
          longitude: -71.46482576261809,
          latitude: 42.9945171583773,
          city: "Manchester",
          state: "NH",
          title: "Ariel Mejias",
          story:
            "Ariel was searching for his brother Charlie when he found Miracle Messages. A messenger was able to find Charlie’s information via White Pages. From there, Ariel was able to record a video that was then shared with Charlie. Charlie responded soon after saying that Ariel is currently staying with their sister and is no longer homeless. Ariel was able to independently reunite with his family after 25 years of separation. ",
          link_to_media: "https://youtu.be/xHgYG-o0He0",
          reunion_img:
            "https://dl.airtable.com/.attachments/4d52269d746a44a8191d7e9597d21d40/ec385373/ArielM.jpg",
          approved: "TRUE",
        },
      ]);
    });
};
