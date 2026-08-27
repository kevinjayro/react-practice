import type { Invoice } from './InvoicePaymentDashboard.types';

export const initialInvoices: Invoice[] = [
  {
    id: 1,
    client: 'Acme Corp',
    amount: 1000,
    paidAmount: 1000,
  },
  {
    id: 2,
    client: 'Globex Inc',
    amount: 750,
    paidAmount: 300,
  },
  {
    id: 3,
    client: 'Stark Industries',
    amount: 1500,
    paidAmount: 0,
  },
];
