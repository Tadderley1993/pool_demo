import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { brand } from "../../src/config/brand";

export default function BookScreen() {
  const [freq,   setFreq]   = useState("weekly");
  const [service,setService]= useState("chemical");
  const [addons, setAddons] = useState<string[]>(["chemicals", "photos"]);

  const toggleAddon = (id: string) =>
    setAddons((prev) => prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]);

  const selectedService = brand.services.find((s) => s.id === service);
  const addonTotal = brand.booking.addons
    .filter((a) => addons.includes(a.id) && a.price > 0)
    .reduce((sum, a) => sum + a.price, 0);
  const total = (selectedService?.price ?? 0) + addonTotal;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Book a Service</Text>

      {/* Frequency */}
      <Text style={styles.sectionLabel}>How often?</Text>
      <View style={styles.freqRow}>
        {brand.booking.frequencies.map((f) => (
          <TouchableOpacity
            key={f.id}
            style={[styles.freqCard, freq === f.id && styles.freqCardActive]}
            onPress={() => setFreq(f.id)}
            activeOpacity={0.7}
          >
            <Text style={[styles.freqLabel, freq === f.id && styles.freqLabelActive]}>{f.label}</Text>
            <Text style={[styles.freqSub,   freq === f.id && styles.freqSubActive  ]}>{f.sublabel}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Service type */}
      <Text style={styles.sectionLabel}>Select service</Text>
      {brand.services.map((s) => (
        <TouchableOpacity
          key={s.id}
          style={[styles.serviceCard, service === s.id && styles.serviceCardActive]}
          onPress={() => setService(s.id)}
          activeOpacity={0.7}
        >
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>{s.name}</Text>
            <Text style={styles.servicePrice}>
              {s.price ? `$${s.price}${s.priceLabel}` : s.priceLabel}
            </Text>
          </View>
          <View style={[styles.radio, service === s.id && styles.radioActive]}>
            {service === s.id && <View style={styles.radioDot} />}
          </View>
        </TouchableOpacity>
      ))}

      {/* Add-ons */}
      <Text style={styles.sectionLabel}>Add-ons</Text>
      {brand.booking.addons.map((a) => (
        <TouchableOpacity
          key={a.id}
          style={styles.addonRow}
          onPress={() => !a.included && toggleAddon(a.id)}
          activeOpacity={a.included ? 1 : 0.7}
        >
          <View style={[styles.checkbox, addons.includes(a.id) && styles.checkboxChecked]}>
            {addons.includes(a.id) && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.addonLabel}>{a.label}</Text>
          <Text style={styles.addonPrice}>
            {a.included ? "Included" : `+$${a.price}`}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Guarantee */}
      <View style={styles.guaranteeRow}>
        <Text style={styles.guaranteeIcon}>🛡️</Text>
        <Text style={styles.guaranteeText}>{brand.booking.guarantee}</Text>
      </View>

      {/* CTA */}
      <TouchableOpacity style={styles.ctaBtn} activeOpacity={0.85}>
        <Text style={styles.ctaText}>
          Request Booking{total > 0 ? ` · $${total}` : ""}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const P = brand.colors.primary;
const styles = StyleSheet.create({
  container:          { flex: 1, backgroundColor: brand.colors.background },
  content:            { padding: 20, paddingBottom: 40 },
  pageTitle:          { fontSize: 26, fontWeight: "800", color: brand.colors.onSurface, marginBottom: 20 },
  sectionLabel:       { fontSize: 14, fontWeight: "700", color: "#666", marginBottom: 10, marginTop: 8, textTransform: "uppercase", letterSpacing: 0.5 },
  freqRow:            { flexDirection: "row", gap: 10, marginBottom: 20 },
  freqCard:           { flex: 1, backgroundColor: "#fff", borderRadius: 16, padding: 14, alignItems: "center", borderWidth: 2, borderColor: "transparent" },
  freqCardActive:     { borderColor: P, backgroundColor: "#e8f0f8" },
  freqLabel:          { fontSize: 14, fontWeight: "800", color: "#555" },
  freqLabelActive:    { color: P },
  freqSub:            { fontSize: 11, color: "#999", marginTop: 2 },
  freqSubActive:      { color: P },
  serviceCard:        { backgroundColor: "#fff", borderRadius: 16, padding: 16, flexDirection: "row", alignItems: "center", marginBottom: 8, borderWidth: 2, borderColor: "transparent" },
  serviceCardActive:  { borderColor: P },
  serviceInfo:        { flex: 1 },
  serviceName:        { fontSize: 15, fontWeight: "700", color: brand.colors.onSurface },
  servicePrice:       { fontSize: 13, color: P, fontWeight: "600", marginTop: 2 },
  radio:              { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: "#ccc", alignItems: "center", justifyContent: "center" },
  radioActive:        { borderColor: P },
  radioDot:           { width: 10, height: 10, borderRadius: 5, backgroundColor: P },
  addonRow:           { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#f0f4f8" },
  checkbox:           { width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: "#ccc", alignItems: "center", justifyContent: "center" },
  checkboxChecked:    { backgroundColor: P, borderColor: P },
  checkmark:          { color: "#fff", fontSize: 13, fontWeight: "800" },
  addonLabel:         { flex: 1, fontSize: 14, color: brand.colors.onSurface, fontWeight: "500" },
  addonPrice:         { fontSize: 13, color: "#666", fontWeight: "600" },
  guaranteeRow:       { flexDirection: "row", gap: 10, backgroundColor: "#f0f4f8", borderRadius: 14, padding: 14, marginTop: 16, marginBottom: 8, alignItems: "flex-start" },
  guaranteeIcon:      { fontSize: 16 },
  guaranteeText:      { flex: 1, fontSize: 13, color: "#555", lineHeight: 18 },
  ctaBtn:             { backgroundColor: P, borderRadius: 20, padding: 18, alignItems: "center", marginTop: 16 },
  ctaText:            { color: "#fff", fontSize: 16, fontWeight: "800" },
});
