export default {
  mockServer: "http://127.0.0.1:3109",
  baseURL: "http://192.168.1.4:3000/api",
  // baseURL: "http://192.168.1.9:9000/api/v1",
  mocks: {
    period: "http://127.0.0.1:3110/periods",
    fiscalYear: "http://127.0.0.1:3100/fiscal-years",
    customer: "http://127.0.0.1:3103/customers",
    account: "http://127.0.0.1:3105/accounts",
    vendor: "http://localhost:3113/vendors",
    accountPayable: "http://127.0.0.1:3100/account_payables",
    accountReceivable: "http://127.0.0.1:3100/account_recivables",
    fixedAssetCategory: "http://127.0.0.1:3105/fixed-asset-categories",
    trialBalance: "http://127.0.0.1:3114/trial-balances",
    payment: "http://127.0.0.1:3109/payments",
    tax: "http://127.0.0.1:3114/taxes",
    generalJournal: "http://127.0.0.1:3100/general-journals",
    generalLedger: "http://127.0.0.1:3108/general-ledgers/",
    fixedAsset: "http://127.0.0.1:3105/fixed-assets",
    invoice: "http://127.0.0.1:3109/invoices",
    permissions: "http://127.0.0.1:3100/users/1/permissions/",
    itemCategories: "http://localhost:3124/item-categories",
    items: "http://127.0.0.1:3129/items",
    // Inventory
    UOM: "http://127.0.0.1:3140/uom",
    UOMConversions: "http://127.0.0.1:3134/uom-conversions/",
    EntryType: "http://127.0.0.1:3122/entry-types/",
    Warehouse: "http://127.0.0.1:3141/warehouse",
    Bin: "http://127.0.0.1:3121/bins",
    ItemAdjJournal: "http://127.0.0.1:3141/item-adjcent-journal",
    ItemAvailability: "http://127.0.0.1:3121/item-availability",
    ItemReclassificationJournal:
      "http://127.0.0.1:3123/item-reclassification-journal",
    ItemAvailabilityByLocation:
      "http://127.0.0.1:3122/item-availability-by-location",
    StockMovement: "http://127.0.0.1:3130/stock-movement",
    StockMovementByLocation: "http://127.0.0.1:3141/stock-movement-by-location",
    PhysicalInventoryJournal:
      "http://127.0.0.1:3125/physical-inverntory-journal",
    PurchaseReurn: "http://127.0.0.1:3131/purchase-returns",
    SalesReturn: "http://127.0.0.1:3134/sales-return",
    goodReceivingNotes: "http://127.0.0.1:3123/grns",
    TransferOrderReceive: "http://127.0.0.1:3138/transfer-order-receives",
    storeRequisitions: "http://127.0.0.1:3128/srs",
    storeIssueVouchers: "http://127.0.0.1:3136/sivs",
    transferOrderIssues: "http://127.0.0.1:3132/transfer-order-issues",
    customersSales: "http://127.0.0.1:3137/customers-sales",
    Vendors: "http://127.0.0.1:3119/vendor",
    PurchaseRequisition: "http://127.0.0.1:3117/purchase-requisitions",
    PurchaseOrders: "http://127.0.0.1:3116/purchase-orders/",
    Purchaser: "http://127.0.0.1:3118/purchasers/",
    VendorTypes: "http://127.0.0.1:3120/vendor-types/",
    salesPerson: "http://127.0.0.1:3138/sales-person",
    salesRegion: "http://127.0.0.1:3118/sales-region",
    salesQuotes: "http://127.0.0.1:3118/sales-quote",
    salesOrders: "http://127.0.0.1:3120/sales-orders",
  },
};

export const mainEndpoint = "https://sparta-qa.herokuapp.com/api/v1";
