import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const HeaderDiv = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  align-items: center;
`;

const HeaderTitleDiv = styled.div`
   vertical- align: middle;
   padding: 5px;
   font-size: 35px;
   color: white;
   font-weight: bold;
`;

const TopicsDiv = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  margin: 5px;
  flex-wrap: wrap;
`;

const TopicContents = styled.div`
  width: 150px;
  height: 100px;
  border: solid 1px gray;
  border-radius: 10px;
  margin: 2px;
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
        body: "There are 3 types. Heat-Smoking, Hot-Smoking, Cold-Smoking",
      },
      { title: "Smoke Goods", body: "Card board, silverware and so on." },
    ],
  },
  en: {
    title: "Introduce Smoked Foods",
    topics: [
      {
        title: "Smoke Type",
        body: "There are 3 types. Heat-Smoking, Hot-Smoking, Cold-Smoking",
      },
      { title: "Smoke Goods", body: "Card board, silverware and so on." },
    ],
  },
};

function App() {
  const [lang, setLang] = useState("ja");
  const textMap = textLangMap["ja"];
  return (
    <div>
      <HeaderDiv>
        <HeaderTitleDiv>{textMap.title}</HeaderTitleDiv>
      </HeaderDiv>
      <TopicsDiv>
        {textMap.topics.map((topic, idx) => {
          return (
            <TopicContents key={idx}>
              <TopicTitle>{topic.title}</TopicTitle>
              <TopicBody>{topic.body}</TopicBody>
            </TopicContents>
          );
        })}
      </TopicsDiv>
    </div>
  );
}

export default App;
