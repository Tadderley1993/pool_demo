import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { brand } from "../../src/config/brand";

const USER_POINTS = 2450;

export default function RewardsScreen() {
  const { tiers, redeemable, programName, pointsPerDollar, referralPoints } = brand.rewards;

  const currentTierIdx = tiers.reduce((best, t, i) =>
    USER_POINTS >= t.minPoints ? i : best, 0);
  const currentTier = tiers[currentTierIdx];
  const nextTier    = tiers[currentTierIdx + 1];
  const progress    = nextTier
    ? (USER_POINTS - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)
    : 1;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Points hero */}
      <View style={styles.heroCard}>
        <Text style={styles.heroProgram}>{programName}</Text>
        <Text style={styles.heroPoints}>{USER_POINTS.toLocaleString()}</Text>
        <Text style={styles.heroPointsLabel}>points</Text>
        <View style={styles.tierBadge}>
          <Text style={styles.tierBadgeText}>{currentTier.name}</Text>
        </View>

        {nextTier && (
          <View style={styles.progressSection}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progress * 100}%` as any }]} />
            </View>
            <Text style={styles.progressLabel}>
              {(nextTier.minPoints - USER_POINTS).toLocaleString()} pts to {nextTier.name}
            </Text>
          </View>
        )}
      </View>

      {/* Tier ladder */}
      <Text style={styles.sectionTitle}>Membership Tiers</Text>
      <View style={styles.tiersCard}>
        {tiers.map((tier, i) => (
          <View key={tier.name} style={styles.tierRow}>
            <View style={[styles.tierIcon, i <= currentTierIdx && styles.tierIconActive]}>
              <Text style={styles.tierIconText}>{i === 0 ? "💧" : i === 1 ? "💎" : "💠"}</Text>
            </View>
            <View style={styles.tierInfo}>
              <Text style={[styles.tierName, i === currentTierIdx && styles.tierNameActive]}>
                {tier.name}
              </Text>
              <Text style={styles.tierMin}>
                {tier.minPoints === 0 ? "Starting tier" : `${tier.minPoints.toLocaleString()}+ pts`}
              </Text>
            </View>
            {i === currentTierIdx && (
              <Text style={styles.currentBadge}>Current</Text>
            )}
          </View>
        ))}
      </View>

      {/* Redeemable rewards */}
      <Text style={styles.sectionTitle}>Redeem Rewards</Text>
      {redeemable.map((r) => (
        <View key={r.name} style={[styles.redeemCard, r.locked && styles.redeemCardLocked]}>
          <View style={styles.redeemInfo}>
            <Text style={[styles.redeemName, r.locked && styles.redeemNameLocked]}>{r.name}</Text>
            <Text style={styles.redeemPoints}>{r.points.toLocaleString()} pts</Text>
          </View>
          <TouchableOpacity
            style={[styles.redeemBtn, (r.locked || USER_POINTS < r.points) && styles.redeemBtnDisabled]}
            disabled={r.locked || USER_POINTS < r.points}
            activeOpacity={0.8}
          >
            <Text style={styles.redeemBtnText}>
              {r.locked ? "🔒" : USER_POINTS >= r.points ? "Redeem" : "Locked"}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Referral */}
      <View style={styles.referralCard}>
        <Text style={styles.referralTitle}>🎁  Refer a Friend</Text>
        <Text style={styles.referralSub}>
          Earn {referralPoints} pts ({Math.round(referralPoints / pointsPerDollar)} free dollars) for every referral who books a service.
        </Text>
        <TouchableOpacity style={styles.referralBtn} activeOpacity={0.8}>
          <Text style={styles.referralBtnText}>Share Referral Link</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const P = brand.colors.primary;
const styles = StyleSheet.create({
  container:           { flex: 1, backgroundColor: brand.colors.background },
  content:             { padding: 20, paddingBottom: 40 },
  heroCard:            { backgroundColor: P, borderRadius: 28, padding: 24, alignItems: "center", marginBottom: 20 },
  heroProgram:         { color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: "700", letterSpacing: 1, textTransform: "uppercase" },
  heroPoints:          { color: "#fff", fontSize: 52, fontWeight: "800", marginTop: 8 },
  heroPointsLabel:     { color: "rgba(255,255,255,0.7)", fontSize: 15, marginTop: -4 },
  tierBadge:           { backgroundColor: "rgba(255,255,255,0.2)", paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20, marginTop: 12 },
  tierBadgeText:       { color: "#fff", fontWeight: "700", fontSize: 13 },
  progressSection:     { width: "100%", marginTop: 16 },
  progressBar:         { height: 6, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 3, overflow: "hidden" },
  progressFill:        { height: "100%", backgroundColor: "#fff", borderRadius: 3 },
  progressLabel:       { color: "rgba(255,255,255,0.75)", fontSize: 12, marginTop: 6, textAlign: "center" },
  sectionTitle:        { fontSize: 18, fontWeight: "800", color: brand.colors.onSurface, marginBottom: 12 },
  tiersCard:           { backgroundColor: "#fff", borderRadius: 20, padding: 4, marginBottom: 20, overflow: "hidden" },
  tierRow:             { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, borderBottomWidth: 1, borderBottomColor: "#f0f4f8" },
  tierIcon:            { width: 40, height: 40, borderRadius: 20, backgroundColor: "#f0f4f8", alignItems: "center", justifyContent: "center" },
  tierIconActive:      { backgroundColor: "#e0ecf8" },
  tierIconText:        { fontSize: 18 },
  tierInfo:            { flex: 1 },
  tierName:            { fontSize: 15, fontWeight: "700", color: "#555" },
  tierNameActive:      { color: P },
  tierMin:             { fontSize: 12, color: "#999", marginTop: 2 },
  currentBadge:        { fontSize: 11, fontWeight: "700", color: P, backgroundColor: "#dbeafe", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 },
  redeemCard:          { backgroundColor: "#fff", borderRadius: 18, padding: 16, flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 10 },
  redeemCardLocked:    { opacity: 0.5 },
  redeemInfo:          { flex: 1 },
  redeemName:          { fontSize: 15, fontWeight: "700", color: brand.colors.onSurface },
  redeemNameLocked:    { color: "#aaa" },
  redeemPoints:        { fontSize: 13, color: P, fontWeight: "600", marginTop: 2 },
  redeemBtn:           { backgroundColor: P, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 },
  redeemBtnDisabled:   { backgroundColor: "#ccc" },
  redeemBtnText:       { color: "#fff", fontWeight: "700", fontSize: 13 },
  referralCard:        { backgroundColor: "#e8f0f8", borderRadius: 20, padding: 20, marginTop: 4 },
  referralTitle:       { fontSize: 16, fontWeight: "800", color: brand.colors.onSurface, marginBottom: 6 },
  referralSub:         { fontSize: 13, color: "#555", lineHeight: 20, marginBottom: 14 },
  referralBtn:         { backgroundColor: P, borderRadius: 14, padding: 14, alignItems: "center" },
  referralBtnText:     { color: "#fff", fontWeight: "700", fontSize: 14 },
});
