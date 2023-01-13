import { useState } from "react"
import { Center, VStack } from "@chakra-ui/react"

import MiniPagination from "@lib/components/MiniPagination"
import Pagination from "@lib/components/Pagination"

export default function PaginationPage() {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  })

  function changePage(newPage: number) {
    setPagination({ ...pagination, page: newPage })
  }

  return (
    <Center height="100vh">
      <VStack maxWidth="500px">
        <MiniPagination
          currentPage={pagination.page}
          limit={pagination.limit}
          totalItems={1000}
          onChangePage={changePage}
        />

        <Pagination
          currentPage={pagination.page}
          limit={pagination.limit}
          totalItems={1000}
          onChangePage={changePage}
          onChangeLimitAndPage={setPagination}
        />
      </VStack>
    </Center>
  )
}
