import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { brand } from "../../src/config/brand";

const jobs = [
  {
    id: "J-1042", customer: "Sarah Thompson", address: "456 Commonwealth Ave",
    time: "10:30 AM", status: "In Progress", ph: null, chl: null,
  },
  {
    id: "J-1043", customer: "David Martinez", address: "789 Newbury St",
    time: "12:00 PM", status: "Upcoming", ph: null, chl: null,
  },
  {
    id: "J-1044", customer: "Rachel Kim", address: "321 Boylston St",
    time: "2:00 PM", status: "Upcoming", ph: null, chl: null,
  },
];

const statusStyle: Record<string, { bg: string; text: string }> = {
  "Completed":  { bg: "#b3ebff", text: "#004959" },
  "In Progress":{ bg: "#d1e4ff", text: "#004473" },
  "Upcoming":   { bg: "#eaeef2", text: "#466270" },
};

export default function JobsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>My Jobs</Text>
      {jobs.map((job) => {
        const ss = statusStyle[job.status] ?? statusStyle["Upcoming"];
        return (
          <TouchableOpacity key={job.id} style={styles.card} activeOpacity={0.75}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardCustomer}>{job.customer}</Text>
                <Text style={styles.cardAddress}>{job.address}</Text>
              </View>
              <Text style={[styles.badge, { backgroundColor: ss.bg, color: ss.text }]}>
                {job.status}
              </Text>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardTime}>⏰ {job.time}</Text>
              <Text style={styles.cardId}>{job.id}</Text>
            </View>

            {/* Action buttons */}
            <View style={styles.actions}>
              {brand.jobStatuses.map((s) => (
                <TouchableOpacity key={s} style={styles.actionBtn} activeOpacity={0.8}>
                  <Text style={styles.actionBtnText}>{s}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Chemical log quick-input */}
            <View style={styles.chemRow}>
              {brand.chemicalParams.slice(0, 2).map((p) => (
                <View key={p.id} style={styles.chemField}>
                  <Text style={styles.chemLabel}>{p.label}</Text>
                  <View style={styles.chemInput}>
                    <Text style={styles.chemPlaceholder}>
                      {p.ideal}{p.unit}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: brand.colors.background },
  content:      { padding: 20, paddingBottom: 40 },
  pageTitle:    { fontSize: 28, fontWeight: "800", color: brand.colors.onSurface, marginBottom: 16 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader:   { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 },
  cardCustomer: { fontSize: 16, fontWeight: "700", color: brand.colors.onSurface },
  cardAddress:  { fontSize: 13, color: "#666", marginTop: 2 },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 11,
    fontWeight: "700",
    overflow: "hidden",
  },
  cardFooter:   { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
  cardTime:     { fontSize: 13, color: brand.colors.primary, fontWeight: "600" },
  cardId:       { fontSize: 12, color: "#999" },
  actions:      { flexDirection: "row", gap: 8, marginBottom: 12 },
  actionBtn: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
  },
  actionBtnText: { fontSize: 12, fontWeight: "700", color: brand.colors.primary },
  chemRow:      { flexDirection: "row", gap: 8 },
  chemField:    { flex: 1 },
  chemLabel:    { fontSize: 11, fontWeight: "600", color: "#666", marginBottom: 4 },
  chemInput: {
    backgroundColor: "#f0f4f8",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  chemPlaceholder: { fontSize: 14, fontWeight: "700", color: brand.colors.primary },
});
