
import Cripto from './components/Cripto'
import Responsive from './components/Responsive'
import { Button } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Breakpoints from './components/Breakpoints';
import Dashboard_1 from './components/Dashboard_1';

function App() {



  return (
    <div>
			<Breakpoints/>
			{/* <Responsive/> */}
      <Dashboard_1/>

    </div>
  )
}

export default App