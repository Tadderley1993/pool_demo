import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { brand } from "../../src/config/brand";
import { useRole } from "../../src/context/RoleContext";

export default function CustomerProfileScreen() {
  const router = useRouter();
  const { setRole } = useRole();

  const [notifs, setNotifs] = useState({ ...brand.customerApp.notificationDefaults });

  const toggle = (key: keyof typeof notifs) =>
    setNotifs((prev) => ({ ...prev, [key]: !prev[key] }));

  const switchToDriver = () => {
    setRole("driver");
    router.replace("/(tabs)");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Avatar */}
      <View style={styles.avatarSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JL</Text>
        </View>
        <Text style={styles.name}>Jessica Lane</Text>
        <Text style={styles.role}>Customer</Text>
        <View style={styles.tierBadge}>
          <Text style={styles.tierBadgeText}>💧 Deep Blue Member</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsGrid}>
        {[
          { label: "Member Since", value: "2022"  },
          { label: "Services",     value: "34"    },
          { label: "Points",       value: "2,450" },
          { label: "Tier",         value: "Deep Blue" },
        ].map((s) => (
          <View key={s.label} style={styles.statCard}>
            <Text style={styles.statValue} numberOfLines={1}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* Notifications */}
      <Text style={styles.sectionTitle}>Notifications & Reminders</Text>
      <View style={styles.menu}>
        {(
          [
            { key: "serviceReminder",   label: "24h Service Reminder"     },
            { key: "technicianEnRoute", label: "Technician En Route Alert" },
            { key: "reportReady",       label: "Chem Report Ready"         },
            { key: "rewardsMilestone",  label: "Rewards Milestone"         },
          ] as const
        ).map((item) => (
          <View key={item.key} style={styles.switchRow}>
            <Text style={styles.switchLabel}>{item.label}</Text>
            <Switch
              value={notifs[item.key]}
              onValueChange={() => toggle(item.key)}
              trackColor={{ false: "#e4e9ed", true: brand.colors.primary + "80" }}
              thumbColor={notifs[item.key] ? brand.colors.primary : "#f4f3f4"}
            />
          </View>
        ))}
      </View>

      {/* Account menu */}
      <Text style={styles.sectionTitle}>Account</Text>
      <View style={styles.menu}>
        {[
          { icon: "💳", label: "Saved Payment Method" },
          { icon: "📋", label: "Service History"      },
          { icon: "📍", label: "Saved Address"        },
          { icon: "⚙️",  label: "App Settings"        },
          { icon: "❓", label: "Help / FAQ"           },
        ].map((item) => (
          <TouchableOpacity key={item.label} style={styles.menuItem} activeOpacity={0.7}>
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Switch mode */}
      <TouchableOpacity style={styles.switchModeBtn} onPress={switchToDriver} activeOpacity={0.8}>
        <Text style={styles.switchModeText}>🔄  Switch to Driver Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.8}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const P = brand.colors.primary;
const styles = StyleSheet.create({
  container:      { flex: 1, backgroundColor: brand.colors.background },
  content:        { padding: 20, paddingBottom: 40 },
  avatarSection:  { alignItems: "center", paddingVertical: 24 },
  avatar:         { width: 80, height: 80, borderRadius: 40, backgroundColor: P, alignItems: "center", justifyContent: "center", marginBottom: 12 },
  avatarText:     { color: "#fff", fontSize: 28, fontWeight: "800" },
  name:           { fontSize: 24, fontWeight: "800", color: brand.colors.onSurface },
  role:           { fontSize: 14, color: "#666", marginTop: 4 },
  tierBadge:      { backgroundColor: "#dbeafe", paddingHorizontal: 14, paddingVertical: 5, borderRadius: 20, marginTop: 8 },
  tierBadgeText:  { color: P, fontWeight: "700", fontSize: 13 },
  statsGrid:      { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 24 },
  statCard:       { width: "47%", backgroundColor: "#fff", borderRadius: 16, padding: 16 },
  statValue:      { fontSize: 18, fontWeight: "800", color: P },
  statLabel:      { fontSize: 12, color: "#666", marginTop: 4 },
  sectionTitle:   { fontSize: 16, fontWeight: "800", color: brand.colors.onSurface, marginBottom: 10 },
  menu:           { backgroundColor: "#fff", borderRadius: 20, overflow: "hidden", marginBottom: 20 },
  switchRow:      { flexDirection: "row", alignItems: "center", padding: 16, borderBottomWidth: 1, borderBottomColor: "#f0f4f8" },
  switchLabel:    { flex: 1, fontSize: 14, fontWeight: "600", color: brand.colors.onSurface },
  menuItem:       { flexDirection: "row", alignItems: "center", padding: 18, borderBottomWidth: 1, borderBottomColor: "#f0f4f8", gap: 14 },
  menuIcon:       { fontSize: 20 },
  menuLabel:      { flex: 1, fontSize: 15, fontWeight: "600", color: brand.colors.onSurface },
  menuChevron:    { fontSize: 20, color: "#ccc" },
  switchModeBtn:  { borderWidth: 2, borderColor: brand.colors.secondary, borderRadius: 16, padding: 16, alignItems: "center", marginBottom: 12 },
  switchModeText: { color: brand.colors.secondary, fontWeight: "700", fontSize: 15 },
  logoutBtn:      { borderWidth: 2, borderColor: "#ba1a1a", borderRadius: 16, padding: 16, alignItems: "center" },
  logoutText:     { color: "#ba1a1a", fontWeight: "700", fontSize: 15 },
});
