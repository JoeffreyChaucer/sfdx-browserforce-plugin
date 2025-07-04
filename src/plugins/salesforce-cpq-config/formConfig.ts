export type FormConfig = {
  [key: string]: {
    label: string;
    component: string; // 'tab'
    id: string;
    properties: {
      [key: string]: {
        label: string;
        component: string; // 'input' | 'select'
        type: string; // 'string' | 'boolean' | 'number'
        name: string;
        immediatelySave?: boolean;
      };
    };
  };
};

export const formConfig: FormConfig = {
  documents: {
    label: 'Documents',
    component: 'tab',
    id: 'page:form:pb:j_id71_lbl',
    properties: {
      documentFolder: {
        label: 'Document Folder',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:j_id72:j_id73:j_id75',
      },
      hideDocumentName: {
        label: 'Hide Document Name',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id72:j_id84',
      },
      fullPagePreview: {
        label: 'Full Page Preview',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id72:j_id88',
      },
      excludeHiddenLinesInGroupTotals: {
        label: 'Exclude Hidden Lines In Group Totals',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id72:j_id90',
      },
      attachmentTarget: {
        label: 'Attachment Target',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:j_id72:j_id78:j_id80',
      },
      postToFeed: {
        label: 'Post to Feed?',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id72:j_id85:j_id87',
      },
      enableMultiLanguageTranslations: {
        label: 'Enable Multi-Language Translations',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id72:j_id89',
      },
    },
  },
  groups: {
    label: 'Groups',
    component: 'tab',
    id: 'page:form:pb:j_id105_lbl',
    properties: {
      solutionGroupsEnabled: {
        label: 'Solution Groups Enabled',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:groupSettings:j_id106',
      },
      object: {
        label: 'Object',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:groupSettings:j_id109:j_id111',
      },
      nameField: {
        label: 'Name Field',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:groupSettings:j_id114:j_id116',
      },
      descriptionField: {
        label: 'Description Field',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:groupSettings:j_id120:j_id122',
      },
      requireGroupName: {
        label: 'Require Group Name',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:groupSettings:j_id108',
      },
    },
  },
  lineEditor: {
    label: 'Line Editor',
    component: 'tab',
    id: 'page:form:pb:j_id125_lbl',
    properties: {
      hideRenewedAssetsWhenEditing: {
        label: 'Hide Renewed Assets When Editing',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id126:j_id127:j_id129',
      },
      visualizeProductHierarchy: {
        label: 'Visualize Product Hierarchy',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id126:j_id135',
      },
      preserveBundleStructure: {
        label: 'Preserve Bundle Structure',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id126:j_id137',
      },
      keepBundleTogether: {
        label: 'Keep Bundle Together',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id126:j_id139',
      },
      totalsField: {
        label: 'Totals Field',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:j_id126:j_id141:j_id143',
      },
      lineSubtotalsTotalField: {
        label: 'Line Subtotals Total Field',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:j_id126:j_id153:j_id155',
      },
      largeQuoteThreshold: {
        label: 'Large Quote Threshold',
        component: 'input',
        type: 'number',
        name: 'page:form:pb:j_id126:j_id160',
      },
      quoteBatchSize: {
        label: 'Quote Batch Size',
        component: 'input',
        type: 'number',
        name: 'page:form:pb:j_id126:j_id162',
      },
      enableExpandCollapseBundles: {
        label: 'Enable Expand/Collapse Bundles',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id126:j_id164',
      },
      defaultBundleSetting: {
        label: 'Default Bundle Setting',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:j_id126:j_id166:j_id168',
      },
      actionsColumnPlacement: {
        label: 'Actions Column Placement',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:j_id126:j_id130:j_id132',
      },
      enableMultiLineDelete: {
        label: 'Enable Multi Line Delete',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id126:j_id136',
      },
      productConfigurationInitializer: {
        label: 'Product Configuration Initializer',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id126:j_id138',
      },
      enableAssetUpgrades: {
        label: 'Enable Asset Upgrades',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id126:j_id140',
      },
      groupSubtotalsField: {
        label: 'Group Subtotals Field',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:j_id126:j_id147:j_id149',
      },
      wrapButtons: {
        label: 'Wrap Buttons',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id126:j_id159',
      },
      validateLargeQuotes: {
        label: 'Validate Large Quotes',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id126:j_id161',
      },
      enableCompactMode: {
        label: 'Enable Compact Mode',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id126:j_id163',
      },
      enableLargeQuoteExperience: {
        label: 'Enable Large Quote Experience',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id126:j_id165',
      },
      enableColumnResizing: {
        label: 'Enable Column Resizing',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id126:j_id171',
      },
    },
  },
  plugins: {
    label: 'Plugins',
    component: 'tab',
    id: 'page:form:pb:j_id172_lbl',
    properties: {
      legacyPageSecurityPlugin: {
        label: 'Legacy Page Security Plugin',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id173:j_id174',
      },
      electronicSignaturePlugin: {
        label: 'Electronic Signature Plugin',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id173:j_id175',
      },
      billingPlugin: {
        label: 'Billing Plugin',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id173:j_id176',
      },
      productSearchPlugin: {
        label: 'Product Search Plugin',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id173:j_id177',
      },
      recommendedProductsPlugin: {
        label: 'Recommended Products Plugin',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id173:j_id178',
      },
      legacyQuoteCalculatorPlugin: {
        label: 'Legacy Quote Calculator Plugin',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id173:j_id178',
      },
      documentStorePlugin: {
        label: 'Document Store Plugin',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id173:j_id180',
      },
      quoteCalculatorPlugin: {
        label: 'Quote Calculator Plugin',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id173:j_id181',
      },
      orderManagementPlugin: {
        label: 'Order Management Plugin',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id173:j_id182',
      },
      qleCustomActionPlugin: {
        label: 'QLE Custom Action Plugin',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id173:j_id183',
      },
    },
  },
  pricingAndCalculation: {
    label: 'Pricing and Calculation',
    component: 'tab',
    id: 'page:form:pb:j_id184_lbl',
    properties: {
      currencySymbol: {
        label: 'Currency Symbol',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id185:j_id186',
      },
      unitPriceScale: {
        label: 'Unit Price Scale',
        component: 'input',
        type: 'number',
        name: 'page:form:pb:j_id185:j_id188',
      },
      enableQuickCalculate: {
        label: 'Enable Quick Calculate',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id185:j_id190',
      },
      allowNonConsecutiveCustomSegments: {
        label: 'Allow Non-Consecutive Custom Segments',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id185:j_id192',
      },
      enablePricingGuidance: {
        label: 'Enable Pricing Guidance',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id185:j_id194',
      },
      useLegacyCalculator: {
        label: 'Use Legacy Calculator',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:calculatorOptions:j_id198',
      },
      useInactivePrices: {
        label: 'Use Inactive Prices',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id185:j_id187',
      },
      calculateImmediately: {
        label: 'Calculate Immediately',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id185:j_id189',
      },
      disableBackgroundCalculationRefresh: {
        label: 'Disable Background Calculation Refresh',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id185:j_id191',
      },
      enableUsageBasedPricing: {
        label: 'Enable Usage Based Pricing',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id185:j_id193',
        immediatelySave: true,
      },
      quoteLineEditsForUsageBasedPricing: {
        label: 'Quote Line Edits for Usage Based Pricing',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id185:j_id196',
      },
      hideUncalculatedQuoteWarning: {
        label: 'Hide Uncalculated Quote Warning',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id185:j_id195',
      },
      useIntegrationUserForCalculations: {
        label: 'Use Integration User for Calculations',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id185:j_id197',
      },
    },
  },
  subscriptionsAndRenewals: {
    label: 'Subscriptions and Renewals',
    component: 'tab',
    id: 'page:form:pb:j_id206_lbl',
    properties: {
      renewalModel: {
        label: 'Renewal Model',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id207:j_id209',
      },
      disableAddSubscriptions: {
        label: 'Disable Add Subscriptions',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id211',
      },
      allowRenewalQuotesWithoutAssets: {
        label: 'Allow Renewal Quotes Without Assets',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id212:j_id214',
      },
      subscriptionTermUnit: {
        label: 'Subscription Term Unit',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id215:j_id217',
      },
      subscriptionProratePrecision: {
        label: 'Subscription Prorate Precision',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id221:j_id223',
      },
      includeNetNewProductsInMaintenance: {
        label: 'Include Net-new Products in Maintenance',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id232',
      },
      contractInForeground: {
        label: 'Contract In Foreground',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id233',
      },
      reEvaluateBundleLogicOnRenewals: {
        label: 'Re-evaluate Bundle Logic on Renewals',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id234',
      },
      enableEvergreenSubscriptions: {
        label: 'Enable Evergreen Subscriptions',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id235:j_id237',
      },
      poTRenewalsContractingFromOrders: {
        label: 'PoT Renewals (Contracting from Orders)',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id238:j_id240',
      },
      legacyAmendRenewService: {
        label: 'Legacy Amend/Renew Service',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id241',
      },
      amendContractsInBackground: {
        label: 'Amend Contracts in Background',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id243',
      },
      disableProductBundleSubTypeChecks: {
        label: 'Disable Product Bundle Sub Type Checks',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id243',
      },
      bypassPreserveBundleStructure: {
        label: 'Bypass Preserve Bundle Structure',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id247:j_id249',
      },
      useCurrentSubscriptionOnAssets: {
        label: 'Use Current Subscription on Assets',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:subscriptionAndRenewalSettings:j_id250:j_id252',
      },
    },
  },
  quote: {
    label: 'Quote',
    component: 'tab',
    id: 'page:form:pb:j_id253_lbl',
    properties: {
      disableInitialQuoteSync: {
        label: 'Disable Initial Quote Sync',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id254:j_id255',
      },
      disableQuoteContactDefaulting: {
        label: 'Disable Quote Contact Defaulting',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id254:j_id257',
      },
      allowOptionDeletion: {
        label: 'Allow Option Deletion',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id254:j_id261',
      },
      disableQuoteAddressDefaulting: {
        label: 'Disable Quote Address Defaulting',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id254:j_id256',
      },
      primaryQuoteKeepsOpportunityProducts: {
        label: 'Primary Quote Keeps Opportunity Products',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id254:j_id258:j_id260',
      },
      defaultQuoteValidityDays: {
        label: 'Default Quote Validity (Days)',
        component: 'input',
        type: 'number',
        name: 'page:form:pb:j_id254:j_id262',
      },
    },
  },
  order: {
    label: 'Order',
    component: 'tab',
    id: 'page:form:pb:j_id263_lbl',
    properties: {
      requireApprovedQuote: {
        label: 'Require Approved Quote',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:orderOptions:j_id264',
      },
      defaultOrderStartDate: {
        label: 'Default Order Start Date',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:orderOptions:j_id267:j_id269',
      },
      allowMultipleOrders: {
        label: 'Allow Multiple Orders',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:orderOptions:j_id265',
      },
      createOrdersWithoutOpportunities: {
        label: 'Create Orders Without Opportunities',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:orderOptions:j_id271',
      },
    },
  },
  additionalSettings: {
    label: 'Additional Settings',
    component: 'tab',
    id: 'page:form:pb:j_id273_lbl',
    properties: {
      triggersDisabled: {
        label: 'Triggers Disabled',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id274:j_id275',
      },
      quantityScale: {
        label: 'Quantity Scale',
        component: 'input',
        type: 'number',
        name: 'page:form:pb:j_id274:j_id280',
      },
      sortProductsInMemory: {
        label: 'Sort Products In Memory',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id274:j_id285',
      },
      multipleBundlesView: {
        label: 'Multiple Bundles View',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:j_id274:j_id290:j_id292',
      },
      externalConfiguratorUrl: {
        label: 'External Configurator URL',
        component: 'input',
        type: 'string',
        name: 'page:form:pb:j_id274:j_id304',
      },
      thirdPartyConfigurator: {
        label: 'Third Party Configurator',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id274:j_id309',
      },
      openSearchFilterByDefault: {
        label: 'Open Search Filter By Default',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id274:j_id311',
      },
      hideFeaturesWithHiddenOptions: {
        label: 'Hide Features with Hidden Options',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id274:j_id313',
      },
      hideProductSearchBar: {
        label: 'Hide Product Search Bar',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id274:j_id313',
      },
      productResultsGroupFieldName: {
        label: 'Product Results Group Field Name',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:j_id274:j_id276:j_id278',
      },
      productDescriptionField: {
        label: 'Product Description Field',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:j_id274:j_id281:j_id283',
      },
      theme: {
        label: 'Theme',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:j_id274:j_id286:j_id288',
      },
      useGlobalHeaderPermission: {
        label: 'Use Global Header Permission',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id274:j_id303',
      },
      serviceRegion: {
        label: 'Service Region',
        component: 'select',
        type: 'string',
        name: 'page:form:pb:j_id274:j_id305:j_id307',
      },
      enableProductOptionDrawer: {
        label: 'Enable Product Option Drawer',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id274:j_id310',
      },
      enableLargeConfigurations: {
        label: 'Enable Large Configurations',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id274:j_id310',
      },
      nestedBundlesForExternalConfigurator: {
        label: 'Nested Bundles for External Configurator',
        component: 'input',
        type: 'boolean',
        name: 'page:form:pb:j_id274:j_id314',
      },
    },
  },
};
