import { Component } from "react";
import NavbarComponent from "../components/navbar";
import LeftContent from "../components/friend/leftContent";
import Card from "../components/friend/card";
class FriendPage extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <section>
        <NavbarComponent />
        <LeftContent />
        <main className="absolute top-16 right-0 py-6 px-5 w-9/12">
          <div className="">
            <h1 className="text-2xl font-bold">Friend Request</h1>
            <div className="grid grid-cols-3 mt-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold">People you might know</h1>
            <div className="grid grid-cols-3 mt-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </main>
      </section>
    );
  }
}
export default FriendPage;
