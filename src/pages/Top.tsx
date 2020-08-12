import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const IntroductionDiv = styled.div`
  padding: 5px;
  margin: 5px;
  font-weight: bold;
  border-radius: 10px;
  border: solid 1px gray;
  background-color: gray;
`;

const TextDiv = styled.div`
  padding: 5px;
  color: white;
  font-size: 13px;
  font-weight: bold;
`;

const TopicsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px;
  flex-wrap: wrap;
`;

const TopicContents = styled.div`
  width: 250px;
  display: inline;
  border: solid 1px gray;
  border-radius: 10px;
  margin: 20px;
`;

const TopicTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding: 3px;
`;

const TopicBody = styled.div`
  font-size: 12px;
  padding: 3px;
`;

const textLangMap = {
  ja: {
    title: "Introduce Smoked Foods",
    topics: [
      {
        title: "Smoke Type",
        url: "/smokeType",
        body:
          "There are 3 types. Heat-Smoking, Hot-Smoking, Cold-Smoking. Heat-Smoking is to smoke food with temparatur form 80 to 140 degrees.",
      },
      {
        title: "Smoke Goods",
        url: "/smokeGoods",
        body: "Card board, StainLess, Clay pot and so on.",
      },
      {
        title: "Getting Started",
        url: "/gettingStarted",
        body: "You can make smoke food with smoke tool kit for begginer.",
      },
    ],
  },
};

function App(): JSX.Element {
  // const [lang, setLang] = useState("ja");
  const textMap = textLangMap["ja"];
  return (
    <div>
      <IntroductionDiv>
        <TextDiv>
          {`This is article to show what's smoke foods and how to make smoke foods. Let's enjoy smoke food life!`}
        </TextDiv>
      </IntroductionDiv>
      <TopicsDiv id="topics">
        {textMap.topics.map((topic, idx) => {
          return (
            <TopicContents key={idx}>
              <TopicTitle>
                <Link to={topic.url}>{topic.title}</Link>
              </TopicTitle>
              <TopicBody>{`${topic.body}`}</TopicBody>
            </TopicContents>
          );
        })}
      </TopicsDiv>
    </div>
  );
}

export default App;
