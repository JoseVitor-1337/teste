import { useState } from "react"
import { Center, VStack } from "@chakra-ui/react"

import { CustomSelect, MultipleSelect } from "@lib/components/inputs"

export default function Select() {
  const [input, setInput] = useState("C")
  const [inputs, setInputs] = useState<string[]>(["A", "C"])

  const options = [
    { label: "Item A", value: "A" },
    { label: "Item B", value: "B" },
    { label: "Item C", value: "C" },
    { label: "Item D", value: "D" },
    { label: "Item E", value: "E" },
    { label: "Item F", value: "F" },
    { label: "Item G", value: "G" },
  ]

  return (
    <Center height="100vh">
      <VStack maxWidth="300px">
        <CustomSelect value={input} options={options} onChange={(value) => setInput(value)} />

        <MultipleSelect values={inputs} options={options} onChange={(value) => setInputs(value)} />
      </VStack>
    </Center>
  )
}
