export const TABLE_ENTRY_ROW = 16;

export const REPORT_EXCEL_COLUMNS = {
  date: 'İşlem Tarihi',
  transactionNo: 'İşlem No',
  channel: 'Kanal/Şube',
  transactionAmount: 'İşlem Tutarı',
  balance: 'Bakiye (TL)',
  valueBalance: 'Kıymet Bakiye',
  transaction: 'İşlem',
  description: 'Açıklama',
};

export const DESCRIPTION_STRING_PARTS = {
  price: 'Fiyat/Faiz',
  lot: 'Adet',
};

export const REPORT_STOCK_ACTIONS = {
  buy: 'ALIŞ',
  sell: 'SATIŞ',
};

export const DEFAULT_CHANNEL = 'Sistem';

export const REPORT_DATE_FORMAT = 'DD/MM/YYYY';

export type DescriptionExtractedKeys = keyof typeof DESCRIPTION_STRING_PARTS;
