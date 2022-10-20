import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { User, Envelope, Lock } from "phosphor-react"
import { Button } from "../components/Button";

export function SignIn() {
  return(
    <div className="w-screen h-screen flex-col bg-blue-900 flex items-center justify-center">
      <header className="flex flex-col items-center">
        <Heading size='lg' className='mt-4'>
          Crie sua conta
        </Heading>
      </header>
      <form action="" className="flex flex-col gap-8 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="name" className="flex flex-col gap-2">
          <Text size="md">Seu nome</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <User/>
            </TextInput.Icon>
            <TextInput.Input id="name" placeholder="Digite seu nome"/>
          </TextInput.Root>
        </label>
        <label htmlFor="email" className="flex flex-col gap-2">
          <Text size="md">Email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input id="email" placeholder="Digite seu nome" type="email"/>
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-2">
          <Text size="md">Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input id="password" placeholder="No mínimo 6 caracteres" type="password"/>
          </TextInput.Root>
        </label>
        <Button>
          Criar conta
        </Button>
        <Text  className="self-center font-popp font-medium hover:text-gray-400" asChild>
          <a href="#">Já tenho uma conta</a>
        </Text>
        
      </form>
    </div>
  )
}