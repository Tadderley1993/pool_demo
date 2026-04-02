import { useState, useRef } from "react";
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  KeyboardAvoidingView, Platform, StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { brand } from "../../src/config/brand";

type Message = { id: number; role: "user" | "ai"; text: string };

// Demo canned responses — replace with real OpenAI API call in production
const cannedReplies: Record<string, string> = {
  default: "That's a great question! Based on your recent chemical report, your pool is looking great. Would you like me to explain any specific reading?",
  ph:      "Your pH is currently 7.4, which is perfect — right in the ideal 7.2–7.8 range. No action needed!",
  chlorine:"Your chlorine is at 2.9 ppm, just below the ideal 3.0 ppm. I'd recommend a small shock treatment before your next service.",
  book:    "I can help with that! Head to the Book tab to schedule a service, or I can tell you which service best matches your pool's current needs.",
  cost:    "Our most popular service is Chemical Balancing at $65/visit. Weekly Maintenance starts at $85. Would you like a full quote?",
  algae:   "Algae is usually caused by low chlorine or poor circulation. I'd recommend scheduling an Equipment Inspection — it could be a pump issue.",
};

function getReply(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("ph"))       return cannedReplies.ph;
  if (t.includes("chlorine")) return cannedReplies.chlorine;
  if (t.includes("book") || t.includes("schedule")) return cannedReplies.book;
  if (t.includes("cost") || t.includes("price") || t.includes("much")) return cannedReplies.cost;
  if (t.includes("algae") || t.includes("green")) return cannedReplies.algae;
  return cannedReplies.default;
}

export default function ChatScreen() {
  const router   = useRouter();
  const scrollRef= useRef<ScrollView>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "ai", text: brand.customerApp.aiWelcomeMessage },
  ]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg:  Message = { id: Date.now(),     role: "user", text };
    const aiMsg:    Message = { id: Date.now() + 1, role: "ai",   text: getReply(text) };
    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <View style={styles.botAvatar}>
            <Text style={styles.botAvatarText}>🤖</Text>
          </View>
          <View>
            <Text style={styles.headerTitle}>{brand.customerApp.aiAssistantName}</Text>
            <Text style={styles.headerSub}>AI Pool Assistant · Online</Text>
          </View>
        </View>
      </View>

      {/* Messages */}
      <ScrollView
        ref={scrollRef}
        style={styles.messages}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[styles.bubble, msg.role === "user" ? styles.bubbleUser : styles.bubbleAi]}
          >
            <Text style={[styles.bubbleText, msg.role === "user" && styles.bubbleTextUser]}>
              {msg.text}
            </Text>
          </View>
        ))}

        {/* Quick prompts */}
        <Text style={styles.quickTitle}>Suggested questions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickScroll}>
          {["What's my pH?", "How's my chlorine?", "Book a service", "Pricing info"].map((q) => (
            <TouchableOpacity
              key={q}
              style={styles.quickChip}
              onPress={() => { setInput(q); }}
              activeOpacity={0.7}
            >
              <Text style={styles.quickChipText}>{q}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Input bar */}
      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Ask AquaBot anything..."
          placeholderTextColor="#aaa"
          returnKeyType="send"
          onSubmitEditing={send}
        />
        <TouchableOpacity
          style={[styles.sendBtn, !input.trim() && styles.sendBtnDisabled]}
          onPress={send}
          disabled={!input.trim()}
          activeOpacity={0.8}
        >
          <Text style={styles.sendBtnText}>↑</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const P = brand.colors.primary;
const styles = StyleSheet.create({
  container:        { flex: 1, backgroundColor: brand.colors.background },
  header:           { backgroundColor: P, flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingTop: 56, paddingBottom: 16, gap: 12 },
  backBtn:          { width: 36, height: 36, alignItems: "center", justifyContent: "center" },
  backText:         { color: "#fff", fontSize: 28, fontWeight: "300" },
  headerInfo:       { flexDirection: "row", alignItems: "center", gap: 10, flex: 1 },
  botAvatar:        { width: 40, height: 40, borderRadius: 20, backgroundColor: "rgba(255,255,255,0.2)", alignItems: "center", justifyContent: "center" },
  botAvatarText:    { fontSize: 20 },
  headerTitle:      { color: "#fff", fontSize: 16, fontWeight: "800" },
  headerSub:        { color: "rgba(255,255,255,0.7)", fontSize: 12 },
  messages:         { flex: 1 },
  messagesContent:  { padding: 16, gap: 10 },
  bubble:           { maxWidth: "80%", borderRadius: 18, padding: 14 },
  bubbleAi:         { backgroundColor: "#fff", alignSelf: "flex-start", borderBottomLeftRadius: 4 },
  bubbleUser:       { backgroundColor: P, alignSelf: "flex-end", borderBottomRightRadius: 4 },
  bubbleText:       { fontSize: 15, color: brand.colors.onSurface, lineHeight: 22 },
  bubbleTextUser:   { color: "#fff" },
  quickTitle:       { fontSize: 12, color: "#aaa", fontWeight: "600", marginTop: 8, marginBottom: 6 },
  quickScroll:      { marginBottom: 8 },
  quickChip:        { backgroundColor: "#e8f0f8", paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, marginRight: 8 },
  quickChipText:    { color: P, fontWeight: "600", fontSize: 13 },
  inputBar:         { flexDirection: "row", gap: 10, padding: 12, paddingBottom: 28, backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#f0f4f8" },
  input:            { flex: 1, backgroundColor: "#f6fafe", borderRadius: 24, paddingHorizontal: 16, paddingVertical: 12, fontSize: 15, color: brand.colors.onSurface },
  sendBtn:          { width: 46, height: 46, borderRadius: 23, backgroundColor: P, alignItems: "center", justifyContent: "center" },
  sendBtnDisabled:  { backgroundColor: "#ccc" },
  sendBtnText:      { color: "#fff", fontSize: 20, fontWeight: "800" },
});
