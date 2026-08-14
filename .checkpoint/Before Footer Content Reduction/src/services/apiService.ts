import { QuoteRequestData, ContactInquiryData, ApiResponse } from '../types';

/**
 * Service Layer for Gulf Northern X API Integration.
 * Designed for future backend & admin panel integration.
 */

// Helper to simulate network latency
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper to generate a unique tracking reference
const generateRef = (prefix: string) => {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `GNX-${prefix}-${random}`;
};

export const apiService = {
  /**
   * Submit a quote request (Xpress, Xfers, or Xtras)
   */
  async submitQuoteRequest(data: QuoteRequestData): Promise<ApiResponse<QuoteRequestData>> {
    await delay(1200); // Simulate API call

    // Basic Validation
    if (!data.fullName || !data.email || !data.phone || !data.companyName) {
      return {
        success: false,
        message: 'Please fill in all required contact information.',
        timestamp: new Date().toISOString()
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.',
        timestamp: new Date().toISOString()
      };
    }

    const refId = generateRef('QT');

    // Store in localStorage for demonstration/testing persistence if desired
    try {
      const existing = JSON.parse(localStorage.getItem('gnx_quotes') || '[]');
      existing.unshift({ ...data, refId, timestamp: new Date().toISOString() });
      localStorage.setItem('gnx_quotes', JSON.stringify(existing.slice(0, 20)));
    } catch {
      // Ignore local storage error
    }

    return {
      success: true,
      message: `Quote request received. Reference ID: ${refId}. Our dispatch team will review and contact you within 1 business hour.`,
      referenceId: refId,
      data,
      timestamp: new Date().toISOString()
    };
  },

  /**
   * Submit a general contact or service inquiry
   */
  async submitContactInquiry(data: ContactInquiryData): Promise<ApiResponse<ContactInquiryData>> {
    await delay(1000);

    if (!data.fullName || !data.email || !data.message) {
      return {
        success: false,
        message: 'Please complete all required fields.',
        timestamp: new Date().toISOString()
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.',
        timestamp: new Date().toISOString()
      };
    }

    if (!data.consent) {
      return {
        success: false,
        message: 'Please accept the privacy consent checkbox to submit.',
        timestamp: new Date().toISOString()
      };
    }

    const refId = generateRef('INQ');

    try {
      const existing = JSON.parse(localStorage.getItem('gnx_inquiries') || '[]');
      existing.unshift({ ...data, refId, timestamp: new Date().toISOString() });
      localStorage.setItem('gnx_inquiries', JSON.stringify(existing.slice(0, 20)));
    } catch {
      // Ignore local storage error
    }

    return {
      success: true,
      message: `Thank you for contacting Gulf Northern X. Your inquiry reference is ${refId}. Representative support will be in touch shortly.`,
      referenceId: refId,
      data,
      timestamp: new Date().toISOString()
    };
  }
};
