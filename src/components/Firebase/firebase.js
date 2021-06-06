import firebaseConfig from "./config"
import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
import "firebase/storage"

app.initializeApp(firebaseConfig)

class Firebase {
  constructor() {
    if (!firebaseInstance) {
      this.auth = app.auth()
      this.db = app.firestore()
      this.functions = app.functions()
      this.storage = app.storage()
    }
  }

  getUserProfile({ userId, onSnapshot }) {
    return this.db
      .collection("publicProfiles")
      .where("userId", "==", userId)
      .limit(1)
      .onSnapshot(onSnapshot)
  }

  getAdminProfile({ uid, onSnapshot }) {
    return this.db
      .collection("user")
      .where("uid", "==", uid)
      .limit(1)
      .onSnapshot(onSnapshot);
  }

  filterArticlesByCategory({ category, onSnapshot }) {
    return this.db
      .collection("articles")
      .where("category", "==", category)
      .onSnapshot(onSnapshot)
  }


  async deleteArticle(articleId) {
    return this.db.collection("articles").doc(articleId).delete()
  }

  async getCategories() {
    return this.db.collection("categories").get()
  }

  async createArticle({ title, content, categoryName, articleCover, featured, author }) {
    const createArticleCallable = this.functions.httpsCallable("createArticle")
    return createArticleCallable({
      title,
      content,
      categoryName,
      articleCover,
      featured,
      author
    })
  }

  async updateArticle({ title, content, categoryName, articleCover, featured, articleId }) {
    const updateArticleCallable = this.functions.httpsCallable("updateArticle")
    return updateArticleCallable({
      title,
      content,
      categoryName,
      articleCover,
      featured,
      articleId
    })
  }

  subscribeToLatestNews({ onSnapshot }) {
    return this.db
      .collection("articles")
      .orderBy("posted", "desc")
      .limit(10)
      .onSnapshot(onSnapshot)
  }

  async login({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  async logout() {
    await this.auth.signOut()
  }
}

let firebaseInstance

function getFirebaseInstance() {
  if (!firebaseInstance) {
    firebaseInstance = new Firebase()
    return firebaseInstance
  } else if (firebaseInstance) {
    return firebaseInstance
  } else {
    return null
  }
}

export default getFirebaseInstance
