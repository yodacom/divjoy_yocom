import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            items={[
              {
                title: "Responsive progressive web pages and apps",
                body:
                  "You need a FAST app and web page. We use the latest tech to make it happen - from Serverless to React.",
                image:
                  "https://res.cloudinary.com/yodacom/image/upload/c_scale,f_auto,h_140,w_200/v1569948015/ways-website-faster_zbls1e.svg"
                  //"https://res.cloudinary.com/yodacom/image/upload/c_scale,f_auto,h_140,w_200/v1569540101/fastAndResponsiveWebsite_mwhq4k.jpg"
                // "https://res.cloudinary.com/yodacom/image/upload/v1569540101/fastAndResponsiveWebsite_mwhq4k.jpg"
                //"https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg"
              },
              {
                title: "From IoT, social media, to using the block chain",
                body:
                  "Need something built? - anything from home automation, e-commerce, responsive website, to the blockchain - We have the expertise and tech to make it happen.",
                image:
                  "https://res.cloudinary.com/yodacom/image/upload/c_scale,f_auto,h_140,w_200/v1569960361/apiConnections_hlzmyl.svg"
                  //"https://res.cloudinary.com/yodacom/image/upload/c_scale,f_auto,h_140,w_200/v1569948511/apiConnections_esbkur.svg"
              },
              {
                title: `Mobile EVENT HORIZON`,
                body:
                  "People on the go with computers to hand-held devices means your app needs to be fast and responsive to every device and network",
                image:
                  "https://res.cloudinary.com/yodacom/image/upload/c_scale,f_auto,h_140,w_200/v1569527342/cloudWeb_ae1pq0.jpg"
                //"https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg"
              },
              {
                title: "Magnets built in",
                body:
                  "MAGNETIC apps and pages designed to attract your audience making them 'raving fans'.  YodaCom infuses your site from the ground up with magnetic marketing savvy",
                image:
                  "https://res.cloudinary.com/yodacom/image/upload/c_scale,f_auto,h_140,w_200/v1569529982/goldfishAttraction_mhb74j.jpg"
                //"https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
