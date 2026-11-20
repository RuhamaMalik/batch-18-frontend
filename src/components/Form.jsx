import ModeSwitch from "./ModeSwitch";
import AuthForm from "./AuthForm";
import SidePanel from "./SidePanel";
import { useState } from "react";
import { content } from "./content";


const Form = () => {
      const [mode, setMode] = useState("login");
    
  return (
    <main className="page">
      <SidePanel {...content[mode]} />

      <section className="panel">
        <div className="box">
          <ModeSwitch mode={mode} onChange={setMode} />
          <AuthForm mode={mode} buttonText={content[mode].button} />
        </div>
      </section>
    </main>
  );
};

export default Form;
