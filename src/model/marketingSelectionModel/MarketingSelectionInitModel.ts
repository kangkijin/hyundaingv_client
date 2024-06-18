import type MarketingSelectionModel from '../marketingSelectionModel/MarketingSelectionModel';
import type CodeMngMode from '../../model/common/CodeMngModel';
export default  interface MarketingSelectionInitModel {
    codeMngList : Array<CodeMngMode>,
    marketingSelectionList : Array<MarketingSelectionModel>,
}