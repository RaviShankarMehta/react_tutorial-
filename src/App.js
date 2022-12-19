import logo from "./logo.svg";
import "./App.css";
import FunctionalComponent from "./youtubeTutorialPratices/FunctionalComponent";
import ClassComponent from "./youtubeTutorialPratices/ClassComponent";
import StateWithFunctinalComp from "./youtubeTutorialPratices/useStateWithFunctionalComp";
import StatewithClassComp from "./youtubeTutorialPratices/StateWithClassComp";
import PropsWithFunComp from "./youtubeTutorialPratices/PropsWithFunComp";
import React, { Fragment, useState } from "react";
import GetInputBoxValue from "./youtubeTutorialPratices/GetInputBoxvalue";
import Toggle from "./youtubeTutorialPratices/Toggle";
import BasicForm from "./youtubeTutorialPratices/Basicform";
import CondidtionRendering from "./youtubeTutorialPratices/ConditionalRendering";
import BasicFormValidation from "./youtubeTutorialPratices/BasicFormValidation";
import PassFunAsProps from "./youtubeTutorialPratices/PassFunAsProps";
import ConstructorLifeCycleMehtodClassComp from "./youtubeTutorialPratices/ConstructorLifeCycleMehtodClassComp";
import RenderLifeCycleMethodClassComp from "./youtubeTutorialPratices/RenderLifeCycleMehtodClassComp";
import ComponentDidMount from "./youtubeTutorialPratices/ComponentDidMount";
import ComponentDidUpdate from "./youtubeTutorialPratices/ComponentDidUpdate";
import ShouldComponentUpdate from "./youtubeTutorialPratices/ShoudComponentUpdate";
import ComponentWillUnmountParent from "./youtubeTutorialPratices/ComponentWillUnmountParent";
import LiftingUpStateParent from "./youtubeTutorialPratices/LiftingUpStateParent";
import UseEffect from "./youtubeTutorialPratices/UseEffect";
import UseEffectWithStateAndProps from "./youtubeTutorialPratices/UseEffectWithStateAndProps";
import ArrayListUsingMapFun from "./youtubeTutorialPratices/ArraylistUsingMapFun";
import NestedArraylistUsingMapFun from "./youtubeTutorialPratices/NestedArraylistUsingMapFun";
import ReuseCompLoop from "./youtubeTutorialPratices/ReuseCompLoop";
import FragmentInReact from "./youtubeTutorialPratices/FragmentInReact";
import PureClassCompUseState from "./youtubeTutorialPratices/PureClassCompUseState";
import UseMemoHook from "./youtubeTutorialPratices/UseMemoHook";
import CreateRefInClassComp from "./youtubeTutorialPratices/CreateRefInClassComp";
import UseRefInfunComp from "./youtubeTutorialPratices/UseRefInFunComp";
import ForwardRefParentFunComp from "./youtubeTutorialPratices/ForwardRefParentFunComp";
import ControlledComp from "./youtubeTutorialPratices/ControlledComp";
import UncontrolledComp from "./youtubeTutorialPratices/UncontrolledComp";
import HigherOrderFunction from "./youtubeTutorialPratices/HigherOrderFunction";
import ReactRouterDom from "./component/ReactRouterDom";
import Filter from "./component/Filter";
import GetMethod from "./fetchApi/GetMethod";
import PostMethod from "./fetchApi/PostMehtod";
import DeleteMehtod from "./fetchApi/DeleteMethod";
import UpdateMehtod from "./fetchApi/UpdateMehtod";
import PreviousState from "./youtubeTutorialPratices/PreviousState";
import PreviousProps from "./youtubeTutorialPratices/PreviousProps";
import StateWithObject from "./youtubeTutorialPratices/StateWithObject";
import Home from "./redux/container/HomeContainer";
function App() {
  // const [name,setName]=useState("Ravi")

  // passFunAsProps
  // function getDate(){
  //   alert('PassFunAsProps')
  // }

  return (
    <div className="App">
      {/* <h1>Components</h1> */}
      {/* <FunctionalComponent /> */}
      {/* <ClassComponent /> */}

      {/* <h1>useState With FunctionalComponent</h1>
    <StateWithFunctinalComp />
     */}
      {/* <h1>State with ClassComponent</h1>
    <StatewithClassComp /> */}

      {/* <h1>Props With FunctionalComponent</h1>
    <PropsWithFunComp name={name} /> */}
      {/* <button onClick={()=>setName("Munna")}>Click Me</button> */}
      {/* <PropsWithFunComp name={"vishal"} age={26} other={{address:"Katihar",MobileNo:"8051719168"}}/> */}
      {/* <PropsWithFunComp name={"Sumit"} age={26} other={{address:"Katihar",MobileNo:"8051719168"}}/> */}

      {/* <GetInputBoxValue/> */}

      {/* <Toggle/> */}

      {/* <BasicForm/> */}

      {/* <CondidtionRendering/> */}

      {/* <BasicFormValidation/> */}

      {/* <PassFunAsProps data={getDate}/> */}

      {/* <ConstructorLifeCycleMehtodClassComp /> */}
      {/* <h1>Render Life Cycle Method Class Comp</h1> */}
      {/* <RenderLifeCycleMethodClassComp name={name}/> */}
      {/* <button onClick={()=>setName("Mehta")}>UpdateRenderMehtod</button> */}
      {/* <RenderLifeCycleMethodClassComp /> */}

      {/* <ComponentDidMount/> */}

      {/* <ComponentDidUpdate /> */}

      {/* <ShouldComponentUpdate/> */}

      {/* <ComponentWillUnmountParent/> */}

      {/* React hooks */}
      {/* <UseEffect/> */}

      {/* <UseEffectWithStateAndProps /> */}

      {/* <ArrayListUsingMapFun/> */}

      {/* <NestedArraylistUsingMapFun /> */}

      {/* <ReuseCompLoop/> */}

      {/* <FragmentInReact/> */}

      {/* <LiftingUpStateParent/> Send data from parent to chile vise versa*/}

      {/* <PureClassCompUseState/> */}

      {/* <UseMemoHook/>? */}

      {/* <CreateRefInClassComp/> */}

      {/* <UseRefInfunComp/> */}

      {/* <ForwardRefParentFunComp /> */}

      {/* <ControlledComp/> */}

      {/* <UncontrolledComp/> */}
    {/* <HigherOrderFunction/> */}


    {/* React Router Dom */}
    {/* <ReactRouterDom/> */}
    {/* <Filter/> */}


    {/* fetch Apt */}
    {/* <GetMethod/> */}
    {/* <PostMethod/> */}
    {/* <DeleteMehtod/> */}
    {/* <UpdateMehtod/> */}

    {/* <PreviousState/> */}

    {/* <PreviousProps/> */}

    {/* <StateWithObject/> */}
    <Home/>
    </div>
      );
}

export default App;
