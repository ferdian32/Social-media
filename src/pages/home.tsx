import { Fragment } from "react/jsx-runtime"
import NavbarComponent from "../components/navbar"
import { Aside } from "../components/aside"
export default function HomePage () {
  return (
    <Fragment>
      <NavbarComponent/>
      <Aside />
      <main>
        <div className="">
        </div>
      </main>
    </Fragment>
  )
}