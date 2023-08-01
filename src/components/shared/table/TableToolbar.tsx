// @mui
import { Stack, InputAdornment, TextField, Button } from '@mui/material';
// components
import { Delete, Search } from '@mui/icons-material';

// ----------------------------------------------------------------------

type Props = {
  isFiltered: boolean;
  filterName: string;
  onFilterName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onResetFilter: VoidFunction;
};

export default function TableToolbar({
  isFiltered,
  filterName,
  onFilterName,
  onResetFilter,
}: Props) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      sx={{ px: 2.5, py: 3 }}
    >

     <TextField
        fullWidth
        value={filterName}
        onChange={onFilterName}
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      {isFiltered && (
        <Button
          color="error"
          sx={{ flexShrink: 0 }}
          onClick={onResetFilter}
          startIcon={<Delete />}
        >
          Clear
        </Button>
      )}
    </Stack>
  );
}
