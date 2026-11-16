export default {
  async refreshDashboard() {
    await Promise.all([
      q_hr_get_employees.run(),
      q_hr_get_leave_policies.run(),
      q_hr_get_leave_balances.run(),
      q_hr_get_all_leave_requests.run(),
      q_hr_dashboard_summary.run(),
      q_hr_get_holidays.run(),
      q_hr_get_holidays_for_edit.run(),
      q_hr_get_notifications.run(),
      q_hr_get_audit_logs.run(),
      q_hr_leave_requests_by_status.run(),
      q_hr_leave_requests_by_type.run(),
      q_hr_monthly_leave_trends.run()
    ]);

    showAlert("HR Dashboard refreshed successfully!", "success");
  }
};