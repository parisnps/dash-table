import * as R from 'ramda';

import { VisibleColumns } from 'dash-table/components/Table/props';

const getColNameAt = (c: any, i: number) => (Array.isArray(c.name) ? c.name[i] : '');

export default (
    columns: VisibleColumns,
    headerRows: number
): any[][] => {
    return R.map(
        headerRowIndex => columns.map(c =>
            R.isNil(c.name) && headerRowIndex === headerRows - 1
                ? c.id
                : getColNameAt(c, headerRowIndex)
        ),
        R.range(0, headerRows)
    );
};