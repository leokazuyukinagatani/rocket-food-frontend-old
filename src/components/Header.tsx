import { Logo } from "./Logo";
import { Text } from "./Text";
import { TextInput } from "./TextInput";
import { MagnifyingGlass,SignOut } from "phosphor-react"
import { Button } from "./Button";

export interface HeaderProps{

}
export function Header() {
  return(
    <div className="flex gap-8 bg-blue-900 py-7 items-center justify-center">
      <Logo/>
      <button className="bg-transparente border-none">
        <Text>Meus favoritos</Text>
      </button>
      <div className="w-auto">
        <TextInput.Root>
          <TextInput.Icon>
            <MagnifyingGlass/>
          </TextInput.Icon>
          <TextInput.Input id="search" placeholder="Buscar pelas opções"/>
        </TextInput.Root>
      </div>
      <div className="w-auto">
        <Button>
          Meu pedido(0)
        </Button>
      </div>
      <button>
        <SignOut className="text-white" size={22}/>
      </button>
    </div>
  )
}