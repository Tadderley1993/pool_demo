import { useState } from "react";
import {
  View, Text, TouchableOpacity, ScrollView, TextInput,
  StyleSheet, Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { brand } from "../../src/config/brand";

// In production: import * as ImagePicker from "expo-image-picker";

export default function ReportScreen() {
  const router   = useRouter();
  const [category, setCategory] = useState<string | null>(null);
  const [notes,    setNotes   ] = useState("");
  const [photos,   setPhotos  ] = useState<string[]>([]);
  const [submitted,setSubmitted] = useState(false);

  const addPhoto = () => {
    // Production: launch ImagePicker.launchCameraAsync() or launchImageLibraryAsync()
    // Demo: add a placeholder
    if (photos.length < 4) {
      setPhotos((prev) => [...prev, `photo_${prev.length + 1}`]);
    }
  };

  const submit = () => {
    if (!category) {
      Alert.alert("Select a category", "Please choose an issue type before submitting.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <View style={styles.successContainer}>
        <Text style={styles.successEmoji}>✅</Text>
        <Text style={styles.successTitle}>Report Submitted</Text>
        <Text style={styles.successSub}>
          Our team has been notified and will follow up within 24 hours.
        </Text>
        <TouchableOpacity style={styles.doneBtn} onPress={() => router.back()} activeOpacity={0.8}>
          <Text style={styles.doneBtnText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>‹  Back</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.pageTitle}>Report an Issue</Text>
      <Text style={styles.pageSubtitle}>
        Help us fix it fast — attach photos and describe what you're seeing.
      </Text>

      {/* Category picker */}
      <Text style={styles.sectionLabel}>Issue Type</Text>
      <View style={styles.categoryGrid}>
        {brand.customerApp.issueCategories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.catChip, category === cat && styles.catChipActive]}
            onPress={() => setCategory(cat)}
            activeOpacity={0.7}
          >
            <Text style={[styles.catChipText, category === cat && styles.catChipTextActive]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Photo upload */}
      <Text style={styles.sectionLabel}>Photos ({photos.length}/4)</Text>
      <View style={styles.photoGrid}>
        {photos.map((p, i) => (
          <View key={i} style={styles.photoThumb}>
            <Text style={styles.photoThumbText}>📷</Text>
            <Text style={styles.photoThumbLabel}>Photo {i + 1}</Text>
          </View>
        ))}
        {photos.length < 4 && (
          <TouchableOpacity style={styles.addPhotoBtn} onPress={addPhoto} activeOpacity={0.7}>
            <Text style={styles.addPhotoPlus}>＋</Text>
            <Text style={styles.addPhotoText}>Add Photo</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.photoHint}>
        Tap to take a photo or choose from your library
      </Text>

      {/* Notes */}
      <Text style={styles.sectionLabel}>Description</Text>
      <TextInput
        style={styles.notesInput}
        value={notes}
        onChangeText={setNotes}
        placeholder="Describe the issue in detail…"
        placeholderTextColor="#aaa"
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />

      {/* Priority */}
      <Text style={styles.sectionLabel}>Priority</Text>
      <View style={styles.priorityRow}>
        {(["Low", "Medium", "High"] as const).map((p) => (
          <TouchableOpacity key={p} style={styles.priorityChip} activeOpacity={0.7}>
            <Text style={styles.priorityText}>{p}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitBtn} onPress={submit} activeOpacity={0.85}>
        <Text style={styles.submitText}>Submit Report</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const P = brand.colors.primary;
const styles = StyleSheet.create({
  container:          { flex: 1, backgroundColor: brand.colors.background },
  content:            { padding: 20, paddingBottom: 40 },
  topBar:             { marginBottom: 4 },
  backBtn:            {},
  backText:           { color: P, fontSize: 16, fontWeight: "600" },
  pageTitle:          { fontSize: 26, fontWeight: "800", color: brand.colors.onSurface, marginBottom: 6 },
  pageSubtitle:       { fontSize: 14, color: "#666", lineHeight: 20, marginBottom: 24 },
  sectionLabel:       { fontSize: 13, fontWeight: "700", color: "#666", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10, marginTop: 8 },
  categoryGrid:       { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 20 },
  catChip:            { paddingHorizontal: 16, paddingVertical: 9, borderRadius: 20, backgroundColor: "#fff", borderWidth: 1.5, borderColor: "#e4e9ed" },
  catChipActive:      { backgroundColor: P, borderColor: P },
  catChipText:        { fontSize: 13, fontWeight: "600", color: "#555" },
  catChipTextActive:  { color: "#fff" },
  photoGrid:          { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 8 },
  photoThumb:         { width: 80, height: 80, borderRadius: 14, backgroundColor: "#e8f0f8", alignItems: "center", justifyContent: "center", gap: 4 },
  photoThumbText:     { fontSize: 24 },
  photoThumbLabel:    { fontSize: 10, color: "#666", fontWeight: "600" },
  addPhotoBtn:        { width: 80, height: 80, borderRadius: 14, borderWidth: 2, borderColor: "#c8d8e8", borderStyle: "dashed", alignItems: "center", justifyContent: "center", gap: 2 },
  addPhotoPlus:       { fontSize: 22, color: P, fontWeight: "300" },
  addPhotoText:       { fontSize: 10, color: P, fontWeight: "600" },
  photoHint:          { fontSize: 12, color: "#aaa", marginBottom: 20 },
  notesInput:         { backgroundColor: "#fff", borderRadius: 16, padding: 16, fontSize: 15, color: brand.colors.onSurface, minHeight: 110, borderWidth: 1, borderColor: "#e4e9ed", marginBottom: 20 },
  priorityRow:        { flexDirection: "row", gap: 10, marginBottom: 24 },
  priorityChip:       { flex: 1, backgroundColor: "#fff", borderRadius: 14, padding: 12, alignItems: "center", borderWidth: 1.5, borderColor: "#e4e9ed" },
  priorityText:       { fontSize: 14, fontWeight: "700", color: "#555" },
  submitBtn:          { backgroundColor: P, borderRadius: 20, padding: 18, alignItems: "center" },
  submitText:         { color: "#fff", fontSize: 16, fontWeight: "800" },
  successContainer:   { flex: 1, backgroundColor: brand.colors.background, alignItems: "center", justifyContent: "center", padding: 40 },
  successEmoji:       { fontSize: 56, marginBottom: 16 },
  successTitle:       { fontSize: 26, fontWeight: "800", color: brand.colors.onSurface, marginBottom: 10 },
  successSub:         { fontSize: 15, color: "#666", textAlign: "center", lineHeight: 22, marginBottom: 32 },
  doneBtn:            { backgroundColor: P, borderRadius: 16, paddingHorizontal: 32, paddingVertical: 14 },
  doneBtnText:        { color: "#fff", fontWeight: "700", fontSize: 15 },
});
