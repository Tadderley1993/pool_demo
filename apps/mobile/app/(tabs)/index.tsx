import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { brand } from "../../src/config/brand";

const todayJobs = [
  { id: "J-1042", customer: "Sarah Thompson",  address: "456 Commonwealth Ave", time: "10:30 AM", status: "Next"       },
  { id: "J-1043", customer: "David Martinez",  address: "789 Newbury St",       time: "12:00 PM", status: "Upcoming"   },
  { id: "J-1044", customer: "Rachel Kim",      address: "321 Boylston St",      time: "2:00 PM",  status: "Upcoming"   },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Greeting */}
      <View style={styles.greetingCard}>
        <Text style={styles.greetingLabel}>Good morning, Marcus</Text>
        <Text style={styles.greetingValue}>3 jobs today</Text>
        <Text style={styles.greetingSub}>You're on track · Next job in 25 min</Text>
      </View>

      {/* Stats row */}
      <View style={styles.statsRow}>
        {[
          { label: "Completed", value: "12", icon: "✓" },
          { label: "This Week",  value: "18", icon: "📅" },
          { label: "Rating",     value: "4.9", icon: "⭐" },
        ].map((stat) => (
          <View key={stat.label} style={styles.statCard}>
            <Text style={styles.statIcon}>{stat.icon}</Text>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* Today's jobs */}
      <Text style={styles.sectionTitle}>Today's Jobs</Text>
      {todayJobs.map((job) => (
        <TouchableOpacity key={job.id} style={styles.jobCard} activeOpacity={0.7}>
          <View style={styles.jobLeft}>
            <View style={[styles.jobDot, job.status === "Next" && styles.jobDotActive]} />
          </View>
          <View style={styles.jobCenter}>
            <Text style={styles.jobCustomer}>{job.customer}</Text>
            <Text style={styles.jobAddress}>{job.address}</Text>
            <Text style={styles.jobTime}>{job.time}</Text>
          </View>
          <View>
            <Text
              style={[
                styles.jobStatus,
                job.status === "Next" && styles.jobStatusActive,
              ]}
            >
              {job.status}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Start day button */}
      <TouchableOpacity style={styles.startButton} activeOpacity={0.85}>
        <Text style={styles.startButtonText}>🗺️  Start Today's Route</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: brand.colors.background },
  content:      { padding: 20, paddingBottom: 40 },
  greetingCard: {
    backgroundColor: brand.colors.primary,
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
  },
  greetingLabel: { color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: "600" },
  greetingValue: { color: "#fff", fontSize: 32, fontWeight: "800", marginTop: 4 },
  greetingSub:   { color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 6 },
  statsRow:      { flexDirection: "row", gap: 12, marginBottom: 24 },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },
  statIcon:  { fontSize: 20, marginBottom: 4 },
  statValue: { fontSize: 22, fontWeight: "800", color: brand.colors.primary },
  statLabel: { fontSize: 11, color: "#666", marginTop: 2, fontWeight: "600" },
  sectionTitle: { fontSize: 20, fontWeight: "800", color: brand.colors.onSurface, marginBottom: 12 },
  jobCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 12,
  },
  jobLeft:    { alignItems: "center", width: 20 },
  jobDot:     { width: 10, height: 10, borderRadius: 5, backgroundColor: "#c1c7d1" },
  jobDotActive: { backgroundColor: brand.colors.primary, width: 14, height: 14, borderRadius: 7 },
  jobCenter:  { flex: 1 },
  jobCustomer:{ fontSize: 15, fontWeight: "700", color: brand.colors.onSurface },
  jobAddress: { fontSize: 13, color: "#666", marginTop: 2 },
  jobTime:    { fontSize: 12, color: brand.colors.primary, fontWeight: "600", marginTop: 2 },
  jobStatus: {
    fontSize: 11,
    fontWeight: "700",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: "#eaeef2",
    color: "#466270",
    overflow: "hidden",
  },
  jobStatusActive: { backgroundColor: "#d1e4ff", color: brand.colors.primary },
  startButton: {
    backgroundColor: brand.colors.primary,
    borderRadius: 20,
    padding: 18,
    alignItems: "center",
    marginTop: 16,
  },
  startButtonText: { color: "#fff", fontSize: 16, fontWeight: "800" },
});
