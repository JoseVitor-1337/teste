import { useState } from "react"
import { Center, VStack } from "@chakra-ui/react"

import FiltersForm from "@lib/components/form/FiltersForm"
import { cpfMask } from "@lib/utils/masks"

export default function FiltersFormPage() {
  const [filters, setFilters] = useState({
    name: "",
    cpf_number: "",
    sex: "",
  })

  const fields = [
    { type: "input", name: "name", label: "Nome" },
    { type: "maskedInput", name: "cpf_number", label: "Cpf", mask: cpfMask },
    {
      type: "select",
      name: "sex",
      label: "Sexo",
      value: "",
      options: [
        { label: "Selecione um tipo", value: "" },
        { label: "Masculino", value: "M" },
        { label: "Feminino", value: "F" },
      ],
    },
  ]

  return (
    <Center height="100vh">
      <VStack maxWidth="500px">
        <FiltersForm
          fields={fields}
          title="Filtrando"
          filters={filters}
          initialFilters={{
            name: "",
            cpf_number: "",
            sex: "",
          }}
          onSubmit={setFilters}
        />
      </VStack>
    </Center>
  )
}
