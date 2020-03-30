export default {
  changeCity (state, city) {
    state.city = city
    // 避免浏览器抛出异常
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
