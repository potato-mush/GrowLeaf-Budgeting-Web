import { collection, addDoc, getDocs, query, orderBy, Timestamp, deleteDoc, doc, updateDoc, increment, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "./firebase";

export interface SupportTicket {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Timestamp;
  status?: "new" | "in-progress" | "resolved";
}

export interface Suggestion {
  id?: string;
  name: string;
  email: string;
  category: string;
  suggestion: string;
  createdAt: Timestamp;
  status?: "pending" | "in-progress" | "completed" | "rejected";
  upvotes: number;
  upvotedBy: string[];
  adminNotes?: string;
}

export interface UserFeedback {
  id?: string;
  name: string;
  email: string;
  rating: number;
  feedback: string;
  createdAt: Timestamp;
  status?: "new" | "reviewed";
}

// Support Tickets
export const createSupportTicket = async (data: Omit<SupportTicket, "id" | "createdAt" | "status">) => {
  try {
    const docRef = await addDoc(collection(db, "supportTickets"), {
      ...data,
      createdAt: Timestamp.now(),
      status: "new"
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error creating support ticket:", error);
    return { success: false, error };
  }
};

export const getSupportTickets = async () => {
  try {
    const q = query(collection(db, "supportTickets"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as SupportTicket[];
  } catch (error) {
    console.error("Error getting support tickets:", error);
    return [];
  }
};

export const deleteSupportTicket = async (id: string) => {
  try {
    await deleteDoc(doc(db, "supportTickets", id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting support ticket:", error);
    return { success: false, error };
  }
};

// Suggestions
export const createSuggestion = async (data: Omit<Suggestion, "id" | "createdAt" | "status" | "upvotes" | "upvotedBy">) => {
  try {
    const docRef = await addDoc(collection(db, "suggestions"), {
      ...data,
      createdAt: Timestamp.now(),
      status: "pending",
      upvotes: 0,
      upvotedBy: []
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error creating suggestion:", error);
    return { success: false, error };
  }
};

export const getSuggestions = async () => {
  try {
    const q = query(collection(db, "suggestions"), orderBy("upvotes", "desc"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Suggestion[];
  } catch (error) {
    console.error("Error getting suggestions:", error);
    return [];
  }
};

export const upvoteSuggestion = async (id: string, userEmail: string) => {
  try {
    const suggestionRef = doc(db, "suggestions", id);
    await updateDoc(suggestionRef, {
      upvotes: increment(1),
      upvotedBy: arrayUnion(userEmail)
    });
    return { success: true };
  } catch (error) {
    console.error("Error upvoting suggestion:", error);
    return { success: false, error };
  }
};

export const removeUpvote = async (id: string, userEmail: string) => {
  try {
    const suggestionRef = doc(db, "suggestions", id);
    await updateDoc(suggestionRef, {
      upvotes: increment(-1),
      upvotedBy: arrayRemove(userEmail)
    });
    return { success: true };
  } catch (error) {
    console.error("Error removing upvote:", error);
    return { success: false, error };
  }
};

export const updateSuggestionStatus = async (id: string, status: Suggestion["status"], adminNotes?: string) => {
  try {
    const suggestionRef = doc(db, "suggestions", id);
    await updateDoc(suggestionRef, {
      status,
      ...(adminNotes && { adminNotes })
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating suggestion status:", error);
    return { success: false, error };
  }
};

export const deleteSuggestion = async (id: string) => {
  try {
    await deleteDoc(doc(db, "suggestions", id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting suggestion:", error);
    return { success: false, error };
  }
};

// User Feedback
export const createUserFeedback = async (data: Omit<UserFeedback, "id" | "createdAt" | "status">) => {
  try {
    const docRef = await addDoc(collection(db, "userFeedback"), {
      ...data,
      createdAt: Timestamp.now(),
      status: "new"
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error creating user feedback:", error);
    return { success: false, error };
  }
};

export const getUserFeedback = async () => {
  try {
    const q = query(collection(db, "userFeedback"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as UserFeedback[];
  } catch (error) {
    console.error("Error getting user feedback:", error);
    return [];
  }
};

export const updateFeedbackStatus = async (id: string, status: UserFeedback["status"]) => {
  try {
    const feedbackRef = doc(db, "userFeedback", id);
    await updateDoc(feedbackRef, { status });
    return { success: true };
  } catch (error) {
    console.error("Error updating feedback status:", error);
    return { success: false, error };
  }
};

export const deleteUserFeedback = async (id: string) => {
  try {
    await deleteDoc(doc(db, "userFeedback", id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting user feedback:", error);
    return { success: false, error };
  }
};
