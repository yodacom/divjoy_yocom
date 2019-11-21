import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import ContentCards from "./../ContentCards";
import "./styles.scss";

function ContentCardsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <ContentCards
          people={[
            {
              image: "https://res.cloudinary.com/yodacom/image/upload/v1569966274/summitDailyNewsYodaCom_sm2_cjwrjr.png",
              //"https://res.cloudinary.com/yodacom/image/upload/v1569966274/summitDailyNewsYodaCom_sm2_cjwrjr.png",
              //"https://source.unsplash.com/aHrxrT1q2h0/800x600",
              title: "Managing the mobile revolution",
              body:
                "News article on Yodacom and founder Jeremy Black",
              url: "https://res.cloudinary.com/yodacom/image/upload/v1569966274/summitDailyNewsYodaCom_sm2_cjwrjr.png"
            },
            {
              image:"https://res.cloudinary.com/yodacom/image/upload/v1570019553/SummitDailyArticleRompToStompPapertornRec_aon7nn.png",
              //"https://source.unsplash.com/BkmdKnuAZtw/800x600",
              title: "Article on Yodacom's support of large events",
              body:
                "YodaCom made apps supporting events, causes and surrounding merchants. ",
              url: "https://res.cloudinary.com/yodacom/image/upload/v1570138803/SummitDailyArticleRompToStompEditP1and2BandW_opt_zhowuj.pdf"
              //"https://yodacom.s3.us-east-1.amazonaws.com/SummitDailyArticleRompToStompEditP1and2BandW_opt.pdf"
            },
            {
              image:"https://res.cloudinary.com/yodacom/image/upload/v1570059114/coinrocSite_worbbi.png",
              //"https://source.unsplash.com/3XN-BNRDUyY/800x600",
              title: "Tracking and development of cryptocurrency, blockchain, and IoT.",
              body: "Cryptocurrency trackers, using the blockchain, and IoT. Talks on the 'Future of Money' - 'The blockchain, IoT and your future' - do not fear the digital future, it's not 'Skynet' ",
              url: "/post/road"
            },
            {
              image:"https://res.cloudinary.com/yodacom/image/upload/v1570109857/WebWorkCollage_oyp7h5.png",
              //"https://source.unsplash.com/eOcyhe5-9sQ/800x600",
              title: "Software development and digital leadership you can count on",
              body:
                "From plain ol javascript websites to Joomla, Wordpress, NodeJs, IoT, React and Gatsby - Leading edge software development with digital guidance and consulting you can count on",
              url: "/post/balloons"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default ContentCardsSection;
