import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { brand } from "../../src/config/brand";

const steps = [
  { label: "Dispatched",    sub: "9:15 AM", done: true  },
  { label: "In Transit",   sub: "~10 min away", done: true  },
  { label: "At Your Pool", sub: "Estimated 10:30 AM", done: false },
];

export default function TrackerScreen() {
  const router  = useRouter();
  const [eta]   = useState("10 min");

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Status banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerEmoji}>🚗</Text>
        <View>
          <Text style={styles.bannerTitle}>Technician En Route</Text>
          <Text style={styles.bannerSub}>Arriving in approximately {eta}</Text>
        </View>
      </View>

      {/* Map placeholder */}
      <View style={styles.mapBox}>
        <View style={styles.mapGrid}>
          {/* Decorative SVG-like grid via Views */}
          {[...Array(5)].map((_, i) => (
            <View key={i} style={[styles.mapLineH, { top: `${i * 25}%` as any }]} />
          ))}
          {[...Array(5)].map((_, i) => (
            <View key={i} style={[styles.mapLineV, { left: `${i * 25}%` as any }]} />
          ))}
        </View>
        {/* Route line indicator */}
        <View style={styles.mapRoute} />
        {/* Destination pin */}
        <View style={styles.destPin}>
          <Text style={styles.destPinText}>🏠</Text>
        </View>
        {/* Driver pin */}
        <View style={styles.driverPin}>
          <Text style={styles.driverPinText}>🚗</Text>
        </View>
        <View style={styles.mapEtaBadge}>
          <Text style={styles.mapEtaText}>ETA {eta}</Text>
        </View>
      </View>

      {/* Progress steps */}
      <Text style={styles.sectionTitle}>Service Status</Text>
      <View style={styles.stepsCard}>
        {steps.map((step, i) => (
          <View key={step.label} style={styles.stepRow}>
            <View style={styles.stepLeft}>
              <View style={[styles.stepCircle, step.done && styles.stepCircleDone]}>
                {step.done
                  ? <Text style={styles.stepCheck}>✓</Text>
                  : <Text style={styles.stepNum}>{i + 1}</Text>
                }
              </View>
              {i < steps.length - 1 && (
                <View style={[styles.stepLine, step.done && styles.stepLineDone]} />
              )}
            </View>
            <View style={styles.stepContent}>
              <Text style={[styles.stepLabel, step.done && styles.stepLabelDone]}>
                {step.label}
              </Text>
              <Text style={styles.stepSub}>{step.sub}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Technician card */}
      <Text style={styles.sectionTitle}>Your Technician</Text>
      <View style={styles.techCard}>
        <View style={styles.techAvatar}>
          <Text style={styles.techInitials}>MJ</Text>
        </View>
        <View style={styles.techInfo}>
          <Text style={styles.techName}>Marcus Jennings</Text>
          <Text style={styles.techSub}>⭐ 4.9 · 120 services</Text>
          <Text style={styles.techVehicle}>🚐 White Ford Transit #AQ-12</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.reportBtn}
        onPress={() => router.push("/(customer)/report")}
        activeOpacity={0.8}
      >
        <Text style={styles.reportBtnText}>📸  Report an Issue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const P = brand.colors.primary;
const styles = StyleSheet.create({
  container:       { flex: 1, backgroundColor: brand.colors.background },
  content:         { padding: 20, paddingBottom: 40 },
  banner:          { backgroundColor: P, borderRadius: 20, padding: 18, flexDirection: "row", alignItems: "center", gap: 14, marginBottom: 16 },
  bannerEmoji:     { fontSize: 28 },
  bannerTitle:     { color: "#fff", fontSize: 16, fontWeight: "800" },
  bannerSub:       { color: "rgba(255,255,255,0.75)", fontSize: 13, marginTop: 2 },
  mapBox:          { height: 200, backgroundColor: "#e8f4fd", borderRadius: 20, marginBottom: 20, overflow: "hidden", position: "relative" },
  mapGrid:         { ...StyleSheet.absoluteFillObject },
  mapLineH:        { position: "absolute", left: 0, right: 0, height: 1, backgroundColor: "#c8dff0" },
  mapLineV:        { position: "absolute", top: 0, bottom: 0, width: 1, backgroundColor: "#c8dff0" },
  mapRoute:        { position: "absolute", bottom: 60, left: 60, right: 80, height: 3, backgroundColor: P, opacity: 0.5, borderRadius: 2 },
  destPin:         { position: "absolute", bottom: 40, right: 60, width: 36, height: 36, alignItems: "center", justifyContent: "center" },
  destPinText:     { fontSize: 24 },
  driverPin:       { position: "absolute", bottom: 50, left: 80, width: 36, height: 36, alignItems: "center", justifyContent: "center" },
  driverPinText:   { fontSize: 22 },
  mapEtaBadge:     { position: "absolute", top: 12, right: 12, backgroundColor: P, paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20 },
  mapEtaText:      { color: "#fff", fontSize: 12, fontWeight: "700" },
  sectionTitle:    { fontSize: 18, fontWeight: "800", color: brand.colors.onSurface, marginBottom: 12 },
  stepsCard:       { backgroundColor: "#fff", borderRadius: 20, padding: 20, marginBottom: 20 },
  stepRow:         { flexDirection: "row", gap: 14, minHeight: 56 },
  stepLeft:        { alignItems: "center", width: 28 },
  stepCircle:      { width: 28, height: 28, borderRadius: 14, borderWidth: 2, borderColor: "#ccc", alignItems: "center", justifyContent: "center" },
  stepCircleDone:  { backgroundColor: P, borderColor: P },
  stepCheck:       { color: "#fff", fontSize: 13, fontWeight: "800" },
  stepNum:         { color: "#999", fontSize: 12, fontWeight: "700" },
  stepLine:        { flex: 1, width: 2, backgroundColor: "#e4e9ed", marginVertical: 2 },
  stepLineDone:    { backgroundColor: P },
  stepContent:     { flex: 1, paddingBottom: 16 },
  stepLabel:       { fontSize: 15, fontWeight: "700", color: "#aaa" },
  stepLabelDone:   { color: brand.colors.onSurface },
  stepSub:         { fontSize: 12, color: "#999", marginTop: 2 },
  techCard:        { backgroundColor: "#fff", borderRadius: 20, padding: 18, flexDirection: "row", alignItems: "center", gap: 14, marginBottom: 16 },
  techAvatar:      { width: 52, height: 52, borderRadius: 26, backgroundColor: P, alignItems: "center", justifyContent: "center" },
  techInitials:    { color: "#fff", fontSize: 18, fontWeight: "800" },
  techInfo:        { flex: 1 },
  techName:        { fontSize: 16, fontWeight: "800", color: brand.colors.onSurface },
  techSub:         { fontSize: 13, color: "#666", marginTop: 2 },
  techVehicle:     { fontSize: 12, color: "#999", marginTop: 3 },
  reportBtn:       { borderWidth: 2, borderColor: P, borderRadius: 16, padding: 16, alignItems: "center" },
  reportBtnText:   { color: P, fontWeight: "700", fontSize: 15 },
});
