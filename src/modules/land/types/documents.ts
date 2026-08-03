export interface LandDocumentItem {
  id: string;
  docCode: string;
  docType: string;
  landReference: string;
  mouzaKhatian: string;
  issueDate: string;
  expiryDate: string;
  verificationStatus: 'Verified' | 'Pending Verification' | 'Disputed';
  fileUrl?: string;
}
