const express = require('express');
const router = express.Router();
const passport = require('passport');
const users = require('../controllers/users')

router.route('/register')
    .get(users.renderRegister )
    .post(users.register);

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login',keepSessionInfo: true }), users.login);

    // const redirectUrl = req.session.returnTo || '/campgrounds';
    // delete req.session.returnTo;
    // res.redirect(redirectUrl);
// router.get('/logout', (req, res) => {
//     req.logout(function (err) {
//         if (err) {
//             req.flash("error", "ログアウトに失敗しました。");
//             return res.redirect("/campgrounds");
//         }
//         req.flash("success", "ログアウトに成功しました。");
//         res.redirect("/campgrounds");
//     })
// }); 成功例１

// router.get('/logout', (req, res) => {
//     req.logout();
//     req.flash('success', 'ログアウトしました');
//     res.redirect('/campgrounds');
// });　動画講義通り、passportのバージョンの問題で使用不可

router.get('/logout', users.logout);

// 成功例2

module.exports = router;
