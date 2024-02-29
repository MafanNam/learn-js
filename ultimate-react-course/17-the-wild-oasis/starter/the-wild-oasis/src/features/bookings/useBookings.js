import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getBookings} from "../../services/apiBookings.js";
import {useSearchParams} from "react-router-dom";
import {PAGE_SIZE} from "../../utils/constants.js";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filteredValue = searchParams.get('status');
  const filter = !filteredValue || filteredValue === 'all'
    ? null
    : {field: 'status', value: filteredValue, method: 'eq'};

  // SORT
  const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = {field, direction};

  // PAGINATION
  const page = !searchParams.get('page')
    ? 1
    : +searchParams.get('page');

  // QUERY
  const {
    isLoading,
    data: {data: bookings, count} = {},
    error
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({filter, sortBy, page}),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page + 1],
      queryFn: () => getBookings({filter, sortBy, page: page + 1}),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page - 1],
      queryFn: () => getBookings({filter, sortBy, page: page - 1}),
    });

  return {bookings, isLoading, error, count};
}