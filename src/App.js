import logo from "./logo.svg";
import "./App.css";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
import StateWithFunctinalComp from "./useStateWithFunctionalComp";
import StatewithClassComp from "./StateWithClassComp";
import PropsWithFunComp from "./PropsWithFunComp";
import React, { Fragment, useState } from "react";
import GetInputBoxValue from "./GetInputBoxvalue";
import Toggle from "./Toggle";
import BasicForm from "./Basicform";
import CondidtionRendering from "./ConditionalRendering";
import BasicFormValidation from "./BasicFormValidation";
import PassFunAsProps from "./PassFunAsProps";
import ConstructorLifeCycleMehtodClassComp from "./ConstructorLifeCycleMehtodClassComp";
import RenderLifeCycleMethodClassComp from "./RenderLifeCycleMehtodClassComp";
import ComponentDidMount from "./ComponentDidMount";
import ComponentDidUpdate from "./ComponentDidUpdate";
import ShouldComponentUpdate from "./ShoudComponentUpdate";
import ComponentWillUnmountParent from "./ComponentWillUnmountParent";
import UseEffect from "./UseEffect";
import UseEffectWithStateAndProps from "./UseEffectWithStateAndProps";
import ArrayListUsingMapFun from "./ArraylistUsingMapFun";
import NestedArraylistUsingMapFun from "./NestedArraylistUsingMapFun";
import ReuseCompLoop from "./ReuseCompLoop";
import FragmentInReact from "./FragmentInReact";
import LiftingUpStateParent from "./LiftingUpStateParent";
import PureClassCompUseState from "./PureClassCompUseState";
import UseMemoHook from "./UseMemoHook";
import CreateRefInClassComp from "./CreateRefInClassComp";
import UseRefInfunComp from "./UseRefInFunComp";
import ForwardRefParentFunComp from "./ForwardRefParentFunComp";
import ControlledComp from "./ControlledComp";
import UncontrolledComp from "./UncontrolledComp";
import HigherOrderFunction from "./HigherOrderFunction";
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
    <HigherOrderFunction/>
    </div>
  );
}

export default App;
