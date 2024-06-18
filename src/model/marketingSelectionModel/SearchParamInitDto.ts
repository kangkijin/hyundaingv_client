import type MarketingSelectionSearchModel from '../marketingSelectionModel/MarketingSelectionSearchModel';
export default interface SearchParamInitDto {
    upcIdList : Array<string>,
    marketingSelectionSearch : MarketingSelectionSearchModel,
    searchInitFlag: boolean,
}