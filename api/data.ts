module.exports = [
  {
    id: "HEADING_TITLE",
    title: "Add a Recepient",
    type: "HEADING",
  },
  {
    id: "CURRENCY_TYPE_SECTION_BENEFICIARY",
    title: "Type of Currency",
    type: "RADIO",
    options: [
      { key: "Fiat", text: "Fiat" },
      { key: "Digital_Assets", text: "Digital Assets" },
    ],
    value: "Fiat",
    enabled: true,
    validations: [],
    required: true,
  },
  {
    id: "CURRENCY_OPTIONS_SECTION_BENEFICIARY",
    title: "Currency",
    placeholder: "Select Currency",
    type: "SELECT",
    options: [
      { key: "INR", text: "INR" },
      { key: "USD", text: "USD" },
      { key: "CAD", text: "CAD" },
    ],
    value: null,
    enabled: true,
    validations: [],
    required: true,
  },
  {
    id: "ACCOUNT_TYPE_SECTION_BENEFICIARY",
    title: "Type of Beneficiary",
    type: "RADIO",
    options: [
      { key: "Individual", text: "Individual" },
      { key: "Corporate", text: "Corporate" },
    ],
    value: "Individual",
    enabled: [],
    validations: [],
  },
  {
    id: "BANK_DETAILS_SUBHEADER",
    title: "Bank Details",
    type: "SUBHEADING",
  },
  {
    type: "TAB_GROUP",
    content: [
      {
        id: "ACH_SECTION",
        title: "ACH",
        // this section will be enabled only when the above id field has these two values
        enabled: [
          {
            id: 'CURRENCY_OPTIONS_SECTION_BENEFICIARY',
            value:["CAD", "INR"],
          }
        ],
        fields: [
          {
            id: "ACCOUNT_NUMBER_SECTION_BANK_DETAILS",
            title: "Account Number",
            placeholder: "78945612302",
            type: "NUMBER",
            options: [],
            value: null,
            enabled: true,
            validations: [],
          },
          {
            id: "ACH_ROUTING_NUM_SECTION_BANK_DETAILS",
            title: "ACH Routing Number",
            placeholder: "123456789",
            type: "NUMBER",
            options: [],
            value: null,
            enabled: true,
            validations: [],
          },
          {
            id: "DESTINATION_COUNTRY_SECTION_BANK_DETAILS",
            title: "Destination Country",
            placeholder: "Select Currency",
            type: "SELECT",
            options: [
              { key: "India", text: "India" },
              { key: "USA", text: "USA" },
              { key: "Canada", text: "Canada" },
            ],
            value: null,
            enabled: true,
            validations: [],
          },
        ],
      },
      {
        id: "SWIFT_FORM",
        title: "SWIFT ",
        // this section will be enabled only when the above id field has the USD as selected value
        enabled: [
          {
            id: 'CURRENCY_OPTIONS_SECTION_BENEFICIARY',
            value: "USD"
          },
        ],
        fields: [
          {
            id: "SENDER_SWIFT_FORM",
            title: "Sender",
            type: "TEXTFIELD",
            options: [],
            value: null,
            enabled: true,
            validations: [],
          },
          {
            id: "CARD_NUMBER_SWIFT_FORM",
            title: "Card Number",
            type: "NUMBER",
            options: [],
            value: null,
            enabled: true,
            validations: [
              {
                type: "PATTERN",
                value: "^3[47][0-9]{13}$",
                errorMessage:
                  "Please make sure you have added the correct pattern",
              },
              {
                type: "MAX_LENGTH",
                value: 16,
                errorMessage: "Please add atleast 16 characters",
              },
              {
                type: "MIN_LENGTH",
                value: 16,
                errorMessage: "Please add atleast 16 characters",
              },
            ],
          },
          {
            id: "CVV_SWIFT_FORM",
            title: "CVV",
            type: "NUMBER",
            options: [],
            value: null,
            enabled: true,
            validations: [
              {
                type: "pattern",
                value:
                  "^[A-Z]{4}[-]{0,1}[A-Z]{2}[-]{0,1}[A-Z0-9]{2}[-]{0,1}[0-9]{3}$",
                errorMessage:
                  "Please make sure you have added the correct pattern",
              },
            ],
          },
          {
            id: "CONTACT_NO_SWIFT_FORM",
            title: "Contact No",
            type: "NUMBER",
            options: [],
            value: null,
            enabled: true,
            validations: [
              {
                type: "MIN_LENGTH",
                value: "10",
                errorMessage: "Please add atleast 10 characters",
              },
              {
                type: "MAX_LENGTH",
                value: "10",
                errorMessage: "Please add atleast 10 characters",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "BENEFICIARY_ADDRESS",
    title: "Beneficiary Address",
    type: "SUBHEADING",
  },
  {
    id: "COUNTRY_SECTION_ADDRESS",
    title: "Country",
    placeholder: "Select Currency",
    type: "SELECT",
    options: [
      { key: "India", text: "India" },
      { key: "USA", text: "USA" },
      { key: "Canada", text: "Canada" },
    ],
    value: null,
    enabled: true,
    validations: [],
  },
  {
    id: "CITY_SECTION_ADDRESS",
    placeholder: "Newyork",
    title: "City",
    type: "TEXTFIELD",
    options: [],
    value: null,
    enabled: true,
    validations: [],
  },
  {
    id: "ADDRESS_SECTION_ADDRESS",
    title: "Address",
    type: "TEXTFIELD",
    placeholder: "32 Hampshire Road",
    options: [],
    value: null,
    enabled: true,
    validations: [
      {
        type: "MIN_LENGTH",
        message: "Your address must not shorter than 7.",
      },
      {
        type: "MAX_LENGTH",
        message: "Your address must not longer than 12.",
      },
    ],
  },
];
