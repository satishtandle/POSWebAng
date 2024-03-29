export class SalesTransactionCheckoutItem 
{
    public ticketDetailId: number = 0;
    public tktTransactionID: number = 0;
    public salesItemDesc: string = '';
    public salesItemUID: number = 0;
    public salesCategoryUID: number = 0;
    public quantity: number = 0;
    public unitPrice: number = 0;
    public salesTaxPct: number = 0;
    public envrnmtlTaxPct: number = 0;
    public noOfTags: number = 0;
    public vendorCouponDiscountPct: number = 0;
    public discountAmount: number = 0;
    public exchangeCouponDiscountPct: number = 0;
    public couponLineItemDollarAmount: number = 0;
    public fCCouponLineItemDollarAmount: number = 0;
    public lineItemTaxAmount: number = 0;
    public lineItemEnvTaxAmount: number = 0;
    public lineItemDollarDisplayAmount: number = 0;
    public dtlMaintTimestamp: Date = {} as Date;
    public dtlMaintUserId: string = "";
    public isMiscellaneous: number = 0;
    public locationUID: number = 0;
    public facilityUID: number = 0;
    public departmentUID: number = 0;
    public businessFunctionUID: number = 0;
    public deptName: string = '';
    public custInfoReq: boolean = false;
    public applyCouponsAfterTax: boolean = false;
    public allowPartPay: boolean = false;
    public allowSaveTkt: boolean = false;
    public instruction: string = "";
    public addlInstruction: string = "";
    public openCashDrwForTips: boolean = false;
    public allowTips: boolean = false;
    public srvdByAssociateVal: number = 0;
    public srvdByAssociateText: string = "";
    public businessFuncCode: string = "";
    public splInstUID: number = 0;
    public splInstDesc: string = "";
    public splInstOthRsn: string = "";
    public itemSaved: boolean = false;
    public dCCouponLineItemDollarAmount: number = 0;
    public dCDiscountAmount: number = 0;
    public dCLineItemDollarDisplayAmount: number = 0;
    public dCLineItemTaxAmount: number = 0;
    public dCUnitPrice: number = 0;
    public lineItmKatsaCpnAmt: number = 0;
    public fCLineItmKatsaCpnAmt: number = 0;
    public fCLineItemEnvTaxAmount: number = 0;

    public exchCpnAmountDC: number = 0;
    public vndCpnAmountDC: number = 0;
    public exchCpnAmountNDC: number = 0;
    public vndCpnAmountNDC: number = 0;
    //public saleItemTotal: number = 0;
}