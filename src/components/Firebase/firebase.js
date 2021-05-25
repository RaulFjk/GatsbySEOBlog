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

  filterArticlesByCategory({ category, onSnapshot }) {
    return this.db
      .collection("articles")
      .where("category", "==", category)
      .onSnapshot(onSnapshot)
  }

  async getAuthors() {
    return this.db.collection("authors").get()
  }

  async deleteArticle(articleId) {
    return this.db.collection("articles").doc(articleId).delete()
  }

  async getCategories() {
    return this.db.collection("categories").get()
  }

  async createBook({ bookName, authorId, bookCover, summary }) {
    const createBookCallable = this.functions.httpsCallable("createBook")
    return createBookCallable({
      bookName,
      authorId,
      bookCover,
      summary,
    })
  }

  async createArticle({ title, content, categoryName, articleCover, featured }) {
    const createArticleCallable = this.functions.httpsCallable("createArticle")
    return createArticleCallable({
      title,
      content,
      categoryName,
      articleCover,
      featured,
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

  async createAuthor({ authorName }) {
    const createAuthorCallable = this.functions.httpsCallable("createAuthor")
    return createAuthorCallable({
      authorName,
    })
  }

  async register({ email, password, username }) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    const createProfileCallable = this.functions.httpsCallable(
      "createPublicProfile"
    )
    return createProfileCallable({
      username,
    })
  }

  async postComment({ text, bookId }) {
    const postCommentCallable = this.functions.httpsCallable("postComment")
    return postCommentCallable({
      text,
      bookId,
    })
  }

  subscribeToBookComments({ bookId, onSnapshot }) {
    const bookRef = this.db.collection("books").doc(bookId)
    return this.db
      .collection("comments")
      .where("book", "==", bookRef)
      .orderBy("dateCreated", "desc")
      .onSnapshot(onSnapshot)
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
