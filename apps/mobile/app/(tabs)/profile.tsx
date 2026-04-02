import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { brand } from "../../src/config/brand";
import { useRole } from "../../src/context/RoleContext";

export default function ProfileScreen() {
  const router = useRouter();
  const { setRole } = useRole();

  const switchToCustomer = () => {
    setRole("customer");
    router.replace("/(customer)");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Avatar */}
      <View style={styles.avatarSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>MJ</Text>
        </View>
        <Text style={styles.name}>Marcus Jennings</Text>
        <Text style={styles.role}>Driver / Technician</Text>
        <View style={styles.ratingRow}>
          <Text style={styles.ratingText}>⭐ 4.9</Text>
          <Text style={styles.ratingCount}>(120 services)</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsGrid}>
        {[
          { label: "Jobs This Month", value: "34"       },
          { label: "Miles Driven",    value: "412 mi"   },
          { label: "Issues Reported", value: "2"        },
          { label: "On-Time Rate",    value: "98%"      },
        ].map((s) => (
          <View key={s.label} style={styles.statCard}>
            <Text style={styles.statValue}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* Menu items */}
      <View style={styles.menu}>
        {[
          { icon: "📋", label: "Job History"         },
          { icon: "📸", label: "My Photo Uploads"    },
          { icon: "💬", label: "Messages"            },
          { icon: "⚙️",  label: "App Settings"       },
          { icon: "🔔", label: "Notifications"       },
        ].map((item) => (
          <TouchableOpacity key={item.label} style={styles.menuItem} activeOpacity={0.7}>
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.switchModeBtn} onPress={switchToCustomer} activeOpacity={0.8}>
        <Text style={styles.switchModeText}>🔄  Switch to Customer Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.8}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:     { flex: 1, backgroundColor: brand.colors.background },
  content:       { padding: 20, paddingBottom: 40 },
  avatarSection: { alignItems: "center", paddingVertical: 24 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: brand.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText:  { color: "#fff", fontSize: 28, fontWeight: "800" },
  name:        { fontSize: 24, fontWeight: "800", color: brand.colors.onSurface },
  role:        { fontSize: 14, color: "#666", marginTop: 4 },
  ratingRow:   { flexDirection: "row", gap: 6, marginTop: 8, alignItems: "center" },
  ratingText:  { fontSize: 16, fontWeight: "700", color: brand.colors.primary },
  ratingCount: { fontSize: 13, color: "#999" },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 24,
  },
  statCard: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
  },
  statValue: { fontSize: 22, fontWeight: "800", color: brand.colors.primary },
  statLabel: { fontSize: 12, color: "#666", marginTop: 4 },
  menu:      { backgroundColor: "#fff", borderRadius: 20, overflow: "hidden", marginBottom: 16 },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f4f8",
    gap: 14,
  },
  menuIcon:    { fontSize: 20 },
  menuLabel:   { flex: 1, fontSize: 15, fontWeight: "600", color: brand.colors.onSurface },
  menuChevron: { fontSize: 20, color: "#ccc" },
  switchModeBtn:  { borderWidth: 2, borderColor: brand.colors.secondary, borderRadius: 16, padding: 16, alignItems: "center", marginBottom: 12 },
  switchModeText: { color: brand.colors.secondary, fontWeight: "700", fontSize: 15 },
  logoutBtn: {
    borderWidth: 2,
    borderColor: "#ba1a1a",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },
  logoutText: { color: "#ba1a1a", fontWeight: "700", fontSize: 15 },
});
