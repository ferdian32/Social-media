import { Component } from "react";
import SuggestionFriends from "../fragments/suggestionFriends.tsx";
import UserProfile from "../fragments/profile.tsx";
import Features from "../fragments/features.tsx";
export class Aside extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <aside className="fixed top-16 w-[19%] left-0 h-screen bg-white  px-3 py-4 hover:overflow-scroll">
        <UserProfile></UserProfile>
        <Features></Features>
        <SuggestionFriends></SuggestionFriends>
      </aside>
    );
  }
}
