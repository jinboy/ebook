/**
 * vue-ebook  getters
 * Created by Tabjin 2020-02-24-14-38
 */
const book = {
  fileName: state => state.book.fileName,
  menuVisible: state => state.book.menuVisible,
  settingVisible: state => state.book.settingVisible,
  defaultFontSize: state => state.book.defaultFontSize,
  defaultFontFamily: state => state.book.defaultFontFamily,
  fontFamilyVisible: state => state.book.fontFamilyVisible,
  defaultTheme: state => state.book.defaultTheme,
  bookAvailable: state => state.book.bookAvailable,
  progress: state => state.book.progress,
  section: state => state.book.section,
  isPaginating: state => state.book.isPaginating,
  currentBook: state => state.book.currentBook,
  navigation: state => state.book.navigation,
  cover: state => state.book.cover,
  metadata: state => state.book.metadata,
  isBookmark: state => state.book.isBookmark
}
export default book
