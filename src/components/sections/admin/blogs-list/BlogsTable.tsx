import {
    Tab,
    Tabs,
    Card,
    Table,
    Button,
    Tooltip,
    Divider,
    TableBody,
    IconButton,
    TableContainer,
    styled,
} from '@mui/material';

import {
    useTable,
    getComparator,
    TableNoData,
    TableHeadCustom,
    TableSelectedAction,
    TablePaginationCustom,
} from '../../../shared/table';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { get_popular_post } from '../../../../state/response_constant';
import { PATH_ADMIN } from '../../../../state/path';
import TableToolbar from '../../../shared/table/TableToolbar';
import { Delete } from '@mui/icons-material';
import BlogsTableRow from './BlogsTableRow';
import ConfirmDialog from '../../../shared/confirm-dialog/ConfirmDialog';


const STATUS_OPTIONS = ['all', 'personal', 'design'];

const TABLE_HEAD = [
    { id: 'title', label: 'Title', align: 'left' },
    { id: 'type', label: 'Type', align: 'left' },
    { id: 'likes', label: 'Likes', align: 'center' },
    { id: 'view', label: 'Viewed', align: 'center' },
    { id: '' },
];


const _blogs: get_popular_post[] = [...Array(21)].map((_, index) => (
    {
        title: 'title' + index,
        _id: 'id' + index,
        selectedFile: 'selectedFile' + index,
        description: 'description' + index,
        type: 'personal',
        likes: ['', ''],
        count: Math.floor(Math.random() * 50),
        createdAt: new Date('2023-07-26T15:20:20.299+00:00'),
        updatedAt: new Date('2023-07-26T15:20:20.299+00:00')
    }
))

function BlogsTable() {

    const {
        dense,
        page,
        order,
        orderBy,
        rowsPerPage,
        setPage,
        //
        selected,
        setSelected,
        onSelectRow,
        onSelectAllRows,
        //
        onSort,
        onChangeDense,
        onChangePage,
        onChangeRowsPerPage,
    } = useTable();

    const navigate = useNavigate();

    const [tableData, setTableData] = useState(_blogs);
    const [filterName, setFilterName] = useState('');
    const [openConfirm, setOpenConfirm] = useState(false);
    const [filterStatus, setFilterStatus] = useState('all');

    const dataFiltered = applyFilter({
        inputData: tableData,
        comparator: getComparator(order, orderBy),
        filterName,
        filterStatus,
    });


    const dataInPage = dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const isFiltered = filterName !== '' || filterStatus !== 'all';

    const isNotFound =
        (!dataFiltered.length && !!filterName) ||
        (!dataFiltered.length && !!filterStatus);


    const handleOpenConfirm = () => {
        setOpenConfirm(true);
    };

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };

    const handleFilterStatus = (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
        setPage(0);
        setFilterStatus(newValue);
    };

    const handleFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPage(0);
        setFilterName(event.target.value);
    };

    const handleDeleteRow = (id: string) => {
        const deleteRow = tableData.filter((row) => row._id !== id);
        setSelected([]);
        setTableData(deleteRow);

        if (page > 0) {
            if (dataInPage.length < 2) {
                setPage(page - 1);
            }
        }
    };

    const handleDeleteRows = (selectedRows: string[]) => {
        const deleteRows = tableData.filter((row) => !selectedRows.includes(row.id));
        setSelected([]);
        setTableData(deleteRows);

        if (page > 0) {
            if (selectedRows.length === dataInPage.length) {
                setPage(page - 1);
            } else if (selectedRows.length === dataFiltered.length) {
                setPage(0);
            } else if (selectedRows.length > dataInPage.length) {
                const newPage = Math.ceil((tableData.length - selectedRows.length) / rowsPerPage) - 1;
                setPage(newPage);
            }
        }
    };

    const handleEditRow = (row: get_popular_post) => {
        navigate(PATH_ADMIN.editBlog(row._id), { state: row });
    };

    const handleResetFilter = () => {
        setFilterName('');
        setFilterStatus('all');
    };

    return (
        <StyledCard>
            <Tabs
                value={filterStatus}
                onChange={handleFilterStatus}
                sx={{
                    px: 2,
                    bgcolor: 'background.neutral',
                }}
            >
                {STATUS_OPTIONS.map((tab) => (
                    <Tab key={tab} label={tab} value={tab} />
                ))}
            </Tabs>
            <Divider />

            <TableToolbar
                isFiltered={isFiltered}
                filterName={filterName}
                onFilterName={handleFilterName}
                onResetFilter={handleResetFilter}
            />


            <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
                <TableSelectedAction
                    dense={dense}
                    numSelected={selected.length}
                    rowCount={tableData.length}
                    onSelectAllRows={(checked) =>
                        onSelectAllRows(
                            checked,
                            tableData.map((row) => row._id)
                        )
                    }
                    action={
                        <Tooltip title="Delete">
                            <IconButton color="primary" onClick={handleOpenConfirm}>
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    }
                />

                <Table size={dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}>
                    <TableHeadCustom
                        order={order}
                        orderBy={orderBy}
                        headLabel={TABLE_HEAD}
                        rowCount={tableData.length}
                        numSelected={selected.length}
                        onSort={onSort}
                        onSelectAllRows={(checked) =>
                            onSelectAllRows(
                                checked,
                                tableData.map((row) => row._id)
                            )
                        }
                    />

                    <TableBody>
                        {dataFiltered
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <BlogsTableRow
                                    key={row._id}
                                    row={row}
                                    selected={selected.includes(row._id)}
                                    onSelectRow={() => onSelectRow(row._id)}
                                    onDeleteRow={() => handleDeleteRow(row._id)}
                                    onEditRow={() => handleEditRow(row)}
                                />
                            ))}
                        <TableNoData isNotFound={isNotFound} />
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePaginationCustom
                count={dataFiltered.length}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={onChangePage}
                onRowsPerPageChange={onChangeRowsPerPage}
                //
                dense={dense}
                onChangeDense={onChangeDense}
            />

            <ConfirmDialog
                open={openConfirm}
                onClose={handleCloseConfirm}
                title="Delete"
                content={
                    <>
                        Are you sure want to delete <strong> {selected.length} </strong> items?
                    </>
                }
                action={
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                            handleDeleteRows(selected);
                            handleCloseConfirm();
                        }}
                    >
                        Delete
                    </Button>
                }
            />
        </StyledCard>
    )
}

export default BlogsTable

function applyFilter({
    inputData,
    comparator,
    filterName,
    filterStatus,
}: {
    inputData: get_popular_post[];
    comparator: (a: any, b: any) => number;
    filterName: string;
    filterStatus: string;
}) {
    const stabilizedThis = inputData.map((el, index) => [el, index] as const);

    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        console.log('sort by likes ', a, b)
        return a[1] - b[1];
    });

    inputData = stabilizedThis.map((el) => el[0]);

    if (filterName) {
        inputData = inputData.filter(
            (blog) => blog.title.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
        );
    }

    if (filterStatus !== 'all') {
        inputData = inputData.filter((blog) => blog.type === filterStatus);
    }

    return inputData;
}

const StyledCard = styled(Card)(() => ({
    boxShadow: '0 30px 60px -30px rgba(86.99999999999989,28.000000000000007,174,.19)',
    padding: '1rem',
    borderRadius: '15px',
}))