<template>
    <div class="ag-head">
        <div class="page-size">
            <select id="paginationPageSize" @change="handlePaginationPageSizeChange" v-model="paginationPageSizeSelect">
                <option :value="rowData.length" v-if="isShowAll && paginationClientFlag">전체</option>
                <option :value="totalRecord" v-if="isShowAll && !paginationClientFlag">전체</option>
                <option v-for="(item, index) in paginationPageSizeSelector" :key="index" :value="item"
                    :selected="item == paginationPageSizeSelect">{{ item }}건씩 보기</option>
            </select>
            <div class="total-record">
                <span v-if="isShowAll && paginationClientFlag">총 {{ rowData.length }}건</span>
                <span v-if="isShowAll && !paginationClientFlag">총 {{ totalRecord }}건</span>
            </div>
        </div>
        <div class="button-list">
            <slot name="button">
            </slot>
        </div>
    </div>
    <AgGridVue id="myGrid" ref="agGrid" style="width: 100%; height: 100%;" class="ag-theme-alpine" :rowData="rowData"
        :columnDefs="columnDefs" :pagination="true" :paginationPageSize="paginationPageSize"
        :paginationPageSizeSelector="paginationPageSizeSelector" :gridOptions="gridOptions" @grid-ready="onGridReady"
        @selectionChanged="onSelectionChanged" @first-data-rendered="onFirstDataRendered" @rowClicked="rowClick">
    </AgGridVue>
    <div class="pagination_wrap">
        <a href="javascript:void(0);" class="func first" @click="gotoFisrtPage">First page</a>
        <a href="javascript:void(0);" class="func back" @click="gotoPrePage">back page</a>
        <a href="javascript:void(0);" :class="{ 'active': item == targetPage }" v-for="(item, index) in pagesSize"
            @click="gotoPage(item)">{{ item }}</a>
        <a href="javascript:void(0);" class="func next" @click="gotoNextPage">Next page</a>
        <a href="javascript:void(0);" class="func last" @click="gotoLastPage">Last page</a>
    </div>
</template>
<script lag="ts">
import { AgGridVue } from "ag-grid-vue3";
import { ref, defineEmits } from "vue";
import { PAGINATION_PAGE_SIZE, PAGINATION_PAGE_SIZE_SELECTOR } from '../../../constants/screen.const';
export default {
    props: {
        modelValue: [],
        rowData: [],
        columnDefs: [],
        pagination: Boolean,
        paginationPageSize: {
            type: Number,
            default: PAGINATION_PAGE_SIZE
        },
        paginationPageSizeSelector: {
            type: Array,
            default: PAGINATION_PAGE_SIZE_SELECTOR
        },
        newGridOptions: {},
        isShow: {
            type: Boolean,
            default: false
        },
        checkSize: {
            type: Boolean,
            default: false
        },
        keySelected: [],
        isShowAll: {
            type: Boolean,
            default: true
        },
        paginationClientFlag: {
            type: Boolean,
            default: true
        },
        totalRecord: Number,
        customPagination: null,
    },
    components: {
        AgGridVue,
    },
    beforeMount() {
        this.paginationPageSizeSelect = this.paginationPageSize;
    },
    mounted() {
        if (this.newGridOptions) {
            this.gridOptions = this.newGridOptions;
        }
        this.endDisplayedRow = this.paginationPageSize;
        this.rowDataForPageSize = this.rowData
    }
    ,
    setup(props) {
        const gridApi = ref();
        const onGridReady = (params) => {
            gridApi.value = params.api;
        }
        const onBtExport = () => {
            gridApi.value.exportDataAsExcel();
        };

        const gridOptions = {
            defaultColDef: {
                flex: 1,
                minWidth: 50,
                resizable: true,
                suppressMovable: true 
            },
            rowSelection: 'multiple',
            suppressRowClickSelection: true,
            domLayout: 'autoHeight',
            alwaysShowHorizontalScroll: true
        };

        return {
            onGridReady,
            onBtExport,
            gridOptions,
            gridApi

        }
    },
    computed: {
        pagesSize() {
            let rowCount;
            let totalpage = 0;
            if (this.paginationClientFlag) {
                if (this.checkSize) {
                    rowCount = this.rowDataForPageSize.length;
                }
                else {
                    rowCount = this.rowData.length;
                }

            } else {
                rowCount = this.totalRecord ? this.totalRecord : 0;
            }

            totalpage = Math.ceil(rowCount / this.paginationPageSizeSelect);
            let size = [1];
            for (let i = 2; i <= totalpage; i++) {
                size.push(i);
            }
            return size;
        },
    },
    created() {
        this.columnDefs.forEach(column => {
            if (column.field !== undefined) {
                column.valueGetter = function(params) {
                    const fieldParts = column.field.split('.');
                    let value = params.data;
                    for (const part of fieldParts) {
                        if (value && value.hasOwnProperty(part)) {
                            value = value[part];
                            if (!value) {
                                value = ' - '
                            }
                        } else {
                            value = ' - ';
                        }
                    }
                    return value;
                };
                
                column.cellStyle = params => {
                    const fieldParts = column.field.split('.');
                    let value = params.data;
                    for (const part of fieldParts) {
                        if (value && value.hasOwnProperty(part)) {
                            value = value[part];
                            if (!value) {
                                value = {
                                    'text-align': 'center'
                                }
                            }
                        } else {
                            value = {
                                'text-align': 'center'
                            };
                        }
                    }
                    return value;
                };
            }
        });
    },
    data() {
        return {
            rowCount: 0,
            paginationPageSizeSelect: null,
            targetPage: 1,
            firstDisplayedRow: 1,
            endDisplayedRow: 1,
            rowDataForPageSize: [],
            selectedRows: [],
        }
    }, methods: {
        addRowData(data) {
            this.gridApi.setGridOption('rowData', data);
        },
        rowClick(params) {
            this.$emit('rowClick', params.data)
        },
        onFirstDataRendered(params) {
            const nodesToSelect = [];
            params.api.forEachNode((node) => {
                if (node.data) {
                    let checkSelected = 0;
                    if (this.keySelected) {
                        this.keySelected.forEach(item => {
                            if (item.value.includes(node.data[item.field])) {
                                checkSelected++;
                            }
                        });

                        if (checkSelected == this.keySelected.length) {
                            nodesToSelect.push(node);
                        }
                    }
                }
            });
            params.api.setNodesSelected({ nodes: nodesToSelect, newValue: true });
        },
        setHeightGrid() {
            const height = this.$refs.agGrid.api.getRenderedNodes()[0].rowHeight;
            this.$refs.agGrid.api.setGridOption('paginationPageSize', this.paginationPageSizeSelect);
            this.$refs.agGrid.api.setGridOption('domLayout', 'normal');
            this.$refs.agGrid.$el.style.height = `${height * 11}px`;
            if (!this.paginationClientFlag) {
                const rowCount = this.rowData.length;
                if (rowCount < this.paginationPageSizeSelect) {
                    const height = this.$refs.agGrid.api.getRenderedNodes()[0].rowHeight;
                    this.$refs.agGrid.api.setGridOption('paginationPageSize', this.paginationPageSizeSelect);
                    this.$refs.agGrid.api.setGridOption('domLayout', 'normal');
                    this.$refs.agGrid.$el.style.height = `${height * (rowCount + 1)}px`;
                }
            }
        },
        setSeletedRows() {

            const nodesToSelect = [];
            const params = this.$refs.agGrid;
            params.api.forEachNode((node) => {
                if (node.data) {
                    let checkSelected = 0;
                    if (this.keySelected) {
                        this.keySelected.forEach(item => {
                            if (item.value.includes(node.data[item.field])) {
                                checkSelected++;
                            }
                        });

                        if (checkSelected == this.keySelected.length) {
                            nodesToSelect.push(node);
                        }
                    }
                    if (this.selectedRows.length > 0) {
                        this.selectedRows.forEach(item => {
                            if (item.rowNum == node.data.rowNum) {
                                nodesToSelect.push(node);
                            }
                        })

                    }
                }
            });
            params.api.setNodesSelected({ nodes: nodesToSelect, newValue: true });
        }
        ,
        async handlePaginationPageSizeChange() {
            this.targetPage = 1;

            const lastDisplayed = this.$refs.agGrid.api.getLastDisplayedRow()
            if (this.paginationClientFlag) {

                this.setHeightGrid();
            }
            else {

                if (typeof this.customPagination === 'function') {

                    await this.customPagination(this.targetPage, this.paginationPageSizeSelect);
                    this.setHeightGrid();
                }
            }
        },
        onSelectionChanged(event) {
            const selectedRows = this.$refs.agGrid.api.getSelectedRows();
            if (!this.paginationClientFlag) {

                if (this.selectedRows.length == 0) {
                    this.selectedRows = selectedRows;
                }
                else {
                    if (selectedRows.length > 0) {
                        const newselectedRows = [...this.selectedRows, ...selectedRows]
                        this.selectedRows = [...new Map(newselectedRows.map(item => [item.rowNum, item])).values()]
                    }
                }
            } else {
                this.selectedRows = selectedRows;
            }
            this.$emit('update:modelValue', this.selectedRows);
        },
        countRowOfPage() {
            this.firstDisplayedRow = this.$refs.agGrid.api.getFirstDisplayedRow() + 1;
            const endRowCount = this.firstDisplayedRow + this.paginationPageSizeSelect - 1;
            if (endRowCount < this.rowData.length) {
                this.endDisplayedRow = endRowCount;
            } else {
                this.endDisplayedRow = this.rowData.length;
            }
            const rowCount = this.endDisplayedRow - this.firstDisplayedRow;
            if (rowCount < this.paginationPageSize) {
                const height = this.$refs.agGrid.api.getRenderedNodes()[0].rowHeight;
                this.$refs.agGrid.api.setGridOption('paginationPageSize', this.paginationPageSizeSelect);
                this.$refs.agGrid.api.setGridOption('domLayout', 'normal');
                this.$refs.agGrid.$el.style.height = `${height * (rowCount + 2)}px`;
            }
        },
        async gotoPage(pageNumber) {
            if (this.paginationClientFlag) {
                this.$refs.agGrid.api.paginationGoToPage(pageNumber - 1);
                this.targetPage = pageNumber;
                this.rowCount = this.$refs.agGrid.api.paginationGetRowCount();
                this.countRowOfPage();
            } else {
                if (typeof this.customPagination === 'function') {
                    await this.customPagination(pageNumber, this.paginationPageSizeSelect);
                    this.setHeightGrid();
                    this.targetPage = pageNumber;
                    this.setSeletedRows();
                }
            }
        },
        async gotoFisrtPage() {
            this.targetPage = 1;
            if (this.paginationClientFlag) {

                this.$refs.agGrid.api.paginationGoToFirstPage();

                this.countRowOfPage();
            }
            else {
                if (typeof this.customPagination === 'function') {
                    await this.customPagination(this.targetPage, this.paginationPageSizeSelect);
                    this.setHeightGrid();
                    this.setSeletedRows();
                }
            }
        },

        async gotoPrePage() {
            const newTarget = this.targetPage - 1;
            this.targetPage = newTarget > 0 ? newTarget : 1;
            if (this.paginationClientFlag) {
                this.$refs.agGrid.api.paginationGoToPreviousPage(this.targetPage);
                this.countRowOfPage();
            }
            else {
                if (typeof this.customPagination === 'function') {
                    await this.customPagination(this.targetPage, this.paginationPageSizeSelect);
                    this.setHeightGrid();
                    this.setSeletedRows();
                }

            }
        },
        async gotoNextPage() {
            const newTarget = this.targetPage + 1;
            this.targetPage = newTarget <= this.pagesSize[this.pagesSize.length - 1] ? newTarget : this.pagesSize[this.pagesSize.length - 1]
            if (this.paginationClientFlag) {

                this.$refs.agGrid.api.paginationGoToNextPage(this.targetPage);
                this.countRowOfPage();
            }
            else {
                if (typeof this.customPagination === 'function') {
                    await this.customPagination(this.targetPage, this.paginationPageSizeSelect);
                    this.setHeightGrid();
                    this.setSeletedRows();
                }
            }
        },
        async gotoLastPage() {
            this.targetPage = this.pagesSize[this.pagesSize.length - 1];
            if (this.paginationClientFlag) {
                this.$refs.agGrid.api.paginationGoToLastPage();
                this.countRowOfPage();
            }
            else {
                if (typeof this.customPagination === 'function') {
                    await this.customPagination(this.targetPage, this.paginationPageSizeSelect);
                    this.setHeightGrid();
                    this.setSeletedRows();
                }
            }
        }
    }

}
</script>

<style>
.ag-theme-alpine > .ag-root-wrapper {
    border: none;
}
.ag-ltr .ag-cell,
.ag-header-cell {
  border-left: 0.5px #dddddd solid;
  background: #fff;
}
.ag-ltr .ag-cell {
    color: #222222;
}
.ag-header-cell:last-child {
  border-right: none !important;
}
.ag-header-cell:first-child {
  border-left: none !important;
}

.ag-ltr .ag-cell,
.ag-ltr .ag-cell * {
  font-size: 16px;
  font-weight: 500;
}
.ag-ltr .ag-cell:first-child {
  border-left: none !important;
}
.ag-ltr .ag-cell:last-child {
  border-right: none !important;
}
.ag-header-cell-label {
    align-items: center;
}
.ag-header-cell {
  border-bottom: 0.5px #000000 solid;
  border-top: 0.5px #000000 solid;
}
.ag-header-cell, .ag-header-cell * {
  color: #898d9c;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
}

.ag-header-cell-resize {
  width: 4px;
  background-color: none;
  right: -2px !important;
}

.ag-header-cell-resize::after {
    content: '';
    display: none;
}
.ag-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}

.ag-head .button-list {
    display: flex;
    justify-content: flex-end;
}

.ag-head .button-list>* {
    margin-left: 5px;
}

.ag-head .page-size {
    display: flex;
}

.ag-head .page-size>* {
    margin-right: 5px;
}

.page-size .total-record {
    display: flex;
    align-items: center;
}

.ag-paging-panel {
    display: none !important;
}

.ag-center-cols-viewport {
    min-height: unset !important;
}

.height-grid {
    min-height: 1310px !important
}
</style>
