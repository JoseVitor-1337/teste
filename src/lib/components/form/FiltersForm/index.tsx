import { FC, memo } from "react"
import { ButtonProps } from "@chakra-ui/react"

import FiltersFormComponent from "./Component"
import FiltersFormProvider from "./context/FiltersFormContext/Provider"
import { IFiltersFormFields } from "./types"

type Props = {
  view?: "Drawer" | "Modal"
  closeWhenSubmit?: boolean
  buttonProps?: ButtonProps
  title: string
  subTitle?: string
  initialFilters: object
  filters: object
  fields: IFiltersFormFields[]
  onSubmit: (filters: any) => void
}

const FiltersForm: FC<Props> = (props) => {
  const { buttonProps, view, fields, filters, initialFilters, onSubmit, subTitle, title, closeWhenSubmit } = props

  return (
    <FiltersFormProvider
      closeWhenSubmit={closeWhenSubmit}
      title={title}
      subTitle={subTitle}
      filters={filters}
      initialFilters={initialFilters}
      onSubmit={onSubmit}
    >
      <FiltersFormComponent view={view} fields={fields} buttonProps={buttonProps} />
    </FiltersFormProvider>
  )
}

export default memo(FiltersForm)
