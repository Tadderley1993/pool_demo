import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { brand } from "../../src/config/brand";

// NOTE: Replace this placeholder with MapView from react-native-maps once
// running on a device with Google Maps API key configured.

const routeStops = [
  { name: "Sarah Thompson",  address: "456 Commonwealth Ave", eta: "Now",     done: false },
  { name: "David Martinez",  address: "789 Newbury St",       eta: "12:30 PM",done: false },
  { name: "Rachel Kim",      address: "321 Boylston St",      eta: "2:15 PM", done: false },
];

export default function MapScreen() {
  return (
    <View style={styles.container}>
      {/* Map placeholder */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapIcon}>🗺️</Text>
        <Text style={styles.mapText}>Live Map</Text>
        <Text style={styles.mapSub}>Google Maps integration via react-native-maps</Text>
      </View>

      {/* Route stops list */}
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Today's Route · {routeStops.length} stops</Text>
        {routeStops.map((stop, i) => (
          <View key={stop.name} style={styles.stop}>
            <View style={styles.stopNumber}>
              <Text style={styles.stopNumberText}>{i + 1}</Text>
            </View>
            <View style={styles.stopInfo}>
              <Text style={styles.stopName}>{stop.name}</Text>
              <Text style={styles.stopAddress}>{stop.address}</Text>
            </View>
            <Text style={styles.stopEta}>{stop.eta}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.navButton} activeOpacity={0.85}>
          <Text style={styles.navButtonText}>📍  Navigate to Next Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:       { flex: 1, backgroundColor: brand.colors.background },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: "#e4e9ed",
    alignItems: "center",
    justifyContent: "center",
  },
  mapIcon: { fontSize: 48, marginBottom: 12 },
  mapText: { fontSize: 20, fontWeight: "800", color: brand.colors.primary },
  mapSub:  { fontSize: 13, color: "#666", marginTop: 6, textAlign: "center", paddingHorizontal: 40 },
  panel: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
    paddingBottom: 36,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 8,
  },
  panelTitle: { fontSize: 16, fontWeight: "800", color: brand.colors.onSurface, marginBottom: 16 },
  stop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f4f8",
  },
  stopNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: brand.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  stopNumberText: { color: "#fff", fontWeight: "800", fontSize: 14 },
  stopInfo:       { flex: 1 },
  stopName:       { fontSize: 15, fontWeight: "700", color: brand.colors.onSurface },
  stopAddress:    { fontSize: 12, color: "#666", marginTop: 2 },
  stopEta:        { fontSize: 13, fontWeight: "700", color: brand.colors.primary },
  navButton: {
    marginTop: 16,
    backgroundColor: brand.colors.primary,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },
  navButtonText: { color: "#fff", fontWeight: "800", fontSize: 15 },
});
