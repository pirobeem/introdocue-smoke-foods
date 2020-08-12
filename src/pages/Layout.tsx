import React from "react";
import Header from "../organisms/Header";
import * as H from "history";

type Props = {
  history: H.History;
  children: React.Component;
};

export default class Layout extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
