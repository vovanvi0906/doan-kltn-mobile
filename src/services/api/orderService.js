import { apiClient } from './apiClient';

export const orderService = {
  /**
   * Tạo đơn dịch vụ mới (Khách hàng)
   * @param {Object} payload - { serviceId, pickupLat, pickupLng, pickupAddress, note, scheduledAt }
   */
  async createOrder(payload) {
    console.log('🚀 [OrderService] Gọi API tạo đơn hàng mới:', payload);
    return apiClient.post('/orders', payload);
  },

  /**
   * Thợ chấp nhận nhận đơn hàng
   * @param {string} orderId - UUID đơn hàng
   */
  async acceptOrder(orderId) {
    console.log(`⚡ [OrderService] Thợ bấm nhận đơn #${orderId}`);
    return apiClient.post(`/orders/${orderId}/accept`);
  },

  /**
   * Lấy chi tiết đơn hàng theo ID
   */
  async getOrderById(orderId) {
    return apiClient.get(`/orders/${orderId}`);
  },

  /**
   * Lấy danh sách đơn hàng của người dùng hiện tại
   */
  async getMyOrders() {
    return apiClient.get('/orders');
  },

  /**
   * Lấy danh sách dịch vụ đang hoạt động
   */
  async getActiveServices() {
    return apiClient.get('/services');
  },
};
