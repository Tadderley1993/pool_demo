import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { brand } from "../../src/config/brand";

const demoValues: Record<string, number> = { ph: 7.4, chlorine: 2.9, alkalinity: 102, calcium: 295 };

const recentServices = [
  { date: "Mar 28", type: "Weekly Maintenance", status: "Completed" },
  { date: "Mar 14", type: "Chemical Balancing",  status: "Completed" },
];

export default function CustomerHomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Greeting */}
      <View style={styles.greetingCard}>
        <Text style={styles.greetingLabel}>Welcome back, Jessica</Text>
        <Text style={styles.greetingValue}>Your Pool</Text>
        <View style={styles.statusPill}>
          <Text style={styles.statusDot}>●</Text>
          <Text style={styles.statusText}>Crystal Clear · pH 7.4</Text>
        </View>
      </View>

      {/* Next appointment */}
      <View style={styles.appointmentCard}>
        <View style={styles.apptHeader}>
          <Text style={styles.apptLabel}>Next Service</Text>
          <Text style={styles.apptBadge}>Confirmed</Text>
        </View>
        <Text style={styles.apptDate}>Thursday, Apr 10 · 10:30 AM</Text>
        <Text style={styles.apptTech}>Marcus Jennings · Weekly Maintenance</Text>
      </View>

      {/* Pool health */}
      <Text style={styles.sectionTitle}>Pool Health</Text>
      <View style={styles.chemGrid}>
        {brand.chemicalParams.map((param) => {
          const val   = demoValues[param.id] ?? param.ideal;
          const ok    = val >= param.min && val <= param.max;
          return (
            <View key={param.id} style={styles.chemCard}>
              <View style={[styles.chemDot, { backgroundColor: ok ? "#1d6738" : "#b45309" }]} />
              <Text style={styles.chemValue}>{val}{param.unit}</Text>
              <Text style={styles.chemLabel}>{param.label}</Text>
              <Text style={[styles.chemStatus, { color: ok ? "#1d6738" : "#b45309" }]}>
                {ok ? "Ideal" : "Check"}
              </Text>
            </View>
          );
        })}
      </View>

      {/* Quick actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: brand.colors.primary }]}
          onPress={() => router.push("/(customer)/report")}
          activeOpacity={0.8}
        >
          <Text style={styles.actionIcon}>📸</Text>
          <Text style={styles.actionBtnText}>Report Issue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: brand.colors.tertiary }]}
          onPress={() => router.push("/(customer)/chat")}
          activeOpacity={0.8}
        >
          <Text style={styles.actionIcon}>🤖</Text>
          <Text style={styles.actionBtnText}>AI Chat</Text>
        </TouchableOpacity>
      </View>

      {/* Recent services */}
      <Text style={styles.sectionTitle}>Recent Services</Text>
      {recentServices.map((s) => (
        <View key={s.date} style={styles.serviceCard}>
          <View style={styles.serviceLeft}>
            <Text style={styles.serviceDate}>{s.date}</Text>
          </View>
          <View style={styles.serviceCenter}>
            <Text style={styles.serviceType}>{s.type}</Text>
          </View>
          <Text style={styles.serviceBadge}>{s.status}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const P = brand.colors.primary;
const styles = StyleSheet.create({
  container:       { flex: 1, backgroundColor: brand.colors.background },
  content:         { padding: 20, paddingBottom: 40 },
  greetingCard:    { backgroundColor: P, borderRadius: 24, padding: 24, marginBottom: 14 },
  greetingLabel:   { color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: "600" },
  greetingValue:   { color: "#fff", fontSize: 30, fontWeight: "800", marginTop: 4 },
  statusPill:      { flexDirection: "row", alignItems: "center", marginTop: 10, backgroundColor: "rgba(255,255,255,0.15)", alignSelf: "flex-start", paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20, gap: 6 },
  statusDot:       { color: "#4ade80", fontSize: 10 },
  statusText:      { color: "#fff", fontSize: 13, fontWeight: "600" },
  appointmentCard: { backgroundColor: "#fff", borderRadius: 20, padding: 18, marginBottom: 20 },
  apptHeader:      { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  apptLabel:       { fontSize: 13, fontWeight: "700", color: "#666" },
  apptBadge:       { fontSize: 11, fontWeight: "700", color: "#1d6738", backgroundColor: "#dcfce7", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 },
  apptDate:        { fontSize: 17, fontWeight: "800", color: brand.colors.onSurface },
  apptTech:        { fontSize: 13, color: "#666", marginTop: 4 },
  sectionTitle:    { fontSize: 18, fontWeight: "800", color: brand.colors.onSurface, marginBottom: 12 },
  chemGrid:        { flexDirection: "row", gap: 10, marginBottom: 24, flexWrap: "wrap" },
  chemCard:        { width: "47%", backgroundColor: "#fff", borderRadius: 16, padding: 14 },
  chemDot:         { width: 8, height: 8, borderRadius: 4, marginBottom: 8 },
  chemValue:       { fontSize: 22, fontWeight: "800", color: P },
  chemLabel:       { fontSize: 12, color: "#666", marginTop: 2 },
  chemStatus:      { fontSize: 11, fontWeight: "700", marginTop: 4 },
  actionsRow:      { flexDirection: "row", gap: 12, marginBottom: 24 },
  actionBtn:       { flex: 1, borderRadius: 16, padding: 16, alignItems: "center", gap: 6 },
  actionIcon:      { fontSize: 22 },
  actionBtnText:   { color: "#fff", fontWeight: "700", fontSize: 13 },
  serviceCard:     { backgroundColor: "#fff", borderRadius: 16, padding: 14, flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 10 },
  serviceLeft:     { width: 48, alignItems: "center" },
  serviceDate:     { fontSize: 12, fontWeight: "700", color: P },
  serviceCenter:   { flex: 1 },
  serviceType:     { fontSize: 14, fontWeight: "700", color: brand.colors.onSurface },
  serviceBadge:    { fontSize: 11, fontWeight: "700", color: "#1d6738", backgroundColor: "#dcfce7", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 },
});
