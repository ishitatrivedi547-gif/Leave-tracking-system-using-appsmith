export default {
  refreshDashboard: async () => {
    await Promise.all([
      q_manager_get_pending_requests.run(),
      q_manager_dashboard_summary.run(),
      q_hr_get_notifications.run(),
      q_hr_get_audit_logs.run()
    ]);

    showAlert("Manager Dashboard refreshed successfully!", "success");
  }
};